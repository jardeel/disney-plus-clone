import { Container } from './styles';
import ImgSlider from '../ImgSlider';
import Viewers from '../Viewers';

function Home() {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
    </Container>
  )
}

export default Home;