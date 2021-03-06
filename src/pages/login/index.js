import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import PageLayout from '../../components/page-layout';
import Title from '../../components/title'
import SubmitButton from '../../components/button/submit-button'
import Input from '../../components/input'
import styles from './index.module.css';
import authenticate from '../../utils/authenticate'
import UserContext from '../../Context';


const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const context = useContext(UserContext);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await authenticate(
            'http://localhost:9999/api/user/login',
            { username, password },
            (user) => {
                context.logIn(user)
                history.push('/')
            }, (e) => { console.log('Error', e) }
        )
    }

    return (
        <PageLayout>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Title title='Login' />
                <Input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    label="Username"
                    id="username"
                />
                <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label="Password"
                    id="password"
                    type="password"
                />
                <SubmitButton title='Login' />
            </form>
        </PageLayout >
    )

}

export default LoginPage;

