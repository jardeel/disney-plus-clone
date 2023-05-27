import { Container, Wrap } from './styles';

const viewersData = [
  { src: '/images/viewers-disney.png' },
  { src: '/images/viewers-pixar.png' },
  { src: '/images/viewers-marvel.png' },
  { src: '/images/viewers-starwars.png' },
  { src: '/images/viewers-national.png' }
];


function Viewers() {
  const renderViewers = () => {
    return viewersData.map((viewer) => (
      <Wrap key={viewer.src}>
        <img src={viewer.src} alt={viewer.src}/>
      </Wrap>
    ))
  }

  return (
    <Container>
      {renderViewers()}
    </Container>
  )
}

export default Viewers;