const { query } = require("express");
const express = require("express");
const { Query } = require("mongoose");
const { find, findOne } = require("../models/Account");
const router = express.Router();
const Account = require("../models/Account");
const Expend = require("../models/Expend");

router.route("/accountbook")
    .get(async(req, resp) => {
        if(req.session.user){
            let filter = {};
            let filterCashSum = {};
            let filterCardSum = {};
            filterCashSum.pay = "cash";
            filterCardSum.pay = "card";
            filter.userId = req.session.user._id;
            if(req.query.category){           
                filter.category = req.query.category;
                filterCashSum.category = req.query.category;
                filterCardSum.category = req.query.category;
                resp.locals.category = req.query.category;
            }
            if(req.query.pay){                           
                filter.pay = req.query.pay;
                resp.locals.pay = req.query.pay;
            }
            if(req.query.firstDate && req.query.lastDate){
                // console.log(a);
                
                let a = req.query.firstDate;
                let b = req.query.lastDate;
                
                const test = await Expend.find({date:{$gte:new Date(a),$lte:new Date(b)}}).lean();
                // console.table(test);
                filter.date = {$gte:new Date(a),$lte:new Date(b)};
                filterCashSum.date = {$gte:new Date(a),$lte:new Date(b)};
                filterCardSum.date = {$gte:new Date(a),$lte:new Date(b)};
            }
            
            console.log(filter);
            
            const user = await Account.findOne({_id:req.session.user._id});
            const categories = await Expend.find({}).distinct("category");
            const payments = await Expend.find({}).distinct("pay");
            const cashs = await Expend.find(filterCashSum).lean();
            const cards = await Expend.find(filterCardSum).lean();
            const array = await Expend.find(filter).sort("category -createdAt").lean();
            
            console.log(cashs);
            console.log(cards);
            let sumCash = 0;
            let sumCard = 0;
            if(filter.pay=="cash"){
                cashs.forEach(elm=>{
                    sumCash+=elm.price;
                })
                sumCard=0;
            }else if (filter.pay=="card"){
                cards.forEach(elm=>{
                    sumCard+=elm.price;
                });
                sumCash=0;
            }else{
                cashs.forEach(elm=>{
                    sumCash+=elm.price;
                })
                cards.forEach(elm=>{
                    sumCard+=elm.price;
                })
            }
            resp.locals.user = user;
            resp.locals.sumCash = sumCash;
            resp.locals.sumCard = sumCard;
            resp.locals.array = array;
            resp.locals.categories = categories;
            resp.locals.payments = payments;
        
            resp.render("book/accountbook",{id:req.session.user._id});

        }else{
            resp.redirect("/account/login");
        }
        
    })
    .post(async(req,resp)=>{
        let data={...req.body,dateString:req.body.date.toLocaleString()};
        console.log(data.dateString);
        let result = await Expend.create(data);
        console.log(data);

               
        resp.redirect("/book/accountbook");
    });

router.route("/delete")
    .get(async(req,resp)=>{
        if(req.session.user){
            let filter = {};
            filter.userId = req.session.user._id;
            if(req.query.month){
                console.log(req.query.month+"-01");
                a=req.query.month+"-01";
                b=req.query.month+"-31";

                const test = await Expend.find({date:{$gte:new Date(a),$lte:new Date(b)}}).lean();
                console.table(test);
                filter.date = {$gte:new Date(a),$lte:new Date(b)}
                
                // filter.date = {$gte:new Date(a),$lte:new Date(b)}
            }
                        
            console.log(filter);
            
            const array = await Expend.find(filter).sort("category -createdAt").lean();
            
            resp.locals.array = array;
            resp.render("book/delete",{id:req.session.user._id});
        }else{
            resp.redirect("/account/login");
        }
    })
    .post(async(req,resp)=>{
        let data=req.body._id;
        console.log(data);
        let result = await Expend.deleteOne({data}).lean();
        console.log(result);

               
        resp.redirect("/book/delete");
    })

module.exports = router;
