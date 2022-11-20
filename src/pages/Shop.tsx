import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProdList from '../components/ProdList';
import Query from '../components/Query';
import ShopDropdown from '../components/ShopDropdown';
import BRANDS_QUERY from '../queries/products/brands';
import CATEGORIES_QUERY from '../queries/products/categories';
import SUB_CATEGORIES_QUERY from '../queries/products/subcategories';
import { IBrandsResponse, ICategotiesResponse, ISubCategotiesResponse } from '../types';


export default function Shop() {

    const [collapse, setCollapse] = useState(false);

    const { loading, error, data } = useQuery(BRANDS_QUERY);
    
    const [page, setPage] = useState(false);
    

    let allBrands: string[] = [];
    if(!loading) {
        data.brends.data.map((item: any)=> allBrands.push(item.attributes.title));
    }

    const [brand, setBrand] = useState<string[]>([]);



    const [min, setMin] = useState('');
    const [max, setMax] = useState('');


    let { limit } = useParams();

    function addBrand(item:string) {
        setBrand((prevState)=> ([...prevState, item]))
    }
    function removeBrand(item:string) {
        setBrand((prevState)=> ([...prevState].filter((element)=>element!==item)))
    }
    useEffect(() => {
        window.scrollTo(0, 0)
        }, [])
  return (
    <>
      <main  className="">
        <nav  className="breadcrumb-nav">
            <div  className="container">
                <ul  className="breadcrumb bb-no">
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/">Магазин</Link></li>
                </ul>
            </div>
        </nav>

            <div  className="container-fluid">
                <div  className="shop-content row gutter-lg">
                    <aside  className="sidebar shop-sidebar left-sidebar sticky-sidebar-wrapper sidebar-fixed" >
                        <div  className="sidebar-overlay" onClick={()=>document.body.classList.remove('sidebar-active')} ></div>
                        <div  className="sidebar-close" onClick={()=>document.body.classList.remove('sidebar-active')}><i  className="close-icon"></i></div>

                        <div  className="sidebar-content scrollable" style={{padding: '10px 0 10px 20px'}}>
                            <div  className="sticky-sidebar">
                                <div style={{paddingRight:'15px'}} className="filter-actions">
                                    <label>Фильтр :</label>
                                    <Link to="/shop-stroi-material" onClick={()=>{setMin('0'); setMax('1000000000'); setBrand([]);localStorage.setItem('search', '');}} className="btn btn-dark btn-link filter-clean">Очистить всё</Link>
                                </div>
                                <ShopDropdown/>

                                <div  className="widget widget-collapsible">
                                    <h3  className="widget-title"><label>Цены :</label></h3>
                                    <div  className="widget-body">
                                        <ul  className="filter-items search-ul">
                                            <li><div onClick={()=>{setPage(!page);setMin('0');setMax('1000')}}>0₽ - 1000₽</div></li>
                                            <li><div onClick={()=>{setPage(!page);setMin('1000');setMax('2000')}}>1000₽ - 2000₽</div></li>
                                            <li><div onClick={()=>{setPage(!page);setMin('2000');setMax('3000')}}>2000₽ - 3000₽</div></li>
                                            <li><div onClick={()=>{setPage(!page);setMin('3000');setMax('5000')}}>3000₽ - 5000₽</div></li>
                                            <li><div onClick={()=>{setPage(!page);setMin('5000');setMax('1000000000')}}>5000₽+</div></li>
                                        </ul>
                                        <form className="price-range">
                                            <input type="number" name="min_price" className="min_price text-center" placeholder="₽min" 
                                               value={min} onChange={(event) => {setPage(!page);setMin(event.currentTarget.value)}} style={{width:'90px'}}/>
                                            <span  className="delimiter">-</span>
                                            <input type="number" name="max_price"  className="max_price text-center" placeholder="₽max" 
                                               value={max} onChange={(event) => {setPage(!page);setMax(event.currentTarget.value)}} style={{width:'90px'}}/>
                                            {/* <a href="/"  className="btn btn-primary btn-rounded">найти </a> */}
                                        </form>
                                    </div>
                                </div>

                                <div  className="widget widget-collapsible">
                                    <Query query={BRANDS_QUERY} id={null}>
                                        {({ data  }: IBrandsResponse) => {
                                            const items = data.brends.data;
                                            return(
                                                <>
                                                <h3  className="widget-title"><label>Бренд </label></h3>
                                                <ul  className="widget-body filter-items item-check mt-1">
                                                {items.map((item)=>{
                                                return (
                                                    <>
                                                    <li className={brand.includes(item.attributes.title)? "active" : ''}>
                                                        <div onClick={brand.includes(item.attributes.title)? ()=>{setPage(!page);removeBrand(item.attributes.title)}: ()=>{setPage(!page);addBrand(item.attributes.title)}}>{item.attributes.title}</div>
                                                    </li>
                                                    </>
                                                )
                                                })}
                                                </ul>
                                                </>
                                            )
                                        }}
                                    </Query>
                                </div>
                            </div>
                        </div>
                    </aside>

                    <div  className="main-content">
                        

                        
                        <ProdList brand={!brand.length? allBrands: brand} priceFrom={+min} priceTo={+max} search={localStorage.getItem('search')} newPage={page}/>
                        <h3><Link style={{fontSize:'18px'}} to="/shop-stroi-material" onClick={()=>{setPage(!page);setMin('0'); setMax('1000000000'); setBrand([]);localStorage.setItem('search', '');}}>Показать все товары</Link></h3>
                    </div>


                </div>
            </div>
    </main>

    </>
  )
}
