import React from "react";
import Masuk from '../../assets/money.png';
import Man from '../../assets/woman.png';
import Header from "../../components/Header";

const Profile = () => {
  return (
  	<>
      <Header/> 
      <div className="row ps-5 content-center mt-5">
        <div className="col-xl-5 col-md-9 col-sm-12 mb-5">
          <div className="row">
            <div className="col-3">
              <img src={Man} className="img-thumbnail rounded-circle" alt=""/>
            </div>
            <div className="col-9">
              <h4 className="fw-bolder">Vika Putri Ariyanti</h4>
              <p>5641094</p>
              <a href="editprofile" className="btn btn-primary" role="button">Edit Profile</a>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-4 col-sm-6 mb-5">
          <div className="card card-stats">
            <div className="card-body">
              <div className="row">
                <div className="col-3">
                  <img src={Masuk} className="card-img-top" alt="" />
                </div>
                <div className="col-9">
                  <h5 className="card-title text-uppercase text-muted mb-0">Saldo</h5>
                  <p>Rp 1.999.999,99</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-4 col-sm-6 mb-5">
          <a href="topup" 
            className="form-control btn btn-primary mb-3" 
            role="button">ADD
          </a>
          <a href="comingsoon" className="form-control btn btn-primary" 
            role="button">WITHDRAW
          </a>
        </div>
      </div>
    </>
    );
  };

export default Profile;