import Card from 'react-bootstrap/Card';

const MiApi = ({users}) =>{

  return(
      <>
      <div className='divMiApi'> 
      <h2>Nuestros productos</h2>

      <div className='row row-cols-lg-4 row-cols-md-2 row-cols-sm-1'>
      {users.map((user) => (
      <Card style={{ width: '18rem' }}>
      <Card.Img className='p-4' variant="top" src={user.image} />
      <Card.Body>
        <Card.Title>{user.title}</Card.Title>
        <Card.Text>{user.description}</Card.Text>
        <p className='priceCard'>Precio: <span className='spanCard'>{user.price}</span></p>
      </Card.Body>
      </Card>
      ))}
      </div>
      </div>
 
      

      </>
    
  );
};

export default MiApi;


//<table className="table table-striped table-hover my-4 shadow-lg">
//<thead>
//    <tr>
//        <th>Producto</th>
//        <th>Precio</th>
//        <th>Descripcion</th>
//        <th>Foto</th>
//    </tr>
//</thead>
//<tbody>
//    {users.map((user) => (
//        <tr key={user.id}>
//            <td>{user.title}</td>
//            <td>{user.price}</td>
//            <td>{user.description}</td>
//            <td><img src={user.image} alt="" width={100} /></td>
//        </tr>
//    ))}
//
//</tbody>
//</table> 