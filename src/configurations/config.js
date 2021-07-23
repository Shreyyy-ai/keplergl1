export default {
  "version": "v1",
  "config": {
    "visState": {
      "filters": [],
      "layers": [
        {
          "id": "8jfly0g",
          "type": "point",
          "config": {
            "dataId": "trip1",
            "label": "Point",
            "color": [
              255,
              203,
              153
            ],
            "highlightColor": [
              252,
              242,
              26,
              255
            ],
            "columns": {
              "lat": "latitude",
              "lng": "longitude",
              "altitude": null
            },
            "isVisible": true,
            "visConfig": {
              "radius": 11,
              "fixedRadius": false,
              "opacity": 0.8,
              "outline": false,
              "thickness": 2,
              "strokeColor": null,
              "colorRange": {
                "name": "Global Warming",
                "type": "sequential",
                "category": "Uber",
                "colors": [
                  "#5A1846",
                  "#900C3F",
                  "#C70039",
                  "#E3611C",
                  "#F1920E",
                  "#FFC300"
                ]
              },
              "strokeColorRange": {
                "name": "Global Warming",
                "type": "sequential",
                "category": "Uber",
                "colors": [
                  "#5A1846",
                  "#900C3F",
                  "#C70039",
                  "#E3611C",
                  "#F1920E",
                  "#FFC300"
                ]
              },
              "radiusRange": [
                0,
                30
              ],
              "filled": true
            },
            "hidden": false,
            "textLabel": []
          },
          "visualChannels": {
            "colorField": {
              "name": "avg_duration",
              "type": "real"
            },
            "colorScale": "quantile",
            "strokeColorField": null,
            "strokeColorScale": "quantile",
            "sizeField": {
              "name": "no_of_vehicles",
              "type": "integer"
            },
            "sizeScale": "sqrt"
          }
        },
        {
          "id": "3dh3enw",
          "type": "heatmap",
          "config": {
            "dataId": "trip1",
            "label": "new layer",
            "color": [
              30,
              150,
              190
            ],
            "highlightColor": [
              252,
              242,
              26,
              255
            ],
            "columns": {
              "lat": "latitude",
              "lng": "longitude"
            },
            "isVisible": true,
            "visConfig": {
              "opacity": 0.8,
              "colorRange": {
                "name": "Uber Viz Sequential 4",
                "type": "sequential",
                "category": "Uber",
                "colors": [
                  "#E6FAFA",
                  "#C1E5E6",
                  "#9DD0D4",
                  "#75BBC1",
                  "#4BA7AF",
                  "#00939C"
                ]
              },
              "radius": 50
            },
            "hidden": false,
            "textLabel": [
              {
                "field": null,
                "color": [
                  255,
                  255,
                  255
                ],
                "size": 18,
                "offset": [
                  0,
                  0
                ],
                "anchor": "start",
                "alignment": "center"
              }
            ]
          },
          "visualChannels": {
            "weightField": {
              "name": "total_duration",
              "type": "real"
            },
            "weightScale": "linear"
          }
        }
      ],
      "interactionConfig": {
        "tooltip": {
          "fieldsToShow": {
            "trip1": [
              {
                "name": "id",
                "format": null
              },
              {
                "name": "stoppage_identifier",
                "format": null
              },
              {
                "name": "stoppage_type",
                "format": null
              },
              {
                "name": "no_of_vehicles",
                "format": null
              },
              {
                "name": "avg_duration",
                "format": null
              }
            ]
          },
          "compareMode": false,
          "compareType": "absolute",
          "enabled": true
        },
        "brush": {
          "size": 0.5,
          "enabled": false
        },
        "geocoder": {
          "enabled": false
        },
        "coordinate": {
          "enabled": false
        }
      },
      "layerBlending": "normal",
      "splitMaps": [],
      "animationConfig": {
        "currentTime": null,
        "speed": 1
      }
    },
    "mapState": {
      "bearing": 0,
      "dragRotate": false,
      "latitude": 18.143407241324958,
      "longitude": 77.50349778093052,
      "pitch": 0,
      "zoom": 3.8397065810380537,
      "isSplit": false
    },
    "mapStyle": {
      "styleType": "dark",
      "topLayerGroups": {},
      "visibleLayerGroups": {
        "label": true,
        "road": true,
        "border": false,
        "building": true,
        "water": true,
        "land": true,
        "3d building": false
      },
      "threeDBuildingColor": [
        9.665468314072013,
        17.18305478057247,
        31.1442867897876
      ],
      "mapStyles": {}
    }
  }
};