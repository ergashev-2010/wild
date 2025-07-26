import React from "react";

export default function Navbar() {
  return (
    <div class="navbar">
      <div class="container align-items-start">
        <ul class="navbar-nav d-lg-flex d-none flex-row gap-xl-5 gap-4">
          <li>
            <a href="#!" class="nav-link fs-5">
              Products
            </a>
          </li>
          <li>
            <a href="#!" class="nav-link fs-5">
              Who we are
            </a>
          </li>
          <li>
            <a href="#!" class="nav-link fs-5">
              Concept Store
            </a>
          </li>
        </ul>
        <div class="qol">
          <img src="img/auf.png" alt="" />
        </div>
        <ul class="navbar-nav d-lg-flex d-none flex-row gap-xl-5 gap-4">
          <li>
            <a href="#!" class="nav-link fs-5">
              Products
            </a>
          </li>
          <li>
            <a href="#!" class="nav-link fs-5">
              Who we are
            </a>
          </li>
          <li>
            <a href="#!" class="nav-link fs-5">
              Concept Store
            </a>
          </li>
        </ul>
        <button
          class="btn d-lg-none d-flex fs-4"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <i class="fa-solid fa-bars-staggered"></i>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div class="offcanvas-header">
            <img class="fw-bold mb-0" src="./img/auf.png" alt="" />
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav">
              <li>
                <a href="#!" class="nav-link fs-5">
                  Products
                </a>
              </li>
              <li>
                <a href="#!" class="nav-link fs-5">
                  Who we are
                </a>
              </li>
              <li>
                <a href="#!" class="nav-link fs-5">
                  Concept Store
                </a>
              </li>
            </ul>
            <ul class="navbar-nav">
              <li>
                <a href="#!" class="nav-link fs-5">
                  Products
                </a>
              </li>
              <li>
                <a href="#!" class="nav-link fs-5">
                  Who we are
                </a>
              </li>
              <li>
                <a href="#!" class="nav-link fs-5">
                  Concept Store
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
