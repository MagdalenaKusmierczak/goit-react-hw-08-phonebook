import { NavigationWrapper, NavigationItem } from './Navigation.styled';

const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavigationItem to="/">Home</NavigationItem>
      <NavigationItem to="/register">Register</NavigationItem>
      <NavigationItem to="/login">Login</NavigationItem>
      <NavigationItem to="/contacts">Contacts</NavigationItem>
    </NavigationWrapper>
  );
};

export default Navigation;
