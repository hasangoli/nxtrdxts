'use client';

import { useAppSelector } from '@/store';
import Login from './logIn';

const Home = () => {
  const username = useAppSelector(state => state.auth.value.username);
  const isModerator = useAppSelector(state => state.auth.value.isModerator);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Login />

      <h1>
        Username: {username} {isModerator ? 'is Moderator' : ''}
      </h1>
    </main>
  );
};

export default Home;
