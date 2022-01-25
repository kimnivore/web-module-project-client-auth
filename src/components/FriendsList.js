import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        axiosWithAuth()
            .get('/friends')
            .then(resp => {
                this.setState({
                    friends: resp.data.data
                });
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        return (
            <div>
                <h1>Friends List</h1>
            </div>
        )
    }
}

export default FriendsList;