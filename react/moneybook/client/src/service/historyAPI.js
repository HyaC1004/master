class HistoryAPI {
    constructor(baseURL) {
        const token = localStorage.getItem("token");
        this.baseURL=baseURL;
        this.getOption = {
            method: "get",
            headers: {
                "authorization" : "Bearer "+token
            }
        }
        this.postOption = {
            method: "post",
            headers: { 
                'Content-Type': 'application/json',
                "authorization" : "Bearer "+token 
            }
        }
    }

    async history(dateMonth) {
        const response = await fetch(this.baseURL+"/api/history",{
            ...this.postOption,
            body: JSON.stringify({dateMonth})
        })
        return await response.json();
    }
    
    async write(date,purpose,cashAmt,cardAmt,category,tag) {
        const response = await fetch(this.baseURL+"/api/history/write",{
            ...this.postOption,
            body: JSON.stringify({date,purpose,cashAmt,cardAmt,category,tag})
        })
        return await response.json();
    }
    
}

export default HistoryAPI;