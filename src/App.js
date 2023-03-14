import "./App.css";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 4rem 1fr auto;
  grid-template-columns: 258px 1fr;
  grid-template-areas:
    "header header"
    "menu main"
    "footer footer";
`;

const Header = styled.div`
  grid-area: header;
`;

const Menu = styled.div`
  grid-area: menu;
  height: 100%;
  background: grey;
`;

const Footer = styled.footer`
  grid-area: footer;
  background: blue;
  height: 10rem;
`;

function App() {
  return (
    <div className="App">
      <Container>
        <Header>This is within the B2B portal</Header>
        <Menu>
          Menu
          <ul>
            <li>Dashboard</li>
            <li>Wallbox</li>
            <li>Create order</li>
            <li>Validate order</li>
            <li>Overview</li>
            <li>Link Management</li>
          </ul>
        </Menu>
        <iframe
          src="https://gronnkontakt-pp.driivz.com:8443/dashboard"
          width={window.innerWidth - 258}
          height={window.innerHeight}
        ></iframe>
        <Footer>Footer</Footer>
      </Container>
    </div>
  );
}

export default App;
