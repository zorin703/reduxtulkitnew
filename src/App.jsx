import './App.css';
import {useState} from "react";
import TodoList from "./Components/TodoList";
import InputField from "./Components/InputField";
import {useDispatch} from "react-redux";
import {addTodo} from "./store/todoSlice";

function App() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const addTask = () => {
        dispatch(addTodo({text}))
        setText('');
    };

        return (
        <div className="App">
            <InputField text={text}
                        handleInput={setText}
                        handleSubmit={addTask}
            />
            <TodoList/>
        </div>
    );
}

export default App;
