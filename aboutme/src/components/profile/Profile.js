import { Grid, Paper } from '@mui/material';
import { grey } from '@mui/material/colors';
import { MyInfo } from '../my-info/MyInfo';
import './profile.css';

function Profile() {
  return (
    <div>
      <Paper sx={rootSx}>
        <Paper className="code-pattern">
          <Grid container spacing={2}>
            <Grid className="image-center-sx" item xs={12} lg="auto">
              <Paper className="avatar-container"></Paper>
            </Grid>
            <Grid item xs={12} sm>
              <MyInfo />
            </Grid>
            <Grid className="image-center-sx" item xs={12} lg="auto">
              <Paper className="iftm-gradient">
                <Paper className="iftm-container" />
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Paper>
    </div>
  );
}

export default Profile;

const rootSx = {
  background: grey[800]
}