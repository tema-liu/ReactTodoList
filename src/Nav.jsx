import styled from "styled-components";
import logo from "./assets/images/logo_lg.png";

const NavContainer = styled.nav`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;
  padding-top: 16px;
  padding-left: 34px;
  padding-right: 34px;
`;
const NavButton = styled.button`
  font-size: 16px;
  border: 0;
  background-color: transparent;
  transition: all 0.05s ease-out;
  color: rgba(51, 51, 51, 1);
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: white;
  }
  font-weight: 400;
`;

const NavText = styled.p`
  color: rgba(51, 51, 51, 1);
  font-size: 16px;
  font-weight: 700;
`;
const NavActions = styled.div`
  display: flex;
  align-items: center;

  p + button {
    margin-left: 24px;
  }
`;

function Nav({ name }) {
  return (
    <NavContainer>
      <img src={logo} alt="LOGO-up" />
      <NavActions>
        <NavText>{name}的代辦</NavText>
        <NavButton
          onClick={() => {
            alert(`會員${name}成功登出了`);
          }}
        >
          登出
        </NavButton>
      </NavActions>
    </NavContainer>
  );
}

export default Nav;
