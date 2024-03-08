import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const NavigationWrapper = styled.nav`
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
