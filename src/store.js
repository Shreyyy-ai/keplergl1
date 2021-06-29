import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import keplerGlReducer, {uiStateUpdaters} from 'kepler.gl/reducers';
import {enhanceReduxMiddleware} from 'kepler.gl/middleware';
import appReducer from './appReducer';
import window from 'global/window';

const customizedKeplerGlReducer = keplerGlReducer
  .initialState({
    uiState: {
      // hide side panel to disallower user customize the map
      readOnly: false,
      // hide initial add data component
      currentModal: null,  
      // customize which map control button to show
      mapControls: {
        ...uiStateUpdaters.DEFAULT_MAP_CONTROLS,
        visibleLayers: {
          show: true
        },
        mapLegend: {
          show: true,
          active: false
        },
        toggle3d: {
          show: true
        },
        splitMap: {
          show: false
        }
      }
    }
  })
  // handle additional actions
//   .plugin({
//     HIDE_AND_SHOW_SIDE_PANEL: (state, action) => ({
//       ...state,
//       uiState: {
//         ...state.uiState,
//         readOnly: !state.uiState.readOnly
//       }
//     })
//   });

const reducers = combineReducers({
  keplerGl: customizedKeplerGlReducer,
  app: appReducer
});

const middlewares = enhanceReduxMiddleware([]);
const enhancers = [applyMiddleware(...middlewares)];

const initialState = {};

// add redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducers, initialState, composeEnhancers(...enhancers));