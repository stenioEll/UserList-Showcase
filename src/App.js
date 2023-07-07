import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchUsers } from './actions';

import { Oval } from 'react-loader-spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Lottie from "lottie-react"
import animationData from './assets/error.json'



function App() {
  const { loading, users, error } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  

 

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
          bg-gray-200
            w-96 
            h-96
            max-h-screen-80 
            overflow-y-auto

            flex 
            flex-col  
            items-center 
            rounded
            shadow   
         `}
      >
        <header className='mb-4  bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 flex justify-center items-center w-full h-12 p-4 mb-4'>
          <h1 className='font-montserrat font-bold uppercase text-gray-200 text-sm'>User List</h1>
        </header>
        {loading && (
          <div className="flex flex-col items-center justify-center mt-20">
            <Oval color="purple" secondaryColor="gray" height={80} width={80} />
            <h1 className="text-lg font-regular text-gray-800">Carregando dados...</h1>
          </div>
        )}
        {error && (
          <div className="flex flex-col items-center justify-center">
            <Lottie animationData={animationData}/>
            <h1 className="text-lg font-regular text-red-500">Ocorreu um erro ao carregar os dados.</h1>
            <p>{error}</p>
          </div>
        )}
        {!loading && !error && (
        <div className='overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 p-4'>
          <ul className="max-h-80">
            {users.map((user, index) => (
              <li key={user.id} 
                className=
                {`
                  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 
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
        )}
      </div>
    </div>
  );
}

export default App;
