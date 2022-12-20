import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "@mui/icons-material";

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
              <Route path="/" element={<Dashboard />} />
              <Routes>
                <Route path="/" elemet={<Dashboard />} />
                {/* <Route path="/team" elemet={<Team />} /> */}
                {/* <Route path="/contacts" elemet={<Contacts />} />
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
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
