import React from "react";

// render method is very important, you cannot create class based components without render method
class Profile extends React.Component {
  // extend is used because Profile is a class and it needs to inherit some properties from react component

  constructor(props) {
    super(props); // research why are we doing this

    // create states here, this is the best place

    this.state = {
      count: 0,
      count2: 0, // this is the 2nd state variable
    };
  }
  componentDidMount() {
    // this is for api calls
    // eqivalent to useEffect
  }

  /*
  the order in which the compoenen ts are called is
  1. constructor
  2. render
  3. component did mount
  */

  render() {
    return (
      <div>
        <h1>this is a class based components</h1>
        <h2>Name : {this.props.name}</h2>
        <h3>Count : {this.state.count2}</h3>
        <button
          onClick={() => {
            // we do not mutate state directly
            this.setState({ count2: 1 });
          }}
        >
          click me
        </button>
      </div>
    );
  }
}

export default Profile;
