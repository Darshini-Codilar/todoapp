import React, { useState, useEffect} from "react";
import "./todoform.css";

export default function Todoapp({themeChange}){

  const[data,setDataItem] = useState([]);
  const[value,setValue] = useState();
  const [currentState, setTabState] = useState("");
 
  const setData = (event) => {
    setValue(event.target.value);
  };

  const add = (e) => {
    e.preventDefault();
    if(!value || value.trim().length==0){
      alert("Enter Somthing")
    }
    else{
    setDataItem([
      ...data,
      { text: value, completed: false, id: new Date().getTime() },
    ])
    }
    setValue('');
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("key"));
    if (todos) {
      setDataItem(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(data));
  }, [data]);

  const toggleId = (id) => {
    const newid = data.map((data) =>
      data.id === id ? { ...data, completed: !data.completed } : data
    );
    setDataItem(newid);
  };

  const clearComplete = () => {
    const updatedTodos = data.filter((val) => {
      if (val.completed == false) {
        return val;
      }
    });
    setDataItem(updatedTodos);
  };
 
  const removeItem = (id) => {
    const updatedTodo = data.filter((val) => {
      if (val.id !== id) {
        return val;
      }
    });
   setDataItem(updatedTodo);
  };

  const activeTab = (e) => {
    setTabState(e.target.textContent);
  };

    const leftItems = () => {
    const updatedTodos = data.filter((data) => !data.completed);
  
    return updatedTodos.length;
  };


  return(
    <div className="container">
      <div className="todo_list">
        <div className="todo_title">
          <span>TODO</span>
          <span>
          <img src="images/icon-moon.svg" alt="moonimg" id="image" onClick={themeChange} />
          </span>
        </div>
        <div className="input_field">
          <form onSubmit={add}>
            <input type="text" placeholder="Create a new todo.." value={value} onChange={setData}/>
          </form>
        </div>
      </div>
      <div className="main_result">
        <div className="results">
          <ul className="list">
            {data.map((val, i) => {
              if (currentState === "All" || currentState==="") {
                return (
                  <li key={i}>
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={val.completed}
                      onClick={() => toggleId(val.id)}
                    />
                   
                    <span style={val.completed?{textDecoration:"line-through"}:null}>{val.text}</span>
                   <span className="cross"> 
                    <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" onClick={() => removeItem(val.id)}><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"   /></svg></span>
                  </li>
                );
              } else if (currentState === "Active") {
                if (!val.completed) {
                  return (
                    <li key={i}>
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked={val.completed}
                        onClick={() => toggleId(val.id)}
                      />
                     <span style={val.completed?{textDecoration:"line-through"}:null}>{val.text}</span>
                     <span className="cross"> 
                    <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" onClick={() => removeItem(val.id)}><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"   /></svg></span>
                    </li>
                  );
                }
              } else if (currentState === "Completed") {
                if (val.completed) {
                  return (
                    <li key={i}>
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked={val.completed}
                        onClick={() => toggleId(val.id)}
                      />
                    <span style={val.completed?{textDecoration:"line-through"}:null}>{val.text}</span>
                    <span className="cross"> 
                    <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" onClick={() => removeItem(val.id)}><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"   /></svg></span>
                    </li>
                  );
                }
              }
            })}
          </ul>

         
        </div>
      </div>
      <div className="button_wrap">
      <div className="buttons">
            <div>{leftItems()} items</div>
            <div className="function">
              <div onClick={activeTab} id={currentState === "All"}>
                All
              </div>
              <div onClick={activeTab} id={currentState === "Active"}>
                Active
              </div>
              <div onClick={activeTab} id={currentState === "Completed"}>
                Completed
              </div>
            </div>
            <div onClick={clearComplete}>Clear Completed</div>
          </div>
          </div>
    </div>
  );
}