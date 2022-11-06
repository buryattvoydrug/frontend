import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import FOOTER_QUERY from '../queries/pages/footer';
import HEADER_QUERY from '../queries/pages/header';
import CATEGORIES_QUERY from '../queries/products/categories';
import { ICategotiesResponse, IHeaderResponse } from '../types';
import Menu from './Menu';
import Query from './Query';

export default function Header(prop: any) {
  let { slug } = useParams();

    const [sticky, setSticky] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', () => handleScroll);
        };
      }, []);
    
      const handleScroll = () => {
        const rec = headerRef?.current?.getBoundingClientRect().top  ?? 1;
         setSticky(rec <= 0);
      };

    const [search, setSearch] = useState('');

    function handleInputChange(value:string) {
        setSearch(value);
        localStorage.setItem('search', value);
        
    }
  return (
    <>
    <header className="header header-border">
        <div className="header-middle">
            <div className="container">
                <div className="header-left mr-md-4">
                    <div className="mobile-menu-toggle  w-icon-hamburger" aria-label="menu-toggle"
                    onClick={()=>document.body.classList.add('mmenu-active')} >
                    </div>
                    <Link to="/" className="logo ml-lg-0">
                        <div style={{display: "flex", height: "100px"}}>
                            <img src="/assets/images/logo/LOGO ALL&TIMA.jpg" style={{height: "100%"}} />
                            <h3 style={{margin:"10px 0px 0px 0px", color:"#ff0000"}}></h3>
                        </div>
                        
                    </Link>
                    <div
                        className="header-search hs-expanded hs-round d-none d-md-flex input-wrapper">
                        <input type="text" className="form-control" placeholder="Поиск"
                            required value={search} onChange={(event)=>handleInputChange(event.currentTarget.value)}/>
                        <Link to="/shop-stroi-material" className="btn btn-search" ><i className="w-icon-search"></i>
                        </Link>
                    </div>
                </div>
            <div className="header-right ml-4">
          <Query query={HEADER_QUERY} slug={slug}>
            {({ data: { header } }: IHeaderResponse) => {
            const data = header.data.attributes;
          return (
                <>
                <HashLink to="contact-us#zayavka"> <button className="btn" style={{marginRight: '20px'}}>Оставить заявку</button></HashLink>
                <div className="header-call d-xs-show d-lg-flex align-items-center">
                    <Link to="tel:+7(911)344-09-22" className="w-icon-call"></Link>
                    <div className="call-info d-xl-show">
                        <h4 className="chat font-weight-normal font-size-md text-normal ls-normal text-light mb-0">
                            <Link to="mailto:altima-group@yandex.ru" className="">Связаться с нами</Link>:
                        </h4>
                        <a href={"tel:" + data.Phone} className="phone-number ls-50"> {data.Phone}  </a>
                    </div>
                </div>
                <div className="call-info d-xl-show">
                    <h4 className="chat font-weight-normal font-size-md text-normal ls-normal text-light mb-0">
                        <Link to={"mailto:" + data.Mail} className="">Наш email</Link>:
                    </h4>
                    <a href={"mailto:" + data.Mail} className="">{data.Mail}</a>
                </div>
                </>
                 );
                }}
              </Query>
            </div>
            </div>
        </div>


        <div className="header-bottom" ref={headerRef} style={{background: '#fff'}} >
        <div className="container">
        <div className="inner-wrap">
            <div className="header-left">
                <div className="dropdown category-dropdown has-border" data-visible="true" >
                    <Link to="/shop-stroi-material" className="category-toggle" role="button"  data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="true" data-display="static" title="Browse Categories">
                        <i className="w-icon-category"></i>
                        <span>Категории</span>
                    </Link>
                    <div className="dropdown-box">
                        <ul className="menu vertical-menu category-menu">
                            <Menu />
                        </ul>
                    </div>
                </div>
                <nav className="main-nav has-border" >
                    <ul className="menu active-underline">
                        <li>
                            <Link to="/">Главная</Link>
                        </li>
                        <li className={prop.active === '/shop-stroi-material'?  "active" : ''}>
                            <Link to="/shop-stroi-material">Магазин</Link>
                        </li>
                        <li className={prop.active === '/contact-us'?  "active" : ''}><Link to="/contact-us">Контакты</Link></li>
                        <li className={prop.active === '/about-us'?  "active" : ''}><Link to="/about-us">О компании</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
        </div>
        </div>
        {sticky && 
        <div className="header-bottom sticky-wrapper"  style={{background: '#fff'}} >
        <div className="container">
        <div className="inner-wrap">
            <div className="header-left">
                <div className="dropdown category-dropdown has-border" data-visible="true" >
                    <Link to="/shop-stroi-material" className="category-toggle" role="button"  data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="true" data-display="static" title="Browse Categories">
                        <i className="w-icon-category"></i>
                        <span>Категории</span>
                    </Link>

                    <div className="dropdown-box">
                        <ul className="menu vertical-menu category-menu">
                            <Menu />
                        </ul>
                    </div>
                </div>
                <nav className="main-nav has-border" >
                    <ul className="menu active-underline">
                        <li>
                            <Link to="/">Главная</Link>
                        </li>
                        <li className={prop.active === '/shop-stroi-material'?  "active" : ''}>
                            <Link to="/shop-stroi-material">Магазин</Link>
                        </li>
                        <li className={prop.active === '/contact-us'?  "active" : ''}><Link to="/contact-us">Контакты</Link></li>
                        <li className={prop.active === '/about-us'?  "active" : ''}><Link to="/about-us">О компании</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
        </div>
        </div>}
        </header>
    </>
  )
}
