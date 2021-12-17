import { useEffect, useState } from 'react';
import { TimelineItem, TimelineSeparator,
  TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { Code, PointOfSale, Storefront } from '@mui/icons-material';
import { grey } from '@mui/material/colors';

function MyTimelineItem({ job, style, index, expanded, handleAccordion }) {
  const [descriptionLines, setDescriptionLines] = useState([]);

  useEffect(() => {
    setDescriptionLines(job.description.split('\n'));
  }, [job.description]);

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

  return (
    <Accordion style={style} sx={rootSx} expanded={expanded} onChange={() => handleAccordion(index)}>
      <AccordionSummary
        sx={summarySx}
        expandIcon={<ExpandMore />}
      >
        <TimelineItem>
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
            <Typography>{ job.company }</Typography>
            <Typography>Fim: { job.end }</Typography>
            <Typography>Inicio: { job.start }</Typography>
          </TimelineContent>
        </TimelineItem>
      </AccordionSummary>
      <AccordionDetails onClick={() => handleAccordion(index)}>
        { descriptionLines.map((description, index) => (
          <Typography key={index}>
            { description }
          </Typography>
        )) }
      </AccordionDetails>
    </Accordion>
  );
}
export default MyTimelineItem;

const rootSx = {
  background: grey[700],
  color: 'white'
}

const summarySx = {
  root: {
    margin: 0
  }
}