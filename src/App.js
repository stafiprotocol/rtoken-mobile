import { useWeb3React } from "@web3-react/core";
import { Spin } from "antd";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useHistory
} from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import AppHeader from "./components/AppHeader";
import { useAppDispatch, useAppSelector } from "./hooks";
import Dashboard from "./pages/Dashboard";
import Stake from "./pages/Stake";
import { handleEthAccount, reloadData } from "./redux/reducers/rETHClice";
import { getRem } from "./util/remUtil";

function App() {
  const { loading } = useAppSelector((state) => {
    return {
      loading: state.globalModule.loading,
    };
  });

  return (
    <Router>
      <Spin spinning={loading} size="large" tip="loading">
        <Container>
          <Switch>
            <Route path="/">
              <AppContent />
            </Route>
          </Switch>
        </Container>
      </Spin>
    </Router>
  );
}

function AppContent() {
  const history = useHistory();
  const appDispatch = useAppDispatch();
  const { account } = useWeb3React();
  const { ethAccountAddress } = useAppSelector((state) => {
    return {
      ethAccountAddress:
        state.rETHModule.ethAccount && state.rETHModule.ethAccount.address,
    };
  });

  useEffect(() => {
    console.log("ethAccountAddress: ", ethAccountAddress);
    console.log("useWeb3React account: ", account);
    account && appDispatch(handleEthAccount(account));
    // ethAccountAddress && appDispatch(reloadData());
    appDispatch(reloadData());
  }, [history, appDispatch, ethAccountAddress, account]);

  return (
    <ContentContainer>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          backgroundColor: "#23292F",
          zIndex: 100,
        }}
      >
        <AppHeader />
      </div>

      <div style={{ marginTop: getRem(180) }}>
        <Switch>
          <Route path="/stake">
            <Stake />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Redirect to={"/stake"} />
          </Route>
        </Switch>
      </div>
    </ContentContainer>
  );
}

const Container = styled.div({
  flex: 1,
  height: "100vh",
  overflow: "scroll",
  backgroundColor: "#23292F",
});

const ContentContainer = styled.div({
  maxWidth: "1124px",
  margin: "auto",
  height: "100%",
});

export default App;
