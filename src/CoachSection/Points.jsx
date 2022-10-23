import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

export default function Points({ point1, point2, point3, point4 }) {
  return (
    <Box sx={{ width: "100%", mb: 5 }}>
      <Divider />
      {/* <nav aria-label="secondary mailbox folders"> */}
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={point1} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemText primary={point2} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={point3} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={point4} />
          </ListItemButton>
        </ListItem>
        <Divider />
      </List>
      {/* </nav> */}
    </Box>
  );
}
