import {useEffect, useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import { PROFILE_ENDPOINT, COMMENTS_ENDPOINT, POSTS_ENDPOINT, USERS_ENDPOINT } from '../constants.js';
import {useGeolocationData} from "../hooks/useGeolocationData.js";

import Loader from './Loader.jsx';
import '../styles/View.scss';

function View({ data, setData }) {
  const [geoData, setGeoData] = useState({});
  const [loadingState, setLoadingState] = useState({
    isLoading: false,
    isError: false,
    isSuccess: false
  })

  const position = useGeolocationData()
  useEffect(() => {
    let ignore = false;

    if (position && !ignore) {
      const lat = position.latitude;
      const lon = position.longitude;

      fetch(`http://localhost:3333/api/reverse-geocode?lat=${lat}&lon=${lon}&accept-language=en`)
          .then(res => res.json())
          .then(data => {
              setGeoData(data.address);

            const { country, city, suburb, road, postcode } = data.address;
            toast(
                <div className="toast-container">
                  <p>{country}</p>
                  <p>{city}</p>
                  <p>{suburb}</p>
                  <p>{road}</p>
                  <p>{postcode}</p>
                </div>
            );
          })
          .catch(error => toast.error(error.message));
    }

    return () => {
      ignore = true;
    };
  }, [position]);

  const handleDelete = async (id) => {
    setLoadingState({ ...loadingState, isLoading: true })
    try {
      await axios.delete(`${PROFILE_ENDPOINT}/${id}`);
      setData(data.filter(user => user.id !== id))
      setLoadingState({ ...loadingState, isLoading: false, isSuccess: true })
    } catch (error) {
      console.log(error.message);
      setLoadingState({ ...loadingState, isLoading: false, isError: true })
    }
  }

  const handlePatch = async (id) => {
    setLoadingState({ ...loadingState, isLoading: true })
    try {
      const res = await axios.patch(`${PROFILE_ENDPOINT}/${id}`, { age: 333 });
      if (res.statusText === "OK") setData(data.map(user => user.id === id ? { ...user, age: 333 } : user))
      setLoadingState({ ...loadingState, isLoading: false, isSuccess: true })
    } catch (error) {
      console.log(error.message);
      setLoadingState({ ...loadingState, isLoading: false, isError: true })
    }
  }

  const handlePut = async (id) => {
    const body = {
      id,
      firstName: 'Changed',
      lastName: 'Info',
      age: 18,
      date: new Date().toLocaleDateString()
    }

    setLoadingState({ ...loadingState, isLoading: true })
    try {
      const res = await axios.put(`${PROFILE_ENDPOINT}/${id}`, body);
      if (res.statusText === "OK") setData(data.map(user => user.id === id ? { ...body } : user))
      setLoadingState({ ...loadingState, isLoading: false, isSuccess: true })
    } catch (error) {
      console.log(error.message);
      setLoadingState({ ...loadingState, isLoading: false, isError: true })
    }
  }

  if (loadingState.isError) return <h1>Error</h1>
  if (loadingState.isLoading) return <Loader />

  return (
    <>
      <ul className="list">
        {data.map((user, index) => {
          return (
            <li key={user.id}>
              <span>{index + 1}.</span>
              <span>FullName: {user.firstName} {user.lastName}</span>
              <p>Age: {user.age}</p>
              <div className="buttons-container">
                <button onClick={() => handleDelete(user.id)}>Delete</button>
                <button onClick={() => handlePatch(user.id)}>Patch</button>
                <button onClick={() => handlePut(user.id)}>Put</button>
              </div>
            </li>
          )
        })}
      </ul >
      <button disabled={!geoData}>Load</button>
    </>
  )
}

export default View;