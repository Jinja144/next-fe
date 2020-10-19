import Header from '../components/Header/Header';

export default function Home() {
  return (
    <>
      <Header>This is an intitial header</Header>
      <p>Test content</p>
    </>
  )
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
