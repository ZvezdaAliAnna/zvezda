import React from 'react';
import styled from "styled-components";
import {Grid} from "@mui/material";
import {useTranslation} from "react-i18next";


const CSSPartnership = styled.div`
  background: url("/images/bg/bg-partnership.jpg") center no-repeat;
  background-size: cover;
  height: 100%;
  color: var(--white);
  padding: 200px 0 100px;

  h1 {
    font-size: 43px;
    font-weight: 400;
    text-transform: none;
    margin-bottom: 50px;
  }
`

const CSSPartnershipText = styled.div`
  margin-bottom: 80px;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 42px;
  position: relative;

  &:before {
    content: '';
    display: block;
    width: 30px;
    height: 30px;
    position: absolute;
    background: var(--main-1);
    border-radius: 50%;
    top: 10px;
    left: -50px;
  }

  &:nth-child(2n+1):before {
    background: var(--main-2);
  }
`

const CSSPartnershipInfo = styled.div`
  border-radius: 30px;
  border: 3px solid var(--main-1);
  background: rgba(0, 0, 0, 0.46);
  padding: 25px;
  max-width: 300px;
  text-align: center;

  .title {
    font-size: 31px;
    font-weight: 400;
    margin-bottom: 37px;
    word-break: break-all;
  }

  .number {
    font-size: 74px;
    font-weight: 400;
  }

  .subtitle {
    font-size: 23px;
    font-weight: 400;
    margin-bottom: 50px;

  }

  .text {
    font-size: 20px;
    font-weight: 400;
  }
`

const Partnership = () => {
    const {t, i18n} = useTranslation();

    return (
        <CSSPartnership>
            <div className="container">
                <Grid container spacing={{xs: 0, sm: 0, md: 30}}>
                    <Grid item xs={12} sm={12} md={6}>
                        <h1>{t('partnership.h1')}</h1>
                        <CSSPartnershipText>
                            {t('partnership.text-1')}
                        </CSSPartnershipText>
                        <CSSPartnershipText>
                            {t('partnership.text-2')}
                        </CSSPartnershipText>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <CSSPartnershipInfo>
                            <div className="title">{t('partnership.title')}</div>
                            <div className="number">1</div>
                            <div className="subtitle">{t('partnership.container')}</div>
                            <div className="text">{t('partnership.title-2')}</div>
                        </CSSPartnershipInfo>
                    </Grid>
                </Grid>
            </div>
        </CSSPartnership>
    );
};

export default Partnership;