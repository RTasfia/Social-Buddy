import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentArea from '../CommentArea/CommentArea';
import './PostDetail.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const PostDetail = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <div>
                    <div className="post-detail">
                        <h1 className="title">{post.title}</h1>
                        <h3>{post.body}</h3>
                    </div>
                    <CommentArea></CommentArea>
                </div>
            </Container>
        </React.Fragment>
        
    );
};

export default PostDetail;