import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro--sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonodeOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOUtlineOutlinedIcon from "@mui/icons-material/PieChartOUtlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

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
