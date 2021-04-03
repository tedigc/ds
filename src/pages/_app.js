import { Layout } from "../layouts";
import "../styles/globals.css";
// import "../styles/theme.css";

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
