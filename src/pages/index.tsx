import type { NextPage } from 'next';
import Layout from '@/components/Layout/Layout';
import Movies from '@/components/Movies/Movies';

const Home: NextPage = () => {
  return (
    <Layout>
      <Movies title="main title" />
    </Layout>
  );
};

export default Home;
