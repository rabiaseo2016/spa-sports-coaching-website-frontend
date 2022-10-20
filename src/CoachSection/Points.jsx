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

export default function Points() {
  return (
    <Box sx={{ width: "100%", mb: 5 }}>
      <Divider />
      {/* <nav aria-label="secondary mailbox folders"> */}
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Over 10 Years of coaching experience" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemText primary="Current Division 2 players - 4 times league champion" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Former HK Team representative" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="3 times University Champion and 1 MVP" />
          </ListItemButton>
        </ListItem>
        <Divider />
      </List>
      {/* </nav> */}
    </Box>
  );
}
