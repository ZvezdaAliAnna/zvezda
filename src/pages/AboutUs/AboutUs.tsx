import React from 'react';
import Intro from "../../components/Intro/Intro";
import RedInfo from "../../components/RedInfo/RedInfo";
import AboutUsComponent1 from "./components/AboutUsComponent1";
import AboutUsComponent2 from "./components/AboutUsComponent2";
import {useTranslation} from "react-i18next";

const AboutUs = () => {
    const { t, i18n } = useTranslation();
    const introSettings = {
        title: t('about-us.h1'),
        subtitle: "",
        image: '/images/intro/intro-about.jpg',
        center: true
    }
    return (
        <>
            <Intro settings={introSettings}/>
            <AboutUsComponent1/>
            <RedInfo text={t('about-us.red-info')}/>
            <AboutUsComponent2/>
        </>
    );
};

export default AboutUs;