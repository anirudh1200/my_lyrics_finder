import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    margin: '10px 25%',
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
};

function Song(props) {
  const { classes, song } = props;
  console.log(song);
  return (
    <Card className={classes.card} raised={true}>
      <CardContent>
        <Typography variant="h5" component="h2">
            { song.track_name }
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          { song.album_name }
        </Typography>
        <Typography component="p">
          { song.artist_name }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

Song.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Song);
