import React from "react";
import { Header, ReduxForm } from "components";
import TodoList from "../../components/TodoList";

const Home = () => (
  <React.Fragment>
    <Header />
    <ReduxForm />
    <TodoList />
  </React.Fragment>
);

export default Home;