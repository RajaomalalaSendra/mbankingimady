const IndexNew = (props) => {
	let formFields = {};
	return(
		<div className="row" style={{marginLeft: "400px"}}>
			<div className="col-md-6">
			    <form onSubmit={ (e) => { props.handleFormSubmit(formFields.amount.value, formFields.fee.value, formFields.reference.value, formFields.operator.value,formFields.adress.value, formFields.drawer.value, formFields.number.value); e.target.reset();}
	} className="field">
				     <p>Amount:</p><input ref={input => formFields.amount = input} placeholder='Enter the amount' className="form-control"/>
				     <p>Fee:</p><input ref={input => formFields.fee = input} placeholder='Enter the fee' className="form-control"/>
				     <p>Reference:</p><input ref={input => formFields.reference = input} placeholder='Enter the reference' className="form-control"/>
				     <p>Operator:</p><input ref={input => formFields.operator = input} placeholder='Enter the operator' className="form-control"/>
				     <p>Adress:</p><input ref={input => formFields.adress = input} placeholder='Enter the adress' className="form-control"/>
				     <p>Drawer:</p><input ref={input => formFields.drawer = input} placeholder='Enter the drawer' className="form-control"/>
				     <p>Number:</p><input ref={input => formFields.number = input} placeholder='Enter the phone number of the sender' className="form-control"/>
				     <button className="btn btn-success">Submit</button>
			    </form>
			</div>
		</div>
	)
}