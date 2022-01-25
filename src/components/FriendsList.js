import React, {useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        // const token = localStorage.getItem('token');

        axiosWithAuth()
        .get('/friends')
        .then(resp => {
            console.log(resp);
            setFriends(resp.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <div >
            <h1>Friends List</h1>
            <ul className='friendlist'>
            {
                friends.map(friend => {
                return <li key={friend.id}>{friend.name} - {friend.email} </li>
                    })
            }
            </ul>
        </div>
    )
        }

export default FriendsList;


// import React from 'react';
// import axiosWithAuth from '../utils/axiosWithAuth';

// class FriendsList extends React.Component {
//     state = {
//         friends: []
//     };

//     componentDidMount() {
//         axiosWithAuth()
//             .get('/friends')
//             .then(resp => {
//                 console.log(resp);
//                 this.setState({
//                     friends: resp.data
//                 });
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Friends List</h1>
//                 <ul>
//                     {
//                         friends.map(friend => {
//                             return <li>{friend.name} - {friend.email} </li>
//                         })
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }

// export default FriendsList;