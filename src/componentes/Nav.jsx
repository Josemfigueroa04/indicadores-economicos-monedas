
const Nav = ({onSearchChange,onSortOption}) => {

    const handleChangeSearch = (e) => {
        console.log(e.target.value);
        onSearchChange(e.target.value);
    }
    const handleChangeSort = (event) => {
        onSortOption(event.target.value);
      };
    return(
        <>
        <nav className="navbar bg-body-tertiary bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white" href="#">Monedas</a>
                        <form className="d-flex" role="search">
                        <select className="form-select me-2" id="select" aria-label="Default select example" onChange={handleChangeSort}>         
                            <option value="1">Orden ascendente A-Z</option>
                            <option value="2">Orden descendente Z-A</option>
                        </select>
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" onChange={handleChangeSearch}/>
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </div>
            </nav>
        </>
            
    );
}

export default Nav;