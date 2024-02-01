import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Github = () => {

    const [username, setUsername] = useState("");
    const [userdata, setuserData] = useState(null);

    useEffect(() => {

        const fetchFunction = async () => {
            
            try {
                const response = await axios.get(`https://api.github.com/users/${username}`);

               if(response.status === 200){
                   setuserData(response.data)
               }else {
                console.error(`Error: ${response.statusText}`);
                   setuserData(null);
                }

            } catch (error) {
                console.error('Error fetching GitHub data:', error);
                setuserData(null);
            }
        };

        if (username) {
            fetchFunction();
        }
    }, [username]);

    // const handelfetch = async() =>{


    // }

    return (
        <div className='para'>
            <h2>Github Info card</h2>
            <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
            {/* <button onClick={handelfetch}>Get Info</button> */}
            <div>
                {userdata && (
                    <div className='para'>
                        <img src={userdata.avatar_url} alt="avatar" />
                        <h1>{userdata.name}</h1>
                        <p>Type : {userdata.type}</p>
                        <p>Blog : {userdata.blog ? userdata.blog : "null"}</p>
                        <p>{userdata.bio}</p>
                        <p>Followers : {userdata.followers}</p>
                        <p>FollowersDetails : {userdata.followers_url}</p>
                        <p>Following : {userdata.following}</p>
                        <p>FollowingDetails : {userdata.following_url}</p>
                        <p>Twitter : {userdata.twitter_username ? userdata.twitter_username : "null"}</p>
                        <p>Repos : {userdata.public_repos ? userdata.public_repos : "null"}</p>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Github