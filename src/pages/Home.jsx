import React from 'react'
import Product from '../components/Product'
import Categories from '../components/Categories'

const Home = () => {
  return <div className="home-container">
    <div className="banner-container">

      <img src="./img/banner-image.png" alt="" className='img-banner' />
      <div className="banner-data">
        <h1 className="banner-title">
          Febrero Promocional
        </h1>
        <span className='banner-description'>Productos seleccionados con 33% de descuento</span>
        <a href="#Consolas" className="button banner-button">Ver Consolas</a>
      </div>
    </div>

    <Categories title="Start Wars" childComponent={
      <>
        <Product img="./img/star-wars.png" title="ProductXYZ" price='60.00' />
        <Product img="./img/star-wars.png" title="ProductXYZ" price='60.00' />
        <Product img="./img/star-wars.png" title="ProductXYZ" price='60.00' />
        <Product img="./img/star-wars.png" title="ProductXYZ" price='60.00' />
        <Product img="./img/star-wars.png" title="ProductXYZ" price='60.00' />
        <Product img="./img/star-wars.png" title="ProductXYZ" price='60.00' />
        <Product img="./img/star-wars.png" title="ProductXYZ" price='60.00' />
        <Product img="./img/star-wars.png" title="ProductXYZ" price='60.00' />

      </>
    } />
    <Categories title="Consolas" childComponent={
      <>
        <Product img="./img/console.png" title="ProductXYZ" price='60.00' />
        <Product img="./img/console.png" title="ProductXYZ" price='60.00' />
        <Product img="./img/console.png" title="ProductXYZ" price='60.00' />
        <Product img="./img/console.png" title="ProductXYZ" price='60.00' />
        <Product img="./img/console.png" title="ProductXYZ" price='60.00' />
        <Product img="./img/console.png" title="ProductXYZ" price='60.00' />
        <Product img="./img/console.png" title="ProductXYZ" price='60.00' />

      </>
    } />

    <Categories title="Diversos" childComponent={
      <>
        <Product img="./img/diversos.png" title="ProductXYZ" price='60.00' />
        <Product img="./img/diversos.png" title="ProductXYZ" price='60.00' />
        <Product img="./img/diversos.png" title="ProductXYZ" price='60.00' />
        <Product img="./img/diversos.png" title="ProductXYZ" price='60.00' />
        <Product img="./img/diversos.png" title="ProductXYZ" price='60.00' />
        <Product img="./img/diversos.png" title="ProductXYZ" price='60.00' />
        <Product img="./img/diversos.png" title="ProductXYZ" price='60.00' />

      </>
    } />
  

  </div>
}

export default Home