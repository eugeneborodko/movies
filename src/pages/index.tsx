import type { NextPage } from 'next';
import Layout from '@/components/Layout/Layout';
import Button from '@/components/UI/Button/Button';

const Home: NextPage = () => {
  return (
    <Layout>
      <div style={{ margin: 100 }}>
        <Button
          color="primary"
          ariaLabel="primary"
          onClick={() => console.log('primary')}
        >
          Primary
        </Button>
        <Button
          color="secondary"
          ariaLabel="secondary"
          onClick={() => console.log('secondary')}
        >
          Secondary
        </Button>
      </div>
    </Layout>
  );
};

export default Home;
