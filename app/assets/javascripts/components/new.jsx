const New = (props) => {

  let formFields = {}
 
  return(
	<div>
		<a href="/">home</a> ||
		<a href="/dashboard">dashboard</a>
	    <form>
		     <input ref={input => formFields.amount = input} placeholder='Enter the amount'/>
		     <input ref={input => formFields.fee = input} placeholder='Enter the fee' />
		     <input ref={input => formFields.reference = input} placeholder='Enter the reference'/>
		     <input ref={input => formFields.operator = input} placeholder='Enter the operator' />
		     <input ref={input => formFields.adress = input} placeholder='Enter the adress'/>
		     <input ref={input => formFields.drawer = input} placeholder='Enter the drawer' />
		     <input ref={input => formFields.number = input} placeholder='Enter the phone number of the sender' />
		     <button>Submit</button>
	    </form>
	</div>
  )
}