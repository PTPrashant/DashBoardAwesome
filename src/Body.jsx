// import React from 'react'
// import Grid from './Grid'
import profile from './Profile1.jpeg'


// <span className="d-none d-sm-inline">cust2</span> 
// <span className="d-none d-sm-inline">Product</span> 

function Body() {
    return (
        <div >
    
        <div className="container-fluid">
        <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 ">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <a  href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="fs-5 d-none d-sm-inline">Dashboard</span>
                    </a>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li  className="hoverWord nav-item">
                            <a href="#" className="nav-link align-middle px-0">
                                <i  className="fs-4 bi-house"></i> <span className="ms-1 text-white d-none d-sm-inline ">Dashboard</span> 
                                <span className='toggle-Name' >Dash</span>
                            </a>
                        </li>
    
    
    
                        <li>
                            <a href="#submenu2" data-bs-toggle="collapse" className="hoverWord nav-link px-0 align-middle dropdown-toggle ">
                                <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">Customers</span>
                                <span className='toggle-Name' >Cust.</span>
                                </a>
                            <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                <li className="w-100">
                                    <a href="#" className="nav-link px-0"> c1</a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link px-0"> c2</a>
                                </li>
                            </ul>
                        </li>


                        <li>
                        <a href="#submenu3" data-bs-toggle="collapse" className="hoverWord nav-link px-0 align-middle dropdown-toggle ">
                            <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">Products</span>
                            <span className='toggle-Name' >Prod.</span>
                            </a>
                        <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0"> P1</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> P2</a>
                            </li>
                        </ul>
                    </li>


                        <li>
                            <a href="#" className="nav-link px-0 align-middle">
                                <i className="fs-4 bi-people"></i> Info</a>
                        </li>
                    </ul>
                    <hr />
                    <div className="dropdown pb-4">
                        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={profile} alt="hugenerd" width="30" height="30" className="rounded-circle" />
                            <span className="d-none d-sm-inline mx-1">Prashant</span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                            <li><a className="dropdown-item" href="#">New Investment</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
    
    
          
        </div>
      )
}

export default Body
