import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logIn, logOut } from '../stores/auth';

function Header() {
  const user = useSelector(state => state.auth.user);

  const dispatch = useDispatch();

  const loginHandle = user => {
    dispatch(logIn(user));
  };

  const logoutHandle = () => {
    dispatch(logOut());
  };

  return (
    <header>
      <h2>lOGO</h2>
      {!user && (
        <nav>
          <button onClick={() => loginHandle({ id: 1, username: 'nicat' })}>
            Log in as Nicat!
          </button>
          <button onClick={() => loginHandle({ id: 2, username: 'ibrahim' })}>
            Log in as ibrahim!
          </button>
        </nav>
      )}
      {user && (
        <nav>
          <h3>Welcome, {user.username}</h3>
          <button onClick={() => logoutHandle()}>Log out</button>
        </nav>
      )}
    </header>
  );
}

export default Header;
