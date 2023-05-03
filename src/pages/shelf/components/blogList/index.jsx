import { Grid } from '@mui/material';
import React from 'react';
import './index.scss';

const BlogList = ({ data }) => {
  const renderTags = (tagList) => {
    return tagList
      .map((item, index) => <span key={index}>{item + (index < 2 ? ', ' : '')}</span>)
      .slice(0, 3);
  };

  const renderPreview = (text = '') => {
    const index = text.indexOf('<p>');

    let formattedText = text
      .substring(index + 3, index + 200)
      .replace('<p>', '')
      .replace('</p>', '');

    formattedText = formattedText.includes('<')
      ? formattedText.substring(0, formattedText.indexOf('<'))
      : formattedText;

    return formattedText + '...';
  };

  const navigateToArticle = (blog) => {
    window.open(blog.link, '_blank');
  };

  const renderGridItem = (item) => {
    const publishingDate = item.pubDate.split(' ')[0];
    return (
      <div key={item.guid} onClick={() => navigateToArticle(item)} className="item_grid">
        <Grid
          className="header_item_grid"
          item
          container
          justifyContent="space-between"
          alignItems="center">
          <span>Publishing date: {publishingDate}</span>
          <span>
            <span>Tags: </span>
            {renderTags(item.categories)}
          </span>
        </Grid>
        <Grid
          flexDirection="column"
          container
          justifyContent="center"
          alignItems="flex-start"
          gap={2}
          className="item_title_and_description_wrapper">
          <h1>{item.title}</h1>
          <p>{renderPreview(item.description)}</p>
        </Grid>
      </div>
    );
  };

  const renderBlogGrid = (data) => {
    const dataToMap = data.items;

    return dataToMap.map((item) => {
      return renderGridItem(item);
    });
  };

  return renderBlogGrid(data);
};

export default BlogList;
