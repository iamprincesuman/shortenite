import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Dashboard from "./dashboard/Dashboard.jsx";
import Home from "./home/Home.jsx";
import Links from "./dashboard/pages/Links.jsx";
import Qr from "./dashboard/pages/Qr.jsx";
import Settings from "./dashboard/pages/Settings.jsx";
import LinkInBio from "./dashboard/pages/LinkInBio.jsx";
import Details from "./dashboard/components/Details.jsx";

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />}>
          <Route exact path="links" element={<Links />} />
          <Route path="links/:id" element={<Details />} />
          <Route exact path="qrs" element={<Qr />} />
          <Route path="qrs/:id" element={<Details />} />
          <Route exact path="settings" element={<Settings />} />
          <Route exact path="link_in_bio" element={<LinkInBio />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}
export default App;
