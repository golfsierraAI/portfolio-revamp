import { Grid } from '@mui/material';
import './index.scss';

function Experience() {
  return (
    <Grid
      id="experience"
      className="experience_wrapper"
      alignItems="center"
      justifyContent="center"
      container>
      <Grid
        data-aos="fade-up"
        data-aos-once
        item
        container
        className="left_grid"
        flexDirection="column"
        gap={20}
        md={12}
        lg={6}>
        <h1>Over the years,</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos vitae nulla
          repudiandae, veritatis, quia quibusdam ratione sit iste, sequi architecto minima natus
          nobis consequuntur neque? Explicabo corrupti voluptates veniam impedit?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos vitae nulla
          repudiandae, veritatis, quia quibusdam ratione sit iste, sequi architecto minima natus
          nobis consequuntur neque? Explicabo corrupti voluptates veniam impedit?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos vitae nulla
          repudiandae, veritatis, quia quibusdam ratione sit iste, sequi architecto minima natus
          nobis consequuntur neque? Explicabo corrupti voluptates veniam impedit?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos vitae nulla
          repudiandae, veritatis, quia quibusdam ratione sit iste, sequi architecto minima natus
          nobis consequuntur neque? Explicabo corrupti voluptates veniam impedit?
        </p>
      </Grid>
      <Grid
        container
        data-aos="fade-up"
        data-aos-once
        alignItems="center"
        justifyContent="flex-end"
        item
        className="right_grid"
        md={12}
        lg={6}>
        <img src="https://ik.imagekit.io/cskphntm3//tr:q-2/coding.svg" alt="avatar" />
      </Grid>
    </Grid>
  );
}
export default Experience;
