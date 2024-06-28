import React from 'react';
import styles from '../LoadMoreBtn/LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  handleLoadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleLoadMore }) => {
  return (
    <div className={styles.container}>
      <button onClick={handleLoadMore} className={styles.btn}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;