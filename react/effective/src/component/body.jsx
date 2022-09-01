import Todo from "./todo";
import React from "react";

export const DateContext = React.createContext();

function Body({todos,deleteTodo,checkTodo}) {
    const date = new Date().toISOString().slice(0,10);
    

    return ( <>
    <DateContext.Provider value={date}>
        <div className="bodyContents">
            <h3>TODO</h3>
            {todos && todos.map(one=> 
                <Todo data={one} todos={todos} key={one.id}/>
            )}
        </div>
    </DateContext.Provider>
    <hr />
    </> );
}

export default Body;