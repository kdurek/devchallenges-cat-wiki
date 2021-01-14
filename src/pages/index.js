import {useEffect} from 'react';
import Head from 'next/head';
import HomePage from '../components/templates/HomePage';
import shuffleArray from '../utils/shuffleArray';
import DefaultLayout from '../components/layouts/DefaultLayout';

export default function Home({breeds, shuffledBreeds}) {
  useEffect(() => {
    console.log(breeds);
    console.log(shuffledBreeds);
  }, []);
  return (
    <DefaultLayout>
      <Head>
        <title>Cat Wiki</title>
      </Head>
      <HomePage breeds={breeds} shuffledBreeds={shuffledBreeds} />
    </DefaultLayout>
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
