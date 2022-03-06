import React from "react";
import { Container, Bullet, InnerCircle } from "./styled.components";

const Roadmap = () => {
  return (
    <Container>
      <Bullet isLast>
        <InnerCircle />
        <Bullet >
          <InnerCircle />
          <Bullet>
            <InnerCircle />
            <Bullet>
              <InnerCircle />
              <Bullet>
                <InnerCircle />
                <Bullet isFirst>
                  <InnerCircle />
                </Bullet>
              </Bullet>
            </Bullet>
          </Bullet>
        </Bullet>
      </Bullet>
    </Container>
  );
};

export default Roadmap;
