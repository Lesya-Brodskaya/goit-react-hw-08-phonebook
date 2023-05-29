// import { NavLink } from 'react-router-dom';
import { NavLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
};

export default AuthNav;
