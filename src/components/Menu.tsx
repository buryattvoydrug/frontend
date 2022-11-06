import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import CATEGORIES_QUERY from '../queries/products/categories';
import { ICategotiesResponse } from '../types';
import Query from './Query';

export default class Menu extends Component {
  render() {
    return (
      <>
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }: ICategotiesResponse) => {
            return (
                <>
                {categories.data.map((category: any)=> {
                    return (
                        <>
                        {category.attributes.podkategoriyass.data.length !== 0?
                        <li>
                            <a >
                                {/* <i className="w-icon-tshirt2"></i> */}
                                {category.attributes.name}
                            </a>
                            
                            <ul className="megamenu">
                                <li>
                                    <h4 className="menu-title">{category.attributes.name}</h4>
                                    <hr className="divider" />
                                    <ul>
                                        {category.attributes.podkategoriyass.data.map((podkategoriya: any)=>{
                                            return (
                                                <>
                                                    <li><Link to={'/shop-stroi-material/'+podkategoriya.attributes.slug}>{podkategoriya.attributes.title}</Link></li>
                                                </>
                                            )
                                        })}
                                        {/* <li><Link to="/"><strong style={{textDecoration: 'underline'}}>Показать все</strong></Link></li> */}
                                        
                                    </ul>
                                </li>

                            </ul>
                        </li> : ''}
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
}
