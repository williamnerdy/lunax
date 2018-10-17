// @flow
import styled, { css } from 'styled-components';

const Btn = styled.button`
  display: inline-block;
  padding: 0.8em 1.4em;
  margin: 0.5rem 1rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 4px;

  ${props =>
    props.rounded &&
    css`
      border-radius: 1000px;
    `};

  ${props =>
    props.full &&
    css`
      display: block;
      width: 100%;
    `};

  ${props =>
    props.disabled &&
    css`
      cursor: default;
      opacity: 0.4;
    `};
`;

const DefaultButton = styled(Btn)`
  border: none;
  color: white;
  box-shadow: none;
  transition: box-shadow 400ms cubic-bezier(0.25, 0.8, 0.25, 1);

  :hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.22);
  }
`;

const TextButton = styled(Btn)`
  border: none;
  background: none;

  ${props =>
    props.primary &&
    css`
      color: #18e;
    `};

  ${props =>
    props.secondary &&
    css`
      color: #e37;
    `};

  ${props =>
    props.success &&
    css`
      color: #2b2;
    `};

  ${props =>
    props.warning &&
    css`
      color: #ec5;
    `};

  ${props =>
    props.danger &&
    css`
      color: #d44;
    `};

  ${props =>
    props.dark &&
    css`
      color: #d44;
    `};

  ${props =>
    props.dark &&
    css`
      color: #394050;
    `};

  ${props =>
    props.light &&
    css`
      color: #f3f3f3;
    `};
`;

const OutlineButton = styled(TextButton)`
  border-width: 1px;
  border-style: solid;

  ${props =>
    props.primary &&
    css`
      border-color: #18e;
    `};

  ${props =>
    props.secondary &&
    css`
      border-color: #e37;
    `};

  ${props =>
    props.success &&
    css`
      border-color: #2b2;
    `};

  ${props =>
    props.warning &&
    css`
      border-color: #ec5;
    `};

  ${props =>
    props.danger &&
    css`
      border-color: #d44;
    `};

  ${props =>
    props.dark &&
    css`
      border-color: #d44;
    `};

  ${props =>
    props.dark &&
    css`
      border-color: #394050;
    `};

  ${props =>
    props.light &&
    css`
      border-color: #f3f3f3;
    `};
`;

type Props = {
  type?: 'default' | 'text' | 'outline'
};

function Button(props: Props) {
  const btns = {
    default: DefaultButton,
    text: TextButton,
    outline: OutlineButton
  };

  return btns[props.type || 'default'];
}

export default Button;
