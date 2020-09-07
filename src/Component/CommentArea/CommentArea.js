import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import fakeData from '../../fakeData/fakeData';

const CommentArea = () => {
    const [imageData, setImageData] = useState(fakeData);
    const [comment, setComment] = useState([]);
    const {postId} = useParams();
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setComment(data);
        })
    },[])
    for(let i=0; i< comment.length;i++){
        comment[i].img = imageData[i].img;
    }    
    return (
        <div>
            <h1 style={{textAlign : "center"}}> Comments</h1>

            {
                comment.map( message => <Comment msg={message}></Comment>)
            }            
        </div>
    );
};

export default CommentArea;