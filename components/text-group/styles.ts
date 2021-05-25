import styled from "styled-components";

interface GroupProps {
  align: FlexAlignment;
  justify: FlexAlignment;
}

const Group = styled.div<GroupProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.align};
  align-items: ${(props) => props.justify};
`;

export { Group };
