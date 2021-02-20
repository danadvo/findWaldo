import React, {Component} from 'react';
import Heading from './Heading';
import Location from './Location';

class App extends Component {
  
  constructor(props){
    super(props);
    this.ipDataKey =props.ipDataKey;
    this.mapKey =props.mapKey;
    this.state = {
      dataForView: {
        country: '',
        city: '',
        latitude: '',
        longitude: ''
      },
      data:[],
      isLoaded: false
    }
  }

  componentDidMount(){
    const apiUrl = "https://api.ipdata.co/?api-key="+ this.ipDataKey;
    fetch(apiUrl)
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        data: json
      });
    });
  }

  render(){
    return(
      <div>
        <Heading />
        <Location dataState= {this.state} mapKey={this.mapKey}/>
      </div>
      );
  }
}

export default App;
