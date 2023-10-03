import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";
import {Box, useMediaQuery} from "@mui/material";
import {useTranslation} from "react-i18next";
import Burger from "./Burger";


const CSSHeaderLogo = styled.div`

`

const CSSHeaderNav = styled.nav`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  > a {
    display: block;
    color: #FFF;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    text-decoration: none;
    padding: 12px 34px;
    transition: var(--transition);

    @media only screen and (max-width: 1100px) {
      padding: 15px 4px;
    }

    @media only screen and (min-width: 1100px) {
      &:hover {
        background: rgba(217, 217, 217, 0.2);
      }
    }


  }
`

const CSSHeader = styled.header`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  padding: 15px 0;
  z-index: 1;

  .CSSCallUs {
    color: var(--white);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-radius: 15px;
    border: 1px solid var(--white);
    padding: 13px 25px;
    cursor: pointer;
    text-decoration: none;
    transition: var(--transition);

    &:hover {
      background: rgba(255, 255, 255, 0.30);
    }
  }

  .MuiBox-root {
    @media only screen and (max-width: 1100px) {
      justify-content: space-between;
    }
  }
`

const CSSHeaderLang = styled.div`
  margin: 0 0 0 auto;

  @media only screen and (max-width: 1100px) {
    margin: 0;
  }

  select {
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    background: transparent;
    color: var(--white);
    border: none !important;
    outline: none !important;
    cursor: pointer;

    option {
      color: var(--text);
    }
  }
`
const CSSHeaderBurger = styled.div`
  display: flex;
  visibility: hidden;
  opacity: 0;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  background: #1c1818;
  height: 100vh;
  padding: 30px;
  gap: 20px;
  width: 290px;
  transition: var(--transition);
  z-index: 1000;


  &.active {
    visibility: visible;
    opacity: 1;
    z-index: 0;
  }

`
const useOnClickOutside = (ref: any, handler: any) => {
    useEffect(() => {
        const listener = (event: any) => {
            if (!ref.current || ref.current.contains(event.target)) return;
            handler(event);
        };
        document.addEventListener("mousedown", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
        };
    }, [ref, handler]);
};

const Header = () => {

    const matches = useMediaQuery("(min-width: 1100px)");

    const {t, i18n} = useTranslation();
    const location = useLocation();
    const onLangChange = (e: any) => {
        const language = e.target.value;
        i18n.changeLanguage(language);
        localStorage.setItem("lng", e.target.value)
    }

    const [open, setOpen] = React.useState(false);
    const node = React.useRef();
    useOnClickOutside(node, () => {
        setOpen(false)
    });

    useEffect(() => {
        setOpen(false)
    }, [location , i18n.language]);

    if (open) {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "visible"
    }

    return (
        <CSSHeader>
            <div className="container">
                <Box sx={{display: 'flex', gap: '30px', alignItems: 'center'}}>
                    <CSSHeaderLogo>
                        <Link to='/'><img src="/images/logo.svg" alt="logo"/></Link>
                    </CSSHeaderLogo>

                    {matches ?
                        (
                            <>
                                <CSSHeaderLang>
                                    <select
                                        defaultValue={localStorage.getItem('lng') || "en"} onChange={onLangChange}
                                    >
                                        <option value="en">English</option>
                                        <option value="ru">Русский</option>
                                        <option value="uk">Українська</option>
                                        <option value="de">Deutsch</option>
                                        <option value="bg">Български</option>
                                    </select>
                                </CSSHeaderLang>

                                <CSSHeaderNav>
                                    <Link to='/about'>{t('layout.about')}</Link>
                                    <Link to='/catalog'>{t('layout.catalog')}</Link>
                                    <Link to='/partnership'>{t('layout.partnership')}</Link>
                                </CSSHeaderNav>

                                <Link className="CSSCallUs" to='/contactus'>
                                    {t('layout.callus')}
                                </Link>
                            </>
                        ) : (<>
                                <Burger open={open} setOpen={setOpen}/>

                                <CSSHeaderBurger className={(open ? 'active' : '')}>
                                    <CSSHeaderLang>
                                        <select
                                            defaultValue={localStorage.getItem('lng') || "en"} onChange={onLangChange}
                                        >
                                            <option value="en">English</option>
                                            <option value="ru">Русский</option>
                                            <option value="uk">Українська</option>
                                            <option value="de">Deutsch</option>
                                            <option value="bg">Български</option>
                                        </select>
                                    </CSSHeaderLang>

                                    <CSSHeaderNav>
                                        <Link to='/about'>{t('layout.about')}</Link>
                                        <Link to='/catalog'>{t('layout.catalog')}</Link>
                                        <Link to='/partnership'>{t('layout.partnership')}</Link>
                                    </CSSHeaderNav>

                                    <Link className="CSSCallUs" to='/contactus'>
                                        {t('layout.callus')}
                                    </Link>
                                </CSSHeaderBurger>
                            </>
                        )
                    }
                </Box>
            </div>
        </CSSHeader>
    );
};

export default Header;