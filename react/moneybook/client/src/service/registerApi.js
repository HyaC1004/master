class RegisterApi {
    constructor() {
        this.baseURL="http://127.0.0.1:8080";
    }

    async register(email, password, name, gender, birth) {
        const response = await fetch(`${this.baseURL}/api/account/register`, {
            method : "POST",
            body : JSON.stringify({email, password, name, gender, birth}),
            headers: { 'Content-Type': 'application/json' }
        });
        const json = await response.json();
        return json;
    }
}

export default new RegisterApi();