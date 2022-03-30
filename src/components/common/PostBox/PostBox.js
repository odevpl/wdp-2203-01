import React from 'react';
import PropTypes from 'prop-types';
import styles from './PostBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

import Button from '../Button/Button';

const PostBox = ({ date, commentsCount, title, content, image }) => {
  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <img src={image} alt='' />
        <div className={styles.postInfo}>
          <div className={styles.infoBox}>
            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
            {date}
          </div>
          <div className={styles.infoBox}>
            <FontAwesomeIcon icon={faComments}></FontAwesomeIcon>
            {commentsCount} Comments
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{title}</h5>
        <p>{content}</p>
      </div>
      <div className={styles.button}>
        <Button variant={'small'}>Read More</Button>
      </div>
    </div>
  );
};

PostBox.propTypes = {
  date: PropTypes.string,
  commentsCount: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
};

export default PostBox;
