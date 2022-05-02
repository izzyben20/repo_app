import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaGithub } from 'react-icons/fa';
import { FiBookOpen, FiPackage } from 'react-icons/fi';
import {
  AiOutlineProject,
  AiOutlineStar,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { BsPeople, BsCircleFill } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { IoMdArrowDropdown } from 'react-icons/io';
import { SpinnerCircularFixed } from 'spinners-react';
import { logout } from '../../firebase';
import profile from './profile.jpg';
import { getRepos } from '../../features/githubSlice/githubSlice';
import {
  Container,
  Nav,
  Div1,
  Div2,
  Input,
  Link,
  LinkContainer,
  Button,
  Header,
  SearchBox,
  HeaderLink,
  HeaderLinksContainer,
  Main,
  MainSection,
  SideBar,
  Img,
  EditProfileButton,
  FollowersContainer,
  InfoContainer,
  SearchNButtonBox,
  ButtonContainer,
  Button1,
  NewRepoButton,
  RepoContainer,
  Title,
  Public,
  Button2,
  Button3,
  ButtonGroup,
  Section,
  Box,
  Spinner,
  Active,
} from './ProfilePageStyles';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { repos, loading, err } = useSelector((state) => state.repo);
  const [searchText, setSearchText] = useState('');

  //Debounce function to prevent multiple network request
  const myDebounce = (cb, delay = 1000) => {
    let timer;
    return (...args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };

  // onChange handler with debounce function
  const handleChange = myDebounce((e) => {
    setSearchText(e.target.value);
  }, 1000);

  //fetch our repos data upon component mounting
  useEffect(() => {
    dispatch(getRepos());
  }, [dispatch]);

  // render if loading is true
  if (loading) {
    return (
      <Spinner>
        <SpinnerCircularFixed color="#01bf71" />
      </Spinner>
    );
  }

  // render if err is true
  if (err) {
    return (
      <Spinner>
        <h4>Opps!! there seems to be an error, try again</h4>
      </Spinner>
    );
  }

  return (
    <Container>
      {/* NavBar */}
      <Nav>
        <Div1>
          <div>
            <FaGithub size="3.5rem" color="white" />
          </div>
          <Input type="text" placeholder="Search or jump to..." />
          <LinkContainer>
            <Link>Pull requests</Link>
            <Link>Issues</Link>
            <Link>Marketplace</Link>
            <Link>Explore</Link>
          </LinkContainer>
        </Div1>
        <Div2>
          <Button onClick={logout}>Sign-Out</Button>
        </Div2>
      </Nav>

      {/* Header */}
      <Header>
        <HeaderLinksContainer>
          <div>
            <HeaderLink>
              <FiBookOpen size="1.8rem" />
              Overview
            </HeaderLink>
          </div>
          <Active>
            <div>
              <HeaderLink active>
                <RiGitRepositoryLine size="1.8rem" />
                Repositories
                <span>{repos.length}</span>
              </HeaderLink>
            </div>
          </Active>
          <div>
            <HeaderLink>
              <AiOutlineProject size="1.8rem" />
              Projects
            </HeaderLink>
          </div>
          <div>
            <HeaderLink>
              <FiPackage size="1.8rem" />
              Packages
            </HeaderLink>
          </div>
          <div>
            <HeaderLink>
              <AiOutlineStar size="1.8rem" />
              Stars
              <span>15</span>
            </HeaderLink>
          </div>
        </HeaderLinksContainer>
      </Header>

      {/* Main Section */}
      <MainSection>
        {/* Aside layout */}
        <SideBar>
          <Img src={profile} alt="profile-img" />
          <div>
            <h4>Isaac Oyedele</h4>
            <p>izzyben20</p>
          </div>
          <EditProfileButton>Edit profile</EditProfileButton>
          <FollowersContainer>
            <div>
              <BsPeople size="1.5rem" /> <span>0</span> followers
            </div>
            <div>
              <span>3</span> following
            </div>
          </FollowersContainer>
          <InfoContainer>
            <div>
              <GoLocation size="1.5rem" /> Lagos, Nigeria
            </div>
            <div>
              <GoLocation size="1.5rem" /> isaacoyedele.netlify.app
            </div>
            <div>
              <AiOutlineTwitter size="1.5rem" /> @izzyben0
            </div>
          </InfoContainer>
        </SideBar>

        {/* Main layout */}
        <Main>
          {/* Search Input and Buttons */}
          <SearchNButtonBox>
            <SearchBox
              type="text"
              placeholder="Find a repository..."
              onChange={handleChange}
            />
            <ButtonContainer>
              <Button1>
                Type <IoMdArrowDropdown />
              </Button1>
              <Button1>
                Language <IoMdArrowDropdown />
              </Button1>
              <Button1>
                Sort <IoMdArrowDropdown />
              </Button1>
              <NewRepoButton>
                <RiGitRepositoryLine color="white" size="2rem" /> New
              </NewRepoButton>
            </ButtonContainer>
          </SearchNButtonBox>

          {/* Lists of Repositories */}
          {repos
            .filter((item) => {
              if (searchText === '') {
                return item;
              }
              return item.name.toLowerCase().includes(searchText.toLowerCase());
            })
            .map(
              ({
                id,
                name,
                updated_at,
                visibility,
                language,
                stargazers_count,
              }) => (
                <Section key={id}>
                  <RepoContainer>
                    <div>
                      <Title>{name}</Title>
                      <Public>
                        {visibility[0].toUpperCase() + visibility.slice(1)}
                      </Public>
                    </div>
                    <ButtonGroup>
                      <Button2>
                        <AiOutlineStar size="1.6rem" />
                        Star
                      </Button2>
                      <Button3>
                        <IoMdArrowDropdown />
                      </Button3>
                    </ButtonGroup>
                  </RepoContainer>
                  <Box>
                    <div>
                      <BsCircleFill color="#ffa700" />
                      {language}
                    </div>
                    {stargazers_count >= 1 && (
                      <div>
                        <AiOutlineStar size="1.8rem" /> {stargazers_count}
                      </div>
                    )}
                    <div>
                      Updated on{' '}
                      {new Date(updated_at).toLocaleString('en-us', {
                        month: 'short',
                        day: '2-digit',
                      })}
                    </div>
                  </Box>
                </Section>
              )
            )}
        </Main>
      </MainSection>
    </Container>
  );
};

export default ProfilePage;
