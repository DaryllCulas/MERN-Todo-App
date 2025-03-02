import React from "react";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center transform-translate-y-16">
      <form action="" className="flex flex-col gap-6 max-w-xl w-full px-8">
        <div className="flex flex-col gap-2">
          <Label>Email</Label>
          <Input type="email" name="email" placeholder="Enter Email" />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Password</Label>
          <Input type="password" name="password" placeholder="Enter Password" />
        </div>
        <Button>Login</Button>
        <span className="text-blue-700 text-center">Don't have an account? {" "}
        <Link to="/register" className="transition ease-in-out hover:cursor-pointer hover:text-primary hover">
          Register
        </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
