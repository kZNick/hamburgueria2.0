import React, { createContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RegisterFormData, UserFormData } from "../@types/types";
import { apiBuguer } from "../services/api";
import { SubmitHandler } from "react-hook-form/dist/types";

export const RegisterLoginContext = createContext({});

export const RegisterLoginProvider = () => {
  const navigate = useNavigate();
  const [loading, setLoading,] = useState<boolean>(false);

  useEffect(() => {}, []);
  

  const handleSubmitLogin: SubmitHandler<UserFormData> = async (datas) => {
    setLoading(true);
    try {
      const response = await apiBuguer.post("login", datas);
      toast.success("Login feito com Sucesso", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      localStorage.setItem("HubTokenUser", response.data.accessToken);
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Email invalido ou senha invalida", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }finally {
      setLoading(false);
  }
  };
  const handleSubmitRegister: SubmitHandler<RegisterFormData> = async (
    datas
  ) => {
    try {
      setLoading(true);
      const response = await apiBuguer.post("users", datas);
      toast.success("😁 Conta criada com sucesso!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/Login");
    } catch (error) {
      console.log(error);
      toast.error("😅Ops! Algo deu errado", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }finally {
      setLoading(false);
  }
  };

  return (
    <RegisterLoginContext.Provider
      value={{ handleSubmitLogin, handleSubmitRegister,loading }}
    >
      <Outlet />
    </RegisterLoginContext.Provider>
  );
};
