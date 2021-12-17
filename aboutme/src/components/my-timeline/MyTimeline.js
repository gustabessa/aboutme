import { Timeline, TimelineItem, TimelineSeparator,
  TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Code, PointOfSale, Storefront } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import jobs from '../../data/jobs.js'

function getJobIcon(jobType) {
  switch (jobType) {
    case 'DEV':
      return (<Code />);
    case 'REGISTER':
      return (<PointOfSale />);
    case 'SALES':
      return (<Storefront />);
    default: return <></>
  }
}

function MyTimeline() {
  return(
    <Timeline>
      {
        jobs.map((job, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineConnector />
                <TimelineDot color="primary">
                  { getJobIcon(job.type) }
                </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                { job.name }
              </Typography>
              <Typography>{ job.description }</Typography>
            </TimelineContent>
          </TimelineItem>
        ))
      }
    </Timeline>
  );
}
export default MyTimeline;