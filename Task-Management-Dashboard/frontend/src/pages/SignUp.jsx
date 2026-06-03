import React from 'react';
import useForm from '../hooks/useForms';
import Button from '../components/Button';
import Input from '../components/Input';

const SignUp = () => {
    
    const {formData,handleChange}=useForm({
        username:"",
        email:"",
        password:"",
        confirmPassword:"",
    })

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (formData.confirmPassword !== formData.password) {
            alert("password not matched")
            return
        }
        const {confirmPassword,...userData} = formData
        console.log(userData);
    }
   


    return (
        <form onSubmit={handleSubmit}>
        <Input
        label="User Name"
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        required
      />
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
      <Input
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />
      <Button type='submit'>Sign Up</Button>
    </form>
    );
}

export default SignUp;
