import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const SocialBuddy = () => {
    const [person, setPerson] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data => {
            setPerson(data);
        })
    }
    ,[])
    return (
        
        <div>
            <React.Fragment>
                <CssBaseline />
                <h1 style={{textAlign : "center", color: "navy"}}>Welcome to Social Buddy Website</h1>
                 <Container maxWidth="sm">
                {
                    person.map(person => <Post post={person}></Post>)
                }
                </Container>
            </React.Fragment>
            
            
        </div>
    );
};

export default SocialBuddy;