export class ReviewAPI {
    constructor(){
        this.baseURL = "http://127.0.0.1:8070/api/tour";
        this.getOption = {
            method: "get",
        }
        this.postOption = {
            method: "post",
            headers: { 
                'Content-Type': 'application/json'
                //'content-type': 'multipart/form-data'                
            }
        }
    }

    async read(target) {
        const response = await fetch(this.baseURL+"/get?target="+target,{
            ...this.getOption            
        })
        return await response.json();
    }

    async create(target,writer,comments,score) {
        const response = await fetch(this.baseURL+"/post",{
            ...this.postOption,            
            body: JSON.stringify({target,writer,comments,score})
        })
        return await response.json();
    }
}