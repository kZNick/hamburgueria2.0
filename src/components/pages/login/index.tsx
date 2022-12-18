import React from "react";
import { LoginPage } from "../../styles/login";
import { CartLogin } from "./card";
import { FormLogin } from "./loginForm";

export const Login = () => {
  return (
    <LoginPage>
      <FormLogin/>
      <CartLogin />
    </LoginPage>
  );
};
