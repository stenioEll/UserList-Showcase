import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchUsers } from './actions';

import { Oval } from 'react-loader-spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';



function App() {
  const { loading, users, error } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return (
      <div class= "flex flex-col items-center justify-center h-full w-full">
        <Oval color="#00BFFF" height={80} width={80} />
        <h1 className='text-lg font-regular'>Carregando dados...</h1>
      </div> 
    )
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className 
        = {`
            bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900
            h-screen 
            flex 
            flex-col
            justify-center
            items-center
            font-montserrat
         `}
    >
      <div className 
        = {`
          bg-white
            w-96 
            h-96
            max-h-screen-80 
            overflow-y-auto
            p-4 
            flex 
            flex-col 
            justify-center 
            items-center 
            rounded
            shadow   
         `}
      >
        <header className='mb-4'>
          <h1 className='font-bold uppercase text-gray-800'>User List</h1>
        </header>
        <div className='overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 '>
          <ul className="max-h-80">
            {users.map((user, index) => (
              <li key={user.id} 
                className=
                {`
                  bg-gradient-to-r 
                from-gray-700 
                via-gray-900 to-black 
                  mb-4 
                  p-4 
                  rounded 
                  shadow-md 
                text-white
                  mr-2
                  cursor-pointer
                  hover:bg-gradient-to-r 
                hover:from-slate-900   
                hover:via-purple-900 
                hover:to-slate-900 

                `}>
                  <FontAwesomeIcon icon={faUser} className="mr-4" />    
                  {user.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
