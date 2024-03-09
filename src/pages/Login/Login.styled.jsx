import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
`;
export const LoginHeader = styled.h2`
  margin: 0;
  margin-bottom: 15px;
  font-size: 30px;
  color: black;
`;
export const Redirect = styled.p`
  margin: 0;
  margin-bottom: 15px;
  font-size: 20px;
  color: black;
`;
export const RegisterLink = styled(Link)`
  text-decoration: none;
  color: #0b0bff;
`;
