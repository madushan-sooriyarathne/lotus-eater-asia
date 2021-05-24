import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(min-content, 1fr);
  grid-template-rows: min-content 1fr;
  grid-template-areas:
    "im"
    "co";
  align-items: start;
  justify-items: start;

  box-shadow: ${(props) => props.theme.shadows.close};
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: ${(props) => props.theme.shadows.spread};
  }
`;

const Image = styled.img`
  grid-area: im;
  width: 100%;
  height: 30rem;
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  padding: 3rem;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, min-content) 1fr;
  row-gap: 2rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const PriceGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & > *:not(:last-child) {
    margin-right: 1rem;
  }
`;

const Price = styled.p`
  font-size: 1.8rem;
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.blackLight};
`;

const DiscountLabel = styled.p`
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.primaryLight};
  border-radius: 5px;
`;

const ButtonWrapper = styled.div`
  align-self: end;
`;

export {
  Card,
  ContentWrapper,
  Image,
  TitleWrapper,
  PriceGroup,
  DiscountLabel,
  Price,
  ButtonWrapper,
};
