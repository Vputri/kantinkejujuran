import React from "react";
import { NavLink } from 'react-router-dom'
import { Nav, Navbar } from "react-bootstrap";
import bento from "../../assets/bento.png";
import Query from "../../components/Query";
import CULINARIES_QUERY from "../../queries/culinaries";

const Home = () => {
  return (
  <div>
    <header className="background text-white">
      <Navbar collapseOnSelect expand="sm" className="navbar navbar-dark navbar-expand-lg">
        <div className="container">
          <Navbar.Brand>
            <NavLink to="/" className="px-3 nav-link text-uppercase text-white">Home
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Nav.Link className="nav-item text-uppercase text-white px-3" href="/">Menu</Nav.Link>
              <Nav.Link className="nav-item text-uppercase text-white px-3" href="/login">Login</Nav.Link>
              <Nav.Link className="nav-item text-uppercase text-white px-3" href="/register">Register</Nav.Link>
              <Nav.Link className="nav-item text-uppercase text-white px-3" href="/profile">Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </div>
      </Navbar>
      <div className="container py-5 px-5">
        <div className="py-5 row gx-5 align-items-center justify-content-center">
          <div className="py-5 col-lg-8 col-xl-7 col-xxl-6">
            <div className="text-xl-start">
              <h2>Kantin Kejujuran</h2>
              <h1 className="display-5 fw-bolder">PekaVood</h1>
              <p className="fw-normal mb-5">
                Kantin yang menyedikan makanan kuliner khas Pekalongan
              </p>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                <a className="btn btn-warning btn-lg px-4 me-sm-3 putih" href="#menu">Lihat Menu ⟶</a>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-xxl-6 text-center mb-5">
          </div>
        </div>
      </div>
    </header>


    <section className="py-5" id="menu">
      <div className="container">
        <h2 className="mx-4 fw-bolder mb-5">Kategori Menu</h2>
        <div className="row text-center mx-2">

      <Query query={CULINARIES_QUERY}>
        {({ data: { kuliners }, fetchMore  }) => {
          return (
            <div className="container px-3">
              <div class="row mb-3">
                {kuliners.edges.map((edge, i) => {
                  return (
                    <div className="col-md-4">
                      <div className="card mb-3">
                          <img
                                className="card-img-top lazy-image"
                                src={`http:/wisata-pekalongan.herokuapp.com${edge.node.image}`}
                                alt={edge.node.image}
                                onError={
                                  (e) => 
                                  {
                                    e.target.src = bento;
                                    e.target.onError = null;
                                  }
                                } 
                          />
                        <div className="card-body">
                          <h5 className="card-title name">{edge.node.title}</h5>
                        </div>
                        <div className="card-footer footer">
                          <a className="text-reset text-decoration-none" href="/comingSoon">LIHAT DETAIL</a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              
      
              <div>
                {kuliners.pageInfo.hasNextPage && (<button
                  className="btn btn-primary"
                    onClick={() => {
                      const { endCursor } = kuliners.pageInfo;
                      fetchMore({
                        variables: { after: endCursor },
                        updateQuery: (prevResult, { fetchMoreResult }) => {
                          fetchMoreResult.kuliners.edges = [
                            ...prevResult.kuliners.edges,
                            ...fetchMoreResult.kuliners.edges
                          ];
                          return fetchMoreResult;
                        }
                      });
                    }}
                    >Lebih Banyak
                      <i className="fas fa-sync ms-2"></i>
                    </button>
                )}
              </div>
            </div>
          )
        }}
      </Query>
        </div>
      </div>
    </section>



  </div>

    );
  };

export default Home;