import { useState } from "react";
import "./App.css";

function App() {
  const defaultList = [
    {
      id: 1,
      name: "pooja",
      location: "Aligarh",
    },
    {
      id: 2,
      name: "Rajeev",
      location: "Aligarh",
    },
  ];
  const [todoList, setTodoList] = useState(defaultList);

  const defaultValue = {
    id: new Date().getTime(),
    name: "",
    location: "",
  };

  const [inputValue, setInputValue] = useState(defaultValue);
  const [isEdit, setIsEdit] = useState(false);

  function addItem(e) {
    e.preventDefault();
    setTodoList([...todoList, inputValue]);
    setInputValue(defaultValue);
  }

  function editItem(e) {
    e.preventDefault();
    const updatedTodoList = todoList.map((item) => {
      if (item.id === inputValue.id) {
        return inputValue;
      }
      return item;
    });
    setTodoList(updatedTodoList);
    setInputValue(defaultValue);
  }

  function deleteItem(itemObj) {
    const updatedTodoList = todoList.filter((item) => {
      if (item.id === itemObj.id) {
        return;
      }
      return item;
    });
    setTodoList(updatedTodoList);
  }

  console.log("todo list", todoList);

  return (
    <div className="App">
      <h1> Todo CRUD Operation</h1>
      <div className="center_table">
        {/*Input TODO Item */}
        <div>
          <form onSubmit={isEdit ? editItem : addItem}>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={inputValue.name}
              onChange={(e) =>
                setInputValue({ ...inputValue, name: e.currentTarget.value })
              }
            ></input>
            <input
              type="text"
              name="location"
              placeholder="Enter Location"
              value={inputValue.location}
              onChange={(e) =>
                setInputValue({
                  ...inputValue,
                  location: e.currentTarget.value,
                })
              }
            ></input>
            <button type="submit">Submit</button>
          </form>
        </div>

        {/* TODO List */}
        <div>
          <table className="center_table">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>name</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {todoList.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>{index}</td>
                    <td>{item.name}</td>
                    <td>{item.location}</td>
                    <td>
                      <button
                        className="edit"
                        onClick={() => {
                          setIsEdit(true);
                          setInputValue(item);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="delete"
                        onClick={() => deleteItem(item)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
