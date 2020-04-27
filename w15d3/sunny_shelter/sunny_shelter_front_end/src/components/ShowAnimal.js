import React from "react";
// This component displays details about the animal in a modal
class ShowAnimal extends React.Component {
    

    state = {
        adopted: false,
        animal: this.props.animal
    };

    toggleAdoptionFlag = input => {
        // each click toggles the adopted flag back and forth.
        console.log("Toggle Adoption Flag - CLICKED.  Starting value: " + input.adopted);

        if (input.adopted === true){

            input.adopted = false;

        } else
        {
            input.adopted = true;
        }

       // update the animal object in state so changes will be reflected in the Modal

        this.setState({
            animal: input,
            adopted: input.adopted
        });
      };

    render() {
        return(

            <div className="modal">
                <a className="close" onClick={this.props.close}>
                    &times;
                </a>
                <div className="header">{this.props.animal.name}</div>
                <div className="content"> 
                   
                    <h3>{this.props.animal.species}</h3>
                    <img src={this.props.animal.image} alt={this.props.animal.name}/>
                    <h3>{this.props.animal.personalityTraits}</h3>
                    <h3>Adopted? {this.state.adopted === true ? "Yes" : "No"}</h3>
                    <button type="button" onClick={() => this.toggleAdoptionFlag(this.state.animal)}>Pending Adoption</button>
                    <button type="button" onClick={() => this.props.deleteAnimal(this.props.animal._id)}>Officially Adopted!</button>
                </div>

            </div>
        )
    }

}

export default ShowAnimal;