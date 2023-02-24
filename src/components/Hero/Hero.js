import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Highly motivated and passionate Software Developer with 3+ years of
          hands-on experience designing, developing and implementing
          applications and solutions using modern web & mobile technologies.
          Seeking to leverage broad development experience and hands-on
          technical expertise to build cutting-edge applications and solutions
          leveraging modern web & mobile technologies.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
