import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'



const Catalogo = ({titleCatalogo}) => {
  return (
    <>

    <h1 className='Catalogofont'> {titleCatalogo} </h1>

    <section className='Cards-ds' >
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.plantasyhongos.es/herbarium/j/Jasminum_sambac_06.jpg" />
      <Card.Body>
        <Card.Title>Sampaguita o Jazmín de Arabia</Card.Title>
        <Card.Text>
       Planta de Exterior
        </Card.Text>
        <Link to="/Compra">
            <Button variant="primary">Comprar</Button>
        </Link>
        
      </Card.Body>
    </Card>

    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0484/0852/7016/products/monstera-deliciosa-1.jpg?v=1645395738" />
      <Card.Body>
        <Card.Title>Monstera deliciosa</Card.Title>
        <Card.Text>
        Planta de Interior o exterior 
        </Card.Text>

        <Link to="/Compra">
            <Button variant="primary">Comprar</Button>
        </Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.plantasyhongos.es/herbarium/p/Phalaenopsis_spp_07.jpg" />
      <Card.Body>
        <Card.Title>Orquídea (Phalaenopsis spp)</Card.Title>
        <Card.Text>
        Planta de interior
        </Card.Text>
        <Link to="/Compra">
            <Button variant="primary">Comprar</Button>
        </Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0554/4057/2609/products/Singonio3C20B_1800x.jpg?v=1633030893" />
      <Card.Body>
        <Card.Title>Syngonium</Card.Title>
        <Card.Text>
        Planta de interior
        </Card.Text>
        
        <Link to="/Compra">
            <Button variant="primary">Comprar</Button>
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

export default Catalogo