import React from 'react'
import { Link} from "react-router-dom"
export const Navbar = () => {
  return (
    <nav>

        <Link to="/"> Userlist</Link>
        <Link to="/createuser"> Create User</Link>
    </nav>
  )
}
