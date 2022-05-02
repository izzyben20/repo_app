import styled from 'styled-components';

export const Container = styled.section`
  min-height: 100vh;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(250, 250, 250, 0.4),
    rgba(250, 250, 250, 0.2) 100%
  );
`;

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  @media screen and (max-width: 480px) {
    height: 80%;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 1rem;
  }
`;

export const Form = styled.form`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 5rem 2rem;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 480px) {
    padding: 2rem 2rem;
  }

  h1 {
    margin-bottom: 2.5rem;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 400;
    text-align: center;
  }

  label {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    color: #fff;
  }

  input {
    padding: 1rem 1rem;
    margin-bottom: 2rem;
    border: none;
    border-radius: 4px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    background: #01bf71;
    padding: 1rem 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 400;
    cursor: pointer;
    animation: all 0.2s ease-in;

    &:hover {
      opacity: 0.9;
    }
  }
`;
