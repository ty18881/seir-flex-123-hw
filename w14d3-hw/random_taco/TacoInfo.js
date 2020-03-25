
class TacoInfo extends React.Component {
    
    render () {
        return (
            <div className="taco-recipe">
                <div className="ingredient">
                    <p>MIXIN:  {this.props.taco.mixin.name}</p>
                    {this.props.taco.mixin.recipe}
                    
                </div>
                <div className="ingredient">
                    <p>CONDIMENT:  {this.props.taco.condiment.name}</p>
                    {this.props.taco.condiment.recipe}
                </div>
                <div className="ingredient">
                    <p>BASE LAYER:  {this.props.taco.base_layer.name}</p>
                    {this.props.taco.base_layer.recipe}
                </div>
                <div className="ingredient">
                    <p>SHELL:  {this.props.taco.shell.name}</p>
                    {this.props.taco.shell.recipe}
                </div>
            
            </div>
        )
    }
}
