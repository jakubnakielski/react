import styled, { css } from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  background-color: ${({ activecolor, theme }) => theme[activecolor]};
  padding: 0;
  margin-top: 50px;
  font-size: 16px;
  font-family: 'Montserrat';
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;

  :visited {color: black}

  ${({ secondary }) =>
    secondary &&
    css`
      width: 105px;
      height: 30px;
      background: ${({ theme }) => theme.grey200};
      font-size: 10px;
      transition: .1s;

      :hover {
        cursor: pointer;
        background: ${({ theme }) => theme.grey300};
        color: white;
      }
    `}
`;
export default Button;
