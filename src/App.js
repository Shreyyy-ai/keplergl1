import React, {Component} from 'react';
import {connect} from "react-redux";
import KeplerGl from "kepler.gl";
import { addDataToMap, wrapTo } from "kepler.gl/actions";
import config from './configurations/config.js';
import fetchData from './getData/fetchData.js';


class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      data: null
  }
}
  // componentDidMount () {
    // fetch('http://localhost:8000/tripData')
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({ data });
    //     console.log(this.state.data);
    //   })
    //   .then( () => {
    //     this.props.dispatch(
    //       wrapTo(
    //         "Map1",
    //         addDataToMap({
    //           datasets: {
    //               info: {
    //               label: "trip1",
    //               id: "trip1"
    //               },
    //               data: this.state.data
    //           },
    //           option: {
    //               centerMap: false,
    //               readOnly: false
    //           },
    //           config
    //         })
    //       )  
    //     );
    //   });

  
    // fetchData().then(res => {
    //   // console.log('appcomponent',JSON.stringify(res));
    //   this.setState(this.state.data.rows = res,() => {
    //     console.log('appComponent',this.state.data);
    //     this.props.dispatch(
    //       wrapTo(
    //         "Map1",
    //         addDataToMap({
    //           datasets: {
    //               info: {
    //               label: "trip1",
    //               id: "trip1"
    //               },
    //               data: this.state.data
    //           },
    //           option: {
    //               centerMap: false,
    //               readOnly: false
    //           },
    //           config
    //         })
    //       )  
    //     );
    //   })
    // })

    // fetchData().then((result) => {
    //   console.log(result);
    // })

  // }


  render() {
    return ( 
      <div style={{position: 'absolute', width: '100%', height: '100%'}}>
          <KeplerGl
            id="Map1"
            appName="My App"
            version="1.0.0"
            width={window.innerWidth}
            height={window.innerHeight}
            mapboxApiAccessToken={"pk.eyJ1Ijoic2hyZXl5eSIsImEiOiJja3FhajN1cTAwaGNwMndxdDRlbWYyN3U4In0.GCXlX4BURPUeYzc3Hq9k9g"} 
          />
      </div>
    );
    } 
}




const mapStateToProps = state => state;
const dispatchToProps = dispatch => ({dispatch});

export default connect(mapStateToProps, dispatchToProps)(App);

