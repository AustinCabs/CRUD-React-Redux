import React from 'react';
import UserList  from './components/UserList';
import AddUser   from './components/AddUser.jsx';
import UpdateUser   from './components/UpdateUser';
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div className='container mx-auto px-2 max-w-5xl pt-10 md:pt-32'>
      <h1 className='text-center font-bold text-2xl mb-5 text-gray'>
        CRUD Redux Toolkit
      </h1>
       <Routes>
        <Route path='/' element={<UserList/>}/>
        <Route path='/add' element={<AddUser/>}/>
        <Route path='/update/:id' element={<UpdateUser/>}/>
       </Routes>
    </div>
    );
}

export default App;
