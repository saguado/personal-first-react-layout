import React from 'react';
import ReactDOM from 'react-dom';
import HeaderComponent from './component/HeaderComponent';
import ArticleComponent from './component/ArticleComponent';
import SidebarComponent from './component/SidebarComponent';
import FooterComponent from './component/FooterComponent';

let myButtons = ['Home', 'Contact', 'tests'];

ReactDOM.render(
    <div className='container'>
            <br/><br/>
            <header><HeaderComponent/></header>
            <br/>
            {myButtons.map((x) =>
               <button>{x}</button>
            )}
            <br/><br/>
            <article className='col-md-8'><ArticleComponent/></article>
            <sidebar className='col-md-4'><SidebarComponent/></sidebar>
            <footer><FooterComponent/></footer>

    </div>
    , document.getElementById('app')
);


