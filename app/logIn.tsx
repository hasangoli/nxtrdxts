'use client';

import { AppDispatch, useAppSelector } from '@/store';
import authSlice from '@/store/features/authSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isAuth = useAppSelector(state => state.auth.value.isAuth);

  const [username, setUsername] = useState('');

  const onClickLogin = () => {
    dispatch(authSlice.actions.login(username));
  };

  const onClickLogout = () => {
    dispatch(authSlice.actions.logout());
  };

  const onClickToggle = () => {
    dispatch(authSlice.actions.toggleModerator());
  };

  return (
    <div>
      <input
        type='text'
        className='text-black'
        onChange={e => setUsername(e.target.value)}
      />
      <br />
      <button onClick={onClickLogin}>Log In</button>
      <br />
      <button onClick={onClickLogout}>Log Out</button>
      <br />
      {isAuth && (
        <button onClick={onClickToggle}>Toggle Moderator Status</button>
      )}
    </div>
  );
};

export default Login;
