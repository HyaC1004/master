class AccountAPI {
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
    // 로그인 인증시
    async auth(email, password) {
        const response = await fetch(this.baseURL+"/api/account/auth",{
            ...this.postOption,
            body: JSON.stringify({email, password})
        });
        return await response.json();
    }
    
    async register(email, password, name, gender, birth) {
        const response = await fetch(this.baseURL+"/api/account/register",{
            ...this.postOption,
            body: JSON.stringify({email, password, name, gender, birth})
        });
        return await response.json();
    }
}

export default AccountAPI;