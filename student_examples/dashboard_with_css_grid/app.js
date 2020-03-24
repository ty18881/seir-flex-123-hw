class Box1 extends React.Component {
    render () {
      return (
            <div class="box1">
                <p>Dashboard</p>
                <p>Widget</p>
                <p>Reviews</p>
                <p>Customers</p>
                <p>Online Analysis</p>
                <p>Settings</p>
            </div>
      )
    }
  }

class Box2 extends React.Component {
    render () {
        return (
            <div class="box2">
                <h2>Reviews</h2>
                <h1>1,281</h1>
            </div>
        )
    }
}

class Box3 extends React.Component {
    render () {
        <div class="box3">
            <h2>Average Rating</h2>
            <h1>4.6</h1>
        </div>
    }
}

class Box4 extends React.Component {
    render () {
        <div class="box4">
            <h2>Sentiment Analysis</h2>
            <h1>960</h1>
            <h1>122</h1>
            <h1>321</h1>
        </div>
    }
}
class App extends React.Component {
    render () {
        return (
            <div class="dashboard">
                <Box1 />
                <Box2 />
                <Box3 />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector(".container")
)