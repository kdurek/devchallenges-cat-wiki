import Head from 'next/head';
import DefaultLayout from '../components/layouts/DefaultLayout';
import TopPage from '../components/templates/TopPage';
import {db} from '../../firebase';

const Breeds = ({breeds}) => {
  return (
    <DefaultLayout>
      <Head>
        <title>Cat Wiki - Top breeds</title>
      </Head>
      <TopPage breeds={breeds} />
    </DefaultLayout>
  );
};

export async function getStaticProps() {
  const url = 'https://api.thecatapi.com/v1/breeds/';
  const fetchBreeds = await fetch(url).then(res => res.json());

  const topBreeds = await db.limit(10).orderBy('count', 'desc').get();
  const breeds = topBreeds.docs.map(doc => {
    let breed = fetchBreeds.find(e => e.id == doc.id);
    return {
      id: doc.id,
      count: doc.data().count,
      name: breed.name,
      description: breed.description,
      image: breed.image.url,
    };
  });

  return {
    props: {breeds},
  };
}

export default Breeds;
