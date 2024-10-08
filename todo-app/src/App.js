import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateTodo } from "./components/createTodo";
import {ShowTodoList} from "./components/showTodoList";
import "./App.scss";

function App() {
  return (
    <div className="app-contents">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowTodoList />} />
          <Route path="/create-todo" element={<CreateTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
