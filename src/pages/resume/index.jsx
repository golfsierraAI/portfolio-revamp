import { Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './index.scss';
import { useLayoutEffect } from 'react';
function Resume() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const apiData = {
    name: 'Gourav sharma',
    resumeHeadingSection: {
      role: 'Expert Frontend Developer',
      description:
        'Detail-oriented Front End Developer with more than 1 year of development experience working with HTML, CSS, Javascript, React.js, and TypeScript. Highly adept at both independent and collaborative projects, with an emphasis on mobile-first website development.',
    },
    contactAndSkills: {
      portfolioLink: '/',
      location: 'New Delhi, India',
      email: 'gourav.npm@gmail.com',
      linkedInURL: 'https://www.linkedin.com/in/golfSierra/',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'SCSS',
        'TypeScript',
        'React.js',
        'Redux',
        'Redux-saga',
        'Redux-thunk',
        'Material UI',
        'React-router',
        'Angular',
        'Node.js',
        'Java',
        'Springboot',
        'MySQL',
        'MongoDB',
        'Git ',
        'Amazon Lambda',
      ],
    },
    experienceSection: {
      description:
        "I've worked on a handful of web projects over the years, some of which were for the following organizations:",

      organisationList: [
        {
          companyName: 'Optum, United health group',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum corrupti nemo odio iure fugit non veritatis tenetur eius totam deleniti libero voluptatem tempora cumque ut, praesentium sed quod ab pariatur!',
          duration: 'Jan 2023 - Present',
          role: 'Associate Software Engineer 2',
          bulletPoints: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente adipisci quos ducimus possimus alias. Sit culpa similique voluptas voluptatum aut voluptate eaque quos a doloribus. Reiciendis quasi itaque labore ea?',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente adipisci quos ducimus possimus alias. Sit culpa similique voluptas voluptatum aut voluptate eaque quos a doloribus. Reiciendis quasi itaque labore ea?',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente adipisci quos ducimus possimus alias. Sit culpa similique voluptas voluptatum aut voluptate eaque quos a doloribus. Reiciendis quasi itaque labore ea?',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente adipisci quos ducimus possimus alias. Sit culpa similique voluptas voluptatum aut voluptate eaque quos a doloribus. Reiciendis quasi itaque labore ea?',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente adipisci quos ducimus possimus alias. Sit culpa similique voluptas voluptatum aut voluptate eaque quos a doloribus. Reiciendis quasi itaque labore ea?',
          ],
        },
        {
          companyName: 'Highradius',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum corrupti nemo odio iure fugit non veritatis tenetur eius totam deleniti libero voluptatem tempora cumque ut, praesentium sed quod ab pariatur! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum corrupti nemo odio iure fugit non veritatis tenetur eius totam deleniti libero voluptatem tempora cumque ut, praesentium sed quod ab pariatur!',
          role: 'Associate Software Engineer 1, Software Developer Intern',
          duration: 'Dec 2020 - September 2022',
          bulletPoints: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente adipisci quos ducimus possimus alias. Sit culpa similique voluptas voluptatum aut voluptate eaque quos a doloribus. Reiciendis quasi itaque labore ea?',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente adipisci quos ducimus possimus alias. Sit culpa similique voluptas voluptatum aut voluptate eaque quos a doloribus. Reiciendis quasi itaque labore ea?',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente adipisci quos ducimus possimus alias. Sit culpa similique voluptas voluptatum aut voluptate eaque quos a doloribus. Reiciendis quasi itaque labore ea?',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente adipisci quos ducimus possimus alias. Sit culpa similique voluptas voluptatum aut voluptate eaque quos a doloribus. Reiciendis quasi itaque labore ea?',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente adipisci quos ducimus possimus alias. Sit culpa similique voluptas voluptatum aut voluptate eaque quos a doloribus. Reiciendis quasi itaque labore ea?',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente adipisci quos ducimus possimus alias. Sit culpa similique voluptas voluptatum aut voluptate eaque quos a doloribus. Reiciendis quasi itaque labore ea?',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente adipisci quos ducimus possimus alias. Sit culpa similique voluptas voluptatum aut voluptate eaque quos a doloribus. Reiciendis quasi itaque labore ea?',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente adipisci quos ducimus possimus alias. Sit culpa similique voluptas voluptatum aut voluptate eaque quos a doloribus. Reiciendis quasi itaque labore ea?',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente adipisci quos ducimus possimus alias. Sit culpa similique voluptas voluptatum aut voluptate eaque quos a doloribus. Reiciendis quasi itaque labore ea?',
          ],
        },
      ],
    },

    projectSection: {
      description:
        'Links to some of my work can be found on <link>gouravsharma.netlify.app/work</link> and details can be provided upon request via a scheduled demo call.',
    },
  };

  const renderSkillsAndContact = (data) => {
    return (
      <Grid className="skills_and_contacts_wrapper" direction="column" container item gap={5}>
        <Grid className="contacts_wrapper" direction="column" container item gap={2}>
          <a className="green_shadow" href={data.portfolioLink}>
            gourav.sharma
          </a>
          <p>{data.location}</p>
          <a className="green_shadow" href="mailto:gourav.npm@gmail.com">
            {data.email}
          </a>
          <a className="linkedin_wrapper" href={data.linkedInURL} target="_blank" rel="noreferrer">
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
  return renderContentFromData(apiData);
}
export default Resume;
