import React from "react";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div class="container-fluid ">
          <a
            class="navbar-brand"
            href="index.html"
            style={{ color: "#fff", fontSize: 30, fontWeight: "bold" }}
          >
            CoinsCave
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="./"
                  style={{ color: "#fff", fontSize: 20, marginLeft: 20 }}
                >
                  Kripto Al
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="./"
                  style={{ color: "#fff", fontSize: 20 }}
                >
                  Finans
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="./"
                  style={{ color: "#fff", fontSize: 20 }}
                >
                  Listeler
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="./"
                  style={{ color: "#fff", fontSize: 20 }}
                >
                  Akademi
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="./"
                  style={{ color: "#fff", fontSize: 20 }}
                >
                  Hakkımızda
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
