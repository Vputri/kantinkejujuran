import React from "react";

const Login = () => {
  return (
  	
      <section class="bg-kuning py-5">
        <div class="container py-3">
			<div class="row justify-content-center">
				<div class="col-md-12">
		          <form class="form login">  
		          	<h2 class="text-center mb-3 mt-3">Login</h2>
		          	<div class="form-group mb-3">
    					<label>NIM</label>
    					<input type="email" class="form-control"/>
  					</div>
  					<div class="form-group mb-4">
    					<label>Kata Sandi</label>
    					<input type="password" class="form-control"/>
  					</div>
  					<button class="btn button-kuning mb-3" disabled type="submit">Login</button>
  					<hr class="hr"/>
  					<p class="text-center">
  						<a class="btn btn-link" href="/comingsoon">Lupa kata sandi?</a>
  					</p>
		          </form>
				</div>
				<div class="text-center mb-3">
					<p>Belum punya akun?
		          		<a class="btn btn-link" href="/register">
		          			<u>Daftar disini</u>
		          		</a>
		          	</p>
				</div>
			</div>
        </div>
      </section>
    );
  };

export default Login;