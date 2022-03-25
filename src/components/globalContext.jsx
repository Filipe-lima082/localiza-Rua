import { useState, createContext, useCallback } from "react";

export const GlobalContext = createContext();

export const GlobalData = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const request = useCallback(async (BASE_URL) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(BASE_URL);
      json = await response.json();
    } catch (error) {
      json = null;
      setError(true);
    } finally {
      setLoading(false);
      setData(json);
      return [response, json];
    }
  }, []);

  return (
    <GlobalContext.Provider value={{ data, error, loading, request }}>
      {children}
    </GlobalContext.Provider>
  );
};
