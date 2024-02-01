import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const MiApi = () =>{
const [users, setUsers] = useState([])
 
    
 const getData =  () => {
    const route = "https://fakestoreapi.com/products"

   fetch(route)
   .then((response) => response.json())
   .then((formatedResponse) => setUsers(formatedResponse))
   .catch((error) => console.log(error))
    
 };

 useEffect(() => {
    if (users.length === 0) {
      getData();
    }
  }, []); 

  useEffect(() => {
    console.log(users);
  }, [users]);


    return(
        <>
  
        <div>
           <table className="table table-striped table-hover my-4 shadow-lg">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Descripcion</th>
                    <th>Foto</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.title}</td>
                        <td>{user.price}</td>
                        <td>{user.description}</td>
                        <td><img src={user.image} alt="" width={100} /></td>
                    </tr>
                ))}

            </tbody>
        </table> 
        </div>
        

        </>
      
    );
};

export default MiApi;

//      <h1>Listado de usuarios</h1>
//        <ul>
//            {
//            users.map((user) => (
//            <li key={user.id.value}>
//                <h3>Nombre: {`${user.name.first} ${user.name.last}`}</h3>
//                 <p>Email: {user.email}</p>
//                 <p>Telefono: {user.phone}</p>
//                 <img src={user.picture.large} alt="" />
//            </li>
//         
//        
//        ))}
//        </ul>
