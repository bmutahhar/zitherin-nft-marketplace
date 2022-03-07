import React from "react";
import * as Styled from "./styles";
import { socials } from "../../utils/constants/social";

const LandingSocial = () => {
  return (
    <Styled.SectionFive>
      <Styled.HeroContainerTwo>
        <Styled.HeroTitleMedium>Join us on</Styled.HeroTitleMedium>
      </Styled.HeroContainerTwo>
      <Styled.Socials>
        {socials.map((item) => (
          <Styled.Social key={item.id}>
            <Styled.SocialIcon>{item.icon}</Styled.SocialIcon>
            <Styled.SocialText>{item.iconName}</Styled.SocialText>
          </Styled.Social>
        ))}
      </Styled.Socials>
    </Styled.SectionFive>
  );
};

export default LandingSocial;
