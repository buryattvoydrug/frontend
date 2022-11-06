import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Query from './Query'
import FOOTER_QUERY from '../queries/pages/footer';
import {IFooterResponse} from '../types';

export default function Footer() {
  let { slug } = useParams();
  return (
    
            <footer className="footer footer appear-animate" data-animation-options="{
                'name': 'fadeIn'
            }">
          <div className="footer-newsletter bg-primary pt-6 pb-6">
          <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-xl-5 col-lg-6">
                    <div className="icon-box icon-box-side text-white">
                        <div className="icon-box-icon d-inline-flex">
                            <i className="w-icon-envelop3"></i>
                        </div>
                        <div className="icon-box-content">
                            <h4 className="icon-box-title text-white text-uppercase mb-0">Подпишитесь на наши обновления
                            </h4>
                            <p className="text-white">Будьте в курсе последних обновлений, скидок и распродаж.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-6 col-md-9 mt-4 mt-lg-0 ">
                    <form action="#" method="get" className="input-wrapper input-wrapper-inline input-wrapper-rounded">
                        <input type="email" className="form-control mr-2 bg-white" name="email" id="email"
                            placeholder="Ваш электронный адресс" />
                        <button className="btn btn-dark btn-rounded" type="submit">Подписаться<i
                                className="w-icon-long-arrow-right"></i></button>
                    </form>
                </div>
            </div>
          </div>
          </div>
          <div className="container">
          <div className="footer-top">
          <Query query={FOOTER_QUERY} slug={slug}>
        {({ data: { footer } }: IFooterResponse) => {
            const data = footer.data.attributes;
          return (
            <div className="row">
                <div className="col-lg-2 col-sm-6">
                    <div className="widget widget-about">
                        <div className="widget-body">
                            <a href={"mailto:" + data.email}>Наш email :</a>
                            <br />
                            <a href={"mailto:" + data.email}>{data.email}</a>
                            <p className="widget-about-title">Есть вопросы? <br /> Звоните нам 24/7</p>
                            <a href={"tel:" + data.Phone1} className="widget-about-call"> {data.Phone1}</a>
                            <a href={"tel:" + data.Phone2} className="widget-about-call"> {data.Phone2}</a>
                            <a href={"tel:" + data.Phone3} className="widget-about-call"> {data.Phone3}</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-sm-6">
                    <div className="widget">
                        <h3 className="widget-title">Компания</h3>
                        <ul className="widget-body">
                            <li><Link to="about-us">О компании</Link></li>
                            <li><Link to="about-us">Наши сотрудники</Link></li>
                            <li><Link to="about-us">Карьера</Link></li>
                            <li><Link to="contact-us">Связаться с нами</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="widget">
                        <ul className="widget-body">
                            <h3 className="widget-title">Реквизиты компании</h3>
                            <h4>{data.CompanyName}</h4>
                            <li>{data.OGRN}</li>
                            <li>{data.INN}</li>
                            <li>{data.KPP}</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="widget">
                        <h3 className="widget-title">Адрес Обособленного <br /> подразделения:</h3>
                        <p>{data.AdresObosoblennogoPodrazdeleniya}</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="widget">
                        <h3 className="widget-title">Адрес <br /> магазина-склада</h3>
                        <h6>Почтовый индекс: {data.AdresSklada1Index}</h6>
                        <p>{data.AdresSklada1Adres}</p>
                        <h6>Почтовый индекс: {data.AdresSklada2Index}</h6>
                        <p>{data.AdresSklada2Adres}</p>
                    </div>
                </div>
            </div>
            );
        }}
      </Query>
          </div>
          <div className="footer-bottom">
            <div className="footer-left">
                <p className="copyright">Copyright © 2022 by buryattvoydrug.</p>
            </div>
            <div className="footer-right">
                {/* <a href="https://www.liveinternet.ru/click" target="_blank"><img id="licntF516"
                        width="88" height="15" style="border:0" title="LiveInternet: показано число посетителей за сегодня"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAIBTAA7" alt="" /></a>
                <script>(function (d, s) {
                        d.getElementById("licntF516").src =
                            "https://counter.yadro.ru/hit?t26.6;r" + escape(d.referrer) +
                            ((typeof (s) == "undefined") ? "" : ";s" + s.width + "*" + s.height + "*" +
                                (s.colorDepth ? s.colorDepth : s.pixelDepth)) + ";u" + escape(d.URL) +
                            ";h" + escape(d.title.substring(0, 150)) + ";" + Math.random()
                    })
                        (document, screen)</script> */}
            </div>
          </div>
          </div>
          </footer>
          
    
  )
}
