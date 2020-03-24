
console.log(products);

class Greeter extends React.Component {
    render () {
        return (
            <h1>Hi there {this.props.name}</h1>
        )
    }
}
class App extends React.Component {
    // OLD Method - may see this in legacy code.
    //constructor(){
    //     super(props);
    //     this.state = {
    //         products,
    //         name: "Tara"
    //     };
    // }

    // below is the more modern constructor
    state = {
        products,
        name: "Tara"
    };

    // this is the new way.  No need to explicitly bind
    // when we use fat arrow format
 handleGreeterClick= () =>  {
     console.log("Clicked!");
     this.setState({ name: "Jordan"});
 };
   
    render () {
        return (
            <div>
                <div onClick={this.handleGreeterClick}>
                <Greeter 
                    name={this.state.name}
                    
                />
                </div>
                {this.state.products.map( (product) => {
                    return (
                        <div>
                        
                        <ul >
                        
                            <li>{product.name} {product.price}
                            </li>
                        </ul>
                        </div>
                    )
                })}
            </div>
        )
    }
}
// we're targeting the DIV with class container for 
// inserting our data
ReactDOM.render(
    <App />,
    document.querySelector(".container")
)