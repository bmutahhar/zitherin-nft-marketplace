import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  margin-top: 25px;
  transform: rotate(-10deg);
`;

export const Bullet = styled.div`
  border: 2px solid white;
  border-radius: 50%;
  padding: 0.25rem;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  position: absolute;
  left: 233px;

  ${(isFirst) => (isFirst ? `` : `left:100px;`)}

  ${({ isLast }) =>
    isLast
      ? ``
      : `&::after {
    position: absolute;
    left: 10px;
    top: -10px;
    content: "";
    width: 250px;
    height: 100px;
    border: 4px solid;
    border-color: #ff829b transparent transparent transparent;
    border-radius: 100%/100px 100px 0 0;
    z-index: -1;`}
`;

export const InnerCircle = styled.div`
  border-radius: 50%;
  background: white;
  width: 17px;
  height: 17px;
`;
