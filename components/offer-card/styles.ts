import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Image = styled.img`
  width: 100%;
  height: 30rem;
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 2rem 1rem;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export { Card, ContentWrapper, Image };
