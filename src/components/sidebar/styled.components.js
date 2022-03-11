import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-250px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: #00161f;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  animation: ${slideIn} 0.3s ease 0s 1 normal forwards;
`;

export const NavItems = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 2rem;
`;

export const NavItem = styled.div`
  color: white;
  width: 100%;
  padding: 1.5rem 2rem;
  font-size: 1rem;
  line-height: 1.5rem;
  cursor: pointer;
  text-decoration: none;
  border-bottom: 1px solid grey;
  &:hover {
    color: #7052e2;
  }

  &.active {
    color: #8050e2;
  }
`;

export const NavBtnContainer = styled.div`
  width: 100%;
  padding: 1.5rem 2rem;
`;

export const CloseIconContainer = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
  width: 30px;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

export const UserName = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  margin: 1rem;
  color: white;
`;
