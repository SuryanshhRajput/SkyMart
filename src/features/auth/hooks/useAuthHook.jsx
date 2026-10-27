import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, removerUser } from "../state/authSlice";
import { clearCart } from "../../cart/state/cartSlice";

export const useAuth = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [registeredForm, setRegisteredForm] = useState(
    JSON.parse(localStorage.getItem("registeredForm")) || [],
  );

  let registerForm = (data) => {
    console.log(data);
    let arr = [...registeredForm, data];
    setRegisteredForm(arr);
    localStorage.setItem("registeredForm", JSON.stringify(arr));

    dispatch(addUser(data));
    localStorage.setItem("loggedInUser", JSON.stringify(data));
    navigate("/home");
    reset();
  };

  let loginForm = (data) => {
    let user = registeredForm.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {
      alert("Invalid password or email");
      reset();
      return;
    }

    dispatch(addUser(user));
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    alert("loggedin successfully");
    navigate("/home");
    reset();
  };

  let handleLogout = () => {
    dispatch(removerUser());
    dispatch(clearCart());
    navigate("/");
  };

  return {
    navigate,
    register,
    handleSubmit,
    errors,
    registerForm,
    loginForm,
    handleLogout,
  };
};
