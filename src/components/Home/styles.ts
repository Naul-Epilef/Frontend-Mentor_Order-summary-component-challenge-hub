import styled from "styled-components";

const Main = styled.main`
  width: 100vw;
  height: 100vh;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 450px;
  height: 700px;

  border-radius: 20px;

  overflow: hidden;

  box-shadow: 0px 25px 30px var(--blue-desaturated);

  background-color: var(--blue-very-pale);
  color: var(--blue-dark);
`;

const CardBody = styled.div`
  height: 70%;

  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  align-items: center;

  & h1 {
    font-size: 28px;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  & p {
    font-size: 16px;
    color: var(--blue-desaturated);
    text-align: center;
    width: 80%;
    margin-bottom: 30px;
  }

  & button:not(:last-child) {
    cursor: pointer;
    width: 80%;
    height: 50px;

    background-color: var(--blue-bright);
    color: var(--blue-very-pale);
    outline: none;

    font-size: 17px;
    font-weight: 700;

    box-shadow: 0px 25px 50px var(--blue-pale);
    border: 0px;

    border-radius: 10px;

    margin-bottom: 40px;
  }

  & button:last-child {
    cursor: pointer;

    background-color: rgb(0, 0, 0, 0);
    border: 0px;
    outline: none;

    font-size: 16px;
    font-weight: 900;
    color: var(--blue-desaturated);
  }
`;

const CardMiddle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;

  border-radius: 20px;

  background-color: var(--blue-pale);

  margin-bottom: 50px;
  padding: 20px;

  & div {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  & div svg {
    margin-right: 15px;
  }

  & div span:first-child {
    color: var(--blue-dark);
    font-weight: 900;
  }

  & div span:last-child {
    color: var(--blue-desaturated);
  }

  & a {
    color: var(--blue-bright);
    font-weight: 900;
  }

  & a:active {
    color: var(--blue-bright);
  }

  & div div {
    display: flex;
    flex-direction: column;
  }
`;

export { Main, Card, CardBody, CardMiddle };
