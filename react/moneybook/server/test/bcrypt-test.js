import bcrypt from "bcrypt";

!async function(){
    const plain = "1q2w3e4r";
    const pw = "1q2w3e4r"

    bcrypt.hash(plain,1,(err,data)=>{
        console.log("err = ",err);
        console.log("data = ",data);
    });
    const result = await bcrypt.hash(pw,10)
    console.log(result);


}();