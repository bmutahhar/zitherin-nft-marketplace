import React from "react";
import * as Styled from "./styles";
import { faqData } from "../../utils/constants/faq";

const LandingFAQ = () => {
  return (
    <Styled.SectionFour>
      <Styled.HeroContainerTwo>
        <Styled.HeroTitleMedium>
          Frequently Asked Questions
        </Styled.HeroTitleMedium>
      </Styled.HeroContainerTwo>
      <Styled.FAQContainer>
        {faqData.map((item) => (
          <Styled.Question key={item.id}>
            <Styled.QuestionText>{item.question}</Styled.QuestionText>
            <Styled.QuestionIcon>{item.icon}</Styled.QuestionIcon>
          </Styled.Question>
        ))}
      </Styled.FAQContainer>
    </Styled.SectionFour>
  );
};

export default LandingFAQ;
