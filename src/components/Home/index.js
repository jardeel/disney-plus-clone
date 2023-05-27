import { Container } from './styles';
import ImgSlider from '../ImgSlider';
import Viewers from '../Viewers';
import Movies from '../Movies';

function Home() {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  )
}

export default Home;