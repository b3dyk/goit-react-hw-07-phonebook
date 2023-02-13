import styled from 'styled-components';

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  min-height: 100px;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const Button = styled.button`
  min-width: 100px;
  height: 30px;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  color: white;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  background-color: ${props => props.theme.main};
`;
