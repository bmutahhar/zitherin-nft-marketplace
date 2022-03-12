import styled from "styled-components";
import { PlainButton } from "../../buttons";


export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow-y: auto;
  background: #392877;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  font-size: 1.25rem;
  background: #130933;
  padding: 1.25rem;
`;

export const HeaderIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
  width: 30px;
  color: white;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* border: 2px solid white; */
  height: 100%;
`;

export const SelectionCategory = styled.div`
  width: 90%;
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  margin-top: 1rem;
`;

export const SelectionName = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 400;
  color: white;
  margin-bottom: 1rem; ;
`;

export const Label = styled.label`
  display: block;
  /* border: 1px solid white; */
  margin-left: 0.25rem;
  color: white;
  font-size: 1rem;
  font-weight: 200;
  cursor: pointer;
  user-select: none;
  position: relative;
  padding-left: 2.25rem;
  margin-bottom: 1rem;

  & input:checked ~ .checkmark {
    background: #6738ff;
    &::after {
      display: block;
    }
  }
`;

export const InputField = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background: transparent;
  border: 1px solid #537fee;
  border-radius: 6px;
  &::after {
    display: none;
    position: absolute;
    content: "";
    left: 8px;
    top: 5px;
    width: 7px;
    height: 12px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;

export const PriceFields = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:flex-start;
  /* border: 1px solid white; */
  margin-bottom: 2rem;
`;

export const PriceField = styled.input`
  background: transparent;
  width:40%;
  padding: 1rem 1.25rem;
  border: 1px solid #537fee;
  border-radius:6px;
  margin-right:2rem;
  color: white;
  outline:none;
  font-size:1rem;

  &::placeholder {
    color: white;
    opacity:0.6;
  }
`;

export const ApplyButton = styled(PlainButton)`
margin:0 auto;
  margin-bottom: 1rem;

  @media only screen and (max-width: 768px) {
    width: 85%;
  }
`;
