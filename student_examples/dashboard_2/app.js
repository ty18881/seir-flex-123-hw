class Dial extends React.Component {
    render () {
      return (
        <div class="small-left">
          <h2>Reviews</h2>
          <h3>1,289</h3>
        </div>
      )
    }
  }

  class Dial2 extends React.Component {
    render () {
      return (
        <div class="small-center">
          <h2>Average Rating</h2>
          <h3>4.6</h3>
        </div>
      )
    }
  }

  class Dial3 extends React.Component {
    render () {
      return (
        <div class="small-right">
          <h2>Sentiment Analysis</h2>
          <div class="analysis-data">
            <h3>960</h3>
            <h3>122</h3>
            <h3>321</h3>
          </div>
        </div>
      )
    }
  }

  class Sidebar extends React.Component {
      render () {
          return (
            <div class="vert-container">
                <div class="sidebar">
                  <h2>Dashboard </h2>
                  <h2>Widget</h2>
                  <h2>Reviews</h2>
                  <h2>Customers</h2>
                  <h2>Online Analysis</h2>
                  <h2>Settings</h2>
                </div>
              </div>
          )
      }
  }

  class WebsiteVisitors extends React.Component {
    render () {
        return (
            <div>
                <h2>Website Visitors</h2>
                <h3>821</h3>
            </div>
        )
    }
}

class VisitorNested extends React.Component {
    render () {
        return (
            <div>
                <h2>the dark gray box inside website visitors</h2>
            </div>
        )
    }
}
  class App extends React.Component {
    render() {
      return (
        <div>
            
              <Sidebar />
        </div>
      );
    }
  }

ReactDOM.render(
    <App />,
    document.querySelector('main')
  );