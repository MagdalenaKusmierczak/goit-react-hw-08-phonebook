import styled from 'styled-components';

export const UserWrapper = styled.div`
  margin-left: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;
export const UserMail = styled.p`
  font-size: 20px;
  font-weight: 600;
`;
export const LogoutButton = styled.button`
  height: 35px;
  background-color: #0086d4;
  border-radius: 50%;
  border: 0px;
  cursor: pointer;
  &:hover {
    background-color: #1700d4;
    color: white;
  }
`;
