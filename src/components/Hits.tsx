import React from 'react'
import { Link } from 'react-router-dom'
import HITS_QUERY from '../queries/banners/hits';
import { IHitsResponse } from '../types';
import Query from './Query';

export default function Hits() {
  return (
    <>
    <div className="col-lg-5 col-xl-4 right-sidebar sidebar-fixed main">
        <div className="sidebar-overlay" onClick={()=>document.body.classList.remove('right-sidebar-active')} >
            <Link className="sidebar-close" to="/"><i className="close-icon"></i></Link>
        </div>
        <div onClick={()=>document.body.classList.add('right-sidebar-active')} className="sidebar-toggle"><i className="fas fa-chevron-left"></i></div>
        <div className="sidebar-content h-100" style={{left:'auto'}}>
            <div className="title-link-wrapper mb-0">
                <h4 className="title title-link">Хиты продаж</h4>
            </div>
            <div className="widget widget-products">
            <Query query={HITS_QUERY} id={null}>
                {({data: { hits } }: IHitsResponse) => {
                  return (
                    hits.data.map((hit) => {
                      const imageUrl = process.env.REACT_APP_BACKEND_URL +
                      hit.attributes.image.data.attributes.url
                      return (
                        <>
                        <div className="product product-widget pt-0">
                              <figure className="product-media">
                                  <Link to="shop-stroi-material" onClick={()=>document.body.classList.remove('right-sidebar-active')}>
                                      <img src={imageUrl}
                                          alt="Product" width="300" height="338" />
                                  </Link>
                              </figure>
                              <div className="product-details">
                                  <h4 className="product-name">
                                      <Link to="shop-stroi-material" onClick={()=>document.body.classList.remove('right-sidebar-active')}>{hit.attributes.title}</Link>
                                  </h4>
                                  <div className="product-price">
                                      <ins className="new-price">{hit.attributes.price}₽</ins>
                                  </div>
                              </div>
                          </div>
                        </>
                      );
                    })
                  );
                }}
              </Query>
            </div>
        </div>
    </div>
    </>
  )
}
