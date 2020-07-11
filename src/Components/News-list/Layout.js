import React from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


import TimeAgo from './Time';

const Layout = (props) => {
    return (
        <div className="App">
              <br />
              <br/>
            <div className="main_div container">
                <div className="blog-post">
                    <div className="blog-post__img">
                        <img src={props.urlToImage} alt="" />
                    </div>
                    <div className="blog-post__info">
                        <h1 className="blog-post__title">{props.title}</h1>
                        <p className="blog-post__text">{props.description}</p>
                        <div className="blog-post__date">
                            <span className="text-success">{props['source'].name}</span>
                            <span className="Indent_line"><TimeAgo time={props.publishedAt} /></span>
                        </div>
                        <a href={props.url} target="_blank" rel="noopener noreferrer" className="blog-post__cta">Read more</a>
                    </div>
                </div>
            </div>
        </div>

    )
}



export default Layout
