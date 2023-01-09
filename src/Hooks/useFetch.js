//React and Hooks

import { useState, useEffect } from "react";

//Custom Hook For Fetch

function useFetch(url) {
  const [loading,setLoading] = useState(false)
    const [data, setData] = useState(url)
    const [error,setError] = useState("")

    useEffect(() => {
        async function getData() {
          setLoading(true)
          setError(false)
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
                setLoading(false)
            } catch (e) {
                setError(e);
                setLoading(false)
            }
        }
        getData();
    }, [url]);
    
    return {data,loading,error};
}

export default useFetch;

/* import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

const useAxios = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get('/users');
      setResponse(res.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { response, error, loading };
};

export default useAxios;

import useAxios from './useAxios';

const App = () => {
  const { response, error, loading } = useAxios();
  return (
    <div className="app">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {error && error.message}
          {response && response?.map((item) => <div>{item.title}</div>)}
        </div>
      )}
    </div>
  );
};

export default App; */