import React from "react";

export interface listBughuerType {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}
export interface listCartType {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  counter: number;
}

export interface UserFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
}
