import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CreateTodo() {
  const [data, setData] = useState({ title: "", description: "" });

  function handleChange(e) {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const todo = {
      title: data.title,
      description: data.description,
    };

    console.log({todo});
    axios
    
    
  }
}
