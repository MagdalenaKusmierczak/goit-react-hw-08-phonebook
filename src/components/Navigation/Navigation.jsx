import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import UserMenu from 'components/UserMenu/UserMenu';

import { NavigationWrapper, NavigationItem } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
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
      {isLoggedIn && <UserMenu />}
    </>
  );
};

export default Navigation;
