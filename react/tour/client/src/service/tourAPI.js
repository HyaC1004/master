
export class TourAPI{
    
    constructor(){
        this.baseURL = "http://apis.data.go.kr/6290000/tourdestbaseinfo/gettourdestbaseinfo";
    }
    
    async getInfos() {        
        
        const serviceKey= process.env.REACT_APP_SECRET_KEY;
        const type = "json"

        const response = await fetch(this.baseURL+"?serviceKey="+serviceKey+"&type="+type);
        return response.json();
    }
}