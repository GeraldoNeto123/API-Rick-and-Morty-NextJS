import styled from 'styled-components';

export default styled.input`
  width: 100%;
  border: none;
  background: #fff;
  border: 2px solid #fff;
  box-shadow: 0 4px 15px 4px rgba(0,0,0,0.14);
  height: 52px;
  border-radius: 4px;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  transition: border-color 0.2s ease-in;
  appearance: none;

  &:focus{
    border: 2px solid ${({theme}) => theme.green300};
  }
`;