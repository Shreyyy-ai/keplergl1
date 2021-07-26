import React, {Component} from 'react';
import {connect} from "react-redux";
import KeplerGl from "kepler.gl";
import axios from 'axios';
import { addDataToMap, wrapTo } from "kepler.gl/actions";
import configureData from './configureData.js';
import PaginationComponent from './component/paginationComp.js';
import getConfig from './configurations/config.js';


class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      data: null,
      currentPage: 1,
      recordsPerPage: 5,
      totalRecords: 25,
      pageNumberLimit: 5,
      maxPageNumberLimit: 5,
      minPageNumberLimit : 0
    };

    this.setcurrentPage=this.setcurrentPage.bind(this);
    this.setrecordsPerPage=this.setrecordsPerPage.bind(this);
    this.setpageNumberLimit=this.setpageNumberLimit.bind(this);
    this.setmaxPageNumberLimit=this.setmaxPageNumberLimit.bind(this);
    this.setminPageNumberLimit=this.setminPageNumberLimit.bind(this);
  }

  setcurrentPage(currentPage){
    this.setState({currentPage: currentPage});
  }
  
  setrecordsPerPage(recordsPerPage){
    this.setState({recordsPerPage: recordsPerPage});
  }
  
  setpageNumberLimit(pageNumberLimit){
    this.setState({pageNumberLimit: pageNumberLimit});
  }

  setmaxPageNumberLimit(maxPageNumberLimit){
    this.setState({maxPageNumberLimit: maxPageNumberLimit});
  }

  setminPageNumberLimit(minPageNumberLimit){
    this.setState({minPageNumberLimit: minPageNumberLimit});
  }

  componentDidMount(){
    axios.defaults.baseURL = 'https://transportation.fareye.co/api/v2/consigner_trips?gpsInfo=true&isActive=true&mapView=true';
    axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3NjcsIm5hbWUiOiJKayBsYWtzaG1pIiwiZW1haWwiOiJjb25zaWduZXIuamtsYWtzaG1pQGxvZ2lzdGljcy5jb20iLCJwaG9uZV9udW1iZXIiOiI4MjE4MTczNDQ3Iiwicm9sZSI6IkNvbnNpZ25lciIsImV4cCI6MTYyNTI5Mzk1M30.h2zZN1iX_V_IAXL2ffSsvt77WNtxRTKJuObY7AQPf2M';

    axios.get(`&pageNo=${this.state.currentPage}`)
      .then(response => {
        this.setState({data:configureData(response.data.content)});
        this.setState({recordsPerPage: response.data.meta.recordsPerPage});
        this.setState({totalRecords: response.data.meta.totalElements});

        console.log(this.state.data);
        
        console.log(this.state.currentPage, this.state.recordsPerPage, this.state.totalRecords, this.state.pageNumberLimit, this.state.maxPageNumberLimit, this.state.minPageNumberLimit);
      })
      .then(() => {
        this.props.dispatch(
          wrapTo(
            "Map1",
            addDataToMap({
              datasets: {
                  info: {
                  label: `trip${this.state.currentPage}`,
                  id: `trip${this.state.currentPage}`
                  },
                  data: this.state.data
              },
              option: {
                  centerMap: false,
                  readOnly: false
              },
              config : getConfig(`trip${this.state.currentPage}`)
            })
          )  
        );
      });
  }

  componentDidUpdate(prevProps,prevState,snapshot){
    if(prevState.currentPage!==this.state.currentPage){
      axios.defaults.baseURL = 'https://transportation.fareye.co/api/v2/consigner_trips?gpsInfo=true&isActive=true&mapView=true';
    axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3NjcsIm5hbWUiOiJKayBsYWtzaG1pIiwiZW1haWwiOiJjb25zaWduZXIuamtsYWtzaG1pQGxvZ2lzdGljcy5jb20iLCJwaG9uZV9udW1iZXIiOiI4MjE4MTczNDQ3Iiwicm9sZSI6IkNvbnNpZ25lciIsImV4cCI6MTYyNTI5Mzk1M30.h2zZN1iX_V_IAXL2ffSsvt77WNtxRTKJuObY7AQPf2M';

    axios.get(`&pageNo=${this.state.currentPage}`)
      .then(response => {
        this.setState({data:configureData(response.data.content)});
        this.setState({recordsPerPage: response.data.meta.recordsPerPage});
        this.setState({totalRecords: response.data.meta.totalElements});

        console.log(this.state.data);
        
        console.log(this.state.currentPage, this.state.recordsPerPage, this.state.totalRecords, this.state.pageNumberLimit, this.state.maxPageNumberLimit, this.state.minPageNumberLimit);
      })
      .then(() => {
        this.props.dispatch(
          wrapTo(
            "Map1",
            addDataToMap({
              datasets: {
                  info: {
                  label: `trip${this.state.currentPage}`,
                  id: `trip${this.state.currentPage}`
                  },
                  data: this.state.data
              },
              option: {
                  centerMap: false,
                  readOnly: false
              },
              config : getConfig(`trip${this.state.currentPage}`)
            })
          )  
        );
      });
    }
  }

  render() {
    return ( 
      <div style={{position: 'absolute', width: '100%', height: '100%'}}>
          <KeplerGl
            id="Map1"
            appName="My App"
            version="1.0.0"
            width={window.innerWidth}
            height={550}
            mapboxApiAccessToken={"pk.eyJ1Ijoic2hyZXl5eSIsImEiOiJja3FhajN1cTAwaGNwMndxdDRlbWYyN3U4In0.GCXlX4BURPUeYzc3Hq9k9g"} 
          />
          <PaginationComponent 
            currentPage = {this.state.currentPage}
            setcurrentPage = {this.setcurrentPage}
            recordsPerPage = {this.state.recordsPerPage}
            setrecordsPerPage = {this.setrecordsPerPage}
            totalRecords = {this.state.totalRecords}
            pageNumberLimit = {this.state.pageNumberLimit}
            setpageNumberLimit = {this.setpageNumberLimit}
            maxPageNumberLimit = {this.state.maxPageNumberLimit}
            setmaxPageNumberLimit = {this.setmaxPageNumberLimit}
            minPageNumberLimit = {this.state.minPageNumberLimit}
            setminPageNumberLimit = {this.setminPageNumberLimit}
          />
      </div>
    );
    } 
}




const mapStateToProps = state => state;
const dispatchToProps = dispatch => ({dispatch});

export default connect(mapStateToProps, dispatchToProps)(App);

