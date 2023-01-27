import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserList } from './components/UserList';
import {CreateUser} from './components/CreateUser';
import { DeleteUser } from './components/DeleteUser';
import { EditUser } from './components/EditUser';
import { SingleUser } from './components/SingleUser';
import { Navbar } from './components/Navbar';

const App = () => {

  
  return(
    <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path="/" element={<UserList/>} />
        <Route path="/createuser" element={<CreateUser/>} />
        <Route path='/singleuser/:id' element={<SingleUser/>} />
        <Route path='/deleteuser/:id' element={<DeleteUser/>} />
        <Route path='updateuser/:id' element={<EditUser/>} />
        <Route path="*" element={ <p>404 not found</p> } />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
