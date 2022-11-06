import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CATEGORIES_QUERY from '../queries/products/categories';
import { ICategotiesResponse } from '../types';
import Query from './Query';


function MobileMenuItem(props:any) {
  const [show, setShow] = useState(props.show);
  const item = props.item;
  return (
    <>
    <li onClick={()=>setShow(!show)}>
        <Link to="/shop-stroi-material" >
            {/* <i className="w-icon-tshirt2"></i> */}
            {item.attributes.name}
        </Link>
    <ul style={show? {display:'block', transform:"translateY(0)",height: (item.attributes.podkategoriyass.data.length +1) *44 +"px",transition: 'all 0.4s'}:{display:'block', visibility:"hidden",height:'0', opacity: '0',  transform:"translateY(-10px)",transition: 'all 0.4s'}}>
        
        {item.attributes.podkategoriyass.data.map((podkategoriya: any)=>{
            return (
                <>
                    <li><Link to={'/shop-stroi-material/'+podkategoriya.attributes.slug} onClick={()=>document.body.classList.remove('mmenu-active')}>{podkategoriya.attributes.title}</Link></li>
                </>
            )
        })}
        {/* <li><Link to="/"><strong style={{textDecoration: 'underline'}}>Показать все</strong></Link></li> */}
        
    </ul>
    </li>
    </>
  )
}

export default function MobileMenuList() {
  const [show, setShow] = useState(false);

  return (
    <>
    <ul className={show? "mobile-menu show" : "mobile-menu"}>
    <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }: ICategotiesResponse) => {
            return (
                <>
                {categories.data.map((category: any)=> {
                    return (
                        <>
                        <MobileMenuItem item={category} />
                        </>
                    );
                })}
                </>
            );
        }}
        </Query>
        {/* <MobileMenuItem/> */}
        {/* <MobileMenuItem/> */}
    </ul>
    </>
  )
}
