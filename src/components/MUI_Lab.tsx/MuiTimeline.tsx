import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Typography } from "@mui/material";

// Timeline can be used for showing delivery tracking as in shipped, packed, delivered, etc

const MuiTimeline = () => {
  return (
    <>
      <Typography variant="h5" marginTop="3rem" marginBottom="1rem">
        Mui Timeline
      </Typography>
      <Timeline position="left">
        <TimelineItem>
          <TimelineOppositeContent>10:00 am</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>City A</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>10:00 am</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>City B</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>10:00 am</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>City C</TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};

export default MuiTimeline;
