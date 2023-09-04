import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";


const CSSPreFooter = styled.div`
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: var(--white);
  background-image: url("/images/bg/bg-pre-footer.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  border: 11px solid var(--main-2);
  border-left: none;
  border-right: none;
  padding: 15px;
  @media only screen and (max-width: 900px) {
    height: 600px;

  }

  .title {
    font-size: 56px;
    font-style: normal;
    font-weight: 400;
    line-height: 69px;
    max-width: 810px;

    @media only screen and (max-width: 900px) {
      font-size: 30px;
    }
  }

  .btn-catalog {
    margin-top: 60px;
    border-radius: 50px;
    border: 5px solid var(--main-1);
    padding: 25px 65px;
    color: var(--main-1);
    font-size: 27px;
    font-style: normal;
    font-weight: 500;
    line-height: 39px;
    text-transform: uppercase;
    background: rgba(217, 217, 217, 0.00);
    text-decoration: none;
    display: block;
    transition: var(--transition);

    @media only screen and (max-width: 900px) {
      font-size: 20px;
      line-height: 30px;
      padding: 15px 35px;

    }

    &:hover {
      background: var(--main-1);
      color: var(--text);
    }
  }
`

const PreFooterComponent = () => {
    const {t, i18n} = useTranslation();

    return (
        <CSSPreFooter>
            <div className="title">
                {t('homePage.prefooter-title')}
            </div>
            <Link to='/catalog' className="btn-catalog">{t('homePage.tocatalog')}</Link>
        </CSSPreFooter>
    );
};

export default PreFooterComponent;