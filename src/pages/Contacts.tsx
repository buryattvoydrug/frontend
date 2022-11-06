import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Query from '../components/Query';
import FOOTER_QUERY from '../queries/pages/footer';
import { IFooterResponse } from '../types';

export default function Contacts() {
  let { slug } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0)
    }, [])
  return (
    <>
      <main className="">
        <div className="page-header">
            <div className="container">
                <h1 className="page-title mb-0">Контакты</h1>
            </div>
        </div>

        <nav className="breadcrumb-nav mb-10 pb-1">
            <div className="container">
                <ul className="breadcrumb">
                    <li><a href="/">Главная</a></li>
                    <li>Контакты</li>
                </ul>
            </div>
        </nav>

        <div className="page-content contact-us">
            <div className="container">
                <section className="content-title-section mb-10">
                    <h3 className="title title-center mb-3">Контактная информация
                    </h3>
                </section>

                <section className="contact-information-section mb-10">
                    <div className="  ">
                        <div className="">
                            <Query query={FOOTER_QUERY} slug={slug}>
                            {({ data: { footer } }: IFooterResponse) => {
                            const data = footer.data.attributes;
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
                                    
                                    style={{width: "100%", padding: "0px 0 20px"}}
                                  >
                                        <SwiperSlide style={{width: "25%"}} className="swiper-slide icon-box text-center icon-box-primary">
                                            <span className="icon-box-icon icon-email">
                                                <i className="w-icon-envelop-closed"></i>
                                            </span>
                                            <div className="icon-box-content">
                                                <h4 className="icon-box-title">E-mail адрес</h4>
                                                <a href={"mailto:" + data.email}>{data.email}</a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide style={{width: "25%"}} className="swiper-slide icon-box text-center icon-box-primary">
                                            <span className="icon-box-icon icon-headphone">
                                                <i className="w-icon-headphone"></i>
                                            </span>
                                            <div className="icon-box-content">
                                                <h4 className="icon-box-title">Номер телефона</h4>
                                                <a href={"tel:" + data.Phone1} className="widget-about-call"> {data.Phone1}</a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide style={{width: "25%"}} className="swiper-slide icon-box text-center icon-box-primary">
                                            <span className="icon-box-icon icon-headphone">
                                                <i className="w-icon-headphone"></i>
                                            </span>
                                            <div className="icon-box-content">
                                                <h4 className="icon-box-title">Номер телефона</h4>
                                                <a href={"tel:" + data.Phone2} className="widget-about-call"> {data.Phone2}</a>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide style={{width: "25%"}} className="swiper-slide icon-box text-center icon-box-primary">
                                            <span className="icon-box-icon icon-headphone">
                                                <i className="w-icon-headphone"></i>
                                            </span>
                                            <div className="icon-box-content">
                                                <h4 className="icon-box-title">Номер телефона</h4>
                                                <a href={"tel:" + data.Phone3} className="widget-about-call"> {data.Phone3}</a>
                                            </div> 
                                        </SwiperSlide>
                                  </Swiper>
                            
                            </>
                            );
                            }}
                        </Query>
                        </div>
                    </div>
                </section>
                <hr className="divider mb-10 pb-1" id="zayavka" />

                <section className="contact-section" >
                    <div className="row gutter-lg pb-3">
                        <div className="col-lg-6 mb-8">
                            <h4 className="title mb-3">Отправить заявку на обратный звонок</h4>
                            <form className="contact_form form contact-us-form" action="https://formsubmit.co/e0893686e5ae29d89a07ee75961fc4fc" method="POST">
                                <div className="form-group">
                                    <label htmlFor="username">Ваше Имя</label>
                                    <input type="text" id="username" name="Имя пользователя" className="name form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email_1">Ваш Email</label>
                                    <input type="email" id="email_1" name="Электронный аддресс" className="email form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Ваш Номер телефона</label>
                                    <input type="phone" id="phone" name="Номер телефона" className="phone form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Ваше сообщение</label>
                                    <textarea id="message" name="Сообщение" cols={35} rows={5}
                                        className="msg form-control"></textarea>
                                </div>
                                <button type="submit" className="btn btn-dark btn-rounded">Отправить</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </main>

    </>
  )
}
