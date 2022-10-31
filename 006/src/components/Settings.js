import { useState } from "react";


import {
    Drawer,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
  } from '@mui/material';
  import {
    CheckBoxOutlineBlankOutlined,
    DraftsOutlined,
    HomeOutlined,
    InboxOutlined,
    MailOutline,
    ReceiptOutlined,
  } from "@mui/icons-material";
  
  const data = [
    {
      name: "Home",
      icon: <HomeOutlined />,
    },
    { name: "Measurement Unit", icon: <InboxOutlined /> },
    { name: "Calendar View", icon: <CheckBoxOutlineBlankOutlined /> },
    { name: "Saved Locations", icon: <MailOutline /> },
  ];
  
  function Settings() {
    const [open, setOpen] = useState(false);
  
    const getList = () => (
      <div style={{ width: 250 }} onClick={() => setOpen(false)}>
        {data.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </div>
    );
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Settings</Button>
        <Drawer open={open} anchor={"right"} onClose={() => setOpen(false)}>
          {getList()}
        </Drawer>
      </div>
    );
  }
  
  export default Settings;