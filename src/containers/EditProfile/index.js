import React from 'react';
import Header from "../../components/Header";
import Man from '../../assets/woman.png';

function EditProfile() {
  return (
  	<>
      <Header/>
		<section class="py-5">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-xl-9">
						<div class="card border rounded-3">
							<div class="card-header border-bottom">
								<h3 class="card-header-title mb-0">Edit Profile</h3>
							</div>

							<div class="card-body">
								<form class="row g-4">
									<div class="col-12 justify-content-center align-items-center">
										<label class="form-label">Profile picture</label>
										<div class="d-flex align-items-center">
											<div className="col-2">
												<img src={Man} className="img-thumbnail rounded-circle" alt=""/>
											</div>
											<a href="editprofile" type="button" 
												class="btn btn-primary mx-5">Change</a>
										</div>
									</div>

									<div class="col-12">
										<label class="form-label">Full name</label>
										<div class="input-group">
											<input type="text" class="form-control" value="Vika" placeholder="First name"/>
											<input type="text" class="form-control" value="Putri" placeholder="Last name"/>
										</div>
									</div>

									<div class="col-md-6">
										<label class="form-label">Username</label>
										<div class="input-group">
											<input type="text" class="form-control" value="vika"/>
										</div>
									</div>

									<div class="col-md-6">
										<label class="form-label">Email</label>
										<input class="form-control" type="email" value="vika@gmail.com" 
										placeholder="Email"/>
									</div>

									<div class="col-md-12">
										<label class="form-label">Phone number</label>
										<input type="text" class="form-control" value="1234567890" 
										placeholder="Phone number"/>
									</div>

									<div class="d-sm-flex justify-content-end">
										<button type="button" class="btn btn-primary mb-0">Save changes</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</>
  )
}

export default EditProfile;