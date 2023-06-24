import React from 'react'
import { Icon } from 'Icons'
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
    const history = useNavigate()

    const handleGoBack = () => {
        history(-1); 
      }; 

      const handleGoForward = () => {
        history(+1); 
      };
    
  return (
    <nav className='flex items-center gap-x-4'> 
        <button onClick={handleGoBack} className='w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70'>
            <Icon size={22} name="prev"/>
        </button>
        <button onClick={handleGoForward} className='w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70'>
            <Icon size={22} name="next"/>
        </button>
    </nav>
  )
}

export default Navigation