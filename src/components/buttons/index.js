import styled from "styled-components";

export const PolygonButton = styled.button`
  padding: 1.25rem 4rem;
  background: transparent linear-gradient(221deg, #007bff 0%, #e250e5 100%) 0%
    0% no-repeat padding-box;
  border: none;
  cursor: pointer;
  color: white;
  /* clip-path: polygon(8% 0, 91% 0, 100% 26%, 93% 100%, 10% 100%, 0 73%); */
  clip-path: polygon(10% 0, 95% 0, 100% 25%, 90% 100%, 5% 100%, 0 70%);
  font-size: 1.125rem;
  user-select: none;

  @media only screen and (max-width: 1200px) {
    font-size: 1rem;
    padding: 1.25rem 3rem;
  }

  @media only screen and (max-width: 900px) {
    font-size: 0.85rem;
    padding: 1.25rem 2.5rem;
  }
`;

export const PlainButton = styled(PolygonButton)`
  padding: 0;
  background: #f2b317;
  padding: 0.75rem 1rem;
  width: 85%;
  color: #121238;
  font-weight: 600;

  @media only screen and (max-width: 768px) {
    width:50%;
    margin-bottom:1rem;
  }

  @media only screen and (max-width: 400px) {
    width:100%;
  }
`;
