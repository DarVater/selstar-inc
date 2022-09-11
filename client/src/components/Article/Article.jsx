import React from 'react';
import './Article.scss'
const Article = ({title, text, className  }) => {
    className = `article__title ${className}`
    return (
        <article className="article">
            <h1 className={className}>
                {title}
            </h1>
            <p className="article__text">
                {text}
            </p>
        </article>
    );
};

export default Article;