import styled from 'styled-components';

export const Form = styled.form`
  width: 400px;
  height: 400px;
  margin-block: 20px;
  padding-top: 40px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  border: 2px black solid;
  align-items: center;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding: 5px;
  font-size: 25px;
`;
export const Input = styled.input`
  width: 250px;
  margin: 0;
  padding: 5px;
  font-size: 18px;
  border: #8ca1adde 1px solid;
  border-radius: 5px;
`;
export const SubButton = styled.button`
  margin-top: 10px;
  margin-left: 5px;
  width: 125px;
  height: 30px;
  padding: 2px;
  font-size: 20px;
  background-color: #0086d4;
  border-radius: 10px;
  border: 0px;
  cursor: pointer;
  &:hover {
    background-color: #1700d4;
    color: white;
  }
`;
