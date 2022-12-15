import { ColorModeContext, useMode } from "./theme";
import { CaseBaseline, CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import { Route, Routes } from "react-router-dom";
import { Sidebar } from "./scenes/global/Sidebar";
import { Dashboard } from "./scenes/dashboard";
import { Team } from "./scenes/team";
import { Invoices } from "./scenes/invoices";
import { Contacts } from "./scenes/contacts";
import { Bar } from "./scenes/bar";
import { Form } from "./scenes/form";
import { Line } from "./scenes/line";
import { Pie } from "./scenes/pie";
import { FAQ } from "./scenes/faq";
import { Geography } from "./scenes/geography";
import { Calendar } from "@fullcalendar/core";

function App() {
  const [theme, colorMode] = useMode();
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
              <Route path="/contacts" elemet={<Contacts />} />
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
}

export default App;
