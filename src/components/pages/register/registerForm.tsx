import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FormStyled } from "../../styles/form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFormData } from "../../@types/types";
import { RegisterLoginContext } from "../../contexts/contexRegisterLogin";
import spinner from "../../assets/Pulse-1s-200px.svg"

export const FormRegister = () => {

    const {handleSubmitRegister,loading}:any = useContext(RegisterLoginContext)

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório"),
    email: yup.string().required("Email Obrigatório").email(),
    password: yup.string().required("Senha Obrigatório"),
    confirmPassword: yup
      .string().oneOf([yup.ref("password"), null], "Senhas diferentes").required("Senha Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(formSchema),
  });


  return (
    <FormStyled onSubmit={handleSubmit(handleSubmitRegister)}>
      <div className="HeaderForm">
        <h2>Cadastro</h2>
        <Link className="comeBack" to="/Login">Retornar para o login</Link>
      </div>
      <div className="Inpults">
        <input type="text" id="name" required={true} {...register("name")} className={errors.name && "inputError"} />
        <label htmlFor="name">Nome</label>
        <span className="error">{errors.name?.message}</span>
      </div>
      <div className="Inpults">
        <input type="text" id="email" required={true}  {...register("email")} className={errors.email && "inputError"} />
        <label htmlFor="email">Email</label>
        <span className="error">{errors.email?.message}</span>
      </div>
      <div className="Inpults">
        <input
          type="password" id="password" required={true} {...register("password")} className={errors.password && "inputError"}/>
        <label htmlFor="password">Senha</label>
        <span className="error">{errors.password?.message}</span>
      </div>
      <div className="Inpults">
        <input type="password" id="confirmPassword" required={true} {...register("confirmPassword")} className={errors.confirmPassword && "inputError"}/>
        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <span className="error">{errors.confirmPassword?.message}</span>
      </div>
      <button className="buttonCadastre" disabled={loading ? true : false}>{loading ? <img src={spinner} alt="" width="60px"/> :"Logar"}</button>
    </FormStyled>
  );
};