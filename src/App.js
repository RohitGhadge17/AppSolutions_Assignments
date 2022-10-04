import React from "react";
import "./App.css";
import Welcome from "./components/ComponentAndProps/Welcome";
import Garage from "./components/ConditionalRendering/Garage";
import Football from "./components/Events/Football";
import Form from "./components/Events/Form";
import Toggle from "./components/Events/Toggle";
// import Goal from "./components/ConditionalRendering/Goal";
// import MyForm from "./components/Forms/MyForm";
// import MyForm1 from "./components/Forms/MyForm1";
import EnhancedComponent from "./components/HOC/EnhancedComponent";
// import A from "./components/LiftingState/A";
// import Info from "./components/Prototypes/Info";
// import AddFocus from "./components/Refs/AddFocus";
// import Example3 from "./components/Refs/Example2";
// import OuterClickExample from "./components/Refs/OuterClickExample";
// import Clock from "./components/StateAndLifecycle/Clock";
// import Count from "./components/UseEffect/Count";
// import CounterExample from "./components/UseEffect/CounterExample";
// import Timer from "./components/UseEffect/Timer";
// import Counter from "./components/UseState/Counter";
// import Example1 from "./components/UseState/Example1";
// import FavoriteColor from "./components/UseState/FavoriteColor";
import Garage1 from "./components/ComponentAndProps/Garage";
import NameForm from "./components/Uncontrolled Components/NameForm";
class App extends React.Component {
  render() {
    //destructuring the props
    const { show, handleclick } = this.props;

    const cars = ["Ford", "BMW", "Audi"];

    //calling out the props
    return (
      <>
        {/* <button
          onClick={handleclick}
          style={{
            height: "100px",
            width: "150px",
            fontSize: "50px",
            marginLeft: "20px",
            marginTop: "20px",
          }}
        >
          {show}
        </button> */}
        {/* <Example1 /> */}
        {/* <FavoriteColor /> */}
        {/* <Counter /> */}
        {/* <Count /> */}
        {/* <Timer /> */}
        {/* <CounterExample /> */}
        {/* <Goal isGoal={false} /> */}
        {/* <Garage cars={cars} /> */}
        {/* <Garage /> */}
        {/* <Football /> */}
        {/* <Form /> */}
        {/* <Toggle /> */}
        {/* <Welcome name="Max" />
        <Welcome name="Micheal" /> */}
        {/* <Garage1 /> */}
        <NameForm />
        {/* <A /> */}
        {/* <Clock /> */}
        {/* <MyForm /> */}
        {/* <MyForm1 /> */}
        {/* <AddFocus /> */}
        {/* <Example3 /> */}
        {/* <OuterClickExample /> */}
        {/* <Info name="Rohit" age={26} /> */}
      </>
    );
  }
}

export default EnhancedComponent(App);
