import React from "react";
import { QueryClientProvider } from "react-query";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Users from "./pages/users";
import UserDetails from "./pages/users-details";
import queryClient from "./query-client";

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Switch>
          <Route exact path="/" component={Users} />
          <Route exact path="/user/:username" component={UserDetails} />
        </Switch>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
