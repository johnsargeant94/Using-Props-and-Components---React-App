import React from 'react';

const BlogPostBox = (props) => {
    return (
    <div className= "blogbox">   
        <img id="blogBoxImage" src={props.image} alt= "Blog Image"/>
        <h2>{props.blogTitle}</h2>
        <h4>{props.blogTopic}</h4>
    </div>
  
     )
}






export default BlogPostBox;
