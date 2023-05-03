import { Grid } from '@mui/material';
import './index.scss';
import HomepageLeftDiv from './components/homepageLeftDiv';
import HomepageRightDiv from './components/homepageRightDiv';
import HomePageImageDiv from './components/homepageImageDiv';
import DescriptionPage from '../description';
import Experience from '../experience';
import ProjectsAndBlogsPage from '../projectsAndBlogs';
import ContactPage from '../contact';
import Footer from '../footer';
import Header from '../../commonComponents/header';

import RightNav from '../../commonComponents/rightNav';
function HomePage({ currentElement, setCurrentElement }) {
  return (
    <>
      <Header currentElement={currentElement} currentScreen={'main'} />
      <RightNav currentElement={currentElement} setCurrentElement={setCurrentElement} />
      <div id="home">
        <Grid
          id="home"
          className="homepage_container"
          container
          sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
          <HomepageLeftDiv />
          <HomePageImageDiv />
          <HomepageRightDiv />
        </Grid>
      </div>
      <DescriptionPage />
      <Experience />
      <ProjectsAndBlogsPage />
      <ContactPage />
      <Footer />
    </>
  );
}
export default HomePage;
