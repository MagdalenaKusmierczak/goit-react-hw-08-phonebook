import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h2`
  margin: 0;
  margin-bottom: 15px;
  font-size: 25px;
  color: black;
`;
export const Redirect = styled.p`
  margin: 0;
  margin-bottom: 15px;
  font-size: 20px;
  color: black;
`;
export const LoginLink = styled(Link)`
  text-decoration: none;
  color: #0b0bff;
`;
