import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/authorization/selectors';

import { NavigationWrapper, NavigationItem } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <NavigationWrapper>
      <NavigationItem to="/">Home</NavigationItem>
      {isLoggedIn ? (
        <NavigationItem to="/contacts">Contacts</NavigationItem>
      ) : (
        <>
          <NavigationItem to="/register">Register</NavigationItem>
          <NavigationItem to="/login">Login</NavigationItem>
        </>
      )}
    </NavigationWrapper>
  );
};

export default Navigation;
