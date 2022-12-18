import { createContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { listBughuerType, listCartType } from "../@types/types";
import { apiBuguer } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = () => {
  const navigate = useNavigate();

  const [listBuhuer, setListBuhuer] = useState<listBughuerType[]>([]);
  const [listCart, setListCart] = useState<listCartType[]>([]);
  const [modalCart, setModalCart] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const token = localStorage.getItem("HubTokenUser");
  const headerApi = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    if (!token) {
      localStorage.clear();
      navigate("/login");
    }
    const buguerApi = async () => {
      try {
        setLoading(true);
        const api = await apiBuguer.get("products", headerApi);
        setListBuhuer(api.data);
      } catch (error) {
        console.log(error);
        toast.warn("🤐Sessão expirada", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };
    buguerApi();
  }, []);

  const createCart = (
    id: number,
    img: string,
    name: string,
    price: number,
    category: string
  ) => {
    const cart = {
      id: id,
      img: img,
      name: name,
      price: price,
      category: category,
      counter: 1,
    };

    let productExists = false;

    listCart.map((item) => {
      if (item.id === cart.id) {
        productExists = true;
      }
    });

    if (productExists) {
      addBurguer(cart.id);
      toast("🍔 Produto Adicionado ao Carrinho", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setListCart((oldBurguerCart) => [...oldBurguerCart, cart]);
      toast("🍔 Produto Adicionado ao Carrinho", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const removeCart = (cart: any) => {
    const filtroLista = listCart.filter((elemet) => elemet !== cart);
    setListCart(filtroLista);
    toast("🍔 Produto Removido do Carrinho", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const addBurguer = (productid: number) => {
    const updateListCart = listCart.map((item: listCartType) =>
      item.id === productid ? { ...item, counter: item.counter + 1 } : item
    );

    setListCart(updateListCart);
  };
  const removeBurguer = (product: listCartType) => {
    if (product.counter <= 1) {
      removeCart(product);
    } else {
      const updateListCart = listCart.map((item: listCartType) =>
        item.id === product.id ? { ...item, counter: item.counter - 1 } : item
      );
      setListCart(updateListCart);
    }
  };

  const addingTotalCart = listCart.reduce(
    (cartValue, currentCartValue) =>
      cartValue + currentCartValue.price * currentCartValue.counter,
    0
  );
  const filterSearch = listBuhuer.filter(
    (listFilter) =>
      listFilter.name.toLowerCase().includes(search.toLowerCase()) ||
      listFilter.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <UserContext.Provider
      value={{
        listBuhuer,
        setListBuhuer,
        listCart,
        setListCart,
        modalCart,
        setModalCart,
        createCart,
        addBurguer,
        removeBurguer,
        removeCart,
        addingTotalCart,
        setSearch,
        filterSearch,
        loading,
        setLoading,
      }}
    >
      <Outlet />
    </UserContext.Provider>
  );
};
