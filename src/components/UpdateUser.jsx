import React from "react";
import Button from "./Button";
import TextField from "./TextField";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "./userSlice";
const UpdateUser = () => {
  const { id } = useParams();
  const navigator = useNavigate();
  const dispatch = useDispatch();

  // React.useEffect(() => {

  // }, [id]);
  const user = useSelector((state) => {
    // console.log("state users", state.users);
    // console.log("id", id);
    return state.users.find((user) => {
      // console.log("user.id", user.id);
      // console.log("user.id === id", user.id == id);
      // console.log("user.id === id converted", user.id.toString() === id);
      return String(user.id) === id;
    });
  });

  const { name, email } = user;

  // console.log("user from userSelector", user);
  // console.log("name", name);
  // console.log("email", email);

  const [values, setValues] = React.useState({
    name,
    email,
  });

  function handleSubmit() {
    // console.log("handle submit", values);
    if (window.confirm("Sure wan to update user ?")) {
      dispatch(
        editUser({
          id,
          name: values.name,
          email: values.email,
        })
      );
      setValues({ name: "", email: "" });
      navigator("/");
      window.alert("Saved redirecting to main page");
    } else {
      window.alert("Cancelled");
    }
  }

  return (
    <>
      {user === undefined ? (
        <div className="flex justify-center mx-auto font-bold text-2xl text-rose-400">
          {" "}
          User does not exist
        </div>
      ) : (
        <></>
      )}
      <div className="mt-10 max-w-xl mx-auto">
        {" "}
        <TextField
          label="Name"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          type="text"
          placeholder="Type Name Here ..."
        />
        <TextField
          label="Email"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          type="email"
          placeholder="Type Email Here ..."
        />
        <Button onClick={handleSubmit}> Edit</Button>
      </div>
    </>
  );
};

export default UpdateUser;
