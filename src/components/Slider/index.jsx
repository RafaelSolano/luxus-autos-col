import Carousel from 'react-bootstrap/Carousel';
import  './styles.css';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src='https://img.freepik.com/vector-premium/plantilla-banner-portada-facebook-venta-alquiler-autos_416835-530.jpg' alt=''/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src='https://img.freepik.com/psd-premium/promocion-venta-coches-plantilla-banner-portada-facebook-redes-sociales_159024-190.jpg' alt='' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://img.freepik.com/psd-premium/banner-mega-car-fair-portugues-3d-renderizado-campana-marketing-brasil_363450-3248.jpg' alt='' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;