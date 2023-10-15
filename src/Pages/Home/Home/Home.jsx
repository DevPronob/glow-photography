import React from 'react';
import Hero from '../Hero/Hero';
import AgencySection from '../AgencySection/AgencySection';
import FeatureItem from '../FeatureItem/FeatureItem';
import Albumn from '../Albumn/Albumn';
import TeamPeople from '../TeamPeople/TeamPeople';
import OurSpecialization from '../OurSpecialization/OurSpecialization';
import OurSuccess from '../OurSuccess/OurSuccess';
import Testomonial from '../Testomonial/Testomonial';
import Blog from '../Blog/Blog';
import Service from '../Service/Service';
import WhyChoose from './WhyChoose/WhyChoose';
import Company from './Company/Company';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AgencySection></AgencySection>
            <Service></Service>
            <FeatureItem></FeatureItem>
            <WhyChoose></WhyChoose>
            <Albumn></Albumn>
            <TeamPeople></TeamPeople>
            <OurSpecialization></OurSpecialization>
            <OurSuccess></OurSuccess>
            <Testomonial></Testomonial>
            <Company></Company>
            <Blog></Blog>
        </div>
    );
}

export default Home;
