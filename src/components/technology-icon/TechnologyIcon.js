import { Zoom, Avatar, Tooltip } from '@mui/material';
import { grey } from '@mui/material/colors';

function TechnologyIcon({ technology, handleTooltipOpen, open }) {
  const imagePath = require(`../../assets/${technology.image}`);

  return (
    <Tooltip
      componentsProps={tooltipComponentProps}
      TransitionComponent={Zoom}
      title={technology.name}
      open={open} arrow>
      <Avatar 
        onClick={() => handleTooltipOpen(technology.name)} 
        sx={avatarSx}>
        <img
          className="technology-item"
          src={`${imagePath}`}
          alt={technology.name}
        />
      </Avatar>
    </Tooltip>
  )
}
export default TechnologyIcon;

const avatarSx = {
  cursor: 'pointer',
  display: 'inline',
  marginRight: '5px',
  backgroundColor: 'rgb(151 151 151 / 31%)'
}
const tooltipComponentProps = {
  tooltip: {
    sx: {
      backgroundColor: grey[900]
    }
  },
  arrow: {
    sx: {
      color: grey[900]
    }
  },
}