import DefaultLayout from '../../components/layouts/DefaultLayout';
import BreedPage from '../../components/templates/BreedPage';

const Breeds = ({breed}) => {
  return (
    <DefaultLayout>
      <BreedPage breed={breed} />
    </DefaultLayout>
  );
};

export async function getServerSideProps({params}) {
  const breed = await fetch(
    `https://api.thecatapi.com/v1/images/search?breed_id=${params.id}&limit=9`
  ).then(res => res.json());

  return {
    props: {breed},
  };
}

export default Breeds;
