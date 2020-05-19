import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 67px;
  height: 67px;
  border: none;
  border-radius: 20px;
  background-color: ${({ active }) => (active ? 'white' : 'transparent')};
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 40%;

  &.isActive {
    background-color: white;
  }

  :hover {
        cursor: pointer;
  }
`;

export default ButtonIcon;
