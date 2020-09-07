import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import './Comment.css'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },  
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Comment = (props) => {
    const {email, name, body, img } = props.msg;
    const classes = useStyles();
    return (
      <div className="comment">
          <Card className={classes.root}>
              <CardHeader
                  avatar={
                      <Avatar src={img}/>
                  }
              title={email}
              />
              <CardContent>
                  <Typography variant="body2" color="textPrimary"> <h2>{name}</h2> </Typography>
                  <Typography variant="body2" color="textSecondary"> {body}</Typography>
              </CardContent>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon style={{color:"red"}} />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>                
              </CardActions>
          </Card>
      </div>
    );
};

export default Comment;