import React from 'react';
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";

const buttonValues = ["C", "Del", "%", "/", 7, 8, 9, "x", 4, 5, 6, "+", 1, 2, 3, "-", 0, ".", "="];

const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");

export default class App extends React.Component{
constructor() {
  super();

  this.state = {
    formula: "0"
  };

  this.buttonOnCkick = this.buttonOnCkick.bind(this);
}

buttonOnCkick(event)  {
  let value = event.target.value;

  switch(value) {

    case "=": {
      if (this.state.formula !=='')
      {
        var ans='';
        try
        {
            ans = eval(removeSpaces(toLocaleString(this.state.formula)));
        }
        catch(err)
        {
            this.setState({formula: "Math Error"});
        }
        if (ans==="") {
          this.setState({formula: "Math Error"});
        }

        else {
            this.setState({formula: ans});
        }
      }
      break;
    }

    case "C": {
      this.setState({formula: "0"});
      break;
    }

    case "Del": {
      if (this.state.formula !== "Math Error" && this.state.formula !== "0")
      {
        let str = this.state.formula.substring(0, this.state.formula.length - 1);
        this.setState({formula: str});
      }
      break;
    }

    default: {
      if (this.state.formula === "Math Error" || this.state.formula === "0")
      {
        this.setState({formula: value})
      }
      else
      {
        this.setState({formula: this.state.formula + value})
      }
    }
  }
}

render(){
  return (
    <div className="App">
      <Wrapper>
        <Screen value={this.state.formula} />
        <ButtonBox>
          {
            buttonValues.map((btn) => {
              return (
                <Button value={btn==="x" ? "*": btn} sign={btn} className={btn === "=" ? "button equal" : "button"} onClick={this.buttonOnCkick} />
              );
            })
          }
        </ButtonBox>
      </Wrapper>
    </div>
  );}
}
