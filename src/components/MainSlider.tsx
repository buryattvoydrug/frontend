import React from 'react'
import { Autoplay, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SLIDER_QUERY from '../queries/banners/slider';
import { ISlidersResponse } from '../types';
import Query from './Query';
import "swiper/css/scrollbar";
export default function MainSlider() {
  return (
    <>
    
        <Query query={SLIDER_QUERY} id={null}>
        {({data: { sliders } }: ISlidersResponse) => {
          
          return (
            <>
            <div className="col-lg-7 col-xl-8">
              <div className="d">
                  <div className="">
                  <Swiper
                                    scrollbar
                                    slidesPerView={1}
                                    spaceBetween={0}
                                    // loop={true}
                                    autoplay={{
                                      delay: 3000,
                                      disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay,Scrollbar]}
                                  >
                      <>
                      {sliders.data.map((slider) => {
                        const imageUrl = process.env.REACT_APP_BACKEND_URL +
                        slider.attributes.image.data.attributes.url
                        return (
                          <>
                              <SwiperSlide className=" banner banner-fixed intro-slide intro-slide1 br-sm"
                                  style={{backgroundImage: 'url('+ imageUrl +')', backgroundColor: "#3D434B"}}>
                                  <div className="banner-content">
                                      <div>
                                      <h1>{slider.attributes.title}</h1>
                                          <h5 className="banner-subtitle text-uppercase text-primary font-weight-bolder ls-25">
                                          </h5>
                                          <h3 className="banner-title text-capitalize text-white ls-25 lh-1 mb-3">
                                          </h3>
                                      </div>
                                  </div>
                              </SwiperSlide>
                          </>
                        );
                    })}</>
                    </Swiper>
                  </div>
                </div>
              </div>
            </>
          );
        }}
      </Query>
                                
    </>
  )
}
