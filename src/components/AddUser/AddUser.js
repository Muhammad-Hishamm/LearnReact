import React, { useState } from "react";
import Form from "../Layout/Form";
import Button from "../Layout/Button";

const AddUser = ({AddCard,closeModal}) => {
  const [input, setInput] = useState({
    id:Math.round(Math.random()*100),
    name: "",
    age: "",
    address: "",
    phone: "",
    gender:"",
  });

  const inputHandler =(e)=>{
    const key=e.target.id;
    const value =e.target.value;
    setInput({...input,[key]:value})
  }

  const submitHandler = (e) => {
    e.preventDefault();
    AddCard({
        id:Math.round(Math.random()*100),
        name:input.name,
        age:input.age,
        address:input.address,
        phone:input.phone,
        gender:input.gender,
    })
    closeModal();
  };

  return (
    <form onSubmit={submitHandler}>
      <Form.Controller>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter name"
          value={input.name}
          onChange={inputHandler}
        ></input>
      </Form.Controller>
      <Form.Controller>
        <label type="text" htmlFor="address">
          Address
        </label>
        <input
          id="address"
          type="text"
          placeholder="Enter Address"
          value={input.address}
          onChange={inputHandler}
        ></input>
      </Form.Controller>
      <Form.Controller>
        <label type="text" htmlFor="age">
          Age
        </label>
        <input
          id="age"
          type="text"
          placeholder="Enter Age"
          value={input.age}
          onChange={inputHandler}
        ></input>
      </Form.Controller>
      <Form.Controller>
        <label type="text" htmlFor="phone">
          Phone
        </label>
        <input
          id="phone"
          type="text"
          placeholder="Enter Phone"
          value={input.phone}
          onChange={inputHandler}
        ></input>
      </Form.Controller>
      <Form.Controller>
        <label type="text" htmlFor="gender">
        Gender
        </label>
        <input
          id="gender"
          type="text"
          placeholder="Enter Gender"
          value={input.gender}
          onChange={inputHandler}
        ></input>
      </Form.Controller>
      <Button type="submit" style={{ margin: "20px" }}>
        Submit
      </Button>
      <Button type="reset" style={{ margin: "20px" }}>
        reset
      </Button>
    </form>
  );
};

export default AddUser;
