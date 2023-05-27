import { 
  Container,
  Background,
  ImageTitle,
  Controls,
  PlayButton,
  TrailerButton,
  AddButton,
  GroupWatchButton,
  SubTitle,
  Description 
} from './styles';

function Detail() {
  return(
    <Container>
      <Background>
        <img src="https://lunetas.com.br/wp-content/uploads/2018/12/filme-bao.jpg" alt="bao"/>
      </Background>
      <ImageTitle>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DF482B26361ECD86E0B1505662DD98EFE5CFBA56EAE4D7EF447AF66C58EFFC62/scale?width=1440&aspectRatio=1.78&format=png" alt="title bao"/>
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="Play"/>
          <span>PLAY</span>
        </PlayButton>

        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="Trailer"/>
          <span>Trailer</span>
        </TrailerButton>

        <AddButton>
            <span>+</span>
        </AddButton>

        <GroupWatchButton>
          <img src="/images/group-icon.png"/>
        </GroupWatchButton>
      </Controls>
      <SubTitle>
        2018 ° 7m ° Family, Fantasy, Kids, Animation
      </SubTitle>
      <Description>
        A Chinese mom who's sad when her grown son leaves home gets another
        change at motherhood when one of her dumplings springs to life. But she finds
        that nothing stays cute and small forever.
      </Description>
    </Container>
  )
}

export default Detail;