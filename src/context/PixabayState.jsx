import React, { useEffect, useState } from 'react'
import PixabayContext from './PixabayContext'

const PixabayState = (props) => {
  const [imageData, setImageData] = useState([])
  const [query, setQuery] = useState('london');

  const api_key = "52572943-cc867f6396f058924b93fc94a"//this is api key. ye api key pixabay pe milega.

  useEffect(() => {
    const fetchData = async() =>{
      const api = await fetch(`https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true&per_page=100`
      );//ye api request hai jo pixabay Pe milega.Orquery bydefault london hoga 
      const data = await api.json();
      setImageData(data.hits) 
      console.log(data.hits);
    };
    fetchData()//here we call the fetchData
  }, [query])

  const fetchImageByCategory = async (category) =>{
    const api = await fetch(`https://pixabay.com/api/?key=${api_key}&category=${category}&image_type=photo&pretty=true&per_page=100`
      );
      const data = await api.json();
      setImageData(data.hits) 
      console.log(data.hits);
  };


  return (
    <PixabayContext.Provider 
     value={ {imageData, fetchImageByCategory, setQuery }}>
      {props.children}
      </PixabayContext.Provider>
  );
};

export default PixabayState;