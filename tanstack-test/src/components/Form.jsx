import { useImmer } from "use-immer";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import axiosRetry from "axios-retry";

import { PROFILE_ENDPOINT, COMMENTS_ENDPOINT, POSTS_ENDPOINT, USERS_ENDPOINT } from '../constants.js';
import { toCapitalized } from "../helpers/toCapitalize.js";
import { validateForm } from "../helpers/validateForm.js";

import '../styles/test.scss'
import {toast} from "react-toastify";

axios.interceptors.response.use(
    (response) => {
      return Promise.resolve(response);
    }, // всё хорошо
    (error) => {
      if (error) {
        // например, перенаправить на страницу логина
        console.log('Все хуево')
      }
      return Promise.reject(error);
    }
);

axiosRetry(axios, {retries: 3, // максимальное количество повторов
  retryDelay: (retryCount, error) => {
    console.log(`Retry #${retryCount} ${error.message}`);
    return retryCount * 1000; // увеличивающаяся задержка: 1000, 2000, 3000 мс
  },
  shouldResetTimeout: true, // сброс таймера между попытками
  retryCondition: () => true // Повторять при любой ошибке
})

export default function Form({ data, setData }) {
  const [person, setPerson] = useImmer({
    firstName: 'Karen',
    lastName: 'Grigoryan',
    age: 25
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    const newValue = toCapitalized(value)
    setPerson(draft => {
      draft[name] = newValue
    })
  }

  const handleTestSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get('profile1',{
        timeout: 0,
      })
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const isFormValid = validateForm(person.firstName, person.lastName, person.age)
    if (!isFormValid) return

    const body = {
      ...person,
      id: uuidv4(),
      date: new Date().toLocaleDateString()
    }

    try {
      const res = await axios.post('profile', JSON.stringify(body))
      if (res.statusText === 'Created') {
        setData([...data, body])
        const {firstName, lastName, age, date, id} = body
        toast(<div className='toast-container'>
          <p>New User Created!</p>
          <p>{firstName}</p>
          <p>{lastName}</p>
          <p>{age}</p>
          <p>{date}</p>
        </div>)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <form action="#" className="person-form" onSubmit={handleSubmit}>
        <ul className="inputs-container">
          <li className="input">
            <input type="text" name="firstName" value={person.firstName} onChange={handleChange} />
            {!person.firstName && <label htmlFor="firstName">FirstName</label>}
          </li>
          <li className="input">
            <input type="text" name="lastName" value={person.lastName} onChange={handleChange} />
            {!person.lastName && <label htmlFor="lastName">LastName</label>}
          </li>
          <li className="input">
            <input type="number" name="age" value={person.age} onChange={handleChange} />
            {!person.age && <label htmlFor="age">Age</label>}
          </li>
        </ul>
        <button type="submit">Submit</button>
        <button onClick={handleTestSubmit}>Test</button>
      </form>
    </>
  );
}