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
            <ListItemText primary="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemText primary="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," />
          </ListItemButton>
        </ListItem>
        <Divider />
      </List>
      {/* </nav> */}
    </Box>
  );
}
