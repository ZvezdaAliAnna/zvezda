import React from 'react';
import styled from "styled-components";
import {Grid} from "@mui/material";
import {useTranslation} from "react-i18next";


const CSSHomePageComponent2 = styled.div`
  padding: 110px 0 160px;
`

const CSSHomePageComponent2Image = styled.div`
  text-align: center;
  max-width: 720px;
  width: 100%;
  margin: 0 auto;

  img {
    display: inline-block;
    width: 100%;
  }
`
const CSSHomePageComponent2Text = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  &:before {
    content: '';
    display: block;
    width: 340px;
    height: 340px;
    background: var(--main-1);
    border-radius: 50%;
  }

  .title {
    color: var(--text);
    font-size: 65px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    position: absolute;
    top: 22%;
    left: 0;
    @media only screen and (max-width: 900px) {
      text-align: center;
      font-size: 40px;

    }
  }



`

const HomePageComponent2 = () => {
    const { t, i18n } = useTranslation();

    return (
        <CSSHomePageComponent2>
            <div className="container">
                <Grid container spacing={{xs: 2, md: 3}}>
                    <Grid item xs={12} sm={12} md={7}>
                        <CSSHomePageComponent2Image>
                            <img src="/images/home-page-image.jpg" alt=""/>
                        </CSSHomePageComponent2Image>
                    </Grid>

                    <Grid item xs={12} sm={12} md={5}>
                        <CSSHomePageComponent2Text>
                            <div className="title">
                                {t('homePage.block2-tile')}
                            </div>
                        </CSSHomePageComponent2Text>
                    </Grid>
                </Grid>
            </div>
        </CSSHomePageComponent2>
    );
};

export default HomePageComponent2;