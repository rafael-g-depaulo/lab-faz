import React, { FC } from "react"

import { YoutubePlayer } from 'Components/YoutubePlayer';
import {
  Container,
  TextBlock,
  YoutubePlayerResponsive,
  TextTitle,
  Subtitle
} from './style'



export interface DisplayProps {
  Title: string,
  SubTitle: string,
  Video: string
}

export const Display: FC<DisplayProps> = ({
  Title, SubTitle, Video
}) => {
  return (
    <Container>
      <div className="ContainerContent">
        <YoutubePlayerResponsive>
          <YoutubePlayer href={Video} />
        </YoutubePlayerResponsive>
        <TextBlock>
          <TextTitle> {Title} </TextTitle>
          <Subtitle> {SubTitle} </Subtitle>
        </TextBlock>
      </div>
    </Container>
  )
}

export default Display
