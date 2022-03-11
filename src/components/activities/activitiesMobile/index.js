import React from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import * as Styled from "./styled.components";
import { icons } from "../../../utils/constants/icons";
import { activities } from "../../../mock/activities";
import { truncateStr } from "../../../utils/helpers";

const ActivitiesMobile = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.HeaderIcon onClick={goBack}>
          {icons.arrowLeft}
        </Styled.HeaderIcon>
        <Styled.HeaderText>My Activities</Styled.HeaderText>
      </Styled.Header>
      {activities.map((item, index) => (
        <Styled.ContentCard key={index}>
          <Styled.ContentRow>
            <Styled.FieldValue>{truncateStr(item.hash, 20)}</Styled.FieldValue>
            <Styled.FieldValue>
              {moment(item.date).format("DD MMM YYYY")}
            </Styled.FieldValue>
          </Styled.ContentRow>
          <Styled.ContentRow>
            <Styled.ContentColumn>
              <Styled.FieldName>Type</Styled.FieldName>
              <Styled.FieldValue>
                {truncateStr(item.type, 20)}
              </Styled.FieldValue>
            </Styled.ContentColumn>
            <Styled.ContentColumn>
              <Styled.FieldName>Method</Styled.FieldName>
              <Styled.FieldValue>
                {truncateStr(item.method, 20)}
              </Styled.FieldValue>
            </Styled.ContentColumn>
          </Styled.ContentRow>
          <Styled.ContentRow>
            <Styled.ContentColumn>
              <Styled.FieldName>Details</Styled.FieldName>
              <Styled.FieldValue>
                {truncateStr(item.detail, 20)}
              </Styled.FieldValue>
            </Styled.ContentColumn>
          </Styled.ContentRow>
        </Styled.ContentCard>
      ))}
    </Styled.Container>
  );
};

export default ActivitiesMobile;
