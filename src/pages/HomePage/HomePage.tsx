import React from 'react';
import Intro from "../../components/Intro/Intro";
import HomePageComponent1 from "./components/HomePageComponent1";
import RedInfo from "../../components/RedInfo/RedInfo";
import HomePageComponent2 from "./components/HomePageComponent2";
import PreFooterComponent from "./components/PreFooterComponent";
import {useTranslation} from "react-i18next";

const HomePage = () => {
    const { t, i18n } = useTranslation();
    const introSettings = {
        title: t('homePage.h1'),
        subtitle: t('homePage.subtitle'),
        image: '/images/intro/intro-homepage.jpg',
        center: false
    }

    const redInfoText = t('homePage.redInfoText')
    return (
        <>
            <Intro settings = {introSettings} />
            <HomePageComponent1 />
            <RedInfo text={redInfoText}/>
            <HomePageComponent2 />
            <PreFooterComponent />
        </>
    );
};

export default HomePage;