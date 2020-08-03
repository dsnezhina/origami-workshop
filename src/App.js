import React, { useState, useEffect } from 'react';
import UserContext from './Context';
import getCookie from './utils/getCookie';


const App = (props) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const logIn = (user) => {
        setUser({
            ...user,
            loggedIn: true
        });
    };

    const logOut = () => {
        document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        setUser({
            loggedIn: false
        });
    };

    useEffect(() => {
        const token = getCookie('x-auth-token');

        if (!token) {
            logOut()
            setLoading(false)
            return
        }

        fetch('http://localhost:9999/api/user/verify', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }).then(promise => {
            return promise.json();
        }).then(response => {
            if (response.status) {
                logIn({
                    username: response.user.username,
                    id: response.user._id
                })
            } else {
                logOut()
                setLoading(false)
            }

            setLoading(false)
        })
    }, []);

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }


    return (
        <UserContext.Provider value={{
            user,
            logIn,
            logOut
        }}>
            {props.children}
        </UserContext.Provider >

    )

}

export default App

// class App extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             loggedIn: null,
//             user: null
//         }
//     }

//     logIn = (user) => {
//         this.setState({
//             loggedIn: true,
//             user
//         })
//     }

//     logOut = () => {
//         document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
//         this.setState({
//             loggedIn: false,
//             user: null
//         })
//     }

//     componentDidMount() {
//         const token = getCookie('x-auth-token');

//         if (!token) {
//             this.logOut()
//             return
//         }

//         fetch('http://localhost:9999/api/user/verify', {
//             method: 'POST',
//             body: JSON.stringify({
//                 token
//             }),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }).then(promise => {
//             return promise.json();
//         }).then(response => {
//             if (response.status) {
//                 this.logIn({
//                     username: response.user.username,
//                     id: response.user.id
//                 })
//             } else {
//                 this.logOut()
//             }
//         })
//     }

//     render() {

//         const {
//             loggedIn,
//             user
//         } = this.state;

//         // if (loggedIn === null) {
//         //     return (<div>Loading...</div>)
//         // }

//         return (
//             <UserContext.Provider value={{
//                 loggedIn,
//                 user,
//                 logIn: this.logIn,
//                 logOut: this.logOut
//             }}>
//                 {this.props.children}
//             </UserContext.Provider >

//         )
//     }
// }

