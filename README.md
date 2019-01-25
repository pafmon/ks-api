# KS-API

## Overview
This is a Knapsack API for stress analysis and benchmarking

This server was scaffolded with [oas-wizard](https://github.com/pafmon/oas-wizard), [oas-tools](https://github.com/isa-group/oas-tools) and [oas-generator](https://github.com/isa-group/oas-generator)

The Knapsack implementation is taken from: http://github.com/devfacet/knapsack

### Running the server
To run the server, run:

```
npm start
```

Then, if running in localhost, you can check the swagger UI doc portal in: `http://localhost:8080/docs`


#### Stress request

In order to send a request, either GET or POST can be used:

- `POST /api/v1/stress` 
```json
{
	"problem": "knapsack",
	"parameters": [
		{
			"id": "itemNumber",
			"value": 100000
		},
		{
			"id": "maxWeight",
			"value": 100000
		}
	],
	"config": {
		"maxMemory": -1,
		"maxTime": -1
	}
}
```

- `GET /api/v1/stress/10000/10` would generate and solve a knapsack problem with 10000 items (each of them with a random weight up to 10).

#### Knapsack problem

In order to solve a given knapsak problem you should send a POST to `/api/v1/problems` endpoint: 

`POST /api/v1/problems`
```json
{
    "id": "KSProblem",
    "problem": {
        "items": [{
                "item": "item1",
                "value": 3
            },
            {
                "item": "item2",
                "value": 2
            },
            {
                "item": "item3",
                "value": 3
            },
            {
                "item": "item4",
                "value": 2
            },
            {
                "item": "item5",
                "value": 1
            },
            {
                "item": "item6",
                "value": 2
            }
        ],
        "size": 10
    }
}
```
WIll get: 
```json
{
  "id": "KSProblem",
  "problem": {
    "items": [
      {
        "item": "item1",
        "value": 3
      },
      {
        "item": "item2",
        "value": 2
      },
      {
        "item": "item3",
        "value": 3
      },
      {
        "item": "item4",
        "value": 2
      },
      {
        "item": "item5",
        "value": 1
      },
      {
        "item": "item6",
        "value": 2
      }
    ],
    "size": 10
  },
  "solution": {
    "items": [
      {
        "item": "item1",
        "value": 3
      },
      {
        "item": "item3",
        "value": 3
      },
      {
        "item": "item2",
        "value": 2
      },
      {
        "item": "item4",
        "value": 2
      }
    ],
    "size": 10,
    "stats": {
      "solvingTime": "0.40689898681640624ms"
    }
  }
}
```

