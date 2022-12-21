import './App.css';
import {useState} from "react";
import TodoList from "./Components/TodoList";
import InputField from "./Components/InputField";

function App() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    const addTodo = () => {
        if (text.trim().length) {
            setTodos([
                ...todos,
                {
                    id: new Date().toISOString(),
                    text,
                    completed: false,
                },
            ])
            setText('');
        }
    }
    const removeTodo = (todoId) => {
        console.log(todos)
        setTodos(todos.filter(todo => todo.id !== todoId))
    }
    const toggleTodoCompleted = (todoId) => {
        setTodos(
            todos.map(
                todo => {
                    if (todo.id !== todoId) return todo;

                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
            )
        );
    }

    return (
        <div className="App">
            <InputField text={text}
                        handleInput={setText}
                        handleSubmit={addTodo}
            />
            <TodoList
                todos={todos}
                toggleTodoCompleted={toggleTodoCompleted}
                removeTodo={removeTodo}
            />
        </div>
    );
}

export default App;
