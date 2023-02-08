import { Layout } from 'antd';
import { headerStyle, contentStyle, footerStyle } from "./LayoutStyles"

const { Header, Footer, Content } = Layout;

const App = () => (
    <Layout>
      <Header style={headerStyle}>Header</Header>
      <Content style={contentStyle}>Content</Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
);
export default App;