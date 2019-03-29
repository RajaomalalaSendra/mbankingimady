class IndexHome extends React.Component {
	render(){
		return(
			<div>
				<h1 style={{marginLeft: "50px",}}>The Home is Here</h1>
				<div className="row" style={{marginLeft: "50px",}}>
					<div className="bg-success col-md-2 contact-info text-left" >
						<ul>
							<li><a className="menu" href="/dashboard">dashboard</a></li>
							<li><a className="menu" href="/new">new</a></li>
						</ul>
					</div>
					<div className="col">
					<p>This is the menu of ours for this mbanking....</p>
					</div>
				</div>
			</div>
		)
	}
}