import React from 'react';
import Blog from '../../Blog/Blog';
import Footer from '../../Shared/Footer/Footer';
import HomeBanner from '../HomeBanner/HomeBanner';
import NewArrival from '../NewArrival/NewArrival';
import Review from '../Review/Review';
import Services from '../Services/Services';
import TodaysDeal from '../TodaysDeal.js/TodaysDeal';
import Upcoming from '../Upcoming/Upcoming';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <Services />
            <Upcoming />
            <TodaysDeal />
            <NewArrival />
            {/* <Review /> */}
            <Blog />
            <Footer />
        </div>
    );
};

export default Home;