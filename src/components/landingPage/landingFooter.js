import React from "react";
import * as Styled from "./styles";
import { icons } from "../../utils/constants/icons";

const LandingFooter = () => {
  return (
    <Styled.Footer>
      <Styled.FooterTitle>Subscribe to our Newsletter</Styled.FooterTitle>
      <Styled.NewsLetter>
        <Styled.InputField
          placeholder="Email Address"
          id="email"
          name="email"
          type="email"
        />
        <Styled.NewsLetterIcon>{icons.arrowRight}</Styled.NewsLetterIcon>
      </Styled.NewsLetter>
      <Styled.CopyRights>
        © 2022 zitherin, All Rights Reserved.
      </Styled.CopyRights>
    </Styled.Footer>
  );
};

export default LandingFooter;
