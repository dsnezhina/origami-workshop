import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PageLayout from '../../components/page-layout';
import styles from './index.module.css';
import Title from '../../components/title';
import Origamis from '../../components/origamis';
import UserContext from '../../Context'; 


const ProfilePage = () => {
    const [username, setUsername] = useState(null);
    const [posts, setPosts] = useState(null);
    const context = useContext(UserContext);
    const history = useHistory();
    const params = useParams();

    const logOut = () => {
        context.logOut();
        history.push('/')
    };

    const getData = useCallback(async () => {
        const id = params.userid
        const response = await fetch(`http://localhost:9999/api/user?id=${id}`)

        if (!response.ok) {
            history.push('/error')
        }

        const user = await response.json();

        setUsername(user.username);
        setPosts(user.posts && user.posts.length);
    }, [params.userid, history]);

    useEffect(() => {

        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    if (!username) {
        return (
            <PageLayout>
                <div>Loading...</div>
            </PageLayout>
        );
    };

    return (
        <PageLayout>
            <div>
                <Title title='Profile' />
                <p>User: {username}</p>
                <p>Posts: {posts}</p>
                <button className={styles.button} onClick={logOut}>Logout</button>
            </div>
            <Origamis length={3} />
        </PageLayout>
    );
};

export default ProfilePage;