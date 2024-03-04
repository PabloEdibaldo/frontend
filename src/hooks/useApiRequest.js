import { useState, useEffect, useRef, useLayoutEffect } from "react";

export default function useApiRequest(url,method,body,id) {
  const [data, setData] = useState([]); //estado inicial del los datos
  const [loading, setLoading] = useState(true);//estado de carga de los datos
  const [error, setError] = useState(true);//estado de errores

  useEffect(() => {
    const fetchData = async () => {
      //se verifica si hay datos en el cache para no hacer la peticon 
      setLoading(true);
      setError(null);

     
      try {
        // Tipos de peticiones dependiendo del método
        let response;
        if (method === "GET") {
          response = await fetch(url); // Función de React para hacer las peticiones a la API
        } else if (method === "POST") {
          response = await fetch(url, 
            {method: method,
              body: JSON.stringify(body),
              headers: {
                'Content-Type': 'application/json'
              }
             }); 
        } else if (method === "DELETE") {
          response = await fetch(`${url}/${id}`, { method: "DELETE" });
        } else if (method === 'PUT'){
          response = await fetch(`${url}/${id}`,{method:"PUT"})
          
        }

        const responseData = await response.json();

        
        setData(responseData);
        setLoading(false);
      }catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, body]);
  return {
    data,
    loading,
    error
  };
}