import { Grid, Paper, Typography, Slide, Divider } from '@mui/material';
import { grey } from '@mui/material/colors';
import './profile.css';

function Profile() {
  return (
    <div>
      <Slide direction="down" in mountOnEnter unmountOnExit {...{ timeout: 850 }}>
        <Paper sx={rootSx}>
          <Paper className="code-pattern">
            <Grid container spacing={2}>
              <Grid className="image-center-sx" item xs={12} sm="auto">
                <Paper className="avatar-container"></Paper>
              </Grid>
              <Grid item xs={12} sm>
                <Paper sx={descriptionSx}>
                  <Typography sx={nomeSx} component="h1">
                    Gustavo William de Bessa
                  </Typography>
                  <Typography sx={sobreSx}>
                    Desenvolvedor de soluções web/desktop/mobile.
                  </Typography>
                  <Divider sx={dividerSx} />
                  <Typography sx={sobreSx}>
                    Analista e Desenvolvedor de Sistemas - IFTM
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Paper>
      </Slide>
    </div>
  );
}

export default Profile;

const rootSx = {
  background: grey[800]
}
const descriptionSx = {
  background: grey[700],
  padding: '10px'
}
const nomeSx = { 
  color: '#fff',
  fontWeight: 600,
  fontSize: '22px'
}
const sobreSx = { 
  color: '#fff',
  fontSize: '16px'
}
const dividerSx = { 
  borderWidth: '1px'
}
