import { useLoaderData } from "react-router-dom";

function TodosNew() {
    const todos = useLoaderData();

    return (
        <>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.title}>{todo.title}</li>
                ))}
            </ul>
        </>
    );
}

export default TodosNew;
