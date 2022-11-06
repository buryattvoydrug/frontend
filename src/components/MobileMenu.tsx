import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenuList from './MobileMenuList';

export default function MobileMenu() {
        const [active, setActive] = useState(false);
        const [show, setShow] = useState(false);
        const [search, setSearch] = useState('');

        function handleInputChange(value:string) {
            setSearch(value);
            localStorage.setItem('search', value);
            
        }
  return (
    <div className="mobile-menu-wrapper">
  <div className="mobile-menu-overlay" onClick={()=>document.body.classList.remove('mmenu-active')}></div>
  {/* <!-- End of .mobile-menu-overlay --> */}

  <div onClick={()=>document.body.classList.remove('mmenu-active')} className="mobile-menu-close"><i className="close-icon"></i></div>
  {/* <!-- End of .mobile-menu-close --> */}

  <div className="mobile-menu-container scrollable">
      <form  className="input-wrapper">
          <input type="text" className="form-control" name="search" autoComplete="off" placeholder="Поиск" required 
          value={search} onChange={(event)=>handleInputChange(event.currentTarget.value)}/>
          <Link to="/shop-stroi-material" onClick={()=>document.body.classList.remove('mmenu-active')} className="btn btn-search" style={{paddingTop: "10px"}}>
                <i className="w-icon-search"></i>
          </Link>
          
      </form>
      {/* <!-- End of Search Form --> */}
      <div className="tab">
          <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item" onClick={()=>{setActive(!active);setShow(false)}} >
                  <a  className={!active? "nav-link active": "nav-link"}>Mеню</a>
              </li>
              <li className="nav-item" onClick={()=>setActive(!active)} >
                  <a  className={active? "nav-link active": "nav-link"}>Категории</a>
              </li>
          </ul>
      </div>
      <div className="tab-content">
          <div className={!active? "tab-pane active": "tab-pane"} id="main-menu">
              <ul className="mobile-menu">
                  <li><Link to="/"  onClick={()=>document.body.classList.remove('mmenu-active')}>Главная</Link></li>
                  <li>
                      <Link to="/shop-stroi-material"  onClick={()=>document.body.classList.remove('mmenu-active')}>Магазин</Link>

                  </li>
                  <li><Link to="/contact-us" onClick={()=>document.body.classList.remove('mmenu-active')}>Контакты</Link></li>
                  <li><Link to="/about-us"  onClick={()=>document.body.classList.remove('mmenu-active')}>О компании</Link></li>
              </ul>
          </div>
          <div className={active? "tab-pane active in": "tab-pane"} id="categories">
              <MobileMenuList />
          </div>
      </div>
  </div>
</div>
  )
}
