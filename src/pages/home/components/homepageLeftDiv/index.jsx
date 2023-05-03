import { Grid } from '@mui/material';
import './index.scss';
function HomepageLeftDiv() {
  return (
    <Grid
      container
      className="homepage_container_left_div"
      direction="column"
      justifyContent="space-evenly"
      alignItems="center">
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        className="text_wrapper">
        <h1 className="role">Frontend Developer.</h1>
        <h2 className="desc">
          I'm a Software Engineer who has a passion of building (and occasionally designing)
          exceptional digital experiences. Currently, I'm an engineer at United Health Group focused
          on building accessible, human-centered products.
        </h2>
      </Grid>
      <Grid container className="praise_wrapper" justifyContent="space-between" alignItems="center">
        <Grid
          container
          className="praise"
          direction="column"
          justifyContent="center"
          alignItems="center">
          <h1>Highly skilled at progressive enhancement, design systems & UI Engineering.</h1>
        </Grid>
        <Grid
          className="praise"
          container
          direction="column"
          justifyContent="center"
          alignItems="center">
          <h1>Extensive experience in building products for clients across several countries.</h1>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default HomepageLeftDiv;
