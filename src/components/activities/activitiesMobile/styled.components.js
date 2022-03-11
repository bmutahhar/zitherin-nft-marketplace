import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow: auto;
  /* border: 1px solid white; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem auto;
  padding:1rem;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #130933;
  border-radius: 10px;
  padding: 0.75rem;
  margin-bottom: 1rem;
`;

export const HeaderIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
  width: 25px;
  color: white;
`;

export const HeaderText = styled.span`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: white;
`;

export const ContentCard = styled.div`
  width: 100%;
  background: #392877;
  border-radius: 10px;
  margin-bottom: 1rem;
  /* margin: 1rem 0; */
  padding: 0.25rem 0.75rem;
`;

export const ContentRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid white; */
  margin: 1rem 0;
`;

export const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  /* border: 1px solid red; */
`;

export const FieldName = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #bb50ff;
  font-weight: 500;
  text-align: left;

  @media only screen and (max-width: 400px) {
    font-size: 0.875rem;
  }
`;

export const FieldValue = styled(FieldName)`
  color: white;
  font-size: 0.875rem;
  font-weight: 400;
  text-align: left;
  @media only screen and (max-width: 400px) {
    font-size: 0.75rem;
  }
`;
