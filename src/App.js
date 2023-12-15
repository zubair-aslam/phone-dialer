import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dialer from "./Pages/Dialer";
import DialedCallPage from "./Pages/DialedCallPage";
import CallLogPage from "./Pages/CallLogPage";
import { Provider } from "react-redux";
import {store} from "./Redux/Store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex justify-center items-center w-full min-h-screen h-full bg-gray-400">
          <Routes>
            <Route path="/" exact element={<Dialer />} />
            <Route
              path="/dialed-call/:phoneNumber"
              element={<DialedCallPage />}
            />
            <Route path="/call-log" element={<CallLogPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
