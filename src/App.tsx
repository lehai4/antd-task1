import { ToastContainer } from "react-toastify";
import GlobalStyle from "./GlobalStyle/GlobalStyle";

import React from "react";

import { Layout } from "antd";

import { SideMenu, Wrapper } from "./components";
import { useAppSelector } from "./hooks/hooks";
import Router from "./routes/Router";

const { Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const user = useAppSelector((state) => state.auth.login.user);
  return (
    <Wrapper title="Main App">
      <GlobalStyle>
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        {user ? (
          <Layout hasSider>
            <Sider
              width={310}
              className="border-r border-t"
              style={{
                position: "fixed",
                left: 0,
                top: 0,
                bottom: 0,
              }}
            >
              <SideMenu />
            </Sider>
            <Layout style={{ marginLeft: 310 }}>
              <Content style={{ overflow: "initial" }}>
                <Router />
              </Content>
              <Footer style={{ textAlign: "center" }}>
                Task1 ©2023 Allright by LeChiHai
              </Footer>
            </Layout>
          </Layout>
        ) : (
          <Router />
        )}
      </GlobalStyle>
    </Wrapper>
  );
};

export default App;
