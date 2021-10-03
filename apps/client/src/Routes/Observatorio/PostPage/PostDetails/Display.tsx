import React, { FC, Fragment } from "react";

import { Container, Content, Wrapper } from "./styles";

import { ObservatorioPost } from "Api/ObservatorioPost";
import Web from "./Web";
import Mobile from "./Mobile";
import useMobile from "Hooks/useMobile";

interface DisplayProps {
  post: ObservatorioPost;
}

export const Display: FC<DisplayProps> = ({ post }) => {
  const isMobile = useMobile();

  return (
    <Container>
      <Content>
        <Fragment>
          <Wrapper>
            {isMobile ? (
              <Mobile
                title={post.title}
                created_at={post.created_at}
                content={post.content}
              />
            ) : (
              <Web
                title={post.title}
                created_at={post.created_at}
                content={post.content}
              />
            )}
          </Wrapper>
        </Fragment>
      </Content>
    </Container>
  );
};

export default Display;
