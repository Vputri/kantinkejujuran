import React from "react";
import { useQuery } from "@apollo/react-hooks";
import bento from "../../assets/bento.png";

const Query = ({ children, query, slug, name }) => {
  const { data, loading, error, fetchMore  } = useQuery(query, {
    variables: { slug: slug, name: name }
  });

  if (loading) return (
  	<div className="mx-4 px-5">
  		<p className="mx-4 px-5">Loading</p>
  	</div>
  );

  if (error) return (
  	<div>
  		<div className="row text-center">
          <div className="col-md-4">
            <div className="card mb-3">
              <img src={bento} alt=""/>
              <div className="card-body">
                <h5 className="card-title name">Ayam</h5>
              </div>
              <div className="card-footer footer">
                <a className="text-reset text-decoration-none" href="/ComingSoon">LIHAT DETAIL</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-3">
              <img src={bento} alt=""/>
              <div className="card-body">
                <h5 className="card-title name">Daging</h5>
              </div>
              <div className="card-footer footer">
                <a className="text-reset text-decoration-none" href="/ComingSoon">LIHAT DETAIL</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-3">
              <img src={bento} alt=""/>
              <div className="card-body">
                <h5 className="card-title name">Ikan dan Seafood</h5>
              </div>
              <div className="card-footer footer">
                <a className="text-reset text-decoration-none" href="/ComingSoon">LIHAT DETAIL</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-2 mx-auto mt-3">
          <a href="comingsoon" 
            className="form-control btn btn-primary mb-3" 
            role="button">Lebih Banyak
          </a>
        </div>
       

  	</div>
  )

  return children({ data, fetchMore });
};

export default Query;