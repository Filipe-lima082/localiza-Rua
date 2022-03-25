import { useContext} from "react";
import { GlobalContext } from "./globalContext";
import Input from "./Input";

const Home = () => {
  const { data, error, loading } = useContext(GlobalContext);

  function refreshPage() {
    document.location.reload();
  }

  if (error)
    return (
      <div className="error">
        <div className="error-infor">
          <p>Erro! Informe um cep válido.</p>
          <button onClick={refreshPage}>Informar CEP</button>
        </div>
      </div>
    );

  if (loading)
    return (
      <div className="container-loading">
        <div className="area-loading">
          <p>Carregando....</p>
          <span className="loading"></span>
        </div>
      </div>
    );

  return (
    <div className="container">
      <h1 className="title">Localiza Rua</h1>
      <Input />

      {data && (
        <div className="result anime-left">
          <ul>
            <li>
              Cep: <span>{data.cep}</span>
            </li>
            <li>
              Rua:{" "}
              <span>{data.logradouro ? data.logradouro : "inexistente"}</span>
            </li>
            <li>
              Complemento:{" "}
              <span>
                {data.complemento ? data.complemento : "Sem complemento"}
              </span>
            </li>
            <li>
              Bairro: <span>{data.bairro ? data.bairro : "Inexistente"}</span>
            </li>
            <li>
              Cidade: <span>{data.localidade}</span>
            </li>
            <li>
              Estado: <span>{data.uf}</span>
            </li>
            <li>
              DDD: <span>{data.ddd}</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
