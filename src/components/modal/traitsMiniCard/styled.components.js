import styled from "styled-components";

export const Trait = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 90px;
  height: 65px;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 10px;
  position: relative;
  z-index: 0;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    clip-path: polygon(15% 0%, 85% 0%, 100% 20%, 100% 100%, 0 100%, 0% 20%);
    background: ${({ bgColor }) => bgColor};
    border-radius: 10px;
  }
`;

export const TraitName = styled.span`
  text-transform: uppercase;
  font-size: 0.875rem;
  color: #130933;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

export const TraitValue = styled.span`
  background: ${({ traitValueColor }) => traitValueColor};
  color: white;
  padding: 0.25rem 0.5rem;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-size: 0.7rem;
  font-weight: 600;
`;
