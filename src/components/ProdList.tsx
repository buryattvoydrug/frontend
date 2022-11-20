import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import FILTRED_PRODUCTS_QUERY from '../queries/products/filtredproducts';
import PRODUCTS_QUERY from '../queries/products/products';
import { IFiltredProductsResponse, IProductsResponse } from '../types';
import Query from './Query';

export default function ProdList(props: any) {


    function priceToString(price: number) {
        let arr = String(price).split('.');
        let end = ',';
        if (arr.length === 2 && arr[1].length === 2) end = end.concat(arr[1]);
        if (arr.length === 2 && arr[1].length === 1) end = end.concat(arr[1]+'0');
        else end = end.concat('00');
        console.log(arr[0], end);
        return arr[0]+end+' ₽ ';
    }

  const { brand, priceFrom, priceTo,  search } = props;
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("price:desc");
  const [pageSize, setPageSize] = useState(24);
  let { slug } = useParams();
  return (
    <>
    
    <Query query={FILTRED_PRODUCTS_QUERY} 
           slug={slug !== undefined? slug : ""} 
           brand={brand} 
           priceFrom={priceFrom || 0} 
           priceTo={priceTo || 1000000000}
           sort={sort}
           page={page}
           pageSize={24}
           search={search}
           >
      {({data: { articles } }: any) => {
        let items = articles.data;
        const paginationInfo = articles.meta.pagination;
        console.log(paginationInfo)
        return (
          <>
          <nav  className="toolbox sticky-toolbox sticky-content fix-top">
            <div  className="toolbox-left">
                <div onClick={()=>document.body.classList.add('sidebar-active')} className="btn btn-primary btn-outline btn-rounded left-sidebar-toggle 
                        btn-icon-left d-block d-lg-none"><i
                            className="w-icon-category"></i><span>Фильтр</span></div>
                <div  className="toolbox-item toolbox-sort select-box text-dark">
                    <label>Сортировать по :</label>
                    <select name="orderby"  className="form-control" value={sort} onChange={(e)=>setSort(e.currentTarget.value)}>
                        <option value="title">Простая сортировка</option>
                        <option value="price:asc">Дешевле - дороже</option>
                        <option value="price:desc">Дороже - Дешевле</option>
                    </select>
                </div>
            </div>
            <div  className="toolbox-right">
                <div  className="toolbox-item toolbox-show select-box">
                    <select name="count"  className="form-control" value={pageSize} onChange={(e)=>setPageSize(+e.currentTarget.value)}>
                        <option value={12}>Показать 12</option>
                        <option value={24}>Показать 24</option>
                        <option value={36}>Показать 36</option>
                        <option value={72}>Показать 72</option>
                    </select>
                </div>
            </div>
        </nav>
        {localStorage.getItem('search') &&
                            <h3>Результаты по запросу {localStorage.getItem('search')}:</h3>
                        }
              {items.length === 0? 
                <h3>Не найдено.</h3>
            :''}
          <div  className="product-wrapper row cols-xl-5 cols-lg-3 cols-md-4 cols-sm-3 cols-2">
            
            {items.map((product: any) => {

              return (
                <>
                <div  className="product-wrap" style={{paddingBottom: '10px'}}>
                    <div  className="product text-center">
                        <figure  className="product-media">
                            <div>
                                <img src={process.env.REACT_APP_BACKEND_URL + product.attributes.image.data.attributes.url} alt="Product" width="300"
                                    height="338" /> 
                            </div>
                        </figure>
                        <div  className="product-details">
                            <div  className="product-cat">
                                {product.attributes.podkategoriya.data.attributes.title}
                            </div>
                            <h3  className="product-name">
                                <div>{product.attributes.title}</div>
                            </h3>
                            <div  className="product-pa-wrapper">
                                <div  className="product-price">
                                    {product.attributes.priceText === 'от' && product.attributes.priceText+' '}
                                    {product.attributes.price > 1 ? priceToString(product.attributes.price) :
                                    product.attributes.priceText}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </>
              );
            })}
          </div>
          {items.length !== 0? 
          <div  className="toolbox toolbox-pagination justify-content-between">
              <p  className="showing-info mb-2 mb-sm-0">
                  Показанно<span>{items.length} из {paginationInfo.total}</span>товаров
              </p>
              <ul  className="pagination" style={{cursor:'pointer'}}>
                  {page > 1 ?
                  <li  className="prev">
                      <div onClick={()=>setPage((prev)=>prev-1)} aria-label="Previous">
                          <i  className="w-icon-long-arrow-left"></i>Назад
                      </div>
                  </li> : ''}
                  {page-2 > 0?
                  <li  onClick={()=>setPage(page-2)} className="page-item ">
                      <div  className="page-link" >{page-2}</div>
                  </li>:""}
                  {page-1> 0?<li  className="page-item" onClick={()=>setPage(page-1)}>
                      <div  className="page-link" >{page-1}</div>
                  </li>:''}
                  {paginationInfo.pageCount !== 1 ? <li   className="page-item active">
                      <div  className="page-link" >{page}</div>
                  </li>: ''}
                  {page+1<=paginationInfo.pageCount?
                  <li className="page-item" onClick={()=>setPage(page+1)}>
                      <div  className="page-link" >{page+1}</div>
                  </li>:''}
                  {page+2<=paginationInfo.pageCount?
                  <li  onClick={()=>setPage(page+2)} className="page-item">
                      <div  className="page-link" >{page+2}</div>
                  </li>:""}
                  {page !== paginationInfo.pageCount?
                  <li  className="next">
                      <div onClick={()=>setPage((prev)=>prev+1)} aria-label="Next">
                          вперед<i  className="w-icon-long-arrow-right"></i>
                      </div>
                  </li>:''}
              </ul>
          </div>
         :''}
          </>
        );
      }}
      
    </Query>
    </>
  )
}
