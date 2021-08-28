import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    // maxWidth: 245,
  },
});
const UpcommingMovieContent = (props) => {
  const classes = useStyles();
  const { id, name, imgUrl } = props.upComming;
  return (
    <Card className={classes.root}>
      <CardMedia
        className="showing-img"
        component="img"
        alt="Contemplative Reptile"
        height="400"
        image={imgUrl}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <Button size="small" color="primary">
        Movie Details
      </Button>
    </Card>
  );
};

export default UpcommingMovieContent;
