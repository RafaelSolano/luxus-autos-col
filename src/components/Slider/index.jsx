import Carousel from 'react-bootstrap/Carousel';
import  './styles.css';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src='https://media.canva.com/1/image-resize/1/550_412_92_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9lR2RRUS9NQUZ2M3ZlR2RRUS8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAAHXjNg4KQSCiMUfCseD6dMGpE4NQtz_hjwtDBCKXSFgO&exp=1696450904&x-canva-quality=thumbnail_large&csig=AAAAAAAAAAAAAAAAAAAAAKkn1MCvaHvqlJE4B90uWx0gDVzhuf_O4_SVo8rwm4do' alt=''/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src=' https://media.canva.com/1/image-resize/1/550_412_92_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS93enh1NC9NQUZ2NFl3enh1NC8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAAOYCv4Dv02tJacVMCXCXaLBpYy9L051GA-DM1w5IJ_HY&exp=1696449968&x-canva-quality=thumbnail_large&csig=AAAAAAAAAAAAAAAAAAAAAHXlI-zPgBmL-x0kK2qXzslWMMljEu57uHlZ1ctUu9xP' alt='' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://media.canva.com/1/image-resize/1/550_310_92_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS94U0E0OC9NQUZ1VXp4U0E0OC8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAAOcBLWTZCzDqkaxtYgWlLCigENtHG4XFtt4GvLykzgCR&exp=1696451589&x-canva-quality=thumbnail_large&csig=AAAAAAAAAAAAAAAAAAAAABrLLF43rzjcE7RyyUeR5eSptleKJzaKrEWiYyDjMSnI' alt='' />
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