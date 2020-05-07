import React, { Component } from "react";

class Daters extends Component {

     render () {
        return (
          <>
            
            {this.props.daters.map( dater => {
              return (
                <div key={dater.id} className="dater">
                  <h3>{dater.name} </h3>
                  <img src={dater.img} alt={dater.name}/>
                  <h4>Starsign: {dater.starsign} </h4>
                  <h4>Age: {dater.age} </h4>
                  {dater.ltl
                    ? <h5> Loves to laugh and have a good time</h5>
                    : <h5> Hates laughing, does not like having a good time</h5>
                  }
                </div>
              )
            })}
          </>
        )
      }
}

export default Daters;