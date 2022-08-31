import Todo from "./todo";

function Body({todos,deleteTodo,checkTodo}) {

    return ( <>
        <div className="bodyContents">
            <h3>TODO</h3>
            {todos && todos.map(one=> <Todo data={one} todos={todos} key={one.id} checkTodo={checkTodo} deleteTodo={deleteTodo}/>)}
        </div>
        <hr />
    </> );
}

export default Body;