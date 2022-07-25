import React from 'react';
import reviewPic from '../../../images/pic-5.png'

const Review = () => {
    return (
        <section className="reviews" id="reviews">

    <h1 className="heading"> <span>client's reviews</span> </h1>

    <div className="swiper reviews-slider">

        <div className="swiper-wrapper">

            <div className="swiper-slide box">
                <img src={reviewPic} alt="" />
                <h3>john deo</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>

            <div className="swiper-slide box">
                <img src={reviewPic} alt="" />
                <h3>john deo</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>

            <div className="swiper-slide box">
                <img src={reviewPic} alt="" />
                <h3>john deo</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>
          

           

           

        </div>

    </div>
    
</section>
    );
};

export default Review;