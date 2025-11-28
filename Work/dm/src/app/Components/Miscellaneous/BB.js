"use client"

import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const BB = () => {

  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    const backToTop = () => {
        
        if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        
            <button onClick={() => backToTop()} className='z-999 fixed bottom-10 right-10 text-white p-2 bg-[#333e41] w-12 h-12  text-xl text-white font-bold py-2 px-2 rounded-full' style={{zIndex: 999}}>
                <FontAwesomeIcon fontSize={32} icon={faCircleArrowUp} />
            </button>
        
    )
}

export default BB