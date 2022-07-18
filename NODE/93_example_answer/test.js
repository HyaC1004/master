
const guestbook = require("./collections/guestbook");

(async function() {
    // let array = await guestbook.findAll(); 
    // console.log(array);
    // let result = await guestbook.findById("62d0bab97a20e20ad23b11bd");
    // console.log(result);
    // const data = {
    //     "name" : "마스터", 
    //     "comment": "테스트중", 
    //     "createdAt" : new Date()
    // }
    // let result = await guestbook.insertOne(data);
    // console.log(result);
    // const data = {
    //     "name" : "이름없음", 
    //     "comment": "변경 테스트", 
    //     "createdAt" : new Date()
    // }
    // let result = await guestbook.updateById("62d0f4ea2240385563075929", data);
    // console.log(result);

    let result = await guestbook.deleteById("62d0bc6ee90542cdcabd6a47");
    console.log(result);

})();