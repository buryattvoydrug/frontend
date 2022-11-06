import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import HEADER_QUERY from '../queries/pages/header';
import { IHeaderResponse } from '../types';
import Menu from './Menu';
import Query from './Query';

export default function MainHeader() {
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
    <header className="header main">
            <div className="header-middle">
                <div className="container">
                    <div className="header-left mr-md-4">
                        <div className="mobile-menu-toggle  w-icon-hamburger" aria-label="menu-toggle" onClick={()=>document.body.classList.add('mmenu-active')}>
                        </div>
                        <Link to="/" className="logo ml-lg-0">
                            <div style={{display: "flex", height: "100px"}}>
                                <img src="/assets/images/logo/LOGO ALL&TIMA.jpg" style={{height: "100%"}} />
                                <h3 style={{margin:"10px 0px 0px 0px", color:"#ff0000"}}></h3>
                            </div>
                            
                        </Link>
                        <nav className="main-nav">
                            <ul className="menu">
                                <li className="active">
                                    <Link className="menus" to="/">Главная</Link>
                                </li>
                                <li >
                                    <Link className="menus" to="shop-stroi-material">Магазин</Link>
                                </li>
                                <li ><Link className="menus" to="contact-us">Контакты</Link></li>
                                <li><Link className="menus" to="about-us">О компании</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-right ml-4">
          <Query query={HEADER_QUERY} slug={slug}>
            {({ data: { header } }: IHeaderResponse) => {
            const data = header.data.attributes;
          return (
                <>
                <Link to="contact-us#zayavka"> <button className="btn">Оставить заявку</button></Link>
                <div className="header-call d-xs-show d-lg-flex align-items-center">
                    <Link to="tel:+7(911)344-09-22" className="w-icon-call"></Link>
                    <div className="call-info d-xl-show">
                        <h4 className="chat font-weight-normal font-size-md text-normal ls-normal text-light mb-0">
                            <Link to="mailto:altima-group@yandex.ru" className="">Связаться с нами</Link>:
                        </h4>
                        <Link to="tel:+7(911)344-09-22" className="phone-number ls-50"> {data.Phone}  </Link>
                    </div>
                </div>
                <div className="call-info d-xl-show">
                    <h4 className="chat font-weight-normal font-size-md text-normal ls-normal text-light mb-0">
                        <Link to="mailto:altima-group@yandex.ru" className="">Наш email</Link>:
                    </h4>
                    <Link to="mailto:altima-group@yandex.ru" className="">{data.Mail}</Link>
                </div>
                </>
                 );
                }}
              </Query>
            </div>
                </div>
            </div>
            {/* <!-- End of Header Middle --> */}
        {/* <!-- КАТЕГОРИИ --> */}
        <div className="header-bottom sticky-content fix-top sticky-header has-dropdown">
                <div className="container">
                    <div className="inner-wrap">
                        <div className="header-left flex-1">
                            <div ref={headerRef} className="dropdown category-dropdown show-dropdown" data-visible="true">
                                <Link to="/" className="category-toggle text-white" role="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="true" data-display="static"
                                    title="Browse Categories">
                                    <i className="w-icon-category"></i>
                                    <span>Категории</span>
                                </Link>

                                <div className="dropdown-box">
                                    <ul className="menu vertical-menu category-menu">
                                        <Menu />
                                    </ul>
                                </div>
                            </div>
                            <div 
                                className="header-search hs-expanded hs-round d-none d-md-flex input-wrapper mr-4 ml-4">
                                <input type="text" className="form-control"
                                    placeholder="Поиск товара" required 
                                    value={search} 
                                    onChange={(event)=>handleInputChange(event.currentTarget.value)}/>
                                <Link to="/shop-stroi-material" className="btn btn-search" ><i className="w-icon-search"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {sticky &&
            <div className="header-bottom sticky-content fix-top sticky-wrapper has-dropdown" style={{zIndex: '1001'}}>
                <div className="container">
                    <div className="inner-wrap">
                        <div className="header-left flex-1">
                            <div className="dropdown category-dropdown " >
                                <Link to="/" className=" text-white">
                                    <i className="w-icon-category"></i>
                                    <span>Категории</span>
                                </Link>

                                <div  className="dropdown-box dropdown category-dropdown" >
                                    <ul className="menu vertical-menu category-menu">
                                        <Menu/>
                                    </ul>
                                </div>
                            </div>
                            <div 
                                className="header-search hs-expanded hs-round d-none d-md-flex input-wrapper mr-4 ml-4">
                                <input type="text" className="form-control"
                                    placeholder="Поиск товара" required 
                                    value={search} 
                                    onChange={(event)=>handleInputChange(event.currentTarget.value)}/>
                                <Link to="/shop-stroi-material" className="btn btn-search" ><i className="w-icon-search"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </header>
  )
}
