import { Paper } from '@mui/material';
import { grey } from '@mui/material/colors';
import MyTimeline from '../my-timeline/MyTimeline'
function Jobs() {
  return (
    <Paper sx={rootSx}>
      <MyTimeline />
    </Paper>
  );
}
export default Jobs;
const rootSx = {
  background: grey[800],
  marginTop: '10px',
  marginBottom: '10px',
  padding: '10px',
  color: 'white'
}