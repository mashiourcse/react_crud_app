import React from 'react'
import { useParams } from 'react-router-dom'
import env from "react-dotenv";

const URL = env.URL;

export const SingleUser = () => {
    const {id} = useParams();
    return (

    <div>
        
        <h1>Single User Details</h1>
        <p>{id}</p>
    
    </div>
  )
}
