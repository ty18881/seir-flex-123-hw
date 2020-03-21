

class App extends React.Component {

state = {
    searchURL: "http://taco-randomizer.herokuapp.com/random/?full-tack=true"
}

makeApiCall = () => {
    this.setState(
        {
            searchURL: this.searchURL
        }, 
        () => {
            fetch(this.state.searchURL)
            .then(response => response.json())
            .this(json => 
                this.setState({
                    taco: json
                }))
        }
    )
}
        render () {
            return (
                <div>Hello World
                    <TacoInfo />
                </div>
            )
        }
}

ReactDOM.render(
    <App />,
    document.querySelector(".main")
)