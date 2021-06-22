import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello...
      </SectionTitle>
      <SectionText>
        Below are my lksdjd, inwiill edit this later to add some interesting tuff I am just testing out some shit
      </SectionText>
      <Button onclick={() => window.location = 'https://google.com'}>A Button</Button>
    </LeftSection>
  </Section>
);

export default Hero;