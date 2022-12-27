import { NextComponentType } from 'next';
import Link from 'next/link';

const Footer : NextComponentType =()=>{
    return(
        <>
            <div className="px-5">
                Challenge by <Link href="https://www.frontendmentor.io?ref=challenge" target="_blank"> Frontend Mentor</Link>. 
                Coded by <Link href="https://github.com/nestordqa"><span className='font-bold italic'> Néstor Quiñones</span></Link>.
            </div>
        </>
    );
};

export default Footer;