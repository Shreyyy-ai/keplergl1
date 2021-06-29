export default {
  version: 'v1',
  config: {
    visState: {
      filters: [
        {
          id: 'filter1',
          dataId: 'trip1',
          name: 'start_date_time',
          type: 'timeRange',
          enlarged: true,
          plotType: "histogram",
          animationWindow: "free",
          yAxis: null,
          speed: 1
        },
        {
          id: 'filter2',
          dataId: 'trip1',
          name: 'start_date',
          type: 'multiSelect',
          enlarged: false,
        },
        {
          dataId: "trip1",
          id: "filter3",
          name: "consignee_long",
          type: "range",
          value: [
            62,
            89
          ],
          enlarged: true,
        }
      ],
      layers: [
        {
          id: 'layer1',
          type: 'arc',
          config: {
            dataId: 'trip1',
            label: 'trip-layer',
            color: [1, 152, 189],
            columns: {
              lat0: 'consigner_lat',
              lng0: 'consigner_long',
              lat1: 'consignee_lat',
              lng1: 'consignee_long',
            },
            isVisible: true,
            visConfig: {
              opacity: 0.8,
              thickness: 1,
              colorRange: {
                name: 'Ice And Fire',
                type: 'diverging',
                category: 'Uber',
                colors: ['#D50255', '#FEAD54', '#FEEDB1', '#E8FEB5', '#49E3CE', '#0198BD'],
                reversed: true
              },
              sizeRange: [0,10],
              targetColor: [213, 2, 85]
            }
          },
          visualChannels: {
              colorField: null,
              colorScale: 'quantile',
              sizeField: null,
              sizeScale: 'linear'
          }
        },
        {
          id: "layer2",
          type: "point",
          config: {
            dataId: "trip1",
            label: "consigner layer",
            color: [1, 152, 189],
          columns: {
            lat: "consigner_lat",
            lng: "consigner_long",
            altitude: null
          },
          isVisible: true,
          visConfig: {
            radius: 10,
            fixedRadius: false,
            opacity: 0.8,
            outline: false,
            thickness: 2,
            strokeColor: null,
            colorRange: {
              name: 'Ice And Fire',
              type: 'diverging',
              category: 'Uber',
              colors: ['#D50255', '#FEAD54', '#FEEDB1', '#E8FEB5', '#49E3CE', '#0198BD'],
              reversed: true
            },
            strokeColorRange: {
              name: 'Ice And Fire',
              type: 'diverging',
              category: 'Uber',
              colors: ['#D50255', '#FEAD54', '#FEEDB1', '#E8FEB5', '#49E3CE', '#0198BD'],
              reversed: true
            },
            radiusRange: [
              0,
              50
            ],
            filled: true
            },
            hidden: false,
            textLabel: []
          },
          visualChannels: {
            colorField: null,
            colorScale: "quantile",
            strokeColorField: null,
            strokeColorScale: "quantile",
            sizeField: null,
            sizeScale: "linear"
          }
        },
        {
          id: "layer3",
          type : "point",
          config: {
            dataId: "trip1",
            label: "consignee layer",
            color: [213, 2, 85],
            columns: {
              lat: "consignee_lat",
              lng: "consignee_long",
              altitude: null
            },
            isVisible: true,
            visConfig: {
              radius: 10,
              fixedRadius: false,
              opacity: 0.8,
              outline: false,
              thickness: 2,
              strokeColor: null,
              colorRange: {
                name: 'Ice And Fire',
                type: 'diverging',
                category: 'Uber',
                colors: ['#D50255', '#FEAD54', '#FEEDB1', '#E8FEB5', '#49E3CE', '#0198BD'],
                reversed: true
              },
              strokeColorRange: {
                name: 'Ice And Fire',
                type: 'diverging',
                category: 'Uber',
                colors: ['#D50255', '#FEAD54', '#FEEDB1', '#E8FEB5', '#49E3CE', '#0198BD'],
                reversed: true
              },
              radiusRange: [
                0,
                50
              ],
              filled: true
            },
            hidden: false,
            textLabel: []
          },
          visualChannels: {
            colorField: null,
            colorScale: "quantile",
            strokeColorField: null,
            strokeColorScale: "quantile",
            sizeField: null,
            sizeScale: "linear"
          }
        }  
      ],
      interactionConfig: {
        tooltip: {
          fieldsToShow: {
            trip1_data: [
              {name: 'consigner_lat', format: null},
              {name: 'consigner_long' , format: null}, 
              {name: 'start_date', format: null}
            ]
          },
          enabled: true
        },
        brush: {
          size: 0.5,
          enabled: false
        },
        geocoder: {
          enabled: false
        }
      },
      layerBlending: 'normal',
      splitMaps: []
    },
    mapState: {
      bearing: 0,
      dragRotate: true,
      latitude: 23.34,
      longitude: 72.69,
      pitch: 0,
      zoom: 4,
      isSplit: false
    },
    mapStyle: {
      styleType: 'dark',
      topLayerGroups: {
        label: true
      },
      visibleLayerGroups: {
        label: true,
        road: true,
        border: true,
        building: true,
        water: true,
        land: true
      }
    }
  }
};