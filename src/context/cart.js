import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children, props }) => {
  const [user, setUser] = useState([]);

  const sign = (email, password) => {
    console.log(user)
    const flagEmail = user.find(props=> props.email == email)
    const flagPassword = user.find(props=> props.password == password)
    if(flagEmail && flagPassword){
      alert('Usuario Encontrado!')
      return true
    }else{
      alert('Usuario não encontrado!')
      return false
    }
    
  }

  const register = (email, password) => {
    const auxArray = [...user]
    auxArray.push({email, password})
    setUser(x)
    console.log(user)
    alert("Usuario Cadastrado!")
  } 

  return (
    <CartContext.Provider value={{ user, sign, register }}>
      {children}
    </CartContext.Provider>
  );
};