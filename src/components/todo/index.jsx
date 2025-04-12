import { useDispatch } from "react-redux";
 
const todo = [
    {id: 1, name: 'Clear my room'},
    {id: 2, name: 'Do my hw'},
    {id: 3, name: 'Iron my clothes'}
];
 
 
const Todo = ()=>{
    const dispatch = useDispatch();
 
    return(
        <div>
            <h2>To do</h2>
            <input type="text" className="inputadd" />
             <ul>
                {todo.map(to=>(
                    <li key={todo.id}>
                        {todo.name}
                        <button onClick={()=>dispatch({type:'ADD_TO_LIST',payload: todo})}>Add to list</button>
                     </li>
                ))}
            </ul>
        </div>
    )
}
 
 
export default Todo;