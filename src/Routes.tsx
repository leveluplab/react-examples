import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App";
import RunTimeError from "./RunTimeError";
import InputFieldBugsWithKeys from "./ExploreReactKeys/InputFieldBugsWithKeys";
import DOMBugsWithKeys from "./ExploreReactKeys/DOMBugsWithKeys";
import PerformanceBugsWithKeys from "./ExploreReactKeys/PerformanceBugsWithKeys";
import ListOrderBugsWithKeys from "./ExploreReactKeys/ListOrderBugsWithKeys";
import BugsWithDuplicateKeys from "./ExploreReactKeys/BugsWithDuplicateKeys";

const appRouting = (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/run-time-error" element={<RunTimeError />} />
      <Route path="/input-field-bugs-with-keys" element={<InputFieldBugsWithKeys />} />
      <Route path="/dom-bugs-with-keys" element={<DOMBugsWithKeys />} />
      <Route path="/performance-bugs-with-keys" element={<PerformanceBugsWithKeys />} />
      <Route path="/list-order-bugs-with-keys" element={<ListOrderBugsWithKeys />} />
      <Route path="/bugs-with-duplicate-keys" element={<BugsWithDuplicateKeys />} />
    </Routes>
  </Router>
);

export default appRouting;