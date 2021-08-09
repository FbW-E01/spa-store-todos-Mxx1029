function TodoListItem({ user, todo, deleteTodo }) {
    const mine = todo.user === user.id
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