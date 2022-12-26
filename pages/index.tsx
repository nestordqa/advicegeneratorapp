import Head from 'next/head';
import { NextPage } from 'next';
import Card from '../components/Card';


const Home : NextPage =()=>{
  return (
    <>
      <Head>
        <title>Frontend Mentor | Advice generator app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className='text-black font-bold'>
        <Card/>
      </div>

    </>
  );
};

export default Home;
