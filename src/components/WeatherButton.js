import React from 'react'

const WeatherButton = ({cities, setCity}) => {

  let city = cities.map((number, index)=>{
    return <button
      key={index}
      onClick={()=>setCity(number)}
    >{number}</button>;
  })

  console.log('cities : ',cities)
  return (
    <div className='WeatherButton'>
      <button onClick={()=>{setCity('')}}>Current</button>
      {city}
    </div>
  )
}

export default WeatherButton