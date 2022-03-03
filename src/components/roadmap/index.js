import React from "react";
import { Container, Bullet, InnerCircle } from "./styled.components";

const Roadmap = () => {
  return (
    <Container>
      <Bullet isFirst>
        <InnerCircle />
        <Bullet>
          <InnerCircle />
          <Bullet>
            <InnerCircle />
            <Bullet isLast>
              <InnerCircle />
            </Bullet>
          </Bullet>
        </Bullet>
      </Bullet>
    </Container>
  );
};

export default Roadmap;
