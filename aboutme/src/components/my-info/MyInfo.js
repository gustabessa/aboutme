import { Email, PhoneAndroid } from "@mui/icons-material";
import { Avatar, Divider, List, ListItem, 
  ListItemAvatar, ListItemButton, ListItemText, 
  Paper, Typography } from "@mui/material";
import { grey } from '@mui/material/colors';

export function MyInfo() {
  return (
    <>
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
      <Paper sx={contactSx}>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PhoneAndroid />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              sx={sobreSx}
              primary="+55 (34) 9 9260-2474"
            />
          </ListItem>
          <Divider sx={contactDividerSx} />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Email />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              sx={{...sobreSx, ...wordBreakSx}}
              primary="gustavowbessa@gmail.com"
            />
          </ListItem>
          <Divider sx={contactDividerSx} />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar>
                  <div className ="github-avatar" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                sx={githubSx}
                onClick={() => window.open('https://github.com/gustabessa', '_blank')}
                primary="Github"
              />
            </ListItemButton>
          </ListItem>
          <Divider sx={contactDividerSx} />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar>
                  <div className ="linkedin-avatar" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                sx={githubSx}
                onClick={() => window.open('https://www.linkedin.com/in/gustavo-bessa-895854191/', '_blank')}
                primary="Linkedin"
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>
    </>
  );
}

const descriptionSx = {
  background: grey[700],
  padding: '10px'
}
const contactSx = {
  background: grey[700],
  padding: '10px',
  marginTop: '10px'
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
const wordBreakSx = {
  wordBreak: 'break-all',
}
const githubSx = { 
  color: '#fff',
  fontSize: '16px',
  cursor: 'pointer',
  textDecoration: 'underline',
  width: 'fit-content'
}
const dividerSx = { 
  borderWidth: '1px'
}
const contactDividerSx = { 
  borderWidth: '1px',
  marginTop: '3px',
  marginBottom: '3px'
}