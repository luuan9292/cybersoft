import React, { Component } from 'react';
import './App.css';

// import component
import Controls from './Components/Controls/Controls';
import TaskList from './Components/TaskList/TaskList';
import Modal from './Components/Modal/Modal';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data : []
    }
  }

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem("dataToDoList"));
    this.setState({
      data
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
          <div className="container-fluid">
            <div className="row">
              
              {/* PANEL */}
              <Controls />


              {/* DISPLAY */}
              <TaskList 
                data={this.state.data}
              />

            </div>
          </div>
          {/* The Modal */}
          <Modal />
          
        </div>

      </div>
    );
  }
}

export default App;
