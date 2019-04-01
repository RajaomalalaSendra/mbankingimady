const IndexHomeTwo = (props) => {
	return(
		<div>
			<nav className="navbar navbar-default" style={{marginTop: "-50px",}}>
			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul className="nav navbar-nav navbar-left">
				    	<li><a className="menu active" href="/" >Home MbankingImady</a></li>
				    </ul>
			      	<ul className="nav navbar-nav navbar-right">
			        	<li><a className="menu" href="/team">our team</a></li>
			        	<li><a className="menu" href="/contact"> contact us</a></li>
			        	<li><a className="menu" href="/users/sign_in">sign in ||</a></li>
						<li><a className="menu" href="/users/sign_up">sign up</a></li>
			      	</ul>
			    </div>
			</nav>
			<h1 style={{marginLeft: '100px'}}>The Home Two is Here</h1>
			<Footer />
		</div>
	)
}