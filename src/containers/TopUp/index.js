import React from 'react';
import Profile from "../Profile";
import Uang from '../../assets/dollar.png';
import Uang1 from '../../assets/money.png';

function TopUp() {
  return (
  	<>
  	  <Profile/>
      <section>
			<div className="container">
		        <div className="row mt-3">
		        	<div className="py-1 text-white bg-primary">Pilih Nominal</div>
					<div className="row gx-5 content-center mt-5 p-3">
						<div className="col-xl-3 col-md-4 col-sm-6 mb-5">
								<div className="card mb-5 mb-xl-0">
									<div className="text-center card-body p-5">
										<img src={Uang} className="img50 card-img-top" alt="" />
										<div className="mt-3">
											<span className="fw-bolder">Rp 20.000</span>
										</div>
									</div>
		                    	</div>
	                  	</div>
						<div className="col-xl-3 col-md-4 col-sm-6 mb-5">
								<div className="card mb-5 mb-xl-0">
									<div className="text-center card-body p-5">
										<img src={Uang} className="img50 card-img-top" alt="" />
										<div className="mt-3">
											<span className="fw-bolder">Rp 50.000</span>
										</div>
									</div>
		                    	</div>
	                  	</div>
						<div className="col-xl-3 col-md-4 col-sm-6 mb-5">
							<a className="text-reset text-decoration-none" href="saldo">
								<div className="card mb-5 mb-xl-0">
									<div className="text-center card-body p-5">
										<img src={Uang} className="img50 card-img-top" alt="" />
										<div className="mt-3">
											<span className="fw-bolder">Rp 75.000</span>
										</div>
									</div>
		                    	</div>
	                    	</a>
	                  	</div>
	                  	<div className="col-xl-3 col-md-4 col-sm-6 mb-5">
								<div className="card mb-5 mb-xl-0">
									<div className="text-center card-body p-5">
										<img src={Uang} className="img50 card-img-top" alt="" />
										<div className="mt-3">
											<span className="fw-bolder">Rp 100.000</span>
										</div>
									</div>
		                    	</div>
	                  	</div>
						<div className="col-xl-3 col-md-4 col-sm-6 mb-5">
								<div className="card mb-5 mb-xl-0">
									<div className="text-center card-body p-5">
										<img src={Uang1} className="img50 card-img-top" alt="" />
										<div className="mt-3">
											<span className="fw-bolder">Rp 200.000</span>
										</div>
									</div>
		                    	</div>
	                  	</div>
						<div className="col-xl-3 col-md-4 col-sm-6 mb-5">
								<div className="card mb-5 mb-xl-0">
									<div className="text-center card-body p-5">
										<img src={Uang1} className="img50 card-img-top" alt="" />
										<div className="mt-3">
											<span className="fw-bolder">Rp 500.000</span>
										</div>
									</div>
		                    	</div>
	                  	</div>
						<div className="col-xl-3 col-md-4 col-sm-6 mb-5">
								<div className="card mb-5 mb-xl-0">
									<div className="text-center card-body p-5">
										<img src={Uang1} className="img50 card-img-top" alt="" />
										<div className="mt-3">
											<span className="fw-bolder">Rp 750.000</span>
										</div>
									</div>
		                    	</div>
	                  	</div>
						<div className="col-xl-3 col-md-4 col-sm-6 mb-5">
								<div className="card mb-5 mb-xl-0">
									<div className="text-center card-body p-5">
										<img src={Uang1} className="img50 card-img-top" alt="" />
										<div className="mt-3">
											<span className="fw-bolder">Rp 1000.000</span>
										</div>
									</div>
		                    	</div>
	                  	</div>
	      			</div>
		        	<a href="comingsoon" className="form-control btn btn-primary mb-5" 
		        		role="button">Lanjut
		        	</a>
		        </div>
			</div>
      </section>
	</>
  )
}

export default TopUp;