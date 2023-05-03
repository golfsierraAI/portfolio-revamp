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
          As a Frontend developer, I have gained valuable experience and developed my skills in
          React, a popular JavaScript library for building user interfaces. I have worked on a
          variety of projects, from small-scale websites to large, complex applications, and have
          consistently delivered high-quality products using best practices to optimize performance.
        </p>
        <p>
          In terms of technical skills, I am well-versed in modern front-end development workflows
          and tools, including Webpack, Babel, and ESLint. I have deep experience with React and
          related libraries and tools, such as Redux, React Router, and Styled Components.
          Additionally, I remain committed to staying up-to-date with the latest trends and best
          practices in the industry by reading industry publications and implementing them in
          various personal projects.
        </p>
        <p>
          Looking forward, I am excited to continue building on this foundation and taking on new
          challenges in the future. My skills and experience make me a valuable asset to any
          development team, and I am confident in my ability to deliver high-quality products and
          collaborate effectively with others.
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
