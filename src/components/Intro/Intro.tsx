import React from 'react';
import styled, {keyframes} from "styled-components";

const CSSIntroScrollBotAnimation = keyframes`
  from {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: ease-out;
  }
  10% {
    transform: scale(0.91);
    animation-timing-function: ease-in;
  }
  17% {
    transform: scale(0.98);
    animation-timing-function: ease-out;
  }
  33% {
    transform: scale(0.87);
    animation-timing-function: ease-in;
  }
  45% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
`

const CSSIntro = styled.div<{ image: string }>`
  height: 100vh;
  display: flex;
  align-items: center;
  color: var(--white);
  background-image: url("${props => props.image}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`

const CSSIntroSubTitle = styled.div`
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 80px;
  max-width: 850px;
`

const CSSIntroScrollBot = styled.div`
  position: absolute;
  bottom: 50px;
  left: calc(50% - 38px);
  cursor: pointer;
  animation: ${CSSIntroScrollBotAnimation} 1.5s ease-in-out infinite both;
`

const scrollBot = () => {
    const el = document.getElementById('CSSIntro')?.nextSibling;
    if (el) {
        // @ts-ignore
        el.scrollIntoView({ behavior: 'smooth'});
    }
}
const Intro = (props: any) => {
    props = props.settings;

    return (
        <CSSIntro image={props.image} id="CSSIntro">
            <div className="container">

                <h1 className={props.center && 'center'}>{props.title}</h1>
                {
                    props.subtitle &&
                    <CSSIntroSubTitle>{props.subtitle}</CSSIntroSubTitle>
                }

                <CSSIntroScrollBot onClick={scrollBot}>
                    <img src="/images/scroll-bot.svg" alt=""/>
                </CSSIntroScrollBot>
            </div>
        </CSSIntro>
    );
};

export default Intro;