import { useState } from "react";
import { ContextLogin } from "./Context";

function ProviderLogin({ children }) {
  const [email, setEmail] = useState('hsuahushausa');

  const valueContext = {
    email,
    setEmail
  }

  return (
    <ContextLogin.Provider value={ valueContext } >
      { children }
    </ContextLogin.Provider>
  )
}

export default ProviderLogin;
