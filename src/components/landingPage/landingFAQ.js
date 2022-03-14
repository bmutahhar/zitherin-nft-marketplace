import React, { useState } from "react";
import * as Styled from "./styles";
import { faqData } from "../../utils/constants/faq";

const LandingFAQ = () => {
  const [expandedItemId, setExpandedItemId] = useState(null);

  const onClickHandler = (id) => {
    if (id === expandedItemId) {
      setExpandedItemId(null);
    } else {
      setExpandedItemId(id);
    }
  };
  return (
    <Styled.SectionFour>
      <Styled.HeroContainerTwo>
        <Styled.HeroTitleMedium>
          Frequently Asked Questions
        </Styled.HeroTitleMedium>
      </Styled.HeroContainerTwo>
      <Styled.FAQContainer>
        {faqData.map((item) => (
          <Styled.Accordion
            key={item.id}
            onClick={() => onClickHandler(item.id)}
          >
            <Styled.Question>
              <Styled.QuestionText>{item.question}</Styled.QuestionText>
              <Styled.QuestionIcon>{item.icon}</Styled.QuestionIcon>
            </Styled.Question>
            {expandedItemId === item.id && (
              <Styled.Answer>{item.answer}</Styled.Answer>
            )}
          </Styled.Accordion>
        ))}
      </Styled.FAQContainer>
    </Styled.SectionFour>
  );
};

export default LandingFAQ;
