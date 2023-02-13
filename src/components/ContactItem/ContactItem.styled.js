import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;

export const Text = styled.p`
  margin: 0;
  margin-right: 8px;
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  background-color: #ff6242;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  color: white;
  margin-left: auto;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  transition: background-color 250ms ease;

  :hover,
  :focus {
    background-color: #db5439;
  }
`;
