import React from 'react';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: '',
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    }

    login = e => {
        e.preventDefault();
        console.log(this.state.credentials);
        axios.post('http://localhost:3000/api/login', this.state.credentials)
            .then(resp => {
                console.log(resp);
            })
    }

    render() {
        return (
            <div>
                <h1>LOGIN</h1>
                <form>
                    <input
                        type='text'
                        name='username'
                     />
                     <input 
                        type='password'
                        name='password'
                        />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;