import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";

const CSSAboutUsComponent1 = styled.div`
  padding: 30px 0 360px;
  background-image: url("/images/about-us-bg-2.jpg");
  background-position: center 300px;
  background-repeat: no-repeat;

  .title {
    font-size: 65px;
    font-style: normal;
    font-weight: 400;
    line-height: 101px;
    text-align: center;
    margin: 0 auto;

    @media only screen and (max-width: 993px) {
      font-size: 33px;
      line-height: 60px;

    }
  }
`

const AboutUsComponent1 = () => {
    const { t, i18n } = useTranslation();

    return (
        <CSSAboutUsComponent1>
            <div className="container">
                <div className="title">{t('about-us.component1')}</div>
            </div>
        </CSSAboutUsComponent1>
    );
};

export default AboutUsComponent1;