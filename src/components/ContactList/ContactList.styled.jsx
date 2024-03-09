import styled from 'styled-components';

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const ContactsTitle = styled.h2`
  font-size: 30px;
  margin-block: 5px;
`;
export const ContactsList = styled.ul`
  margin: 0, auto;
  margin-bottom: 100px;
`;
export const ContactElement = styled.li`
  font-size: 22px;
`;
export const DeleteBtn = styled.button`
  border: #8ca1adde 1px solid;
  border-radius: 5px;
  height: 25px;
  font-size: 16px;
  padding-block: 5px;
  padding-inline: 10px;
  margin-left: 20px;
  background-color: white;
  &:hover {
    background-color: #1700d4;
    color: white;
  }
`;
