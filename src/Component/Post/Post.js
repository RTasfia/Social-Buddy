import React from 'react';
import './Post.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});



const Post = (props) => {
    const classes = useStyles();
    
    const {title,body,id} = props.post;
    return (
        <div className="post-component">
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.pos} color="textPrimary"><h2 style={{textAlign : "center"}}>ID: {id}</h2></Typography>
                    <Typography variant="body2"><h2>{title}</h2></Typography>
                    <Typography variant="body2"><h4>{body}</h4></Typography>

                </CardContent>
                <CardActions>
                    <Link to={`/post/${id}`}>  <Button size="small" variant="contained" color="primary">See more</Button></Link>
                </CardActions>
            </Card>
            
            
        </div>
    );
};

export default Post;