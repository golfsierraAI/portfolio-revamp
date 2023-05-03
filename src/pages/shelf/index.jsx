import React from 'react';
import { fetchBlogPosts } from './service';
import Header from '../../commonComponents/header';
import { Grid } from '@mui/material';
import './index.scss';
import BlogList from './components/blogList';
import Loader from '../../commonComponents/loader';

function Shelf() {
  const [apiData, setApiData] = React.useState(undefined);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    populateData();
  }, []);

  const populateData = async () => {
    setIsLoading(true);
    const data = await fetchBlogPosts();
    setApiData(data);
    setIsLoading(false);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Header currentScreen={'Shelf'} />
      <div className="shelf_wrapper">
        <Grid
          className="main_grid_blog_list"
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={6}>
          <h1>
            <span>/</span>shelf
          </h1>
          <Grid
            className="items_grid_blog_list"
            container
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={10}>
            {apiData && <BlogList data={apiData} />}
          </Grid>
        </Grid>
      </div>
    </>
  );
}
export default Shelf;
