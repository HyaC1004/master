import { Component } from "react";
import CreateNameCard from "./createNameCard";
import NameCard from "./nameCard";
import Search from "./search";

class Contents extends Component {
    constructor() {
        super();
        const datas = [
            { name : "윤형호", hp : "010-4614-8225", email : "kr.edupoll@gmail.com" , grade : 10 },
            { name : "감혜빈", hp : "010-3381-0555", email : "kr.heybin@gmail.com" , grade : 7 },
            { name : "정상춘", hp : "010-9989-2861", email : "kr.sangchoon@gmail.com" , grade : 7 },
            { name : "유유유", hp : "010-9653-9311", email : "kr.yuyu@gmail.com" , grade : 8 },
            { name : "최윤주", hp : "010-2979-5856", email : "kr.yoonju@gmail.com" , grade : 8 },
            { name : "이혜주", hp : "010-3291-4687", email : "kr.yoonju@gmail.com" , grade : 8 },
            { name : "이솔", hp : "010-8683-3176", email : "kr.yoonju@gmail.com" , grade : 8 },
        ];
        this.state = { datas: datas, backup: datas }; 
    }

    handleCreate = (name, hp, email) => {
        const add = {name , hp, email};
        // const cDatas = [...this.state.datas, add];
        const cDatas = this.state.datas.concat(add);

        this.setState({datas : cDatas});
    }

    handleDelete = (name) => {
        console.log("content.handleDelete !");
        const cDatas = this.state.datas.filter((data)=>{
            return data.name !== name;
        });
        this.setState({datas : cDatas});
    }

    handleUpdate = (name, hp, email) =>{
        const cDatas =this.state.datas.map( one => {
            if(one.name != name) {
                return one;
            }
            return {...one, hp : hp, email : email};
        } );
        this.setState({datas : cDatas});
    }

    handleSearch = (word) => {
        const filtered = this.state.datas.filter( (one)=>{
            if(one.name.includes(word) || one.hp.replaceAll("-","").includes(word)) {
                return true;
            }
            return false;
        });
        this.setState({filtered:filtered});
    }

    render() {
        const cards = this.state.datas.map((value)=>{
            return <NameCard value={value} 
                key={value.name } onDelete={this.handleDelete } onUpdate={this.handleUpdate} />
        });
        return (
            <>
                <h2 >연락처관리 ({this.state.datas.length })</h2>
                <hr/>
                <CreateNameCard onCreate={this.handleCreate} />
                <hr/>
                <Search onSearch={this.handleSearch}/>
                <hr/>
                <div>
                    {cards}
                </div>
            </>
        );
    }
}
 
export default Contents;