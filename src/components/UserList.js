
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import env from "react-dotenv";

const URL = env.URL;

export const UserList = () => {

    const [users, setUsers] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);
  
    const fetchAllUsers = async(URL)=>{

        fetch(URL)
        .then((res)=>{
            if(!res.ok){
                throw Error("Could not fetch")
            }else{
                return res.json();
            }
        })
        .then( (json)=>{
            console.log(json.data);
            setUsers(json.data);
        })
    }

  const newConnection = async()=>{
        await fetchAllUsers(URL);
  }
  useEffect( ()=>{
    newConnection();
    
  }, [])

  return (
    <div>

        <h2>User lists</h2>
      <ul>
      {users && users.map( (user)=>{

        return <li key={user.id}> 
        {user.name}
        
        <Link to={"/singleuser/"+user.id}> User Details</Link>
        <Link to={"/deleteuser/"+user.id}> Delete User </Link>
        <Link to={"/updateuser/"+user.id}> Update User </Link>
        </li>
      })}
      </ul>

    </div>
  )
}
