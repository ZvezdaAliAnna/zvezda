import React from 'react';
import styled from "styled-components";
import {Box, useMediaQuery} from "@mui/material";
import {Link} from 'react-router-dom';
import {useTranslation} from "react-i18next";


const CSSFooter = styled.footer`
  background: var(--main-1);
  padding: 15px 0 30px;
  @media only screen and (max-width: 993px) {
    padding: 15px 0;

  }

  a {
    color: var(--text);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
  }

  .title {
    color: var(--text);
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`
const CSSFooterLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    max-width: 260px;
  }

  @media only screen and (max-width: 993px) {
    gap: 30px;
  }
`

const CSSFooterCopyright = styled.div`
  color: var(--text);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: auto 0 0 0;
  @media only screen and (max-width: 993px) {
    margin: 15px 0 0 0;
  }

`

const CSSFooterBox = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  @media only screen and (max-width: 993px) {
    flex-direction: column;

  }
`

const Footer = () => {
    const matches = useMediaQuery("(min-width: 1100px)");
    const {t, i18n} = useTranslation();

    return (
        <CSSFooter>
            <div className="container">
                <CSSFooterBox>
                    <CSSFooterLogo>
                        <img src="/images/logo-footer.svg" alt=""/>
                        {matches && (<CSSFooterCopyright>ZVEZDA 2023. All rights reserved</CSSFooterCopyright>)}
                    </CSSFooterLogo>

                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px'}} className={""}>
                        <div className='title'>{t('layout.more')}</div>
                        <Link to='/about'>{t('layout.about')}</Link>
                        <Link to='/catalog'>{t('layout.catalog')}</Link>
                        <Link to='/partnership'>{t('layout.partnership')}</Link>
                    </Box>

                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px'}} className={""}>
                        <div className='title'>{t('layout.contacts')}</div>
                        <a href='tel:+380958176479'>+380958176479 (Viber, Telegram, WhatsApp)</a>
                        <a href='tel:+201033233772'>+201033233772 (WhatsApp)</a>
                        <a href='mailto:zvezda23@mail.com'>zvezda23@mail.com</a>
                        <a target="_blank" href='https://goo.gl/maps/LMTstBGpEWeZiQAy7'>First 6th of October, Giza Governorate 3232222, Egypt</a>
                        {!matches && (<CSSFooterCopyright>ZVEZDA 2023. All rights reserved</CSSFooterCopyright>)}

                    </Box>
                </CSSFooterBox>
            </div>
        </CSSFooter>
    );
};

export default Footer;