import Card from 'react-bootstrap/Card';

const MiApi = ({products}) =>{

  return(
      <>
      <div className='divMiApi'> 
      <h2>Nuestros productos</h2>

      <div className='row row-cols-lg-4 row-cols-md-2 row-cols-sm-1'>
      {products.map((product) => (
      <Card style={{ width: '18rem' }}>
      <Card.Img className='p-4' variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <p className='priceCard'>Precio: <span className='spanCard'>{product.price}</span></p>
      </Card.Body>
      </Card>
      ))}
      </div>
      </div>
 
      

      </>
    
  );
};

export default MiApi;


