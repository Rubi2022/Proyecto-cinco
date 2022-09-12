import React from 'react'

const Contacto = ({titleContacto}) => {
  return (
    <>
      <h1 className='Contactofont'>{titleContacto} </h1>
      <h3 className='Contactofont'>¿Tienes alguna duda o comentario? Compártenos tu datos y con mucho gusto te atenderemos.</h3>

      <section>
        <h4 className='Contactofont'>Mándanos tus comentarios</h4>

       <input type="text" />
       
       <input type="email" name="Correo Electrónico" id="Correo Electrónico" />

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

export default Contacto