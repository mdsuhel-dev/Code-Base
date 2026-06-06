import { useState } from "react";
import Input from "../components/Input";
import useForm from "../hooks/useForms";
import Button from "../components/Button";
import { isAllowedEmail } from "../hooks/validateEmail";
import { login } from "../api/authApi";

function Login() {
  const { formData, handleChange } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAllowedEmail(formData.email)) {
      alert("we dont support that email");
      return;
    }
    console.log(formData);
    try {
      const response = await login(formData);
      console.log(response);
    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong";
      console.log(message);
      alert(message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Input
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <Button type="submit">Login</Button>
    </form>
  );
}

export default Login;
