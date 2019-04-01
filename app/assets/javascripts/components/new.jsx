class New extends React.Component{
	constructor(props) {
    	super(props);
    	this.state = {
      	amounts: []
    	};
    	this.handleFormSubmit = this.handleFormSubmit.bind(this);
    	this.addNewAmount = this.addNewAmount.bind(this);
  	}
  	handleFormSubmit(amount, fee, reference, operator, adress, drawer, number){
  		let user_id = 2;
  		let body = JSON.stringify({amount: {amount: amount, fee: fee, reference: reference, operator: operator, adress: adress, drawer: drawer, number: number, user_id: user_id} })
		fetch(`/api/v1/amounts`, {
      	method: 'POST',
      	headers: {
        	'Content-Type': 'application/json'
      	},
      	body: body,
    	}).then((response) => {return response.json()})
    		.then((amount)=>{
      		this.addNewAmount(amount)
    	})
	}
	addNewAmount(amount){
	    this.setState({
	      amounts: this.state.amounts.concat(amount)
	    })
	}
 	render(){
	return(
    <div>
		  <div className="bg-success col-md-2 contact-info text-left" style={{marginLeft: '50px'}}>
        <li><a className="menu" href="/">home</a></li>
        <li><a className="menu" href="/dashboard">dashboard</a></li>
      </div>
		  <IndexNew  handleFormSubmit={this.handleFormSubmit}/>
      <Footer />
    </div>	
	  )
 	}
}