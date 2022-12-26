import { NextComponentType } from 'next';
import { useState } from 'react';
import axios from 'axios';
import { Advice,  Press } from '../app/types';
import Footer from './Footer';

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
        console.log(slip);
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
    <div className = 'flex flex-col justify-center items-center text-center'>
        <div>
            <h2>ID:</h2>
            <h3>
                {
                    advice.id !== 0 ?
                    advice.id
                    :
                    press.message
                }
            </h3>
        </div>

        <div>
        <h2>ADVICE:</h2>
            <h3>
                {
                    advice.advice !== '' ?
                    advice.advice
                    :
                    press.message
                }
            </h3>
        </div>
        <button onClick={()=>getAdvice()}>
            Vice
        </button>
    </div>
    );
};

export default Card;