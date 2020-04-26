class App extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      count: 0
    }
    this.counter = this.counter.bind(this);
  }

  counter() {
    this.setState((prev) => ({
      count: prev.count + 1
    }))
  }

  render() {

    return(
      <div>
        {this.state.count === 0 && (
          <div>
            <form action="/formData" method="POST">
            <input type="submit" onClick={(e) => {e.preventDefault(); this.counter();}} value="CHECKOUT"/>
            </form>
          </div>
        )}
        {this.state.count === 1 && (
          <div>
             <form action="/formData" method="POST">
               <input placeholder="NAME" name="name"></input><br></br>
               <input placeholder="EMAIL" name="email"></input><br></br>
               <input placeholder="PASSWORD" name="password"></input><br></br>
               <br></br>
               <input type="submit" onClick={(e) => {e.preventDefault(); this.counter(); }} value="Login" />
             </form>
          </div>
        )}
        {this.state.count === 2 && (
          <div>
          <form action="http://localhost:8888/formData" method="POST">
            <input placeholder="Address Line 1" name="address.line1"></input><br></br>
            <input placeholder="Apt Unit etc" name="address.line2"></input><br></br>
            <input placeholder="City" name="address.city"></input><br></br>
            <input placeholder="State" name="address.state"></input><br></br>
            <input placeholder="ZipCode" name="address.zipcode"></input><br></br>
            <br></br>
            <input  type="submit" onClick={(e) => {e.preventDefault(); this.counter(); }} value="Continue" />
          </form>
        </div>
        )}
        {this.state.count === 3 && (
          <div>
            <form action="http://localhost:8888/formData" method="POST">
              <input placeholder="CC #" name="payment.ccnum"></input><br></br>
              <input placeholder="EXPIRATION" name="payment.expiration"></input><br></br>
              <input placeholder="CVV" name="payment.cvv"></input><br></br>
              <input placeholder="ZipCode" name="payment.zipcode"></input><br></br>
              <br></br>
              <input  type="submit" onClick={(e) => {e.preventDefault(); this.counter();}} value="COMPLETE PURCHASE"/>
            </form>
          </div>
        )}
        {this.state.count === 4 && (
          <div>
            <p>THANK YOU FOR YOUR PURCHASE WE HOPE YOU ENJOY IT!</p>
          </div>
        )}
      </div>
    )}
}

ReactDOM.render(<App/>, document.getElementById('app'));