import React, { useState } from 'react';
import PageLayout from '../../components/page-layout';
import styles from './index.module.css';
import Title from '../../components/title';
import SubmitButton from '../../components/button/submit-button';
import Origamis from '../../components/origamis';
import getCookie from '../../utils/getCookie';

const ShareThoughtsPage = () => {

    const [publication, setPublication] = useState('');
    const [updatedOrigami, setUpdatedOrigami] = useState([]);

    const handleSubmit = async () => {

        const token = getCookie('x-auth-token');

        await fetch('http://localhost:9999/api/origami', {
            method: 'POST',
            body: JSON.stringify({
                description: publication
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        });

        setPublication('');
        setUpdatedOrigami([...updatedOrigami, 1]);
    };

    return (
        <PageLayout>
            <div className={styles.container}>
                <Title title='Share your thoughts...' />
                <textarea value={publication} className={styles.textarea} onChange={e => setPublication(e.target.value)}></textarea>
                <SubmitButton title='Post' onClick={handleSubmit} />
            </div>
            <Origamis length={3} updatedOrigami={updatedOrigami} />
        </PageLayout>
    );
}

export default ShareThoughtsPage;