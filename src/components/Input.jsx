import { useContext, useState, useRef } from "react";
import { GlobalContext } from "./globalContext";

const Input = () => {
  const { request } = useContext(GlobalContext);
  const [input, setInput] = useState("");
  const regex = /[^a-z0-9]/gi;
  const cepClean = input.replace(regex, "");
  const BASE_URL = `https://viacep.com.br/ws/${cepClean}/json`;

  function changeInput({ target }) {
    setInput(target.value);
  }

  function  getData(){
    request(BASE_URL)
  }

  return (
    <form className="form anime-left" onSubmit={(event) => event.preventDefault()}>
      <input
        autoFocus
        type="text"
        required
        placeholder="Informe seu cep ex: 57041190"
        onChange={changeInput}
        value={input}
        maxLength="8"
      />
      <button onClick={getData}>Localizar</button>
    </form>
  );
};

export default Input;
