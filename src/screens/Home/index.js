import React from "react";
import { Header, ReduxForm, TodoList, Modal } from "components";

const Home = () => (
  <React.Fragment>
    <Header />
    <ReduxForm />
    <TodoList />
    <Modal />
  </React.Fragment>
);

export default Home;