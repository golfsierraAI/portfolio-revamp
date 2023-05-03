import { Grid } from '@mui/material';
import './index.scss';
import Arrow from '../../assets/Arrow';
function ProjectsAndBlogsPage() {
  const redirect = () => {};
  return (
    <div id="projects" className="projects_and_blogs_wrapper">
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        flexDirection="row"
        className="main_grid">
        <Grid container justifyContent="space-around" alignItems="center" className="inner_grid">
          <div data-aos="flip-left" className="inner_grid_wrapper">
            <div>
              <h1>I build & design stuff</h1>
              <p>
                Open source
                <br /> projects, web apps
                <br /> and experimentals.
              </p>
            </div>
            <div className="button_wrapper">
              <button onClick={() => redirect('projects')}>
                See my work <Arrow />
              </button>
            </div>
          </div>
        </Grid>
        <Grid container justifyContent="space-around" alignItems="center" className="inner_grid">
          <div data-aos="flip-right" className="inner_grid_wrapper">
            <div>
              <h1>I write, sometimes</h1>
              <p>
                About backend dev,
                <br /> frontend dev and learning
              </p>
            </div>
            <div className="button_wrapper">
              <button onClick={() => redirect('blog')}>
                Read my articles <Arrow />
              </button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default ProjectsAndBlogsPage;
