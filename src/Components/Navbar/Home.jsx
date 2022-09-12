import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <> 
    

    <div>
    <Carousel>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.jardineriaon.com/wp-content/uploads/2016/06/hortensia_lila-830x552.jpg"
          alt="First slide"
          
        />
        <Carousel.Caption>
          <h1>LLENA DE VIDA TU JARDÍN</h1>
          <h3>Encuentra variedad de plantas</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://gardenerspath.com/wp-content/uploads/2022/03/How-to-Grow-Variegated-Swiss-Cheese-Plant-Hero.jpg"
          alt="Second slide"
          
        />

      
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/fotos-premium/cerca-flor-zinnia-carmesi-fondo-flores-naturales-papel-tapiz-enfoque-selectivo-foto-horizontal_553043-164.jpg?w=2000"
          alt="Third slide"
          
        />

      
      </Carousel.Item>

    </Carousel>
    </div>

    <section className='Cards-ds'>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.plantasyhongos.es/herbarium/j/Jasminum_sambac_06.jpg" />
      <Card.Body>
        <Card.Title>Sampaguita o Jazmín de Arabia</Card.Title>
        <Card.Text>
       Si la Sampaguita te gusta procura que reciba mucha luz natural: a mayor luminosidad, más intensa será su fragancia, ya que necesita energía para liberar olor.

        Cuidarla es bastante fácil: riégala de forma moderada y protégela de las bajas temperaturas.
        </Card.Text>
        <Link to="/Catalogo">
            <Button variant="primary">Ver Más</Button>
        </Link>
        
      </Card.Body>
    </Card>

    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0484/0852/7016/products/monstera-deliciosa-1.jpg?v=1645395738" />
      <Card.Body>
        <Card.Title>Monstera deliciosa</Card.Title>
        <Card.Text>
        Al ser una planta que no necesita de mucha luz, es perfecta para cultivarse en interior tanto en sustrato como en agua.
        Puede llegar a alcanzar los 3 metros de alto, aunque se adaptará bastante al espacio que tenga.
        </Card.Text>

        <Link to="/Catalogo">
            <Button variant="primary">Ver Más</Button>
        </Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.plantasyhongos.es/herbarium/p/Phalaenopsis_spp_07.jpg" />
      <Card.Body>
        <Card.Title>Orquídea (Phalaenopsis spp)</Card.Title>
        <Card.Text>
        Las orquídeas son las más habituales en los hogares españoles. Y no es extraño ya que resultan elegantes, originales y muy decorativas.
        Es una buena opción que, además, no es demasiado compleja de cultivar.
        </Card.Text>
        <Link to="/Catalogo">
            <Button variant="primary">Ver Más</Button>
        </Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0554/4057/2609/products/Singonio3C20B_1800x.jpg?v=1633030893" />
      <Card.Body>
        <Card.Title>Syngonium</Card.Title>
        <Card.Text>
        El singonio o Syngonium  de las plantas de interior que crecen en agua, fácil de cultivar y también con hojas muy vistosas.
        Esta planta de interior necesita recibir la luz de forma indirecta para que sus hojas no pierdan el color.
        </Card.Text>
        
        <Link to="/Catalogo">
            <Button variant="primary">Ver Más</Button>
        </Link>
      </Card.Body>
    </Card>
    </section>

    <section>
      <footer className='bg-foter'>
         <ul>
          <a className="icon-mx" href="/"><i class="fa-brands fa-twitter"></i></a>
          <a className="icon-mx" href="/"><i class="fa-brands fa-facebook"></i></a>
          <a className="icon-mx" href="/"><i class="fa-brands fa-instagram"></i></a>
          <a className="icon-mx" href='/' ><i class="fa-brands fa-whatsapp"></i></a>

          <p className='foter-text'>© 2022. Todos los derechos reservados.</p>
         </ul>
         
      </footer>
    </section>

    </>
  )
}

export default Home