import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div``;
export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 20px;
  font-size: 25px;
  -webkit-box-shadow: 0px 7px 10px 0px rgba(124, 126, 134, 0.5);
  -moz-box-shadow: 0px 7px 10px 0px rgba(124, 126, 134, 0.5);
  box-shadow: 0px 7px 10px 0px rgba(124, 126, 134, 0.5);
`;
export const Navigation = styled.nav`
  display: flex;
  gap: 25px;
`;
export const NavigationItem = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  color: black;
  &.active {
    color: red;
  }
`;
