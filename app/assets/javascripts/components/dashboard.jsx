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
		   <table key={amount.user_id}>
			    <tr className="bg-success">
			    	<td>{amount.amount}</td>
			    	<td>{amount.fee}</td>
			    	<td>{amount.reference}</td>
			    	<td>{amount.operator}</td>
			    	<td>{amount.adress}</td>
			    	<td>{amount.drawer}</td>
			    	<td>{amount.number}</td>
			    </tr>
		   </table>
		  )
		 })
		return(
			<div>
				<h1 style={{marginLeft: '50px'}}>The Dashboard Here</h1>
				<div className="bg-success col-md-2 contact-info text-left" style={{marginLeft: '50px'}}>
					<li><a className="menu" href="/">home</a></li>
					<li><a className="menu" href="/dashboard">dashboard</a></li>
					<li><a className="menu" href="/new">new</a></li>
				</div>
				<div style={{marginLeft: "300px"}}>
				<th>
					<td>Amount</td>
					<td>Fee</td>
					<td>Reference</td>
					<td>Operator</td>
					<td>Adress</td>
					<td>Drawer</td>
					<td>Number</td>
				</th>
						{amounts}				
				</div>
			</div>
		)
	}
}