import type { NextPage } from 'next';
import Button from '../components/UI/Button/Button';

const Home: NextPage = () => {
  return (
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
  );
};

export default Home;
