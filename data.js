var APP_DATA = {
  "scenes": [
    {
      "id": "0-radioactive-entrance",
      "name": "Radioactive Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.4762879004653815,
        "pitch": 0.3504886580770439,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": 0.061120052277182424,
          "pitch": 0.36810303008507717,
          "rotation": 0,
          "target": "1-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entry",
      "name": "Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.31971434200978344,
        "pitch": 0.24253800981390938,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": -0.05951243817688656,
          "pitch": 0.15472075566725962,
          "rotation": 0,
          "target": "2-hotspot-1"
        },
        {
          "yaw": 1.244157610945635,
          "pitch": 0.4966427095602981,
          "rotation": 1.5707963267948966,
          "target": "4-dj-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hotspot-1",
      "name": "Hotspot 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.4975872605332423,
        "pitch": 0.1540444116385693,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": -0.16106683042144354,
          "pitch": 0.14418930743720182,
          "rotation": 0,
          "target": "1-entry"
        },
        {
          "yaw": -1.1741618003230894,
          "pitch": 0.37396795875723576,
          "rotation": 0.7853981633974483,
          "target": "3-hotspot-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hotspot-2",
      "name": "Hotspot 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.6766920029839447,
        "pitch": 0.262151469738388,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": -0.6123090247858922,
          "pitch": 0.2893636443460057,
          "rotation": 0,
          "target": "2-hotspot-1"
        },
        {
          "yaw": -2.7035429941479947,
          "pitch": 0.20755490731852788,
          "rotation": 0,
          "target": "4-dj-area"
        },
        {
          "yaw": -2.226742258278808,
          "pitch": 0.032539473965453425,
          "rotation": 5.497787143782138,
          "target": "1-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dj-area",
      "name": "DJ Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.7480861890006558,
        "pitch": 0.39704305861112843,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": 0.005069564498334955,
          "pitch": 0.2745531274376223,
          "rotation": 0,
          "target": "3-hotspot-2"
        },
        {
          "yaw": -1.864189308689438,
          "pitch": 0.3146794578037593,
          "rotation": 4.71238898038469,
          "target": "1-entry"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
