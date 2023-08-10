import { ToastContainer } from "react-toastify";
import GlobalStyle from "./GlobalStyle/GlobalStyle";

import React from "react";

import { Layout } from "antd";

import { SideMenu, Wrapper } from "./components";
import Router from "./routes/Router";

const { Content, Footer, Sider } = Layout;

const App: React.FC = () => {
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
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            width={310}
            className="border-r border-t"
            trigger={null}
            collapsible
          >
            <SideMenu />
          </Sider>
          <Layout>
            <Content style={{ background: "#fff" }}>
              <Router />
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Task1 ©2023 Allright by LeChiHai
            </Footer>
          </Layout>
        </Layout>
      </GlobalStyle>
    </Wrapper>
  );
};

export default App;
