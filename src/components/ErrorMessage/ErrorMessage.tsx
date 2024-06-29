import React from 'react';
import styles from '../ErrorMessage/ErrorMessage.module.css';

const ErrorMessage: React.FC = () => {
    return (
        <p className={styles.errorMessage}>Error happened. Please try again</p>
    );
};

export default ErrorMessage;
