import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
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
export const Footer = styled.footer`
  margin-top: auto;
  background-color: white;
  display: flex;
  padding-block: 20px;
  height: 40px;
  width: 100%;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px -7px 10px 0px rgba(124, 126, 134, 0.5);
  -moz-box-shadow: 0px -7px 10px 0px rgba(124, 126, 134, 0.5);
  box-shadow: 0px -7px 10px 0px rgba(124, 126, 134, 0.5);
`;

export const FooterWrapper = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0, 0;
`;
export const GoitLink = styled.a`
  color: #ff5722;
  text-decoration: none;
`;
export const MyLink = styled.a`
  color: #0b0bff;
  text-decoration: none;
`;
export const FooterText = styled.p`
  padding: 0, 0;
`;
