import React from 'react'
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Query from '../components/Query';
import ABOUT_QUERY from '../queries/pages/about';
import { IAboutResponse } from '../types';

export default function About() {
  let { slug } = useParams();
  return (
    <>
      <main className="">
        <div className="page-header">
            <div className="container">
                <h1 className="page-title mb-0">О компании</h1>
            </div>
        </div>

        <nav className="breadcrumb-nav mb-10 pb-1">
            <div className="container">
                <ul className="breadcrumb">
                    <li><a href="/">Главная</a></li>
                    <li>О компании</li>
                </ul>
            </div>
        </nav>

        <div className="page-content">
    <section className="contact-section" style={{textAlign: 'left'}}>
        <div className="row pl-3">
            <div className="col-lg-12 mr-2 mb-8">
          <Query query={ABOUT_QUERY} slug={slug}>
            {({ data: { about } }: IAboutResponse) => {
                const data = about.data.attributes;
                return (
                      <ReactMarkdown children={data.content} rehypePlugins={[rehypeRaw]}/>
                    );
                }}
              </Query>
               
        </div>
        </div>
    </section>
    </div>
        
        </main>

    </>
  )
}
