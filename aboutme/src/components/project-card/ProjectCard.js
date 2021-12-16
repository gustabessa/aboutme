import { Paper, Grow, Zoom, Grid, Typography, Avatar, Tooltip } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useState } from 'react';
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
          <Grid container spacing={2}>
            <Grid className="image-center-sx" item xs={12} sm="auto">
              { project.images.map(
                (image, index) => {
                  const imagePath = require(`../../assets/${image}`);
                  // TODO -> adicionar mecanismo de classe dinamica para comportar todos os projetos
                  return (<img className="appraise-img" key={index} src={imagePath} alt="" />)
                })
              }
            </Grid>
            <Grid item xs={12} sm>
              <Paper sx={descriptionSx}>
                <Typography sx={sobreSx}>
                  { project.description }
                </Typography>
              </Paper>
              <Paper sx={technologiesSx}>
                {/* TODO ->  Fazer essa lista de imagens manualmente sem o componente */}
                {project.technologies.map((technology, index) => {
                  const imagePath = require(`../../assets/${technology.image}`);
                  return (
                    <Tooltip
                      componentsProps={tooltipComponentProps}
                      TransitionComponent={Zoom}
                      key={index} title={technology.name}
                      open={technology.name === tooltip} arrow>
                      <Avatar 
                        onClick={() => handleTooltipOpen(technology.name)} 
                        sx={avatarSx}>
                        <img
                          className="technology-item"
                          src={`${imagePath}`}
                          alt={technology.name}
                        />
                      </Avatar>
                    </Tooltip>
                )})}
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
const avatarSx = {
  cursor: 'pointer',
  display: 'inline',
  marginRight: '5px',
  backgroundColor: 'rgb(151 151 151 / 31%)'
}
const tooltipComponentProps = {
  tooltip: {
    sx: {
      backgroundColor: grey[900]
    }
  },
  arrow: {
    sx: {
      color: grey[900]
    }
  },
}