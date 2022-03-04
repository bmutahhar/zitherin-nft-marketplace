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
  font-size: 1.2rem;

  @media only screen and (max-width: 1200px) {
    font-size: 1rem;
    padding: 1.25rem 3rem;
  }

  @media only screen and (max-width: 920px) {
    font-size: 0.85rem;
    padding: 1.25rem 2.5rem;
  }
`;
