import React, { Component } from 'react';

class Clock extends Component {
    state = {
        date: new Date(),
        intervalId: 0
      };
      componentDidMount() {
        setTimeout(() => {
          this.setState({
            intervalId: setInterval(() => {
              this.setState({
                date: new Date()
              });
            }, 1000)
          });
        }, this.state.date.getTime() % 1000);
      }
    
    render(){
        const { date } = this.state;
    return (
      <div className={`Clock ${this.state.date.getHours() < 16 ? "day" : "night"}`}>
          <div className="clock">
            {date.getFullYear()}/{date.getMonth() + 1}/{date.getDate()}&nbsp;&nbsp;
            {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
          </div>
      </div>
    );
    }
}

export default Clock;