
class TacoInfo extends React.Component {
    
    render () {
        return (
            <div>
                <p>MIXIN:  {this.props.taco.mixin.name}</p>
                <p>CONDIMENT:  {this.props.taco.condiment.name}</p>
                <p>BASE LAYER:  {this.props.taco.base_layer.name}</p>
                <p>SHELL:  {this.props.taco.shell.name}</p>
            </div>
        )
    }
}
