import styled from "styled-components";

const CounterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, min-content);
  gap: 2rem;
  align-items: center;
  justify-content: center;

  padding: 3rem;

  // TODO: Remove this
  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(2, min-content);
    grid-template-columns: repeat(2, min-content);
  }
`;

const CountGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding: 2rem;

  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Number = styled.p`
  font-size: 5rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
  letter-spacing: 2px;
  margin-bottom: 1rem;
`;

const Label = styled.p`
  font-size: 1.3rem;
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${(props) => props.theme.colors.white};
`;

export { CounterContainer, CountGroup, Number, Label };
