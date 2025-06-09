import { useEffect, useState } from 'react';
import axios from 'axios';

import { TasksProvider } from './context/Tasks/TasksProvider.jsx';
import { PROFILE_ENDPOINT } from './constants.js';

import Form from './components/Form';
import View from './components/View.jsx';
axios.defaults.baseURL = 'http://localhost:3000'

import './App.css';
import {ToastContainer, Bounce} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {WebcamViewer} from "./components/WebcamViewer.jsx";

export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('/profile').then(({ data }) => setData(data)).catch(error => console.log(error.message))
  }, [])

  return (
    <TasksProvider value={{name: 'Gago', age: 33}}>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
        />
      <h1>Person form</h1>
      <Form setData={setData} data={data} />
      <View data={data} setData={setData} />
        <WebcamViewer />
    </TasksProvider>
  );
}
