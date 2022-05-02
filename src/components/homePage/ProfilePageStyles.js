import styled from 'styled-components';

export const Container = styled.section`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Nav = styled.nav`
  height: 60px;
  width: 100vw;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #202020;
  z-index: 4;
`;

export const Div1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-left: 2.5rem;
`;

export const Div2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Input = styled.input`
  width: 27rem;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  outline: none;
  background: transparent;
  box-shadow: 0.1px 0.1px 2px rgba(250, 250, 250, 0.8);

  &::placeholder {
    font-size: 14px;
    color: rgba(250, 250, 250, 0.8);
    padding-left: 1rem;
  }
`;

export const LinkContainer = styled.section`
  display: flex;
  gap: 12px;
`;

export const Link = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Button = styled.button`
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  border: none;
  background: transparent;
  cursor: pointer;
  padding-right: 3rem;

  &:hover {
    opacity: 0.8;
  }
`;
export const Header = styled.header`
  height: 80px;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  background: #fff;
  position: sticky;
  top: 0;
  padding-left: 14rem;
  z-index: 3;

  div {
    padding-bottom: 2.65rem;
  }
`;

export const HeaderLinksContainer = styled.div`
  display: flex;
  gap: 25px;
`;

export const HeaderLink = styled.p`
  font-size: 14px;
  font-weight: ${({ active }) => (active ? '450' : '350')};
  color: #000;
  cursor: pointer;
  display: flex;
  padding: 3px 6px;
  border-radius: 5px;
  justify-content: center;
  gap: 10px;

  &:hover {
    background: #f4f4f4;
  }

  span {
    background: #ececec;
    display: flex;
    justify-content: center;
    font-size: 12px;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    padding: 4px;
  }
`;

export const Active = styled.div`
border-bottom: 3px solid #ff6347;
padding-bottom: -15px;
`

export const MainSection = styled.section`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const SideBar = styled.aside`
  flex: 0.2;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 6rem;

  h4 {
    font-size: 26px;
    font-weight: 500;
    color: #000;
  }

  p {
    font-size: 18px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const Main = styled.main`
  flex: 0.8;
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem 0 2rem;
`;

export const Img = styled.img`
  border-radius: 50%;
  height: 300px;
  width: 300px;
  margin-top: -20px;
  z-index: 4;

  @media screen and (max-width: 768px) {
    padding: 2rem 2rem;
    margin-top: 2px;
  }
`;

export const EditProfileButton = styled.button`
  padding: 8px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  box-shadow: 0.1px 0.1px 2px rgba(0, 0, 0, 0.8);
`;
export const FollowersContainer = styled.div`
  display: flex;
  gap: 20px;

  div {
    display: flex;
    justify-content: center;
    gap: 6px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.8);
    cursor: pointer;

    &:hover {
      color: #26a0da;
    }

    span {
      font-weight: bold;
    }
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  div {
    display: flex;
    gap: 6px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.7);
  }
`;
export const SearchNButtonBox = styled.div`
  display: flex;
  /* gap: 15px; */
  padding-bottom: 2rem;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const SearchBox = styled(Input)`
  width: 58%;
  box-shadow: 0.1px 0.1px 2px rgba(0, 0, 0, 0.8);
  padding: 0.6rem;

  &::placeholder {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.8);
    padding-left: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const Button1 = styled.button`
  padding: 0.6rem 1.2rem;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  opacity: 0.6;
  box-shadow: 0.1px 0.1px 2px rgba(0, 0, 0, 0.8);
  cursor: pointer;
`;

export const NewRepoButton = styled(Button1)`
  background: #01bf71;
  color: #fff;
  margin-left: 12px;
  opacity: 1;

  &:hover {
    opacity: 0.8;
  }
`;

export const RepoContainer = styled.section`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    gap: 10px;
  }
`;

export const Title = styled.h4`
  font-size: 18px;
  font-weight: 500;
  color: #26a0da;
  cursor: pointer;
`;
export const Public = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  border-radius: 12px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.7);
  box-shadow: 0.1px 0.1px 2px rgba(0, 0, 0, 0.8);
`;

export const Button2 = styled(Button1)`
  padding: 0.5rem 1.2rem;
  border-radius: 0px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;
export const Button3 = styled(Button2)`
  border-radius: 0px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-left: -10px;
`;

export const ButtonGroup = styled.div`
  display: flex;
`;
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  padding: 2.5rem 0 4rem 0;
`;

export const Box = styled.div`
  display: flex;
  gap: 20px;

  div {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.7);
    display: flex;
    gap: 4px;
    align-items: center;
  }
`;
export const Spinner = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  h4 {
    font-size: 22px;
  }
`;
