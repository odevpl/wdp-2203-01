import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getAllCompare } from './../../../redux/compareRedux';
import styles from './CompareBar.module.scss';
import CompareBox from '../../common/CompareBox/CompareBox';
import Button from '../../common/Button/Button';

const CompareBar = () => {
  const compare = useSelector(getAllCompare);

  return (
    <>
      {compare.length > 0 && (
        <div className={styles.root}>
          {compare.map(compareProduct => (
            <CompareBox key={compareProduct.id} {...compareProduct} />
          ))}
          <Button variant='small'>Compare</Button>
        </div>
      )}
    </>
  );
};

CompareBar.propTypes = {
  compare: PropTypes.array,
};

export default CompareBar;
