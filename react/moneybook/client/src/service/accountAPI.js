class AccountAPI {
    constructor(baseURL) {
        this.baseURL=baseURL;
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

    async valid(token) {
        const respone = await fetch(this.baseURL+"/api/account/valid",{
            ...this.postOption,
            body: JSON.stringify({token})
        });
        return await respone.json();
    }
}

export default AccountAPI;