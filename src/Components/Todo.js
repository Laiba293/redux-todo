import React, { useState } from "react";
import { useSelector ,useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../Actions/Index";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add Your List Here</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="Add items.."
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            ></i>
          </div>

          <div className="showItems">
            {list.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.data}</h3>
                  <i
                    className=" far fa-trash-alt add-btn"
                    tittle="Delete item"
                    onClick={() =>
                      dispatch(deleteTodo(inputData), setInputData(""))
                    }
                  ></i>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
