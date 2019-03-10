import React from "react";
import { Header, ReduxForm, TodoList } from "components";

const Home = () => (
  <React.Fragment>
    <Header />
    <ReduxForm />
    <TodoList />
  </React.Fragment>
);

export default Home;