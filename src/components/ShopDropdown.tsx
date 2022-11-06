import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import CATEGORIES_QUERY from '../queries/products/categories';
import { ICategotiesResponse } from '../types';
import Query from './Query';

function ShopDropdownItem(props:any) {
  const [collapse, setCollapse] = useState(false);
  const item = props.item;
  return (
    <>
    <div  className="widget widget-collapsible" onClick={()=>setCollapse(!collapse)}>
        {item.attributes.podkategoriyass.data.length?<h3  className={!collapse? "widget-title collapsed" : "widget-title"}>
            <label>{item.attributes.name}</label>
             <span className="toggle-btn"></span>
        </h3> : ''}
        {
          item.attributes.podkategoriyass.data.length?
        <ul  className="widget-body filter-items search-ul"
        style={collapse? {display:'block', transform:"translateY(0)",height: (item.attributes.podkategoriyass.data.length)*40 +"px",transition: 'all 0.4s',opacity: '1',}:{display:'block', visibility:"hidden",height:'0', opacity: '0',  transform:"translateY(-10px)",transition: 'all 0.4s',margin:'0',padding:'2px 0'}}>
            {item.attributes.podkategoriyass.data.map((podkategoriya: any)=>{
                return (
                    <>
                        <li><Link to={'/shop-stroi-material/'+podkategoriya.attributes.slug}>{podkategoriya.attributes.title}</Link></li>
                    </>
                )
            })}
            {/* <li><Link to="/shop-stroi-material/"><strong style={{textDecoration: 'underline'}}>Показать все</strong></Link></li> */}
        </ul>
        : ""}
    </div>
    </>
  )
}

export default function ShopDropdown() {

  return (
    <>
    <Query query={CATEGORIES_QUERY} id={null}>
    {({ data: { categories } }: ICategotiesResponse) => {

        return (
            <>
            {categories.data.map((category: any)=> {
                return (
                    <>
                    <ShopDropdownItem item={category} />
                    </>
                );
            })}
            </>
        );
    }}
    </Query>
    
    </>
  )
}
