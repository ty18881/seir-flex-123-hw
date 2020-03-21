
class Receipt extends React.Component {
    
    render () {
        return (
            <div>
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
        receipt1: receipt1,
        receipt2: receipt2,
        receipt3: receipt3
    };
}
    
    render () {
        return (
            <div>       
                <h1 className="truck">Korilla</h1>
                <div className="receipt">
                   {this.state.receipt1.paid ? '' : <Receipt receipt={this.state.receipt1}/>}
                </div>
                <div className="receipt">
                   {this.state.receipt2.paid ? "" :  <Receipt receipt={this.state.receipt2}/>}
                </div>
                <div className="receipt">
                    {this.state.receipt3.paid ? "" : <Receipt receipt={this.state.receipt3}/>}
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector(".container")
)