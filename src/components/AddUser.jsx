import React from "react";
import Button from "./Button";
import TextField from "./TextField";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addUser } from "./userSlice";
const AddUser = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [values, setValues] = React.useState({
    name: "",
    email: "",
  });

  function handleSubmit() {
    // console.log(values);
    if (values.name.length === 0 || values.name.length === 0) {
      alert("Fill up empty field !");
      return;
    }

    if (window.confirm("Think twice !!")) {
      dispatch(
        addUser({
          id: uuidv4(),
          name: values.name,
          email: values.email,
        })
      );

      setValues({ name: "", email: "" });
      navigator("/");
    }
  }
  return (
    <div className="mt-10 max-w-xl mx-auto">
      {" "}
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        // props={{ type: "text", placeholder: "Type Name Here" }}
        type="text"
        placeholder="Type Name Here ..."
      />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        // props={{ type: "text", placeholder: "Type Email Here" }}
        type="email"
        placeholder="Type Email Here ..."
      />
      <Button onClick={handleSubmit}> Submit</Button>
    </div>
  );
};

export default AddUser;
