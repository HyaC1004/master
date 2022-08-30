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

    // 특정달의 데이터를 조회
    async history(month,logon) {
        const response = await fetch(this.baseURL+"/api/history?month="+month+"&logon="+logon,{
            ...this.getOption            
        })
        return await response.json();
    }
    
    async write(itemDate,useDesc,cashAmt,cardAmt,category,tag) {
        const response = await fetch(this.baseURL+"/api/history/write",{
            ...this.postOption,
            body: JSON.stringify({itemDate,useDesc,cashAmt,cardAmt,category,tag})
        })
        return await response.json();
    }

    async update(id,itemDate,useDesc,cashAmt,cardAmt,category,tag) {
        const response = await fetch(this.baseURL+"/api/history/update",{
            ...this.postOption,
            body: JSON.stringify({id,itemDate,useDesc,cashAmt,cardAmt,category,tag})
        })
        return await response.json();
    }

    async delete(id) {
        const response = await fetch(this.baseURL+"/api/history/delete",{
            ...this.postOption,
            body: JSON.stringify({id})
        })
        return await response.json();
    }
    
}

export default HistoryAPI;