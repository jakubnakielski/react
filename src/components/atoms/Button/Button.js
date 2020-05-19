import styled, { css } from 'styled-components';

const Button = styled.button`
  display: block;
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.note};
  padding: 0;
  font-size: 16px;
  font-family: 'Montserrat';
  font-weight: 600;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      width: 105px;
      height: 30px;
      background: ${({ theme }) => theme.grey200};
      font-size: 10px;
    `}
`;
export default Button;
