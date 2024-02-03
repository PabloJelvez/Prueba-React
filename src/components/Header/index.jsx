const Header = (props) =>{
    return(
        <>
        <div className="header">
            <img className="imageHeader" src={props.imagen} alt="" />
            <h1>Mi-tienda.cl</h1>
        </div>
        
        </>
    )
}
export default Header;