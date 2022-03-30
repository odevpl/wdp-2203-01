import React from 'react';
//import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';

import styles from './BlogHomepage.module.scss';

import PostBox from '../../common/PostBox/PostBox';

const BlogHomepage = () => {
  const posts = useSelector(getAllPosts);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row'>
            <div className={'col-11 ' + styles.heading}>
              <h3>Latest blog</h3>
            </div>
            <div className={'col-2 ' + styles.dots}>
              <ul>
                <li>
                  <a className={styles.active} href='#'>
                    {' '}
                  </a>
                </li>
                <li>
                  <a href='#'> </a>
                </li>
                <li>
                  <a href='#'> </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='row'>
          {posts.map(post => (
            <div
              key={post.id}
              className={
                'col-4 mb-4 ' + (post.id === 'post1' ? styles.active : styles.notActive)
              }
            >
              <PostBox
                {...post}
                className={post.id === 'post1' ? styles.active : styles.notActive}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogHomepage;
