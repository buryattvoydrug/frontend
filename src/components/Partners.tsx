import React from 'react'
import PARTNERS_QUERY from '../queries/banners/partners';
import { IPartnersResponse } from '../types';
import Query from './Query';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Partners() {
  return (
    <>
    <div className="container mt-3 mb-1">
                    <h2 className="title text-left mb-5 appear-animate">Наши партнеры</h2>
                        <Query query={PARTNERS_QUERY} id={null}>
                              {({data: { partners } }: IPartnersResponse) => {
                                return (
                                  <>
                                  <Swiper
                                    slidesPerView={4}
                                    spaceBetween={0}
                                    loop={true}
                                    autoplay={{
                                      delay: 1400,
                                      disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay]}
                                    breakpoints={{
                                      "@0.00": {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                      },
                                      "@0.75": {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                      },
                                      "@1.00": {
                                        slidesPerView: 3,
                                        spaceBetween: 40,
                                      },
                                      "@1.50": {
                                        slidesPerView: 4,
                                        spaceBetween: 50,
                                      },
                                    }}
                                    
                                    style={{width: "100%", padding: "0px 0 20px"}}
                                  >
                                  {
                                    partners.data.map((partner) => {
                                      const imageUrl = process.env.REACT_APP_BACKEND_URL +
                                      partner.attributes.image.data.attributes.url
                                      return (
                                        <>
                                        <SwiperSlide style={{width: "25%"}}>
                                          <figure className="brand-wrapper">
                                              <img src={imageUrl} alt="Brand" style={{width: "90%", height: '150px', objectFit: 'contain', padding: '0 5%'}}/>
                                          </figure>
                                        </SwiperSlide>
                                        </>
                                      );
                                    })
                                  }
                                  </Swiper>
                                  </>
                                );
                              }}
                          </Query>
                </div>
    </>
  )
}
