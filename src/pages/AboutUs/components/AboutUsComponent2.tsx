import React from 'react';
import styled from "styled-components";
import {Grid} from "@mui/material";
import {useTranslation} from "react-i18next";

const CSSAboutUsComponent2 = styled.div`
    padding: 125px 0 180px;
  
  .text {
    font-size: 43px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    height: 100%;

    @media only screen and (max-width: 993px) {
      font-size: 33px;
      line-height: 60px;
    }
    
    &:after {
      content: "";
      display: block;
      width: 75px;
      height: 75px;
      border-radius: 50%;
      background: var(--main-1);
    }
  }
  
  img {
    display: block;
    margin: 0 auto;
    max-width: 540px;
    width: 100%;
  }
`


const AboutUsComponent2 = () => {
    const { t, i18n } = useTranslation();

    return (
        <CSSAboutUsComponent2>
            <div className="container">
                <Grid container spacing={{xs: 10, md: 15}}>
                    <Grid item xs={12} sm={12} md={6}>
                        <img src="/images/about-us-img1.jpg" alt=""/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className="text">
                            {t('about-us.component2-1')}
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <div className="text">
                            {t('about-us.component2-2')}
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <img src="/images/about-us-img2.jpg" alt=""/>
                    </Grid>
                </Grid>
            </div>
        </CSSAboutUsComponent2>
    );
};

export default AboutUsComponent2;