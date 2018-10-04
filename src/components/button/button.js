import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0.25em 1em;
  margin: 0 1em;
  cursor: pointer;
  border-radius: 3px;

  ${props =>
    props.primary &&
    css`
      color: blue;
      background: transparent;
      border: 2px solid blue;

      :hover {
        color: white;
        background: blue;
      }
    `};

  ${props =>
    props.secondary &&
    css`
      color: palevioletred;
      background: transparent;
      border: 2px solid palevioletred;

      :hover {
        color: white;
        background: palevioletred;
      }
    `};

  ${props =>
    props.success &&
    css`
      color: green;
      background: transparent;
      border: 2px solid green;

      :hover {
        color: white;
        background: green;
      }
    `};

  ${props =>
    props.warning &&
    css`
      color: yellow;
      background: transparent;
      border: 2px solid yellow;

      :hover {
        color: white;
        background: yellow;
      }
    `};

  ${props =>
    props.error &&
    css`
      color: red;
      background: transparent;
      border: 2px solid red;

      :hover {
        color: white;
        background: red;
      }
    `};
`;

export default Button;
