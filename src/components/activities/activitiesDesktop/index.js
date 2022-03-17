import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import { icons } from "../../../utils/constants/icons";
import { activities } from "../../../mock/activities";
import { truncateStr } from "../../../utils/helpers";
import * as Styled from "./styled.components";

const ActivitiesTable = () => {
  const [pageCount, setPageCount] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rowsOnPage, setRowsOnPage] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const isExtraLargeScreen = useMediaQuery({ query: "(min-width:1920px)" });
  const activitiesData = useSelector((state) => state.activities);
  const navigate = useNavigate();
  const tableColumns = ["id", "name", "value", "chain", "description"];

  const goBack = () => navigate(-1);

  const nextPage = () => {
    const nextPageNum = pageNum + 1;
    if (pageNum < pageCount) {
      const updatedRows = activitiesData.slice(
        pageNum * rowsPerPage,
        nextPageNum * rowsPerPage
      );
      setRowsOnPage(updatedRows);
      setPageNum(nextPageNum);
    }
  };
  const previousPage = () => {
    const prevPageNum = pageNum - 1;
    if (pageNum > 1) {
      const updatedRows = activitiesData.slice(
        (prevPageNum - 1) * rowsPerPage,
        prevPageNum * rowsPerPage
      );
      setRowsOnPage(updatedRows);
      setPageNum(prevPageNum);
    }
  };

  const getRowsPerPage = () => {
    if (isExtraLargeScreen) {
      return 10;
    } else {
      return 5;
    }
  };

  useEffect(() => {
    const rowsToRender = getRowsPerPage();
    if (activitiesData.length > rowsToRender) {
      setRowsOnPage(activitiesData.slice(0, rowsToRender));
      setRowsPerPage(rowsToRender);
      setPageCount(Math.ceil(activitiesData.length / rowsToRender));
    } else {
      setRowsOnPage(activitiesData);
      setRowsPerPage(rowsToRender);
      setPageCount(1);
      setPageNum(1);
    }
  }, [isExtraLargeScreen, activitiesData]);

  return (
    <Styled.Container>
      <Styled.NonModalWrapper>
        <Styled.ModalHeader>
          {!isMobileOrTablet && (
            <Styled.ActionButton onClick={goBack}>
              <Styled.ActionIcon>{icons.arrowLeft}</Styled.ActionIcon>
              Go back
            </Styled.ActionButton>
          )}
          <Styled.TabHeader>
            {isMobileOrTablet && (
              <Styled.ActionIcon>{icons.arrowLeft}</Styled.ActionIcon>
            )}
            <Styled.TabHeaderText>My Activities</Styled.TabHeaderText>
          </Styled.TabHeader>
        </Styled.ModalHeader>
        <Styled.Body>
          <Styled.Table>
            <Styled.THead>
              <Styled.TableRow>
                {tableColumns.map((item) => (
                  <Styled.TH key={item}>{item}</Styled.TH>
                ))}
              </Styled.TableRow>
            </Styled.THead>
            <Styled.TBody>
              {rowsOnPage.map((row, index) => (
                <Styled.TableRow key={index}>
                  {tableColumns.map((key) => (
                    <Styled.TD key={key}>
                      {truncateStr(String(row[key]), 25)}
                    </Styled.TD>
                  ))}
                </Styled.TableRow>
              ))}
            </Styled.TBody>
          </Styled.Table>
        </Styled.Body>
      </Styled.NonModalWrapper>
      <Styled.PaginationRow>
        <Styled.ArrowButtons onClick={previousPage}>
          <Styled.ArrowIcon>{icons.arrowLeftFilled}</Styled.ArrowIcon>
        </Styled.ArrowButtons>
        <Styled.PageNum>{pageNum}</Styled.PageNum>
        <Styled.PageCount>of {pageCount}</Styled.PageCount>
        <Styled.ArrowButtons onClick={nextPage}>
          <Styled.ArrowIcon>{icons.arrowRightFilled}</Styled.ArrowIcon>
        </Styled.ArrowButtons>
      </Styled.PaginationRow>
    </Styled.Container>
  );
};

export default ActivitiesTable;
