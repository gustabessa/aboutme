import { Paper, Grow, Grid, Typography } from '@mui/material';
import { grey, yellow } from '@mui/material/colors';
import { useState } from 'react';
import TechnologyIcon from '../technology-icon/TechnologyIcon';
import './project-card.css'

function ProjectCard({ project }) {
  const [tooltip, setTooltip] = useState(null);
  const [tooltipTimeout, setTooltipTimeout] = useState(null);

  function handleTooltipOpen (name) {
    clearTimeout(tooltipTimeout);
    if (name === tooltip) {
      setTooltip(null);
    } else {
      setTooltip(name);
      const timeout = setTimeout(() => {
        setTooltip(null);
      }, 2000);
      setTooltipTimeout(timeout);
    }
  }

  return (
    <Paper sx={containerSx}>
      <Grow in {...{ timeout: 500 }}>
        <Paper sx={rootSx}>
          { project.disclaimer &&
            <Paper sx={disclaimerSx}>
              <Typography sx={{fontWeight: 600}}>
                { `${project.disclaimer.text} ` }
                <a href={project.disclaimer.url} target="_blank" rel="noreferrer">{ project.disclaimer.url }</a>
              </Typography>
            </Paper>
          }
          <Grid container spacing={2}>
              { project.images.map(
                (image, index) => {
                  const imagePath = require(`../../assets/${image.name}`);
                  return (<Grid className="image-center-sx" key={index} item xs={image.xs} sm={image.sm} md={image.md} lg={image.lg}>
                    <img className={image.className} src={imagePath} alt="" />
                    </Grid>)
                  })
              }
            <Grid item xs={12} sm>
              <Paper sx={descriptionSx}>
                <Typography sx={sobreSx}>
                  { project.description }
                </Typography>
              </Paper>
              <Paper sx={technologiesSx}>
                {project.technologies.map((technology, index) => 
                  (<TechnologyIcon key={index} technology={technology} handleTooltipOpen={handleTooltipOpen} open={technology.name === tooltip} />)
                )}
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Grow>
    </Paper>
  );
}

export default ProjectCard;

const rootSx = {
  background: grey[700],
  padding: '10px'
}
const disclaimerSx = {
  background: yellow[800],
  padding: '10px',
  marginBottom: '10px'
}
const containerSx = {
  padding: '10px',
  background: grey[800]
}
const descriptionSx = {
  background: grey[800],
  padding: '10px'
}
const technologiesSx = {
  background: grey[800],
  padding: '10px',
  marginTop: '10px'
}
const sobreSx = { 
  color: '#fff',
  fontSize: '16px'
}