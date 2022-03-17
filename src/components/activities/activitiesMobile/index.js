import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import * as Styled from "./styled.components";
import { icons } from "../../../utils/constants/icons";
import { activities } from "../../../mock/activities";
import { truncateStr } from "../../../utils/helpers";

const ActivitiesMobile = () => {
  const navigate = useNavigate();
  const activitiesData = useSelector((state) => state.activities);

  const goBack = () => navigate(-1);

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.HeaderIcon onClick={goBack}>
          {icons.arrowLeft}
        </Styled.HeaderIcon>
        <Styled.HeaderText>My Activities</Styled.HeaderText>
      </Styled.Header>
      {activitiesData.map((item) => (
        <Styled.ContentCard key={item.id}>
          <Styled.ContentRow>
            <Styled.FieldValue>
              {truncateStr(String(item.id), 20)}
            </Styled.FieldValue>
            <Styled.FieldValue>{item.chain}</Styled.FieldValue>
          </Styled.ContentRow>
          <Styled.ContentRow>
            <Styled.ContentColumn>
              <Styled.FieldName>Name</Styled.FieldName>
              <Styled.FieldValue>
                {truncateStr(item.name, 20)}
              </Styled.FieldValue>
            </Styled.ContentColumn>
            <Styled.ContentColumn>
              <Styled.FieldName>Value</Styled.FieldName>
              <Styled.FieldValue>
                {truncateStr(item.value, 20)}
              </Styled.FieldValue>
            </Styled.ContentColumn>
          </Styled.ContentRow>
          <Styled.ContentRow>
            <Styled.ContentColumn>
              <Styled.FieldName>Description</Styled.FieldName>
              <Styled.FieldValue>
                {truncateStr(item.description, 40)}
              </Styled.FieldValue>
            </Styled.ContentColumn>
          </Styled.ContentRow>
        </Styled.ContentCard>
      ))}
    </Styled.Container>
  );
};

export default ActivitiesMobile;
