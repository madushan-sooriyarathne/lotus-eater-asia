import styled from "styled-components";

const InputFieldContainer = styled.div`
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: minmax(min-content, 1fr);
  grid-template-rows: repeat(2, min-content);
  grid-template-areas:
    "la"
    "in";
  gap: 0.5rem;
  align-items: start;
  justify-items: start;

  position: relative;
`;

const Label = styled.label`
  grid-area: la;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.primaryMedium};
  letter-spacing: 1px;

  margin-left: calc(2rem + 2px);

  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
`;

const Input = styled.input`
  grid-area: in;
  width: 100%;
  height: auto;

  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.colors.blackLight};

  padding: 1rem 2rem;

  border: ${(props) => `2px solid ${props.theme.colors.primary}`};
  outline: none;

  &:not(:placeholder-shown):invalid {
    border: ${(props) => `2px solid ${props.theme.colors.danger}`};
  }

  &:not(:placeholder-shown):valid {
    border: ${(props) => `2px solid ${props.theme.colors.success}`};
  }

  &:focus {
    border: ${(props) => `2px solid ${props.theme.colors.primary}`};
  }

  &::placeholder {
    font-size: 1.4rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.primary};
  }

  &:placeholder-shown {
    & ~ label {
      opacity: 0;
      transform: translateY(10px);
    }
  }
`;

const InputArea = styled.textarea`
  grid-area: in;
  width: 100%;
  height: auto;

  font-size: 1.4rem;
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 400;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.colors.blackLight};

  padding: 1rem 2rem;

  border: ${(props) => `2px solid ${props.theme.colors.primary}`};
  outline: none;

  &:invalid {
    border: ${(props) => `2px solid ${props.theme.colors.danger}`};
  }

  &:focus {
    border: ${(props) => `2px solid ${props.theme.colors.primary}`};
  }

  &::placeholder {
    font-size: 1.4rem;
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: 400;
    color: ${(props) => props.theme.colors.primary};
  }

  &:placeholder-shown {
    & ~ label {
      opacity: 0;
      transform: translateY(10px);
    }
  }
`;

export { InputFieldContainer, Input, InputArea, Label };
