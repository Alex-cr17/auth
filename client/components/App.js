import React from "react";
import NavigationBar from "./NavigationBar"
import { Route, BrowserRouter } from 'react-router-dom';

import Dashboard from "./Dashboard";
import SignUpPage from "./signup/SignUpPage";


class App extends React.Component {
      render() {
            return (

                  <div>
                        {/* <NavigationBar /> */}
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/login" component={SignUpPage} />
                  </div>

            )
      }
}
export default App;