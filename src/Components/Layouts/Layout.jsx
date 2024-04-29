import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the container fills the entire viewport height */
`;

const StyledContent = styled.div`
  flex: 1; /* Allow the content area to grow to fill available space */
`;

const StyledFooter = styled.footer`
  color: white;
  text-align: center;
  padding: 1rem 0;
`;

function Layout() {
  return (
    <StyledContainer>
      <Header />
      <StyledContent>
        <Outlet />
      </StyledContent>
      <StyledFooter>
        <Footer />
      </StyledFooter>
    </StyledContainer>
  );
}

export default Layout;
