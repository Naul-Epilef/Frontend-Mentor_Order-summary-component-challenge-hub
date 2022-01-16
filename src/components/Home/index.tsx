import { Main, Card, CardBody, CardMiddle } from "./styles";

import HeroSVG from "../svgs/hero";
import MusicSVG from "../svgs/music";

const Home = () => {
  return (
    <Main role="main">
      <Card role="card">
        <HeroSVG />
        <CardBody role="cardBody">
          <h1>Order Summary</h1>
          <p>
            You can now listen to millions of songs, audiobooks and podcasts on
            any device anywhere you like!
          </p>
          <CardMiddle role="cardMiddle">
            <div>
              <MusicSVG />
              <div>
                <span>Annual Plan</span>
                <span>$59.99/year</span>
              </div>
            </div>
            <a href="/">Change</a>
          </CardMiddle>
          <button>Proceed to payment</button>
          <button>Cancel order</button>
        </CardBody>
      </Card>
    </Main>
  );
};

export default Home;
