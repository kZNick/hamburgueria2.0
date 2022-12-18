import React from "react";
import { RegisterPage } from "../../styles/register";
import { CartLogin } from "../login/card";
import { FormRegister } from "./registerForm";

export const Register = ()=>{

    return(
        <RegisterPage>
            <CartLogin/>
            <FormRegister/>
        </RegisterPage>
    )
}