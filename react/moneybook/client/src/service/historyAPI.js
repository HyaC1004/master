class historyAPI {
    constructor() {
        this.baseURL="http://127.0.0.1:8080";
        this.getOption = {
            method: "get"
        }
        this.postOption = {
            method: "post",
            headers: { 'Content-Type': 'application/json' }
        }
    }

    
}

export default historyAPI;