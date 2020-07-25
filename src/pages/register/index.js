import React, { Component } from 'react';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title'
import SubmitButton from '../../components/button/submit-button'
import Input from '../../components/input'
import styles from './index.module.css'

class RegisterPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            rePassword: ""
        }
    }

    onChange = (event, type) => {
        const newState = {};
        newState[type] = event.target.value

        this.setState(newState)
    }

    render() {

        const {
            email,
            password,
            rePassword
        } = this.state

        return (
            <PageLayout>
                    <Title title='Register' />
                    <Input
                        value={email}
                        onChange={(e) => this.onChange(e, "email")}
                        label="Email"
                        id="email"
                    />
                    <Input
                        value={password}
                        onChange={(e) => this.onChange(e, "password")}
                        label="Password"
                        id="password"
                    />
                    <Input
                        value={rePassword}
                        onChange={(e) => this.onChange(e, "rePassword")}
                        label="Re-password"
                        id="re-password"
                    />
                    <SubmitButton title='Register' />
            </PageLayout >
        );
    }
};

export default RegisterPage
