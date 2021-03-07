import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
  image: React.ReactNode;
  title: string;
  description: string;
};

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
  },
  media: {
    height: 83,
    width: 'auto',
    padding: theme.spacing(1),
  },
}));

const FeatureCard: React.FC<Props> = ({ title, description, image }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media}>{image}</CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
