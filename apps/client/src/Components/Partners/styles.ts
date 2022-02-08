import styled, { css } from "styled-components";
import {
  DesktopSmall,
  Mobile,
} from "Utils/breakpoints";

export const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  /* height: 9rem; */
  justify-content: space-between;
  align-items: center;
  padding: 0 7% 0 7%;

  ${DesktopSmall(css`
    margin: 50px 0 20px 0;
    padding: 0 5%;
  `)}

  ${Mobile(css`
    background-color: var(--background-pink);
    height: 500px;
    padding: 40px 25px;
    margin-top: 35px;
  `)};
`;

export const Title = styled.h1`
  color: var(--color-text-white);
  font-size: var(--font-size-title);
  margin: 0 0 30px 0;

  ${Mobile(css`
    margin: 0;
  `)};
`;

export const Logos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--max-content-small);
  height: 5rem;
  width: 100%;

  ${Mobile(css`
    height: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
  `)};
`;

export const Image = styled.img`
  height: 4rem;
  object-fit: contain;

  ${Mobile(css`
    width: 40%;
    height: 90px;
  `)};
`;
