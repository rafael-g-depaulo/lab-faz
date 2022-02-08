import styled, { css } from "styled-components";

import {
  DesktopSmall,
  DesktopLarge,
  MobileSmall,
  MobileLarge,
} from "Utils/breakpoints";

interface VisibilityProps {
  isOpen: boolean;
}

export const Container = styled.div<VisibilityProps>`
  display: flex;
  flex-direction: ${(props) => (props.isOpen ? "column" : "row")};
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 8px;
  max-width: 92%;
  min-width: 92%;
  max-height: inherit;
  min-height: 118px;

  align-self: center;
  align-items: ${(props) => (props.isOpen ? "" : "center")};
  justify-content: start;
  
  padding-bottom: ${(props) => (props.isOpen ? "2.9rem" : "")};
  & + & {
    margin-top: 2.4rem;
  }

  :hover {
    cursor: pointer;
  }

  h1 {
    color: white;
    ${(props) =>
      props.isOpen
        ? css`
            padding-right: 5em;
          `
        : css`
            padding-left: 5em;
          `}
    margin-bottom: ${(props) => (props.isOpen ? "1.3em" : "0")};
    min-width: fit-content;
  }

  ${DesktopSmall(css`
    min-height: 79px;
  `)}

  ${MobileSmall(css`
    min-height: 100px;

    h1 {
      padding-left: 1em;
      padding-right: 0;
      font-size: var(--font-size-title-medium);
    }
  `)}
`;

export const Haeder = styled.div<VisibilityProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  margin-top: ${(props) => (props.isOpen ? "3em" : "0")};
  margin-bottom: ${(props) => (props.isOpen ? "0em" : "0")};
  padding: 0 2em;

  h1 {
    padding-left: 0.7em;
  }

  p {
    margin-bottom: 1.5em;
  }

  ${(props) =>
    props.isOpen &&
    css`
      flex-direction: column;
      margin-bottom: 2.4em;
    `}

  ${(props) =>
    props.isOpen &&
    DesktopLarge(css`
      margin: 0;
      flex-direction: row;
    `)}

  ${MobileSmall(css`
    padding: 0em;
    font-size: var(--font-size-title-small);
  `)}
`;

export const Button = styled.button`
  font-size: 24px;
  background: transparent;
  border: none;
  position: relative;
  padding: 0;
  z-index: 9999;
  display: flex;
  align-self: baseline;
  
  padding-left: 2.4em;

  ${DesktopSmall(css`
    top: calc((79px - 35px) / 2);
    padding-left: 10vw;
  `)}

  ${DesktopLarge(css`
    top: calc((118px - 35px) / 2);
  `)}
  
  ${MobileLarge(css`
    top: calc((118px - 35px) / 2);
    padding-left: 0.5em;
  `)}

  ${MobileSmall(css`
    top: calc((100px - 35px) / 2);
    padding-left: 0.5em;
  `)}

  :hover {
    cursor: pointer;
  }
`;

export const Description = styled.p<VisibilityProps>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  max-width: 958px;
  max-height: 126px;
  font-size: var(--font-size-subtitle);
  margin: 0;
  padding-left: 8em;
  color: white;
  text-align: justify;

  margin-right: 5%;

  ${DesktopSmall(css`
    font-size: var(--font-size-large);
    padding-left: 0;
    max-width: 80%;
  `)}

  ${MobileLarge(css`
    font-size: var(--font-size-large);
    padding-left: 0;
    max-width: 80%;
  `)}

  ${MobileSmall(css`
    font-size: var(--font-size-large);
    padding: 0;
    max-width: 260px;
    max-height: fit-content;
  `)}

`;

export const ContentDiv = styled.div<VisibilityProps>`
  max-height: ${(props) => (props.isOpen ? "100%" : "0")};
  overflow: auto;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  transition: all 1s ease-in;

  ${MobileLarge(css`
    padding-bottom: 1.5em;
  `)}

  ${MobileSmall(css`
    padding-bottom: 1.5em;
  `)}
`;
