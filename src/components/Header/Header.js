import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillGitlab, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
    Container,
    Div1,
    Div2,
    Div3,
    NavLink,
    SocialIcons,
    Span,
} from "./HeaderStyles";

const Header = () => (
    <Container>
        <Div1>
            <Link href="/">
                <a
                    style={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                    }}
                >
                    <Span><DiCssdeck size="3rem" /></Span>
                    <Span>Portfolio</Span>
                </a>
            </Link>
        </Div1>
        <Div2>
            <li>
                <Link href="#projects">
                    <NavLink>Projects</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#tech">
                    <NavLink>Technologies</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#about">
                    <NavLink>About</NavLink>
                </Link>
            </li>
        </Div2>
        <Div3>
          <SocialIcons href="https://github.com/TeamoreA">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://gitlab.slade360emr.com/tim">
            <AiFillGitlab size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/timothy-kamau/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </Div3>
    </Container>
);

export default Header;
