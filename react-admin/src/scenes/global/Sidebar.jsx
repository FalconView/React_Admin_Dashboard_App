import { useState } from "react";
import { useProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro--sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

const Sidebar = () => {
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" elemet={<Dashboard />} />
              {/* <Route path="/team" elemet={<Team />} /> */}
              {/*<Route path="/contacts" elemet={<Contacts />} />
               */}
              {/* <Route path="/invoices" elemet={<Invoices />} />
               */}
              {/* <Route path="/form" elemet={<Form />} />
               */}
              {/* <Route path="/bar" elemet={<Bar />} />
               */}
              {/* <Route path="/pie" elemet={<Pie />} />
               */}
              {/* <Route path="/line" elemet={<Line />} />
               */}
              {/* <Route path="/faq" elemet={<FAQ />} />
               */}
              {/* <Route path="/geography" elemet={<Geography />} />
               */}
              {/* <Route path="/calendar" elemet={<Calendar />} />
               */}
            </Routes>
          </main>
        </div>
        ;
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Sidebar;
