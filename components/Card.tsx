import { NextComponentType } from 'next';
import { useState } from 'react';
import axios from 'axios';
import { Advice,  Press } from '../app/types';

const Card : NextComponentType =()=>{

    const [advice, setAdvice] = useState<Advice>({
        id: 0,
        advice: ''
    });

    const [press, _setPress] = useState<Press>({
        message: 'Please, press vice button to see an advice.'
    });

    const getAdvice = async()=>{
        const {data} = await axios.get('https://api.adviceslip.com/advice');
        const {slip} = await data;
        if(slip !== undefined || slip !== null){

            if(slip.advice !== undefined && slip.id !== undefined){
                setAdvice({
                    id: slip.id,
                    advice: '' + slip.advice
                });
            };
        };
    };

    return(
    <>
    <div className = 'flex flex-col justify-start items-center text-center bg-darkGrey sm:h-80 md:h-80 w-4/5 sm:w-11/12 md:w-1/2 rounded-2xl px-6 font-Manrope'>
        <div className='h-1/3 md:mt-8 sm:mt-8 mt-4'>
            <h2 className='text-neonGreen tracking-[.25em] text-sm'>
                ADVICE # {advice.id}
            </h2>
        </div>

        <div className='h-1/3 text-cyan'>
            <h3 className='text-lg sm:text-2xl'>
                {
                    advice.advice !== '' ?
                     `"${advice.advice}"`
                    :
                    press.message
                }
            </h3>
        </div>
        <div className='h-1/3 hidden md:flex'>
            <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
        </div>
        <div className='md:hidden mt-5 h-1/3 '>
            <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
        </div>
        <div className='absolute sm:top-1/3 sm:mt-40 md:top-1/3 md:mt-40 bg-neonGreen p-5 rounded-full md:mt-6 flex flex-col justify-center items-center'>
            <button onClick={()=>getAdvice()}>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
            </button>
        </div>

    </div>
    
    </>
    );
};

export default Card;