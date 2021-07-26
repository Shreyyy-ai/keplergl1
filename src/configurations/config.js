export default function getConfig(dataId){
  return {
    "version": "v1",
    "config": {
      "visState": {
        "filters": [],
        "layers": [
          {
            "id": "ygb2tfu",
            "type": "arc",
            "config": {
              "dataId": dataId,
              "label": "Trip Arc Layer",
              "color": [
                184,
                15,
                135
              ],
              "highlightColor": [
                252,
                242,
                26,
                255
              ],
              "columns": {
                "lat0": "consigner_lat",
                "lng0": "consigner_long",
                "lat1": "consignee_lat",
                "lng1": "consignee_long"
              },
              "isVisible": true,
              "visConfig": {
                "opacity": 0.8,
                "thickness": 2,
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
                "sizeRange": [
                  0,
                  10
                ],
                "targetColor": [
                  19,
                  164,
                  171
                ]
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
              "colorField": null,
              "colorScale": "quantile",
              "sizeField": null,
              "sizeScale": "linear"
            }
          },
          {
            "id": "ues3mam",
            "type": "point",
            "config": {
              "dataId": dataId,
              "label": "Consignor Location",
              "color": [
                184,
                15,
                135
              ],
              "highlightColor": [
                252,
                242,
                26,
                255
              ],
              "columns": {
                "lat": "consigner_lat",
                "lng": "consigner_long",
                "altitude": null
              },
              "isVisible": true,
              "visConfig": {
                "radius": 20,
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
                  50
                ],
                "filled": true
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
              "colorField": null,
              "colorScale": "quantile",
              "strokeColorField": null,
              "strokeColorScale": "quantile",
              "sizeField": null,
              "sizeScale": "linear"
            }
          },
          {
            "id": "ze74sso",
            "type": "point",
            "config": {
              "dataId": dataId,
              "label": "Consignee Location",
              "color": [
                21,
                174,
                180
              ],
              "highlightColor": [
                252,
                242,
                26,
                255
              ],
              "columns": {
                "lat": "consignee_lat",
                "lng": "consignee_long",
                "altitude": null
              },
              "isVisible": true,
              "visConfig": {
                "radius": 10,
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
                  50
                ],
                "filled": true
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
              "colorField": null,
              "colorScale": "quantile",
              "strokeColorField": null,
              "strokeColorScale": "quantile",
              "sizeField": null,
              "sizeScale": "linear"
            }
          }
        ],
        "interactionConfig": {
          "tooltip": {
            "fieldsToShow": {
              "trip1": [
                {
                  "name": "invoiceNo",
                  "format": null
                },
                {
                  "name": "vehicleNo",
                  "format": null
                },
                {
                  "name": "origin",
                  "format": null
                },
                {
                  "name": "destination",
                  "format": null
                },
                {
                  "name": "eta",
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
        "latitude": 23.318402433605954,
        "longitude": 77.44624825112209,
        "pitch": 0,
        "zoom": 5.168020112316736,
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
} 