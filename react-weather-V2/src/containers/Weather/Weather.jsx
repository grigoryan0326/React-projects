import { useSelector } from "react-redux"

import CurrentWeather from "../../components/CurrentWeather/CurrentWeather"
import WeatherByTime from "../../components/WeatherByTime/WeatherByTime"
import WeatherByDays from "../../components/WeatherByDays/WeatherByDays"

import "./Weather.scss"

const Weather = () => {
  const error = useSelector((state) => state.currentWeather.error)

  return (
    <>
      {error ? (
        <div className='error'>City not found</div>
      ) : (
        <>
          <div className='weather__top'>
            <CurrentWeather />
            <WeatherByTime />
          </div>
          <WeatherByDays />
        </>
      )}
    </>
  )
}
export default Weather
