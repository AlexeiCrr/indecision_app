// class Visibility extends React.Component {
//   constructor(props) {
//     super(props);
//     this.toggleVisible = this.toggleVisible.bind(this);
//     this.state = {
//       text: "",
//       visibleButtonText: "Click for details"
//     };
//   }
//   toggleVisible() {
//     this.setState(prevState => {
//       return {
//         text: "Here is your text",
//         visibleButtonText: "Click to hide details"
//       };
//     });
//   }

//   render() {
//     return (
// <div>
//   <h1>Visibility Toggle</h1>
//   <button onClick={this.toggleVisible}>
//     {this.state.visibleButtonText}
//   </button>
//   <div>
//     <p>{this.state.text}</p>
//   </div>
// </div>
//     );
//   }
// }

class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggleVisibility() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Hide details" : "Show Details"}
        </button>
        {this.state.visibility && (
          <div>
            <p>Here are some details you can now see!</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById("app"));
