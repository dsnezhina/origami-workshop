import React from 'react';
import PageLayout from '../../components/page-layout';
import styles from './index.module.css'
import Title from '../../components/title'
import SubmitButton from '../../components/button/submit-button'
import Origamis from '../../components/origamis';

const ShareThoughtsPage = () => {
    return (
        <PageLayout>
            <div className={styles.container}>
            <Title title='Share your thoughts...' />
            <textarea className={styles.textarea}>Publication...</textarea>
            <SubmitButton title='Post'/>
            </div>
            <Origamis length={3}/>
        </PageLayout>
    );
}

export default ShareThoughtsPage;