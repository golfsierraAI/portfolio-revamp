import { Grid } from '@mui/material';
import './index.scss';

const Footer = () => {
  return (
    <div id="footer" className="footer_wrapper">
      <Grid
        className="upper_grid"
        container
        alignItems="center"
        justifyContent="flex-start"
        gap={20}>
        <Grid
          gap={4}
          className="upper_left_grid"
          container
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-start">
          <h1>Say hello</h1>
          <a target="_blank" href="mailto:gourav.npm@gmail.com" rel="noreferrer">
            gourav.npm@gmail.com
          </a>
          <a target="_blank" href="https://t.me/golfSierra99" rel="noreferrer">
            https://t.me/golfSierra99
          </a>
        </Grid>

        <Grid
          className="upper_right_grid"
          container
          flexDirection="column"
          alignItems="flex-start"
          gap={4}
          justifyContent="flex-end">
          <a href="mailto:gourav.npm@gmail.com">My Work</a>
          <a href="https://t.me/golfSierra99">My Résumé</a>
          <a href="https://t.me/golfSierra99">My Shelf</a>
        </Grid>
      </Grid>

      <Grid
        className="lower_grid"
        container
        alignItems="center"
        justifyContent="flex-start"
        gap={20}>
        &copy; Gourav sharma, 2023
      </Grid>
    </div>
  );
};

export default Footer;
