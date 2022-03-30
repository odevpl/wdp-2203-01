import React from 'react';
import styles from './Feedback.module.scss';

import { useSelector } from 'react-redux';
import { getFeedback } from './../../../redux/feedbackRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const Feedback = () => {
  const feedback = useSelector(getFeedback);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panel}>
          <div className='row no-gutters align-items-end'>
            <div className={'col-auto ' + styles.heading}>
              <h3>Client feedback</h3>
            </div>
            <div className={'col-auto ' + styles.dots}>
              <ul>
                <li>
                  <a className={styles.active}>page</a>
                </li>
                <li>
                  <a>page</a>
                </li>
                <li>
                  <a>page</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-10 text-center'>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faQuoteRight} />
              <p className={'col-auto mt-4 ' + styles.description}>
                {feedback.description}
              </p>
              <div
                className={
                  'col-auto mt-4 d-flex flex-row justify-content-center align-items-center ' +
                  styles.client
                }
              >
                <img src={feedback.image} alt={feedback.name} />
                <div className={styles.photoDescription}>
                  <p className={'col-auto m-0 ' + styles.name}>{feedback.name}</p>
                  <p className='col-auto m-0'>Furniture client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
