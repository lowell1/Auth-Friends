import React, {useState, useEffect} from "react";
import axiosWithAuth from "./axiosWithAuth";
import Friend from "./Friend";

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth().get("/api/friends")
        .then(resp => {
            // console.log(resp);
            setFriends(resp.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    const getFriendsIdxWithId = (id) => {
        // console.log("id: ",id);
        var result = -1;
        friends.forEach((val, idx) => {
            console.log(`${val.id}, ${id}`);
            if(val.id === id) result = idx;
        })
        return result;
    }

    const deleteFriend = id => {
        axiosWithAuth().delete(`/api/friends/${id}`)
        .then(resp => {
            const idx = getFriendsIdxWithId(id);

            if(idx !== -1) {
                const friendsCopy = [...friends];
                friendsCopy.splice(idx, 1);
                setFriends(friendsCopy);
            }
        })
        .catch(error => console.log(error));
    }

    const updateFriend = (id, data) => {
        axiosWithAuth().put(`/api/friends/${id}`, data)
        .then(resp => {
            const idx = getFriendsIdxWithId(id);

            if(idx !== -1) {
                const friendsCopy = [...friends];
                friendsCopy[idx] = data;
                setFriends(friendsCopy);
            }
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    return (
        <div className="friends-list">
            <h1>Friends list</h1>
            {
                friends.map((val,idx) => 
                    <Friend 
                        key={idx} 
                        name={val.name} 
                        email={val.email} 
                        age={val.age} 
                        id={val.id}
                        deleteFriend={deleteFriend}
                        updateFriend={updateFriend}
                    />
                )
            }
        </div>
    )

}

export default FriendsList;