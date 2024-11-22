import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { getTodaysDate } from "../../utils"
import { ICON_ROOT } from "../../constants"

import "./WeatherByDays.scss"

const WeatherByDays = () => {
  const [forecastData, setForecastData] = useState([])
  const [selectedDay, setSelectedDay] = useState(getTodaysDate())

  const units = useSelector((state) => state.currentWeather.units)

  const weather = useSelector((state) => state.weatherByTime.data)
  const loading = useSelector((state) => state.weatherByTime.loading)

  useEffect(() => {
    if (weather) {
      setForecastData(weather.list)
    }
  }, [weather])

  const groupedData = forecastData.reduce((acc, entry) => {
    const date = entry.dt_txt.split(" ")[0]
    if (!acc[date]) acc[date] = []
    acc[date].push(entry)
    return acc
  }, {})

  const days = Object.keys(groupedData)

  const handleDayClick = (day) => {
    setSelectedDay(day)
  }

  return (
    <div className='weatherByDays'>
      <h1 className='weatherByDays__title'>Weather forecast for days</h1>
      <ul className='weatherByDays__days'>
        {days.map((day, id) => (
          <li
            key={id}
            onClick={() => handleDayClick(day)}
            className={selectedDay === day ? "active days__item" : "days__item"}
          >
            {day}
          </li>
        ))}
      </ul>

      {loading ? <div className='loading'>Loading...</div> : (
        <div className='forcast'>
          {groupedData[selectedDay]?.map((item, index) => (
            <div
              key={index}
              className='weatherByDays__forecast'
            >
              <p className='forecat__time'>
                {new Date(item.dt * 1000).toLocaleTimeString()}
              </p>
              <p className='forecat__temp'>
                {Math.round(item?.main?.temp || 0)}{" "}
                {units === "metric" ? "°C" : "°F"}
              </p>
              <p className='forecat__desc'>{item?.weather[0]?.main}</p>
              <img
                src={`${ICON_ROOT}${item?.weather[0].icon}@2x.png`}
                alt='Weather'
                className='forecast__icon'
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default WeatherByDays
