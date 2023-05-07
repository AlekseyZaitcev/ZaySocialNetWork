import { Container } from "@mui/material";
import Footer from "./GlobalComponents/Footer";
import Header from "./GlobalComponents/Header";
import Main from "./GlobalComponents/Main";

const HomePage = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Main />
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
