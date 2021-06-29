import React from "react";

import {
    Section,
    SectionText,
    SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Hello...
            </SectionTitle>
            <SectionText>
                I am a full-stack software engineer dedicated to solving complex
                real-world problems from various businesses in the most
                effective and efficient way.
            </SectionText>
            <Button
                onclick={() => {
                    window.location.href =
                        "https://docs.google.com/document/d/1sxtvlYvbD8fOyw4m2aW8bXFLpbRJMMXFCIT0A6n5SUw/edit?usp=sharing";
                }}
            >
                Resume
            </Button>
        </LeftSection>
    </Section>
);

export default Hero;
