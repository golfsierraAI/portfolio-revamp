import { Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './index.scss';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getResumeData } from './services';
import Loader from '../../commonComponents/loader';
import InternalServerError from '../../commonComponents/serverError';
function Resume() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasErrorOccured, setHasErrorOccured] = useState('');
  const navigate = useNavigate();

  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    populateApiData();
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const populateApiData = async () => {
    setIsLoading(true);
    try {
      const response = await getResumeData();
      const data = await response.json();
      setApiData(data);
    } catch (err) {
      setHasErrorOccured(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const renderSkillsAndContact = (data) => {
    return (
      <Grid className="skills_and_contacts_wrapper" direction="column" container item gap={5}>
        <Grid className="contacts_wrapper" direction="column" container item gap={2}>
          <h6 className="green_shadow" onClick={() => navigate(data.portfolioLink)}>
            gourav.sharma
          </h6>
          <p className="icon_wrapper">
            <LocationOnIcon className="location_icon" /> {data.location}
          </p>
          <a className="green_shadow" href="mailto:gourav.npm@gmail.com">
            {data.email}
          </a>
          <a className="icon_wrapper" href={data.linkedInURL} target="_blank" rel="noreferrer">
            <LinkedInIcon className="linkedin_icon" /> golfSierra
          </a>
        </Grid>
        <Grid className="skills_wrapper" direction="column" container item gap={2}>
          <h2>Skills</h2>
          <ul>
            {data.skills.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
        </Grid>
      </Grid>
    );
  };

  const renderAllOrganisations = (data = apiData.experienceSection.organisationList) => {
    return data.map((item, index) => {
      return (
        <Grid
          className="individual_exp_wrapper"
          container
          flexDirection="column"
          gap={2}
          key={index}>
          <Grid
            className="section_company_name_role_heading"
            container
            justifyContent="space-between"
            alignItems="center">
            <h3>
              <span className="company_name">{item.companyName}</span>{' '}
              <span>&mdash;{item.role}</span>
            </h3>
            <p>{item.duration}</p>
          </Grid>
          <p>{item.description}</p>
          <ul className="bullet_list">
            {item.bulletPoints.map((bullet, index) => {
              return <li key={index}>{bullet}</li>;
            })}
          </ul>
        </Grid>
      );
    });
  };
  const renderContentFromData = (data = apiData) => {
    return (
      <div className="resume_wrapper">
        <Grid container className="resume">
          <Grid className="resume_left_grid" container flexDirection="column" item flex={1}>
            {renderSkillsAndContact(data.contactAndSkills)}
          </Grid>
          <Grid
            className="resume_right_grid"
            container
            flexDirection="column"
            item
            flex={3}
            gap={4}>
            <Grid className="resume_header" container gap={2} flexDirection="column">
              <h1>{data.name}</h1>
              <h2 className="role">{data.resumeHeadingSection.role}</h2>
              <p>{data.resumeHeadingSection.description}</p>
            </Grid>
            <Grid
              className="section"
              container
              flexDirection="column"
              gap={3}
              alignItems="flex-start">
              <p className="section_heading green_shadow">Experience</p>
              <p className="section_subheading">{data.experienceSection.description}</p>

              {renderAllOrganisations(data.experienceSection.organisationList)}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  };
  return isLoading ? (
    <Loader />
  ) : hasErrorOccured ? (
    <InternalServerError />
  ) : (
    renderContentFromData(apiData)
  );
}
export default Resume;
