import { Paper, Grow, Grid, Typography, ImageList, ImageListItem } from '@mui/material';
import { grey } from '@mui/material/colors';
import './project-card.css'

function ProjectCard({ project }) {

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
              <ImageList cols={5} rowHeight={64}>
                {project.technologies.map((technology, index) => {
                const imagePath = require(`../../assets/${technology.image}`);
                return (
                  <ImageListItem key={index}>
                    <img
                      className="technology-item"
                      src={`${imagePath}`}
                      srcSet={`${imagePath}`}
                      alt={technology.name}
                      loading="lazy"
                    />
                  </ImageListItem>
                )})}
              </ImageList>
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