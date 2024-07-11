import CReact from "./creact";

export class Counter extends CReact.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    /*
    setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
    */
  }

  componentDidMount() {
    console.log("i've mounted");
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
