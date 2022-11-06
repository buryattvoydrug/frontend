import React from 'react'
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import PREFERENCES_QUERY from '../queries/banners/preferences';
import { IPreferencesResponse } from '../types';
import Query from './Query';


export default function Preferences() {
  return (
    <>
    <div className=" swiper-theme icon-box-wrapper br-sm bg-white">
                    <div className="">
                          <Query query={PREFERENCES_QUERY} id={null}>
                            {({data: { prefereces } }: IPreferencesResponse) => {
                              return (
                                <>
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={0}
                                    loop={true}
                                    autoplay={{
                                      delay: 3000,
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
                                    
                                    style={{width: "100%"}}
                                  >
                                {prefereces.data.map((preference) => {
                                  return (
                                    <>
                                    <SwiperSlide className="icon-box icon-box-side text-dark preference">
                                        <span className="icon-box-icon">
                                            <i className={preference.attributes.iconName}></i>
                                        </span>
                                        <div className="icon-box-content">
                                            <h4 className="icon-box-title font-weight-bolder ls-normal">{preference.attributes.title}</h4>
                                            <p className="text-default">{preference.attributes.subtitle}</p>
                                        </div>
                                    </SwiperSlide>
                                    </>
                                  );
                                })}
                                </Swiper>
                                </>
                              );
                            }}
                          </Query>
                        
                    </div>
                </div>
    </>
  )
}
