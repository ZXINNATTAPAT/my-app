import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react';
import { ImHome }from 'react-icons/im';


function Navbar() {
  return (
                <>

              <nav class="navbar navbar-dark bg-dark fixed-top">
                <div class="container-fluid">
                
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                          <span class="navbar-toggler-icon"></span>
                        </button>
                  
              <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                  <div class="offcanvas-header">
                    <h1 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Calculater Nummerical</h1>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                <div class="offcanvas-body">
                
                  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                      <a class="nav-link active fs-4" aria-current="page" href="http://localhost:3000/">
                        <h3><ImHome /></h3>
                       </a>
                       <h2 > Root of equation</h2>
                       
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active fs-4" aria-current="page" href="http://localhost:3000/Bisection">Bisection Method</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active fs-4" aria-current="page" href="http://localhost:3000/False">Flase position Method</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active fs-4" aria-current="page" href="http://localhost:3000/Newton">Newton Raphson Method</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active fs-4" aria-current="page" href="http://localhost:3000/Secant">Secant Method</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active fs-4" aria-current="page" href="http://localhost:3000/Onepoint">one Point Iteration Method</a>
                    </li>
                    <h2>Linear algebra</h2>
                    <li class="nav-item">
                      <a class="nav-link active fs-4" aria-current="page" href="http://localhost:3000/Cramer">Carmer's Rule</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active fs-4" aria-current="page" href="http://localhost:3000/Gaussjd">Guss-Jordan Method</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active fs-4" aria-current="page" href="http://localhost:3000/GaussEM">gaussian-elimination Method</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active fs-4" aria-current="page" href="http://localhost:3000/Matrixinversion">Matrix inversion Method</a>
                    </li>
                    <h2>Interpolation</h2>
                   
                    <li class="nav-item">
                      <a class="nav-link active fs-4" aria-current="page" href="http://localhost:3000/NewtonInterpolation">NewtonInterpolation Method</a>
                    </li>
                    <h2>Linear Regression</h2>
                    <li class="nav-item">
                      <a class="nav-link active fs-4" aria-current="page" href="http://localhost:3000/NewtonRegression">Linear Regression</a>
                    </li>
                   

                  </ul>
                  
                </div>
              </div>
              
            </div>
            

          </nav>
              
        
                      
                      
              

    </>
  );
}

export default Navbar;
