import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";

const CSSHomePageComponent1 = styled.div`
  background: url("/images/bg/bg-home-page-component-1.jpg") no-repeat top right;
  background-size: contain;
  padding: 50px 0;
`

const CSSHomePageComponent1Info = styled.div`
  max-width: 520px;
  padding-bottom: 100px;


  ul {
    color: var(--text);
    font-size: 43px;
    font-style: normal;
    font-weight: 400;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    gap: 25px;
    line-height: 1;
    padding: 50px 0 50px 50px;


    li::marker {
      color: var(--main-1);
    }

    li:last-child {
      position: relative;

      span {
        position: absolute;
        top: 0;
        left: -42px;
        width: 100%;
        text-transform: lowercase;
        text-align: right;
        font-size: 20px;
        line-height: 2;
        text-indent: 218px;
        display: block;
        max-width: 400px;
      }
    }
  }
`

const CSSHomePageComponent1Text = styled.div`
  background: #FFE141;
  padding: 10px 60px;
  color: var(--text);
  text-align: center;
  font-size: 43px;
  font-style: normal;
  font-weight: 400;
  line-height: 85px;
`


const HomePageComponent1 = () => {
    const { t, i18n } = useTranslation();

    return (
        <CSSHomePageComponent1>
            <div className='container'>
                <CSSHomePageComponent1Info>
                    <CSSHomePageComponent1Text>
                        {t('homePage.block1-tile')}
                    </CSSHomePageComponent1Text>
                    <ul>
                        <li>{t('homePage.de')}</li>
                        <li>{t('homePage.fr')}</li>
                        <li>{t('homePage.md')}</li>
                        <li>{t('homePage.ch')}</li>
                        <li>{t('homePage.jp')}</li>
                        <li>{t('homePage.uk')}</li>
                        <li>{t('homePage.bg')}</li>
                        <li>{t('homePage.gr')}</li>
                        <li>{t('homePage.ar')}</li>
                        <li>{t('homePage.br')}</li>
                        <li>{t('homePage.ag')}</li>
                    </ul>

                </CSSHomePageComponent1Info>
            </div>
        </CSSHomePageComponent1>
    );
};

export default HomePageComponent1;