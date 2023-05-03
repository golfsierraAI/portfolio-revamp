import { Grid } from '@mui/material';
import Arrow from '../../assets/Arrow';
import './index.scss';
function ContactPage() {
  console.log(process.env.REACT_APP_EMAIL_SECRET);
  return (
    <div id="contact" className="contact_wrapper">
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        flexDirection="column"
        data-aos="fade-up"
        data-aos-once
        gap={5}>
        <Grid
          className="upper_grid"
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection="column"
          gap={5}>
          <h1>Send me a message!</h1>
          <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
        </Grid>
        <form
          className="form"
          action={`https://formspree.io/f/${process.env.REACT_APP_EMAIL_SECRET}`}
          method="POST">
          <Grid container className="form_grid" gap={5} flexDirection="column">
            <Grid container className="form_grid_upper_grid" gap={4}>
              <Grid
                className="input_wrapper"
                container
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
                gap={2}>
                <label>Your Name</label>
                <input name="name" required={true} type="text" placeholder="Your Name" />
              </Grid>
              <Grid
                className="input_wrapper"
                container
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
                gap={2}>
                <label>Email Address</label>
                <input name="email" type="email" required={true} placeholder="Your email" />
              </Grid>
            </Grid>
            <Grid className="form_grid_lower_grid" container>
              <Grid
                className="input_wrapper"
                container
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
                gap={2}>
                <label>Your Message</label>
                <textarea
                  name="message"
                  required={true}
                  rows="4"
                  cols="50"
                  placeholder="Your Message"
                />
              </Grid>
            </Grid>

            <Grid className="form_grid_button_grid" container>
              <Grid
                className="input_wrapper"
                container
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
                gap={3}>
                <button type="submit">
                  Shoot <Arrow />
                </button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </div>
  );
}
export default ContactPage;
