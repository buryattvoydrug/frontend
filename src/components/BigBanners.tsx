import React from 'react'
import { Link, useParams } from 'react-router-dom'
import BANNER_QUERY from '../queries/pages/banner';
import { IBigBannerResponse } from '../types';
import Query from './Query';

export default function BigBanners() {
  let { slug } = useParams();
  return (
    <>
    <Query query={BANNER_QUERY} slug={slug}>
            {({ data: { banner } }: IBigBannerResponse) => {
                const data = banner.data.attributes;
                return (
                  <div className={'category-banner-wrapper row grid'}>
                  <div className="grid-item col-lg-6 col-md-8 col-sm-12 height-x2">
                      <div className="banner banner-fixed br-sm banner-lg">
                          <figure>
                              <img src={process.env.REACT_APP_BACKEND_URL +
                                        data.image1.data.attributes.url} alt="Banner" width="640" />
                          </figure>
                          <div className="banner-content y-50">
                              <h3 className="banner-title text-white text ls-25 mb-0" style={{marginTop: "20px"}} >
                              {data.title_1}
                              </h3> 
                              <p className="text-white"><strong className="text-secondary"></strong></p>
                              <br /> <br /><br /><Link to={data.link1} className="btn btn btn-outline btn-rounded btn-icon-right" style={{marginTop: '0px'}}>
                              Перейти<i className="w-icon-long-arrow-right"></i></Link>
                          </div>
                      </div> 
                  </div>
                  <div className="grid-item col-lg-3 col-md-4 col-sm-12 height-x3">
                  <div className="" style={{height: '220px', margin:'10px 0 0'}}>
                      <div className="banner banner-fixed br-sm banner-sm">
                          <figure>
                              <img src={process.env.REACT_APP_BACKEND_URL +
                                        data.image2.data.attributes.url} alt="Banner" width="310" height="220"
                                  style={{backgroundColor: "#F2F2F2"}} />
                          </figure>
                          <div className="banner-content y-50 pt-2">
                              <h5 className="banner-subtitle font-weight-bold text-capitalize mb-4 ls-25 text-white">
                                {data.title2}
                              </h5>
                              <h3 className="banner-title text-uppercase mb-0 text-white">{data.text2}</h3>
                              <div className="banner-price-info text-secondary text-capitalize ls-25">{data.colortext2}</div>
                              <Link to={data.link2} className="btn btn-white btn-link btn-underline btn-icon-right">
                                  Перейти<i className="w-icon-long-arrow-right"></i>
                              </Link>
                          </div>
                      </div>
                    </div>
                    <div className="" style={{height: '220px', margin:'10px 0 0'}}>
                      <div className="banner banner-fixed br-sm banner-sm" >
                          <figure>
                              <img src={process.env.REACT_APP_BACKEND_URL +
                                        data.image3.data.attributes.url} alt="Banner" width="310" height="220"
                                  style={{backgroundColor: "#414A59"}} />
                          </figure>
                          <div className="banner-content y-50 pt-2">
                              <h5 className="banner-subtitle text-white font-weight-bold  mb-2 ls-25">
                                   {data.title3}</h5>
                              <h3 className="banner-title text-white text-uppercase mb-0 ">{data.text3}</h3>
                              <div className="banner-price-info text-primary text-capitalize ls-25">{data.colortext3}</div>
                              <Link to={data.link3} className="btn btn-white btn-link btn-rounded btn-icon-right" style={{marginTop: "0px"}}>
                                  Перейти<i className="w-icon-long-arrow-right"></i>
                              </Link>
                          </div>
                      </div>
                  </div>
                  </div>
                  
                    <div className="grid-item col-lg-3 col-md-12 col-sm-12 height-x2">
                        <div className="banner banner-fixed br-sm banner-md">
                          <figure>
                              <img src={process.env.REACT_APP_BACKEND_URL +
                                        data.image4.data.attributes.url} alt="Banner" width="310" height="220"
                                  style={{backgroundColor: "#3D4753"}} />
                          </figure>
                          <div className="banner-content x-50 w-100 text-center">
                              <div className="banner-price-info text-dark font-weight-bolder text-uppercase ls-25" style={{lineHeight: '110%'}}>{data.title4}</div>
                              <h3 className="banner-title text-uppercase text-dark">{data.text4}</h3>
                              <Link to={data.link4} className="btn btn-dark btn-outline btn-rounded btn-icon-right">
                                  Перейти<i className="w-icon-long-arrow-right"></i>
                              </Link>
                          </div>
                      </div>
                  </div>
                  
                  <div className="grid-space col-1"></div>
                </div>
                    );
                }}
              </Query>
    
    </>
  )
}
