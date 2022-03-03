import styled from "styled-components";

export const PolygonButton = styled.button`
  padding: 1.25rem 4rem;
  background: transparent linear-gradient(221deg, #007bff 0%, #e250e5 100%) 0%
    0% no-repeat padding-box;
  ${({ plain }) => (plain ? `background: #F2B317;` : "")}
  ${({ fullWidth }) => (fullWidth ? "width:100%;" : "")}
  border: none;
  cursor: pointer;
  color: white;
  /* clip-path: polygon(8% 0, 90% 0, 100% 26%, 93% 100%, 10% 100%, 0 73%); */
  clip-path: polygon(8% 0, 91% 0, 100% 26%, 93% 100%, 10% 100%, 0 73%);
`;
