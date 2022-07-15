import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const MuiAcordian = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Typography marginBottom="2rem" marginTop="2rem" variant='h4'>
        Accordian
      </Typography>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(_event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordian 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum non
            ipsa magni alias sunt omnis assumenda fugiat veritatis minus illum?
            Aspernatur id deserunt assumenda consequuntur minus cumque
            necessitatibus explicabo illum.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(_event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordian 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum non
            ipsa magni alias sunt omnis assumenda fugiat veritatis minus illum?
            Aspernatur id deserunt assumenda consequuntur minus cumque
            necessitatibus explicabo illum.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(_event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordian 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum non
            ipsa magni alias sunt omnis assumenda fugiat veritatis minus illum?
            Aspernatur id deserunt assumenda consequuntur minus cumque
            necessitatibus explicabo illum.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MuiAcordian;
