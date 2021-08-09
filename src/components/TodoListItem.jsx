import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext'

function TodoListItem({ todo, deleteTodo }) {

    const { user, setUser } = useContext(UserContext);

    const mine = todo.user === user.id;
    return(
        <li className={mine ? "my-todo" : ""}>
            {todo.done ? "✓ " : "○ "}
            {todo.text}
            {mine && 
                <button onClick={() => deleteTodo(todo)}>
                    delete
                </button>
            }
        </li>
    );
}

export default TodoListItem;