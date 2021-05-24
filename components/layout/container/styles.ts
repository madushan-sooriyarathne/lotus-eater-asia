import styled from "styled-components";

const Content = styled.main`
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-columns:
    [full-start] minmax(5rem, 1fr) [content-start] repeat(
      8,
      [col-start] minmax(min-content, 18rem) [col-end]
    )
    [content-end] minmax(5rem, 1fr) [full-end];
  grid-auto-rows: min-content;
  row-gap: 15rem;
`;

export { Content };
