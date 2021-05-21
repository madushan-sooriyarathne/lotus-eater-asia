import styled from "styled-components";

const Section = styled.footer`
  grid-column: full-start / full-end;

  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  grid-template-rows: repeat(2, min-content);
  grid-template-areas:
    "na so"
    "cr cr";
  align-items: start;
  justify-content: start;
  gap: 1rem;
  padding: 3rem 20rem;
  z-index: 1;

  background-color: ${(props) => props.theme.colors.primaryLight};
`;

const NavigationWrapper = styled.nav`
  grid-area: na;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  & > *:not(:last-child) {
    margin-right: 2rem;
  }
`;

const Logo = styled.img`
  width: 5rem;
  height: 4rem;
`;

const NavItem = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.blackLight};

  cursor: pointer;
`;

const SocialIconWrapper = styled.div`
  grid-area: so;
  justify-self: end;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  & > *:not(:last-child) {
    margin-right: 2rem;
  }
`;

const SocialIcon = styled.svg`
  width: 3rem;
  height: 3rem;
  fill: ${(props) => props.theme.colors.black};
`;

const CreditWrapper = styled.div`
  grid-area: cr;
  justify-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Credit = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.blackLight};

  & > a {
    font-weight: 700;
    text-decoration: none;
    color: ${(props) => props.theme.colors.blackLight};
    cursor: pointer;
  }

  & > b {
    font-size: 700;
  }
`;

export {
  Section,
  NavigationWrapper,
  Logo,
  NavItem,
  SocialIcon,
  SocialIconWrapper,
  CreditWrapper,
  Credit,
};
