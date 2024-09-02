import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function CircularRating({maxValue, value}:{ maxValue: number, value: number}) {
    
   
  return (
   

    <CircularProgressbar styles={buildStyles({
        textColor: "black",
        pathColor: "gold",
        // trailColor: "gold"
      })} value={value} maxValue={maxValue} text={`${value}`} />
   
  )
}

export default CircularRating