import { Route, Routes } from "react-router-dom";
import { RegisterLoginProvider } from "../contexts/contexRegisterLogin";
import { UserProvider } from "../contexts/contexUser";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { NotFound } from "../pages/notFound";
import { Register } from "../pages/register";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<UserProvider />}>
        <Route path="/" element={<Home />} />:
      </Route>
      <Route element={<RegisterLoginProvider />}>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register/>} />
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
};
