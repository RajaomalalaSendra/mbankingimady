class Dashboard extends React.Component{
	constructor(props) {
    super(props);
    this.state = {
      amounts: [],
      users: []
    	};
  	}

  	componentDidMount(){
    	fetch('/api/v1/amounts.json')
      	.then((response) => {return response.json()})
      	.then((data) => {this.setState({ amounts: data }) });
  	}
	render(){
		var amounts = this.state.amounts.map((amount) => {
		  return(
		   <div key={amount.user_id}>
			    <p>{amount.amount}</p>
			    <p>{amount.fee}</p>
			    <p>{amount.reference}</p>
			    <p>{amount.operator}</p>
			    <p>{amount.adress}</p>
			    <p>{amount.drawer}</p>
			    <p>{amount.number}</p>
		   </div>
		  )
		 })
		return(
			<div>
				<h1>The Dashboard Here</h1>
				<div>
					<a href="/">home</a> ||
					<a href="/dashboard">dashboard</a> ||
					<a href="/new">new</a>
				</div>
				<div style={{marginLeft: "200px"}}>
						{amounts}				
				</div>
			</div>
		)
	}
}