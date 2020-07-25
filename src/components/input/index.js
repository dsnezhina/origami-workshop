import React from 'react';
import styles from './index.module.css'

const Input = ({ label, id, value, onChange }) => {
    return (
        <div className={styles['form-control']}>
            <label className={styles.label} htmlFor={id}>{label}:</label>
            <input
                className={styles.input}
                id={id}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;