import styled, { css } from "styled-components";

const flexColumnArrangement = css`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 2rem;
`;

const Section = styled.section`
  grid-column: content-start / content-end;

  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  grid-template-rows: repeat(2, min-content);
  gap: 10rem;
  grid-template-areas:
    "su in"
    "su te";
  align-items: start;
  justify-items: start;
`;

const SummeryGroup = styled.div`
  grid-area: su;
  width: 100%;
  height: 100%;
  padding: 5rem;
  background-color: ${(props) => props.theme.colors.primaryLight};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 3rem;
`;

const PriceGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 1rem;

  & > p {
    font-size: 3rem;
    font-weight: 600;
    letter-spacing: 1px;
    color: ${(props) => props.theme.colors.primary};
  }

  & > span {
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: ${(props) => props.theme.colors.blackLight};
    padding: 0.5rem 1rem;
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 5px;
  }
`;

const Validity = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.colors.blackLight};
`;

const BookingInstructions = styled.div`
  margin-top: auto;

  ${flexColumnArrangement}
`;

const Inclusions = styled.div`
  grid-area: in;
  ${flexColumnArrangement}
`;

const Terms = styled.div`
  grid-area: te;

  ${flexColumnArrangement}
`;

const BulletList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 1rem;
`;

const ListItem = styled.li`
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-align: left;
  color: ${(props) => props.theme.colors.blackLight};
  list-style: circle;
  list-style-position: outside;
`;

export {
  Section,
  SummeryGroup,
  PriceGroup,
  Validity,
  BookingInstructions,
  Inclusions,
  Terms,
  BulletList,
  ListItem,
};
