import {useState, useEffect} from 'react';

const useFetch = (callback, url) => {
    const [loading, setLoading] = useState(false);
    const fetchInitialData = async () => {
      setLoading(true);
      const response = await fetch(url);
      const initialData = await response.json();
      console.log('서버로 부터 데이터를 받아오는 fetchInitialData 호출됨');
      console.log(initialData)
      callback(initialData);
      setLoading(false);    
    }
    useEffect(() => {
      console.log('useFetch의 한번만 호출되는 useEffect');
      fetchInitialData();
    },[]);
    
    return loading;
  }

export default useFetch;