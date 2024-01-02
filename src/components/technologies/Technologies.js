import { Divider, Paper, Slide, Typography } from "@mui/material";
import technologies from '../../data/technologies'
import { useTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import TechnologyIcon from "../technology-icon/TechnologyIcon";
import { useState } from "react";

function Technologies() {
  const { backend, frontend, mobile, other } = technologies;
  const theme = useTheme();
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

  const titleSx = {
    fontWeight: 600,
    color: theme.palette.primary.main
  }
  const titleDividerSx = { 
    borderWidth: '1px',
    marginTop: '3px',
    marginBottom: '3px',
    borderColor: theme.palette.primary.main
  }

  return (
    <Slide direction="right" in mountOnEnter unmountOnExit {...{ timeout: 850 }}>
      <Paper sx={rootSx}>
        <Typography sx={titleSx}>Tecnologias</Typography>
        <Divider sx={titleDividerSx} />
        <Typography sx={subtitleSx}>Frontend: </Typography>
        {
          frontend.map((technology, index) => 
          (<TechnologyIcon key={index} technology={technology} handleTooltipOpen={handleTooltipOpen} open={technology.name === tooltip} />)
        )}
        <Divider sx={dividerSx} />
        <Typography sx={subtitleSx}>Backend: </Typography>
        {
          backend.map((technology, index) => 
          (<TechnologyIcon key={index} technology={technology} handleTooltipOpen={handleTooltipOpen} open={technology.name === tooltip} />)
        )}
        <Divider sx={dividerSx} />
        <Typography sx={subtitleSx}>Mobile: </Typography>
        {
          mobile.map((technology, index) => 
          (<TechnologyIcon key={index} technology={technology} handleTooltipOpen={handleTooltipOpen} open={technology.name === tooltip} />)
        )}
        <Divider sx={dividerSx} />
        <Typography sx={subtitleSx}>Outros: </Typography>
        {
          other.map((technology, index) => 
          (<TechnologyIcon key={index} technology={technology} handleTooltipOpen={handleTooltipOpen} open={technology.name === tooltip} />)
        )}
      </Paper>
    </Slide>
  );
}
export default Technologies;

const rootSx = {
  background: grey[800],
  marginTop: '10px',
  padding: '10px'
}
const dividerSx = { 
  borderWidth: '1px',
  marginTop: '10px',
  marginBottom: '10px'
}
const subtitleSx = {
  color: '#FFF'
}