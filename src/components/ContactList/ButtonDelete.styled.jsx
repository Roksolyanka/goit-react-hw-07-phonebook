import styled from 'styled-components';

export const ButtonDelete = styled.button`
  background-color: #4a0404;
  color: #d5b462;
  font-size: 10px;
  border: none;
  border-radius: 5px;
  height: 32px;
  width: 100px;
  margin-left: 10px;
  vertical-align: top;

  &: hover {
    outline-color: transparent;
    outline-style: solid;
    box-shadow: 0 0 0 4px #fff;
    transition: 0.7s;
  }
`;
