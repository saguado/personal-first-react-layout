import React from 'react';
import ReactDOM from 'react-dom';
import HeaderComponent from './component/HeaderComponent';
import ArticleComponent from './component/ArticleComponent';
import SidebarComponent from './component/SidebarComponent';
import DateComponent from './component/DateComponent';


let myButtons = ['Home', 'Contact', 'tests'];

ReactDOM.render(
    <div className='container'>
            <br/><br/>
            <header><HeaderComponent/></header>
            <br/>
            {myButtons.map((x) =>
                <button>{x}</button>
            )}
            <br/>
            <article className='col-md-8'><ArticleComponent/></article>
            <sidebar className='col-md-4'><SidebarComponent/></sidebar>
            <footer><h3><DateComponent/></h3></footer>

    </div>
    , document.getElementById('app')
);


