import React, { useState } from "react";
/* import UserForm from "./userForm";
import Car from "./hooks";
import NewCounter from "./Counter";
import ContextProvider from "./CounterContext"; */
/* import FakeEcommerce from "./fetch";
import UpdateIncome from "./useReducer"; */
import Inputs from "./Form Validation/LogIn Form";
import "./App.css";

/* import Timer from "./Timer"; */

/* function App() {
  return (
    <ContextProvider>
      <div className="container">
        <UserForm />
        <Car />
        <NewCounter />
        <FetchData />
      </div>
    </ContextProvider>
  );
} */

/* function App() {
  return (
    <div className="container">
      <FakeEcommerce />
      <UpdateIncome />
    </div>
  );
}
export default App;
 */

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      errormessage: "username cannot be less that four characters",
      required: true,
      label: "Username",
    },
    {
      id: 2,
      name: "Email",
      type: "email",
      placeholder: "Email",
      errormessage: "Email must be in the correct format",
      required: true,
      label: "Email",
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|){8,16}$`,
      errormessage:
        "Password must be 8-16 characters and contain at least a special character, an uppercase and a number",
      required: true,
      label: "Password",
    },
    {
      id: 4,
      name: "confirmpassword",
      type: "password",
      placeholder: "Confirm Password",
      pattern: values.password,
      errormessage: "Passwords do not match!",
      required: true,
      label: "Confirm Password",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
      <h2>Register</h2>
        {inputs.map((input) => (
          <Inputs
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
            required
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}
export default App;
