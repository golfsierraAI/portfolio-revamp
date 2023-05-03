import { Grid } from '@mui/material';
import './index.scss';
import GearAnimation from '../../assets/backend.json';
import ReactAnimation from '../../assets/react.json';

import Lottie from 'react-lottie';

function DescriptionPage() {
  const defaultOptionsBackend = {
    loop: true,
    autoplay: true,
    animationData: GearAnimation,
  };

  const defaultOptionsFrontend = {
    loop: true,
    autoplay: true,
    animationData: ReactAnimation,
  };
  return (
    <div id="desc" className="desc_wrapper">
      <Grid
        className="main_grid"
        flexDirection="column"
        container
        alignItems="center"
        justifyContent="flex-start">
        <Grid
          data-aos="fade-up"
          data-aos-once
          className="upper_grid"
          item
          container
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <Grid
            className="text_grid"
            md={12}
            lg={6}
            flexDirection="column"
            justifyContent="center"
            gap={3}
            item
            container>
            <h1>Backend</h1>
            <p>
              As an experienced backend engineer proficient in Java and Spring Boot, I have a proven
              track record of designing and developing scalable backend systems. I am skilled in
              writing optimized code, implementing best practices, and troubleshooting issues. My
              collaborative approach, technical expertise, and dedication to quality make me a
              valuable asset to any project.
            </p>
          </Grid>
          <Grid
            className="image_grid"
            item
            container
            justifyContent="center"
            alignItems="center"
            md={12}
            lg={5}>
            <div className="lottie_1">
              <Lottie options={defaultOptionsBackend} />
            </div>
          </Grid>
        </Grid>

        <Grid
          data-aos="fade-up"
          data-aos-once
          className="lower_grid"
          item
          container
          alignItems="center"
          justifyContent="space-between"
          flexDirection="row-reverse">
          <Grid
            className="text_grid"
            md={12}
            lg={6}
            flexDirection="column"
            justifyContent="center"
            gap={3}
            item
            container>
            <h1>Frontend</h1>
            <p>
              In building JavaScript applications, I'm equipped with just the right tools, and can
              absolutely function independently of them to deliver fast, resilient solutions
              optimized for scale — performance and scalabilty are priorities on my radar.
            </p>
          </Grid>
          <Grid
            className="image_grid"
            item
            container
            justifyContent="center"
            alignItems="center"
            md={12}
            lg={6}>
            <div className="lottie_2">
              <Lottie options={defaultOptionsFrontend} />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default DescriptionPage;
