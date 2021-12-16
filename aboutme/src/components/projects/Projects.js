import { useState } from 'react';
import ProjectCard from '../project-card/ProjectCard'
import { Paper, Slide, Tabs, Tab } from '@mui/material';
import { grey } from '@mui/material/colors';
import projects from '../../data/projects.js'

function Projects() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Slide direction="down" in mountOnEnter unmountOnExit {...{ timeout: 850 }}>
        <Paper sx={rootSx}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable auto tabs example"
          >
            {
              projects.map((project, index) => (
                <Tab key={index} sx={tabSx} label={project.name} />
              ))
            }
          </Tabs>
          {
            projects.map((project, index) => (
              value === index && (<ProjectCard key={index} project={project} />)
            ))
          }
        </Paper>
      </Slide>
    </div>
  );
}

export default Projects;

const rootSx = {
  background: grey[800],
  marginTop: '10px'
}
const tabSx = {
  fontWeight: 600,
  color: '#fff'
}
