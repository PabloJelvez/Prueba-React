import { useState } from "react";

const Buscador = (props) => {
    const [search, setSearch] = useState("");

    const handleSearch = ((e) => {
        setSearch(e.target.value);
        props.updateSearch(e.target.value)
    });

    return(
        <>
        <input type="search"
        placeholder="Buscar producto"
        className="form-control me-2 my-3 mx-4"
        value={search}
        onChange={handleSearch}
         />
        </>

    );
};

export default Buscador;