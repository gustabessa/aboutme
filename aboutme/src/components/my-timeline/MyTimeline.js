import { Timeline } from '@mui/lab';
import { useState } from 'react';
import jobs from '../../data/jobs.js'
import MyTimelineItem from './MyTimelineItem.js';
import './my-timeline.css'

function MyTimeline() {
  const [expandedItem, setExpandedItem] = useState(null);

  function handleAccordion(accordion) {
    if (expandedItem === accordion) {
      setExpandedItem(null);
    } else {
      setExpandedItem(accordion);
    }
  }

  function getStyle(index) {
    if (index === 0) {
      return {paddingTop: '10px'}
    } else if (index === jobs.length - 1) {
      return {paddingBottom: '10px'}
    }
  }

  return(
    <Timeline sx={{ p: 0, m: 0 }}>     
      {
        jobs.map((job, index) => (
          <MyTimelineItem 
            key={index}
            job={job}
            style={getStyle(index)}
            index={index}
            expanded={index === expandedItem}
            handleAccordion={handleAccordion}
          />
        ))
      }
    </Timeline>
  );
}
export default MyTimeline;