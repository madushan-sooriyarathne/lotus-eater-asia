import styled from "styled-components";

const Container = styled.section`
  grid-column: full-start / full-end;

  width: 100%;
  min-height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 1;

  background-image: linear-gradient(
      135deg,
      rgba(41, 50, 60, 0.5) 10%,
      rgba(63, 13, 18, 0.6) 100%
    ),
    url("/assets/img/bg-boutique-87.avif"),
    url("/assets/img/bg-boutique-87.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  display: grid;
  grid-template-columns: minmax(5rem, 10rem) 1fr minmax(5rem, 10rem);
  grid-template-rows: min-content 1fr min-max-content;
  gap: 5rem;
  align-items: center;
  justify-items: center;

  @media only screen and (max-width: 700px) {
    gap: 0;
  }

  // TODO: Remove this
  @media only screen and (max-width: 450px) {
    grid-template-columns: 2rem 1fr 2rem;
  }
`;

const DetailsWrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`;

const Logo = styled.img`
  grid-column: 2 / 3;
  grid-row: 1 / 2;

  align-self: start;

  padding: 5rem;
  height: 20rem;
`;

const ContactGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 10rem;
`;

const ContactMessage = styled.p`
  font-size: 3rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.white};
  letter-spacing: 1px;
  margin-bottom: 2rem;

  // TODO: Remove this
  @media only screen and (max-width: 550px) {
    font-size: 2rem;
    letter-spacing: 0.5px;
  }
`;

const ContactNumber = styled.p`
  font-size: 5rem;
  font-weight: 800;
  color: ${(props) => props.theme.colors.white};
  letter-spacing: 2px;
  margin-bottom: 1rem;

  // TODO: Remove this
  @media only screen and (max-width: 550px) {
    font-size: 4rem;
    letter-spacing: 0.5px;
  }
`;

const ContactEmail = styled.a`
  font-size: 2rem;
  font-weight: 200;
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
`;

const Credit = styled.div`
  grid-row: 3 / 4;
  grid-column: 2 / 3;

  align-self: end;

  padding: 5rem 5rem 3rem 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > p {
    font-size: 1.4rem;
    font-weight: 200;
    color: ${(props) => props.theme.colors.white};
    letter-spacing: 1px;
    text-align: center;
    line-height: 1.5;
    word-wrap: break-word;

    & > a {
      font-weight: 600;
      text-decoration: none;
      color: inherit;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 700px) {
    padding: 3rem 0rem;
  }
`;

export {
  Container,
  DetailsWrapper,
  Logo,
  Credit,
  ContactGroup,
  ContactMessage,
  ContactNumber,
  ContactEmail,
};
