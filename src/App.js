import React from 'react';
import { Route, Link, Switch, Redirect } from 'wouter';
import Home from './pages/home';
import About from './pages/about';
import Infrastructure from './pages/infrastructure';
import Contact from './pages/contact';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import ProductDetails from './pages/productDetails';
import './index.css'
import backgroundImage from './components/assets/footerImage.png';

import microSilica from './pages/productsPages/microSilica';
import quartzGritz from './pages/productsPages/quartzGritz';
import quartzLumps from './pages/productsPages/quartzLumps';
import quartzPebbles from './pages/productsPages/quartzPebbles';
import quartzPowder from './pages/productsPages/quartzPowder';
import LumpsDetails from './pages/productsPages/lumpsDetails';
import PebblesDetails from './pages/productsPages/pebblesDetails';
import SlabsDetails from './pages/productsPages/slabsDetails';
import Slabs from './pages/productsPages/slabs';


const App = () => {
  return (
    <div>


      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg"  fixed="top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Navbar
          </Link>
          <Navbar.Toggle aria-controls="navbarNavDropdown" />
          <Navbar.Collapse id="navbarNavDropdown" className="justify-content-end">
            <Nav className="navbar-nav">
              <Nav.Link as={Link} to="/" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-link">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/infrastructure" className="nav-link">
                Infrastructure
              </Nav.Link>
              <NavDropdown title="Products" href="/products" id="basic-nav-dropdown" >
                <NavDropdown.Item as={Link} to="/slabs">Slabs</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/microSilica">Micro Silica</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/quartzGritz">Quartz Gritz</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/quartzLumps">Quartz Lumps</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/quartzPebbles">Quartz Pebbles</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/quartzPowder">Quartz Powder</NavDropdown.Item>

                {/* Add more items as needed */}
              </NavDropdown>
              <Nav.Link as={Link} to="/contact" className="nav-link">
                Contact
              </Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      {/* Main content */}
      <div >
        <Switch>
          <Route path="/">
            <Home />
          </Route>
         <Route path="/about">
           <About/>
          </Route>
        
          <Route path="/infrastructure">
            <Infrastructure />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/slabs" >
            <Slabs></Slabs>
          
          </Route>
          <Route path="/microSilica" component={microSilica} />
          <Route path="/quartzGritz" component={quartzGritz} />
          <Route path="/quartzLumps" component={quartzLumps} />
            <Route path="/quartzPebbles" component={quartzPebbles} />
          
            <Route path="/pebbles/product/:subproductId" component={PebblesDetails} />
      
          <Route path="/quartzPowder" component={quartzPowder} />
          <Route path="/product/:subproductId" component={LumpsDetails} />
          
          <Route path="/calacatta/product/:productId" component={SlabsDetails} />
        </Switch>
        {/* fooetr */}
        <div>
      <div style={{ backgroundColor: 'black', width: '100vw', padding: '15px' }}>
        <div className="d-flex justify-content-center">
          <a href="#" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="text-white me-4">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-white me-4">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-white me-4">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>

      <footer
        className="text-white"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          padding: '50px 0 0 0',
        }}
      >
        {/* Social Media Section */}

        {/* Links Section */}
        <section className="container">
          <div className="row text-center text-md-start">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">MicroQuartz</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
              />
              <p className="text-white">
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Site Map</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
              />
              <Nav.Link as={Link} activeStyle={{}} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                about
              </Nav.Link>
              <Nav.Link as={Link} to="/products">
                products
              </Nav.Link>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold"></h6>
              <Nav.Link href="/infrastructure">Infrastructure</Nav.Link>
              <Nav.Link as={Link} to="/contact">
                contact us
              </Nav.Link>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
              />
              <p className="text-white">
                <i className="fas fa-home mr-3"></i> New York, NY 10012, US
              </p>
              <p className="text-white">
                <i className="fas fa-envelope mr-3"></i> info@example.com
              </p>
              <p className="text-white">
                <i className="fas fa-phone mr-3"></i> +01 234 567 88
              </p>
              <p className="text-white">
                <i className="fas fa-print mr-3"></i> +01 234 567 89
              </p>
            </div>
          </div>
        </section>

        {/* Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © Copyright @ Micro Quartz 2023-2024 All Rights Reserved
        </div>
      </footer>
    </div>



      </div>
    </div>
  );
};

export default App;
