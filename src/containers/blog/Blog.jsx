import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => {
  return (
    <div className='__blog section__padding' id='blog'>
      <div className='__blog-heading'>
        <h1 className='gradient__text'>Stay in the Cloud-Know: Exploring the Latest in Cloud Computing Innovations</h1>
      </div>
      <div className='__blog-container'>
        <div className='__blog-container_groupA'>
          <Article imgUrl={blog01} date="May 19, 2023" title="Unlocking the Potential: Exploring the Advantages of Cloud Computing Services Today"/>
        </div>
        <div className='__blog-container_groupB'>
          <Article imgUrl={blog02} date="May 19, 2023" title="The Future of Business: How Cloud Computing is Revolutionizing Industry Operations"/>
          <Article imgUrl={blog03} date="May 19, 2023" title="Security in the Cloud: A Comprehensive Guide to Safeguarding Your Data"/>
          <Article imgUrl={blog04} date="May 19, 2023" title="Cloud Computing vs. Traditional IT: Which Approach Reigns Supreme in 2023?"/>
          <Article imgUrl={blog05} date="May 19, 2023" title="Scaling New Heights: Cloud Computing Trends Shaping the Tech Landscape This Year"/>
        </div>
      </div>
    </div>
  )
}

export default Blog