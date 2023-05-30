import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import useAuth from '../../hooks/useAuth';
import { Wrapper, UserName } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserName>Welcome, {user.name}</UserName>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </Wrapper>
  );
};

export default UserMenu;