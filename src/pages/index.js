import {useEffect} from 'react';
import Head from 'next/head';
import Default from '../components/layouts/DefaultLayout';
import HomePage from '../components/templates/HomePage';
import shuffleArray from '../utils/shuffleArray';

export default function Home({breeds, shuffledBreeds}) {
  useEffect(() => {
    console.log(breeds);
    console.log(shuffledBreeds);
  }, []);
  return (
    <Default>
      <Head>
        <title>Cat Wiki</title>
      </Head>
      <HomePage shuffledBreeds={shuffledBreeds} />
    </Default>
  );
}

export async function getStaticProps() {
  const url = 'https://api.thecatapi.com/v1/breeds/';
  const breeds = await fetch(url).then(res => res.json());
  const shuffledBreeds = shuffleArray(breeds).slice(0, 4);

  return {
    props: {
      breeds,
      shuffledBreeds,
    },
  };
}
