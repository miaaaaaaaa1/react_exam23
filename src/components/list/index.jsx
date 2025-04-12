import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
 
const List = () =>{
    const list = useSelector(state=>state.list);
    const dispatch = useDispatch();
 
    return (
       
        <Fragment>
            <h2>Done</h2>
            {
            list.length === 0 ? <p>List is empty</p> : (
                <ul>
                    {list.map((item) => 
                    (
                        <li key={item.id}>
                            {item.name}
                            <button onClick={() => dispatch({type: 'REMOVE_FROM_LIST', payload: item.id})}>Remove</button>
                        </li>
                    )
                    )}
                </ul>
            )}
           
            <button onClick={() => dispatch({type: 'CLEAR_LIST'})}>Clear List</button>
 
        </Fragment> 
    )
}
 
export default List;
