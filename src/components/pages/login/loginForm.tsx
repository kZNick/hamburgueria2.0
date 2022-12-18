import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FormStyled } from "../../styles/form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { UserFormData } from "../../@types/types";
import {RegisterLoginContext} from "../../contexts/contexRegisterLogin"
import spinner from "../../assets/Pulse-0.7s-200px.svg"


export const FormLogin = () => {

    const {handleSubmitLogin, loading}:any = useContext(RegisterLoginContext)

    console.log(loading)

    const formSchema = yup.object().shape({
        email: yup.string().required("Email obrigadorio").email("Email inválido"),
        password: yup.string().required("Senha obrigadoria"),
      });

    const {register, handleSubmit} = useForm<UserFormData>({resolver: yupResolver(formSchema)});


  return (
    <FormStyled onSubmit={handleSubmit(handleSubmitLogin)}>
      <div className="HeaderForm">
        <h2>Login</h2>
      </div>
      <div className="Inpults">
        <input type="text" id="email" required={true} {...register("email")}/>
        <label htmlFor="email">Email</label>
      </div>
      <div className="Inpults">
        <input type="password" id="senha" required={true} {...register("password")}/>
        <label htmlFor="senha">Senha</label>
      </div>
      <button type="submit" disabled={loading ? true : false}>{loading ? <img src={spinner} alt="" width="60px"/> :"Logar"}</button>
      <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
      <Link className="register" to="/Register">
        Cadastrar
      </Link>
    </FormStyled>
  );
};
