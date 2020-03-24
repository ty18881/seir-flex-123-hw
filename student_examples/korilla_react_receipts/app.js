
class Receipt extends React.Component {
    
    render () {
        return (
            <div className="receipt" onClick={this.updatePaymentStatus}>
                <h1>
                {this.props.receipt.person}
                </h1>

                <ul>
                
                    <li>
                        Main: {this.props.receipt.order.main}
                    </li>
                    <li>
                        Protein: {this.props.receipt.order.protein}
                    </li>
                    <li>
                        {this.props.receipt.order.rice}
                    </li>
                    <li>
                        {this.props.receipt.order.sauce}
                    </li>
                    { this.props.receipt.order.toppings.map( item => { return <li> {item}</li>})}
                </ul>
               
           

            </div> )
    
}
}


class App extends React.Component {
constructor(props) {
    super(props);

    this.state = { 
        receipts: receipts
    };
}

updatePaymentStatus= () =>  {
    console.log("Clicked!");
    this.setState({ paid: true});
};
    
    render () {
        return (
            <div>
                <p> <h1 className="truck">Korilla</h1></p>
                <br></br>
                <div className="container">
                    {this.state.receipts.map( receipt => receipt.paid ? "" : <Receipt receipt={receipt}/>)}
                </div> 
               
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector(".main")
)