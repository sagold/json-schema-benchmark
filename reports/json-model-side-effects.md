# [`json-model`](https://github.com/geraintluff/json-model) side-effects in testrun

When running tests [`json-model`](https://github.com/geraintluff/json-model) mutated either the original schema or the data being validated with the schema or both.


# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalItems as schema, additional items match schema`
## Original schema
```js
{
	"items": [
		{}
	],
	"additionalItems": {
		"type": "integer"
	}
}
```
## Schema after validating
```js
{
	"items": [
		{}
	],
	"additionalItems": {
		"type": "integer"
	},
	"id": "12792870628976516anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalItems as schema, additional items do not match schema`
## Original schema
```js
{
	"items": [
		{}
	],
	"additionalItems": {
		"type": "integer"
	}
}
```
## Schema after validating
```js
{
	"items": [
		{}
	],
	"additionalItems": {
		"type": "integer"
	},
	"id": "12792870628976516anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `items is schema, no additionalItems, all items match schema`
## Original schema
```js
{
	"items": {},
	"additionalItems": false
}
```
## Schema after validating
```js
{
	"items": {},
	"additionalItems": false,
	"id": "09665213142318363anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `array of items with no additionalItems, empty array`
## Original schema
```js
{
	"items": [
		{},
		{},
		{}
	],
	"additionalItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{},
		{},
		{}
	],
	"additionalItems": false,
	"id": "8367497838134594anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `array of items with no additionalItems, fewer number of items present (1)`
## Original schema
```js
{
	"items": [
		{},
		{},
		{}
	],
	"additionalItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{},
		{},
		{}
	],
	"additionalItems": false,
	"id": "8367497838134594anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `array of items with no additionalItems, fewer number of items present (2)`
## Original schema
```js
{
	"items": [
		{},
		{},
		{}
	],
	"additionalItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{},
		{},
		{}
	],
	"additionalItems": false,
	"id": "8367497838134594anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `array of items with no additionalItems, equal number of items present`
## Original schema
```js
{
	"items": [
		{},
		{},
		{}
	],
	"additionalItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{},
		{},
		{}
	],
	"additionalItems": false,
	"id": "8367497838134594anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `array of items with no additionalItems, additional items are not permitted`
## Original schema
```js
{
	"items": [
		{},
		{},
		{}
	],
	"additionalItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{},
		{},
		{}
	],
	"additionalItems": false,
	"id": "8367497838134594anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalItems as false without items, items defaults to empty schema so everything is valid`
## Original schema
```js
{
	"additionalItems": false
}
```
## Schema after validating
```js
{
	"additionalItems": false,
	"id": "562442571607459anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalItems as false without items, ignores non-arrays`
## Original schema
```js
{
	"additionalItems": false
}
```
## Schema after validating
```js
{
	"additionalItems": false,
	"id": "562442571607459anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalItems are allowed by default, only the first item is validated`
## Original schema
```js
{
	"items": [
		{
			"type": "integer"
		}
	]
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "integer"
		}
	],
	"id": "3689481055958592anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalItems should not look in applicators, valid case, items defined in allOf are not examined`
## Original schema
```js
{
	"allOf": [
		{
			"items": [
				{
					"type": "integer"
				}
			]
		}
	],
	"additionalItems": {
		"type": "boolean"
	}
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"items": [
				{
					"type": "integer"
				}
			]
		}
	],
	"additionalItems": {
		"type": "boolean"
	},
	"id": "4056714430137389anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalItems should not look in applicators, invalid case, items defined in allOf are not examined`
## Original schema
```js
{
	"allOf": [
		{
			"items": [
				{
					"type": "integer"
				},
				{
					"type": "string"
				}
			]
		}
	],
	"items": [
		{
			"type": "integer"
		}
	],
	"additionalItems": {
		"type": "boolean"
	}
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"items": [
				{
					"type": "integer"
				},
				{
					"type": "string"
				}
			]
		}
	],
	"items": [
		{
			"type": "integer"
		}
	],
	"additionalItems": {
		"type": "boolean"
	},
	"id": "21988916485090937anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalProperties being false does not allow other properties, no additional properties is valid`
## Original schema
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"patternProperties": {
		"^v": {}
	},
	"additionalProperties": false
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"patternProperties": {
		"^v": {}
	},
	"additionalProperties": false,
	"id": "8897522372833451anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalProperties being false does not allow other properties, an additional property is invalid`
## Original schema
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"patternProperties": {
		"^v": {}
	},
	"additionalProperties": false
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"patternProperties": {
		"^v": {}
	},
	"additionalProperties": false,
	"id": "8897522372833451anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalProperties being false does not allow other properties, ignores arrays`
## Original schema
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"patternProperties": {
		"^v": {}
	},
	"additionalProperties": false
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"patternProperties": {
		"^v": {}
	},
	"additionalProperties": false,
	"id": "8897522372833451anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalProperties being false does not allow other properties, ignores strings`
## Original schema
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"patternProperties": {
		"^v": {}
	},
	"additionalProperties": false
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"patternProperties": {
		"^v": {}
	},
	"additionalProperties": false,
	"id": "8897522372833451anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalProperties being false does not allow other properties, ignores other non-objects`
## Original schema
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"patternProperties": {
		"^v": {}
	},
	"additionalProperties": false
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"patternProperties": {
		"^v": {}
	},
	"additionalProperties": false,
	"id": "8897522372833451anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalProperties being false does not allow other properties, patternProperties are not additional properties`
## Original schema
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"patternProperties": {
		"^v": {}
	},
	"additionalProperties": false
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"patternProperties": {
		"^v": {}
	},
	"additionalProperties": false,
	"id": "8897522372833451anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `non-ASCII pattern with additionalProperties, matching the pattern is valid`
## Original schema
```js
{
	"patternProperties": {
		"^á": {}
	},
	"additionalProperties": false
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"^á": {}
	},
	"additionalProperties": false,
	"id": "7634418127070481anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `non-ASCII pattern with additionalProperties, not matching the pattern is invalid`
## Original schema
```js
{
	"patternProperties": {
		"^á": {}
	},
	"additionalProperties": false
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"^á": {}
	},
	"additionalProperties": false,
	"id": "7634418127070481anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalProperties allows a schema which should validate, no additional properties is valid`
## Original schema
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"additionalProperties": {
		"type": "boolean"
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"additionalProperties": {
		"type": "boolean"
	},
	"id": "5708636876992035anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalProperties allows a schema which should validate, an additional valid property is valid`
## Original schema
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"additionalProperties": {
		"type": "boolean"
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"additionalProperties": {
		"type": "boolean"
	},
	"id": "5708636876992035anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalProperties allows a schema which should validate, an additional invalid property is invalid`
## Original schema
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"additionalProperties": {
		"type": "boolean"
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"additionalProperties": {
		"type": "boolean"
	},
	"id": "5708636876992035anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalProperties can exist by itself, an additional valid property is valid`
## Original schema
```js
{
	"additionalProperties": {
		"type": "boolean"
	}
}
```
## Schema after validating
```js
{
	"additionalProperties": {
		"type": "boolean"
	},
	"id": "45649172623324974anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalProperties can exist by itself, an additional invalid property is invalid`
## Original schema
```js
{
	"additionalProperties": {
		"type": "boolean"
	}
}
```
## Schema after validating
```js
{
	"additionalProperties": {
		"type": "boolean"
	},
	"id": "45649172623324974anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalProperties are allowed by default, additional properties are allowed`
## Original schema
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"id": "5088137857261934anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalProperties should not look in applicators, properties defined in allOf are not examined`
## Original schema
```js
{
	"allOf": [
		{
			"properties": {
				"foo": {}
			}
		}
	],
	"additionalProperties": {
		"type": "boolean"
	}
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"properties": {
				"foo": {}
			}
		}
	],
	"additionalProperties": {
		"type": "boolean"
	},
	"id": "929277432835774anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf, allOf`
## Original schema
```js
{
	"allOf": [
		{
			"properties": {
				"bar": {
					"type": "integer"
				}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"properties": {
				"bar": {
					"type": "integer"
				}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		}
	],
	"id": "6180782251155317anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf, mismatch second`
## Original schema
```js
{
	"allOf": [
		{
			"properties": {
				"bar": {
					"type": "integer"
				}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"properties": {
				"bar": {
					"type": "integer"
				}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		}
	],
	"id": "6180782251155317anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf, mismatch first`
## Original schema
```js
{
	"allOf": [
		{
			"properties": {
				"bar": {
					"type": "integer"
				}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"properties": {
				"bar": {
					"type": "integer"
				}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		}
	],
	"id": "6180782251155317anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf, wrong type`
## Original schema
```js
{
	"allOf": [
		{
			"properties": {
				"bar": {
					"type": "integer"
				}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"properties": {
				"bar": {
					"type": "integer"
				}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		}
	],
	"id": "6180782251155317anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf with base schema, valid`
## Original schema
```js
{
	"properties": {
		"bar": {
			"type": "integer"
		}
	},
	"required": [
		"bar"
	],
	"allOf": [
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		},
		{
			"properties": {
				"baz": {
					"type": "null"
				}
			},
			"required": [
				"baz"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"properties": {
		"bar": {
			"type": "integer"
		}
	},
	"required": [
		"bar"
	],
	"allOf": [
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		},
		{
			"properties": {
				"baz": {
					"type": "null"
				}
			},
			"required": [
				"baz"
			]
		}
	],
	"id": "6584814616025743anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf with base schema, mismatch base schema`
## Original schema
```js
{
	"properties": {
		"bar": {
			"type": "integer"
		}
	},
	"required": [
		"bar"
	],
	"allOf": [
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		},
		{
			"properties": {
				"baz": {
					"type": "null"
				}
			},
			"required": [
				"baz"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"properties": {
		"bar": {
			"type": "integer"
		}
	},
	"required": [
		"bar"
	],
	"allOf": [
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		},
		{
			"properties": {
				"baz": {
					"type": "null"
				}
			},
			"required": [
				"baz"
			]
		}
	],
	"id": "6584814616025743anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf with base schema, mismatch first allOf`
## Original schema
```js
{
	"properties": {
		"bar": {
			"type": "integer"
		}
	},
	"required": [
		"bar"
	],
	"allOf": [
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		},
		{
			"properties": {
				"baz": {
					"type": "null"
				}
			},
			"required": [
				"baz"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"properties": {
		"bar": {
			"type": "integer"
		}
	},
	"required": [
		"bar"
	],
	"allOf": [
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		},
		{
			"properties": {
				"baz": {
					"type": "null"
				}
			},
			"required": [
				"baz"
			]
		}
	],
	"id": "6584814616025743anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf with base schema, mismatch second allOf`
## Original schema
```js
{
	"properties": {
		"bar": {
			"type": "integer"
		}
	},
	"required": [
		"bar"
	],
	"allOf": [
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		},
		{
			"properties": {
				"baz": {
					"type": "null"
				}
			},
			"required": [
				"baz"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"properties": {
		"bar": {
			"type": "integer"
		}
	},
	"required": [
		"bar"
	],
	"allOf": [
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		},
		{
			"properties": {
				"baz": {
					"type": "null"
				}
			},
			"required": [
				"baz"
			]
		}
	],
	"id": "6584814616025743anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf with base schema, mismatch both`
## Original schema
```js
{
	"properties": {
		"bar": {
			"type": "integer"
		}
	},
	"required": [
		"bar"
	],
	"allOf": [
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		},
		{
			"properties": {
				"baz": {
					"type": "null"
				}
			},
			"required": [
				"baz"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"properties": {
		"bar": {
			"type": "integer"
		}
	},
	"required": [
		"bar"
	],
	"allOf": [
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		},
		{
			"properties": {
				"baz": {
					"type": "null"
				}
			},
			"required": [
				"baz"
			]
		}
	],
	"id": "6584814616025743anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf simple types, valid`
## Original schema
```js
{
	"allOf": [
		{
			"maximum": 30
		},
		{
			"minimum": 20
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"maximum": 30
		},
		{
			"minimum": 20
		}
	],
	"id": "6271110280106313anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf simple types, mismatch one`
## Original schema
```js
{
	"allOf": [
		{
			"maximum": 30
		},
		{
			"minimum": 20
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"maximum": 30
		},
		{
			"minimum": 20
		}
	],
	"id": "6271110280106313anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf with boolean schemas, all false, any value is invalid`
## Original schema
```js
{
	"allOf": [
		false,
		false
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		false,
		false
	],
	"id": "8844998356684552anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf with one empty schema, any data is valid`
## Original schema
```js
{
	"allOf": [
		{}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{}
	],
	"id": "007885775383671634anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf with two empty schemas, any data is valid`
## Original schema
```js
{
	"allOf": [
		{},
		{}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{},
		{}
	],
	"id": "208597163227225anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf with the first empty schema, number is valid`
## Original schema
```js
{
	"allOf": [
		{},
		{
			"type": "number"
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{},
		{
			"type": "number"
		}
	],
	"id": "8215570325042343anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf with the first empty schema, string is invalid`
## Original schema
```js
{
	"allOf": [
		{},
		{
			"type": "number"
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{},
		{
			"type": "number"
		}
	],
	"id": "8215570325042343anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf with the last empty schema, number is valid`
## Original schema
```js
{
	"allOf": [
		{
			"type": "number"
		},
		{}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"type": "number"
		},
		{}
	],
	"id": "32553204352997955anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf with the last empty schema, string is invalid`
## Original schema
```js
{
	"allOf": [
		{
			"type": "number"
		},
		{}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"type": "number"
		},
		{}
	],
	"id": "32553204352997955anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `nested allOf, to check validation semantics, null is valid`
## Original schema
```js
{
	"allOf": [
		{
			"allOf": [
				{
					"type": "null"
				}
			]
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"allOf": [
				{
					"type": "null"
				}
			]
		}
	],
	"id": "18273767072283964anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `nested allOf, to check validation semantics, anything non-null is invalid`
## Original schema
```js
{
	"allOf": [
		{
			"allOf": [
				{
					"type": "null"
				}
			]
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"allOf": [
				{
					"type": "null"
				}
			]
		}
	],
	"id": "18273767072283964anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf combined with anyOf, oneOf, allOf: false, anyOf: false, oneOf: false`
## Original schema
```js
{
	"allOf": [
		{
			"multipleOf": 2
		}
	],
	"anyOf": [
		{
			"multipleOf": 3
		}
	],
	"oneOf": [
		{
			"multipleOf": 5
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"multipleOf": 2
		}
	],
	"anyOf": [
		{
			"multipleOf": 3
		}
	],
	"oneOf": [
		{
			"multipleOf": 5
		}
	],
	"id": "21245971878312542anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf combined with anyOf, oneOf, allOf: false, anyOf: false, oneOf: true`
## Original schema
```js
{
	"allOf": [
		{
			"multipleOf": 2
		}
	],
	"anyOf": [
		{
			"multipleOf": 3
		}
	],
	"oneOf": [
		{
			"multipleOf": 5
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"multipleOf": 2
		}
	],
	"anyOf": [
		{
			"multipleOf": 3
		}
	],
	"oneOf": [
		{
			"multipleOf": 5
		}
	],
	"id": "21245971878312542anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf combined with anyOf, oneOf, allOf: false, anyOf: true, oneOf: false`
## Original schema
```js
{
	"allOf": [
		{
			"multipleOf": 2
		}
	],
	"anyOf": [
		{
			"multipleOf": 3
		}
	],
	"oneOf": [
		{
			"multipleOf": 5
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"multipleOf": 2
		}
	],
	"anyOf": [
		{
			"multipleOf": 3
		}
	],
	"oneOf": [
		{
			"multipleOf": 5
		}
	],
	"id": "21245971878312542anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf combined with anyOf, oneOf, allOf: false, anyOf: true, oneOf: true`
## Original schema
```js
{
	"allOf": [
		{
			"multipleOf": 2
		}
	],
	"anyOf": [
		{
			"multipleOf": 3
		}
	],
	"oneOf": [
		{
			"multipleOf": 5
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"multipleOf": 2
		}
	],
	"anyOf": [
		{
			"multipleOf": 3
		}
	],
	"oneOf": [
		{
			"multipleOf": 5
		}
	],
	"id": "21245971878312542anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf combined with anyOf, oneOf, allOf: true, anyOf: false, oneOf: false`
## Original schema
```js
{
	"allOf": [
		{
			"multipleOf": 2
		}
	],
	"anyOf": [
		{
			"multipleOf": 3
		}
	],
	"oneOf": [
		{
			"multipleOf": 5
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"multipleOf": 2
		}
	],
	"anyOf": [
		{
			"multipleOf": 3
		}
	],
	"oneOf": [
		{
			"multipleOf": 5
		}
	],
	"id": "21245971878312542anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf combined with anyOf, oneOf, allOf: true, anyOf: false, oneOf: true`
## Original schema
```js
{
	"allOf": [
		{
			"multipleOf": 2
		}
	],
	"anyOf": [
		{
			"multipleOf": 3
		}
	],
	"oneOf": [
		{
			"multipleOf": 5
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"multipleOf": 2
		}
	],
	"anyOf": [
		{
			"multipleOf": 3
		}
	],
	"oneOf": [
		{
			"multipleOf": 5
		}
	],
	"id": "21245971878312542anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf combined with anyOf, oneOf, allOf: true, anyOf: true, oneOf: false`
## Original schema
```js
{
	"allOf": [
		{
			"multipleOf": 2
		}
	],
	"anyOf": [
		{
			"multipleOf": 3
		}
	],
	"oneOf": [
		{
			"multipleOf": 5
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"multipleOf": 2
		}
	],
	"anyOf": [
		{
			"multipleOf": 3
		}
	],
	"oneOf": [
		{
			"multipleOf": 5
		}
	],
	"id": "21245971878312542anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf combined with anyOf, oneOf, allOf: true, anyOf: true, oneOf: true`
## Original schema
```js
{
	"allOf": [
		{
			"multipleOf": 2
		}
	],
	"anyOf": [
		{
			"multipleOf": 3
		}
	],
	"oneOf": [
		{
			"multipleOf": 5
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"multipleOf": 2
		}
	],
	"anyOf": [
		{
			"multipleOf": 3
		}
	],
	"oneOf": [
		{
			"multipleOf": 5
		}
	],
	"id": "21245971878312542anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `anyOf, first anyOf valid`
## Original schema
```js
{
	"anyOf": [
		{
			"type": "integer"
		},
		{
			"minimum": 2
		}
	]
}
```
## Schema after validating
```js
{
	"anyOf": [
		{
			"type": "integer"
		},
		{
			"minimum": 2
		}
	],
	"id": "5154345758922902anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `anyOf, second anyOf valid`
## Original schema
```js
{
	"anyOf": [
		{
			"type": "integer"
		},
		{
			"minimum": 2
		}
	]
}
```
## Schema after validating
```js
{
	"anyOf": [
		{
			"type": "integer"
		},
		{
			"minimum": 2
		}
	],
	"id": "5154345758922902anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `anyOf, both anyOf valid`
## Original schema
```js
{
	"anyOf": [
		{
			"type": "integer"
		},
		{
			"minimum": 2
		}
	]
}
```
## Schema after validating
```js
{
	"anyOf": [
		{
			"type": "integer"
		},
		{
			"minimum": 2
		}
	],
	"id": "5154345758922902anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `anyOf, neither anyOf valid`
## Original schema
```js
{
	"anyOf": [
		{
			"type": "integer"
		},
		{
			"minimum": 2
		}
	]
}
```
## Schema after validating
```js
{
	"anyOf": [
		{
			"type": "integer"
		},
		{
			"minimum": 2
		}
	],
	"id": "5154345758922902anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `anyOf with base schema, mismatch base schema`
## Original schema
```js
{
	"type": "string",
	"anyOf": [
		{
			"maxLength": 2
		},
		{
			"minLength": 4
		}
	]
}
```
## Schema after validating
```js
{
	"type": "string",
	"anyOf": [
		{
			"maxLength": 2
		},
		{
			"minLength": 4
		}
	],
	"id": "07954938793639621anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `anyOf with base schema, one anyOf valid`
## Original schema
```js
{
	"type": "string",
	"anyOf": [
		{
			"maxLength": 2
		},
		{
			"minLength": 4
		}
	]
}
```
## Schema after validating
```js
{
	"type": "string",
	"anyOf": [
		{
			"maxLength": 2
		},
		{
			"minLength": 4
		}
	],
	"id": "07954938793639621anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `anyOf with base schema, both anyOf invalid`
## Original schema
```js
{
	"type": "string",
	"anyOf": [
		{
			"maxLength": 2
		},
		{
			"minLength": 4
		}
	]
}
```
## Schema after validating
```js
{
	"type": "string",
	"anyOf": [
		{
			"maxLength": 2
		},
		{
			"minLength": 4
		}
	],
	"id": "07954938793639621anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `anyOf with boolean schemas, all false, any value is invalid`
## Original schema
```js
{
	"anyOf": [
		false,
		false
	]
}
```
## Schema after validating
```js
{
	"anyOf": [
		false,
		false
	],
	"id": "6043694766940029anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `anyOf complex types, first anyOf valid (complex)`
## Original schema
```js
{
	"anyOf": [
		{
			"properties": {
				"bar": {
					"type": "integer"
				}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"anyOf": [
		{
			"properties": {
				"bar": {
					"type": "integer"
				}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		}
	],
	"id": "6788372276345875anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `anyOf complex types, second anyOf valid (complex)`
## Original schema
```js
{
	"anyOf": [
		{
			"properties": {
				"bar": {
					"type": "integer"
				}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"anyOf": [
		{
			"properties": {
				"bar": {
					"type": "integer"
				}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		}
	],
	"id": "6788372276345875anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `anyOf complex types, both anyOf valid (complex)`
## Original schema
```js
{
	"anyOf": [
		{
			"properties": {
				"bar": {
					"type": "integer"
				}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"anyOf": [
		{
			"properties": {
				"bar": {
					"type": "integer"
				}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		}
	],
	"id": "6788372276345875anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `anyOf complex types, neither anyOf valid (complex)`
## Original schema
```js
{
	"anyOf": [
		{
			"properties": {
				"bar": {
					"type": "integer"
				}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"anyOf": [
		{
			"properties": {
				"bar": {
					"type": "integer"
				}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		}
	],
	"id": "6788372276345875anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `anyOf with one empty schema, string is valid`
## Original schema
```js
{
	"anyOf": [
		{
			"type": "number"
		},
		{}
	]
}
```
## Schema after validating
```js
{
	"anyOf": [
		{
			"type": "number"
		},
		{}
	],
	"id": "609919031783756anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `anyOf with one empty schema, number is valid`
## Original schema
```js
{
	"anyOf": [
		{
			"type": "number"
		},
		{}
	]
}
```
## Schema after validating
```js
{
	"anyOf": [
		{
			"type": "number"
		},
		{}
	],
	"id": "609919031783756anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `nested anyOf, to check validation semantics, null is valid`
## Original schema
```js
{
	"anyOf": [
		{
			"anyOf": [
				{
					"type": "null"
				}
			]
		}
	]
}
```
## Schema after validating
```js
{
	"anyOf": [
		{
			"anyOf": [
				{
					"type": "null"
				}
			]
		}
	],
	"id": "269499356432914anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `nested anyOf, to check validation semantics, anything non-null is invalid`
## Original schema
```js
{
	"anyOf": [
		{
			"anyOf": [
				{
					"type": "null"
				}
			]
		}
	]
}
```
## Schema after validating
```js
{
	"anyOf": [
		{
			"anyOf": [
				{
					"type": "null"
				}
			]
		}
	],
	"id": "269499356432914anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `nested anyOf, to check validation semantics, null is valid`
## Original schema
```js
{
	"anyOf": [
		{
			"anyOf": [
				{
					"type": "null"
				}
			]
		}
	]
}
```
## Schema after validating
```js
{
	"anyOf": [
		{
			"anyOf": [
				{
					"type": "null"
				}
			]
		}
	],
	"id": "2548816874572224anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `nested anyOf, to check validation semantics, anything non-null is invalid`
## Original schema
```js
{
	"anyOf": [
		{
			"anyOf": [
				{
					"type": "null"
				}
			]
		}
	]
}
```
## Schema after validating
```js
{
	"anyOf": [
		{
			"anyOf": [
				{
					"type": "null"
				}
			]
		}
	],
	"id": "2548816874572224anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const validation, same value is valid`
## Original schema
```js
{
	"const": 2
}
```
## Schema after validating
```js
{
	"const": 2,
	"id": "16201107906308554anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const validation, another value is invalid`
## Original schema
```js
{
	"const": 2
}
```
## Schema after validating
```js
{
	"const": 2,
	"id": "16201107906308554anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const validation, another type is invalid`
## Original schema
```js
{
	"const": 2
}
```
## Schema after validating
```js
{
	"const": 2,
	"id": "16201107906308554anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with object, same object is valid`
## Original schema
```js
{
	"const": {
		"foo": "bar",
		"baz": "bax"
	}
}
```
## Schema after validating
```js
{
	"const": {
		"foo": "bar",
		"baz": "bax"
	},
	"id": "8329729717011018anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with object, same object with different property order is valid`
## Original schema
```js
{
	"const": {
		"foo": "bar",
		"baz": "bax"
	}
}
```
## Schema after validating
```js
{
	"const": {
		"foo": "bar",
		"baz": "bax"
	},
	"id": "8329729717011018anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with object, another object is invalid`
## Original schema
```js
{
	"const": {
		"foo": "bar",
		"baz": "bax"
	}
}
```
## Schema after validating
```js
{
	"const": {
		"foo": "bar",
		"baz": "bax"
	},
	"id": "8329729717011018anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with object, another type is invalid`
## Original schema
```js
{
	"const": {
		"foo": "bar",
		"baz": "bax"
	}
}
```
## Schema after validating
```js
{
	"const": {
		"foo": "bar",
		"baz": "bax"
	},
	"id": "8329729717011018anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with array, same array is valid`
## Original schema
```js
{
	"const": [
		{
			"foo": "bar"
		}
	]
}
```
## Schema after validating
```js
{
	"const": [
		{
			"foo": "bar"
		}
	],
	"id": "4665920190579176anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with array, another array item is invalid`
## Original schema
```js
{
	"const": [
		{
			"foo": "bar"
		}
	]
}
```
## Schema after validating
```js
{
	"const": [
		{
			"foo": "bar"
		}
	],
	"id": "4665920190579176anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with array, array with additional items is invalid`
## Original schema
```js
{
	"const": [
		{
			"foo": "bar"
		}
	]
}
```
## Schema after validating
```js
{
	"const": [
		{
			"foo": "bar"
		}
	],
	"id": "4665920190579176anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with null, null is valid`
## Original schema
```js
{
	"const": null
}
```
## Schema after validating
```js
{
	"const": null,
	"id": "44624874761608857anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with null, not null is invalid`
## Original schema
```js
{
	"const": null
}
```
## Schema after validating
```js
{
	"const": null,
	"id": "44624874761608857anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with false does not match 0, false is valid`
## Original schema
```js
{
	"const": false
}
```
## Schema after validating
```js
{
	"const": false,
	"id": "17246391317407261anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with false does not match 0, integer zero is invalid`
## Original schema
```js
{
	"const": false
}
```
## Schema after validating
```js
{
	"const": false,
	"id": "17246391317407261anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with false does not match 0, float zero is invalid`
## Original schema
```js
{
	"const": false
}
```
## Schema after validating
```js
{
	"const": false,
	"id": "17246391317407261anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with true does not match 1, true is valid`
## Original schema
```js
{
	"const": true
}
```
## Schema after validating
```js
{
	"const": true,
	"id": "4157370573199344anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with true does not match 1, integer one is invalid`
## Original schema
```js
{
	"const": true
}
```
## Schema after validating
```js
{
	"const": true,
	"id": "4157370573199344anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with true does not match 1, float one is invalid`
## Original schema
```js
{
	"const": true
}
```
## Schema after validating
```js
{
	"const": true,
	"id": "4157370573199344anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with [false] does not match [0], [false] is valid`
## Original schema
```js
{
	"const": [
		false
	]
}
```
## Schema after validating
```js
{
	"const": [
		false
	],
	"id": "902861789529128anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with [false] does not match [0], [0] is invalid`
## Original schema
```js
{
	"const": [
		false
	]
}
```
## Schema after validating
```js
{
	"const": [
		false
	],
	"id": "902861789529128anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with [false] does not match [0], [0.0] is invalid`
## Original schema
```js
{
	"const": [
		false
	]
}
```
## Schema after validating
```js
{
	"const": [
		false
	],
	"id": "902861789529128anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with [true] does not match [1], [true] is valid`
## Original schema
```js
{
	"const": [
		true
	]
}
```
## Schema after validating
```js
{
	"const": [
		true
	],
	"id": "6911199379850912anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with [true] does not match [1], [1] is invalid`
## Original schema
```js
{
	"const": [
		true
	]
}
```
## Schema after validating
```js
{
	"const": [
		true
	],
	"id": "6911199379850912anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with [true] does not match [1], [1.0] is invalid`
## Original schema
```js
{
	"const": [
		true
	]
}
```
## Schema after validating
```js
{
	"const": [
		true
	],
	"id": "6911199379850912anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with {"a": false} does not match {"a": 0}, {"a": false} is valid`
## Original schema
```js
{
	"const": {
		"a": false
	}
}
```
## Schema after validating
```js
{
	"const": {
		"a": false
	},
	"id": "3394087558546839anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with {"a": false} does not match {"a": 0}, {"a": 0} is invalid`
## Original schema
```js
{
	"const": {
		"a": false
	}
}
```
## Schema after validating
```js
{
	"const": {
		"a": false
	},
	"id": "3394087558546839anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with {"a": false} does not match {"a": 0}, {"a": 0.0} is invalid`
## Original schema
```js
{
	"const": {
		"a": false
	}
}
```
## Schema after validating
```js
{
	"const": {
		"a": false
	},
	"id": "3394087558546839anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with {"a": true} does not match {"a": 1}, {"a": true} is valid`
## Original schema
```js
{
	"const": {
		"a": true
	}
}
```
## Schema after validating
```js
{
	"const": {
		"a": true
	},
	"id": "3585344244617663anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with {"a": true} does not match {"a": 1}, {"a": 1} is invalid`
## Original schema
```js
{
	"const": {
		"a": true
	}
}
```
## Schema after validating
```js
{
	"const": {
		"a": true
	},
	"id": "3585344244617663anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with {"a": true} does not match {"a": 1}, {"a": 1.0} is invalid`
## Original schema
```js
{
	"const": {
		"a": true
	}
}
```
## Schema after validating
```js
{
	"const": {
		"a": true
	},
	"id": "3585344244617663anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with 0 does not match other zero-like types, false is invalid`
## Original schema
```js
{
	"const": 0
}
```
## Schema after validating
```js
{
	"const": 0,
	"id": "28991225692903866anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with 0 does not match other zero-like types, integer zero is valid`
## Original schema
```js
{
	"const": 0
}
```
## Schema after validating
```js
{
	"const": 0,
	"id": "28991225692903866anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with 0 does not match other zero-like types, float zero is valid`
## Original schema
```js
{
	"const": 0
}
```
## Schema after validating
```js
{
	"const": 0,
	"id": "28991225692903866anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with 0 does not match other zero-like types, empty object is invalid`
## Original schema
```js
{
	"const": 0
}
```
## Schema after validating
```js
{
	"const": 0,
	"id": "28991225692903866anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with 0 does not match other zero-like types, empty array is invalid`
## Original schema
```js
{
	"const": 0
}
```
## Schema after validating
```js
{
	"const": 0,
	"id": "28991225692903866anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with 0 does not match other zero-like types, empty string is invalid`
## Original schema
```js
{
	"const": 0
}
```
## Schema after validating
```js
{
	"const": 0,
	"id": "28991225692903866anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with 1 does not match true, true is invalid`
## Original schema
```js
{
	"const": 1
}
```
## Schema after validating
```js
{
	"const": 1,
	"id": "20786430164623448anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with 1 does not match true, integer one is valid`
## Original schema
```js
{
	"const": 1
}
```
## Schema after validating
```js
{
	"const": 1,
	"id": "20786430164623448anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with 1 does not match true, float one is valid`
## Original schema
```js
{
	"const": 1
}
```
## Schema after validating
```js
{
	"const": 1,
	"id": "20786430164623448anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with -2.0 matches integer and float types, integer -2 is valid`
## Original schema
```js
{
	"const": -2
}
```
## Schema after validating
```js
{
	"const": -2,
	"id": "007770478252792312anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with -2.0 matches integer and float types, integer 2 is invalid`
## Original schema
```js
{
	"const": -2
}
```
## Schema after validating
```js
{
	"const": -2,
	"id": "007770478252792312anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with -2.0 matches integer and float types, float -2.0 is valid`
## Original schema
```js
{
	"const": -2
}
```
## Schema after validating
```js
{
	"const": -2,
	"id": "007770478252792312anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with -2.0 matches integer and float types, float 2.0 is invalid`
## Original schema
```js
{
	"const": -2
}
```
## Schema after validating
```js
{
	"const": -2,
	"id": "007770478252792312anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `const with -2.0 matches integer and float types, float -2.00001 is invalid`
## Original schema
```js
{
	"const": -2
}
```
## Schema after validating
```js
{
	"const": -2,
	"id": "007770478252792312anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `float and integers are equal up to 64-bit representation limits, integer is valid`
## Original schema
```js
{
	"const": 9007199254740992
}
```
## Schema after validating
```js
{
	"const": 9007199254740992,
	"id": "9761781455844363anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `float and integers are equal up to 64-bit representation limits, integer minus one is invalid`
## Original schema
```js
{
	"const": 9007199254740992
}
```
## Schema after validating
```js
{
	"const": 9007199254740992,
	"id": "9761781455844363anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `float and integers are equal up to 64-bit representation limits, float is valid`
## Original schema
```js
{
	"const": 9007199254740992
}
```
## Schema after validating
```js
{
	"const": 9007199254740992,
	"id": "9761781455844363anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `float and integers are equal up to 64-bit representation limits, float minus one is invalid`
## Original schema
```js
{
	"const": 9007199254740992
}
```
## Schema after validating
```js
{
	"const": 9007199254740992,
	"id": "9761781455844363anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `nul characters in strings, match string with nul`
## Original schema
```js
{
	"const": "hello\u0000there"
}
```
## Schema after validating
```js
{
	"const": "hello\u0000there",
	"id": "33605357171488515anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `nul characters in strings, do not match string lacking nul`
## Original schema
```js
{
	"const": "hello\u0000there"
}
```
## Schema after validating
```js
{
	"const": "hello\u0000there",
	"id": "33605357171488515anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `contains keyword validation, array with item matching schema (5) is valid`
## Original schema
```js
{
	"contains": {
		"minimum": 5
	}
}
```
## Schema after validating
```js
{
	"contains": {
		"minimum": 5
	},
	"id": "2739046709605115anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `contains keyword validation, array with item matching schema (6) is valid`
## Original schema
```js
{
	"contains": {
		"minimum": 5
	}
}
```
## Schema after validating
```js
{
	"contains": {
		"minimum": 5
	},
	"id": "2739046709605115anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `contains keyword validation, array with two items matching schema (5, 6) is valid`
## Original schema
```js
{
	"contains": {
		"minimum": 5
	}
}
```
## Schema after validating
```js
{
	"contains": {
		"minimum": 5
	},
	"id": "2739046709605115anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `contains keyword validation, array without items matching schema is invalid`
## Original schema
```js
{
	"contains": {
		"minimum": 5
	}
}
```
## Schema after validating
```js
{
	"contains": {
		"minimum": 5
	},
	"id": "2739046709605115anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `contains keyword validation, empty array is invalid`
## Original schema
```js
{
	"contains": {
		"minimum": 5
	}
}
```
## Schema after validating
```js
{
	"contains": {
		"minimum": 5
	},
	"id": "2739046709605115anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `contains keyword validation, not array is valid`
## Original schema
```js
{
	"contains": {
		"minimum": 5
	}
}
```
## Schema after validating
```js
{
	"contains": {
		"minimum": 5
	},
	"id": "2739046709605115anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `contains keyword with const keyword, array with item 5 is valid`
## Original schema
```js
{
	"contains": {
		"const": 5
	}
}
```
## Schema after validating
```js
{
	"contains": {
		"const": 5
	},
	"id": "6285239090211685anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `contains keyword with const keyword, array with two items 5 is valid`
## Original schema
```js
{
	"contains": {
		"const": 5
	}
}
```
## Schema after validating
```js
{
	"contains": {
		"const": 5
	},
	"id": "6285239090211685anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `contains keyword with const keyword, array without item 5 is invalid`
## Original schema
```js
{
	"contains": {
		"const": 5
	}
}
```
## Schema after validating
```js
{
	"contains": {
		"const": 5
	},
	"id": "6285239090211685anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `contains keyword with boolean schema true, any non-empty array is valid`
## Original schema
```js
{
	"contains": true
}
```
## Schema after validating
```js
{
	"contains": true,
	"id": "26952894126548177anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `contains keyword with boolean schema true, empty array is invalid`
## Original schema
```js
{
	"contains": true
}
```
## Schema after validating
```js
{
	"contains": true,
	"id": "26952894126548177anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `contains keyword with boolean schema false, any non-empty array is invalid`
## Original schema
```js
{
	"contains": false
}
```
## Schema after validating
```js
{
	"contains": false,
	"id": "784108540337999anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `contains keyword with boolean schema false, empty array is invalid`
## Original schema
```js
{
	"contains": false
}
```
## Schema after validating
```js
{
	"contains": false,
	"id": "784108540337999anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `contains keyword with boolean schema false, non-arrays are valid`
## Original schema
```js
{
	"contains": false
}
```
## Schema after validating
```js
{
	"contains": false,
	"id": "784108540337999anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `items + contains, matches items, does not match contains`
## Original schema
```js
{
	"items": {
		"multipleOf": 2
	},
	"contains": {
		"multipleOf": 3
	}
}
```
## Schema after validating
```js
{
	"items": {
		"multipleOf": 2
	},
	"contains": {
		"multipleOf": 3
	},
	"id": "6832186144959229anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `items + contains, does not match items, matches contains`
## Original schema
```js
{
	"items": {
		"multipleOf": 2
	},
	"contains": {
		"multipleOf": 3
	}
}
```
## Schema after validating
```js
{
	"items": {
		"multipleOf": 2
	},
	"contains": {
		"multipleOf": 3
	},
	"id": "6832186144959229anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `items + contains, matches both items and contains`
## Original schema
```js
{
	"items": {
		"multipleOf": 2
	},
	"contains": {
		"multipleOf": 3
	}
}
```
## Schema after validating
```js
{
	"items": {
		"multipleOf": 2
	},
	"contains": {
		"multipleOf": 3
	},
	"id": "6832186144959229anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `items + contains, matches neither items nor contains`
## Original schema
```js
{
	"items": {
		"multipleOf": 2
	},
	"contains": {
		"multipleOf": 3
	}
}
```
## Schema after validating
```js
{
	"items": {
		"multipleOf": 2
	},
	"contains": {
		"multipleOf": 3
	},
	"id": "6832186144959229anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `invalid type for default, valid when property is specified`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "integer",
			"default": []
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "integer",
			"default": []
		}
	},
	"id": "9288298541719373anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `invalid type for default, still valid when the invalid default is used`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "integer",
			"default": []
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "integer",
			"default": []
		}
	},
	"id": "9288298541719373anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `invalid string value for default, valid when property is specified`
## Original schema
```js
{
	"properties": {
		"bar": {
			"type": "string",
			"minLength": 4,
			"default": "bad"
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"bar": {
			"type": "string",
			"minLength": 4,
			"default": "bad"
		}
	},
	"id": "02242091606217711anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `invalid string value for default, still valid when the invalid default is used`
## Original schema
```js
{
	"properties": {
		"bar": {
			"type": "string",
			"minLength": 4,
			"default": "bad"
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"bar": {
			"type": "string",
			"minLength": 4,
			"default": "bad"
		}
	},
	"id": "02242091606217711anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `invalid definition, invalid definition schema`
## Original schema
```js
{
	"$ref": "http://json-schema.org/draft-07/schema#"
}
```
## Schema after validating
```js
{
	"$ref": "http://json-schema.org/draft-07/schema#",
	"id": "07455776347396337anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `dependencies, neither`
## Original schema
```js
{
	"dependencies": {
		"bar": [
			"foo"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"bar": [
			"foo"
		]
	},
	"id": "10205421153135563anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `dependencies, nondependant`
## Original schema
```js
{
	"dependencies": {
		"bar": [
			"foo"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"bar": [
			"foo"
		]
	},
	"id": "10205421153135563anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `dependencies, with dependency`
## Original schema
```js
{
	"dependencies": {
		"bar": [
			"foo"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"bar": [
			"foo"
		]
	},
	"id": "10205421153135563anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `dependencies, missing dependency`
## Original schema
```js
{
	"dependencies": {
		"bar": [
			"foo"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"bar": [
			"foo"
		]
	},
	"id": "10205421153135563anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `dependencies, ignores arrays`
## Original schema
```js
{
	"dependencies": {
		"bar": [
			"foo"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"bar": [
			"foo"
		]
	},
	"id": "10205421153135563anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `dependencies, ignores strings`
## Original schema
```js
{
	"dependencies": {
		"bar": [
			"foo"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"bar": [
			"foo"
		]
	},
	"id": "10205421153135563anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `dependencies, ignores other non-objects`
## Original schema
```js
{
	"dependencies": {
		"bar": [
			"foo"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"bar": [
			"foo"
		]
	},
	"id": "10205421153135563anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `dependencies with empty array, empty object`
## Original schema
```js
{
	"dependencies": {
		"bar": []
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"bar": []
	},
	"id": "6558451274531618anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `dependencies with empty array, object with one property`
## Original schema
```js
{
	"dependencies": {
		"bar": []
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"bar": []
	},
	"id": "6558451274531618anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `dependencies with empty array, non-object is valid`
## Original schema
```js
{
	"dependencies": {
		"bar": []
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"bar": []
	},
	"id": "6558451274531618anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple dependencies, neither`
## Original schema
```js
{
	"dependencies": {
		"quux": [
			"foo",
			"bar"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"quux": [
			"foo",
			"bar"
		]
	},
	"id": "3230607432506911anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple dependencies, nondependants`
## Original schema
```js
{
	"dependencies": {
		"quux": [
			"foo",
			"bar"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"quux": [
			"foo",
			"bar"
		]
	},
	"id": "3230607432506911anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple dependencies, with dependencies`
## Original schema
```js
{
	"dependencies": {
		"quux": [
			"foo",
			"bar"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"quux": [
			"foo",
			"bar"
		]
	},
	"id": "3230607432506911anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple dependencies, missing dependency`
## Original schema
```js
{
	"dependencies": {
		"quux": [
			"foo",
			"bar"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"quux": [
			"foo",
			"bar"
		]
	},
	"id": "3230607432506911anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple dependencies, missing other dependency`
## Original schema
```js
{
	"dependencies": {
		"quux": [
			"foo",
			"bar"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"quux": [
			"foo",
			"bar"
		]
	},
	"id": "3230607432506911anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple dependencies, missing both dependencies`
## Original schema
```js
{
	"dependencies": {
		"quux": [
			"foo",
			"bar"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"quux": [
			"foo",
			"bar"
		]
	},
	"id": "3230607432506911anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple dependencies subschema, valid`
## Original schema
```js
{
	"dependencies": {
		"bar": {
			"properties": {
				"foo": {
					"type": "integer"
				},
				"bar": {
					"type": "integer"
				}
			}
		}
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"bar": {
			"properties": {
				"foo": {
					"type": "integer"
				},
				"bar": {
					"type": "integer"
				}
			}
		}
	},
	"id": "6513011846304451anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple dependencies subschema, no dependency`
## Original schema
```js
{
	"dependencies": {
		"bar": {
			"properties": {
				"foo": {
					"type": "integer"
				},
				"bar": {
					"type": "integer"
				}
			}
		}
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"bar": {
			"properties": {
				"foo": {
					"type": "integer"
				},
				"bar": {
					"type": "integer"
				}
			}
		}
	},
	"id": "6513011846304451anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple dependencies subschema, wrong type`
## Original schema
```js
{
	"dependencies": {
		"bar": {
			"properties": {
				"foo": {
					"type": "integer"
				},
				"bar": {
					"type": "integer"
				}
			}
		}
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"bar": {
			"properties": {
				"foo": {
					"type": "integer"
				},
				"bar": {
					"type": "integer"
				}
			}
		}
	},
	"id": "6513011846304451anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple dependencies subschema, wrong type other`
## Original schema
```js
{
	"dependencies": {
		"bar": {
			"properties": {
				"foo": {
					"type": "integer"
				},
				"bar": {
					"type": "integer"
				}
			}
		}
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"bar": {
			"properties": {
				"foo": {
					"type": "integer"
				},
				"bar": {
					"type": "integer"
				}
			}
		}
	},
	"id": "6513011846304451anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple dependencies subschema, wrong type both`
## Original schema
```js
{
	"dependencies": {
		"bar": {
			"properties": {
				"foo": {
					"type": "integer"
				},
				"bar": {
					"type": "integer"
				}
			}
		}
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"bar": {
			"properties": {
				"foo": {
					"type": "integer"
				},
				"bar": {
					"type": "integer"
				}
			}
		}
	},
	"id": "6513011846304451anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `dependencies with escaped characters, valid object 1`
## Original schema
```js
{
	"dependencies": {
		"foo\nbar": [
			"foo\rbar"
		],
		"foo\tbar": {
			"minProperties": 4
		},
		"foo'bar": {
			"required": [
				"foo\"bar"
			]
		},
		"foo\"bar": [
			"foo'bar"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"foo\nbar": [
			"foo\rbar"
		],
		"foo\tbar": {
			"minProperties": 4
		},
		"foo'bar": {
			"required": [
				"foo\"bar"
			]
		},
		"foo\"bar": [
			"foo'bar"
		]
	},
	"id": "2639146079984718anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `dependencies with escaped characters, valid object 2`
## Original schema
```js
{
	"dependencies": {
		"foo\nbar": [
			"foo\rbar"
		],
		"foo\tbar": {
			"minProperties": 4
		},
		"foo'bar": {
			"required": [
				"foo\"bar"
			]
		},
		"foo\"bar": [
			"foo'bar"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"foo\nbar": [
			"foo\rbar"
		],
		"foo\tbar": {
			"minProperties": 4
		},
		"foo'bar": {
			"required": [
				"foo\"bar"
			]
		},
		"foo\"bar": [
			"foo'bar"
		]
	},
	"id": "2639146079984718anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `dependencies with escaped characters, valid object 3`
## Original schema
```js
{
	"dependencies": {
		"foo\nbar": [
			"foo\rbar"
		],
		"foo\tbar": {
			"minProperties": 4
		},
		"foo'bar": {
			"required": [
				"foo\"bar"
			]
		},
		"foo\"bar": [
			"foo'bar"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"foo\nbar": [
			"foo\rbar"
		],
		"foo\tbar": {
			"minProperties": 4
		},
		"foo'bar": {
			"required": [
				"foo\"bar"
			]
		},
		"foo\"bar": [
			"foo'bar"
		]
	},
	"id": "2639146079984718anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `dependencies with escaped characters, invalid object 1`
## Original schema
```js
{
	"dependencies": {
		"foo\nbar": [
			"foo\rbar"
		],
		"foo\tbar": {
			"minProperties": 4
		},
		"foo'bar": {
			"required": [
				"foo\"bar"
			]
		},
		"foo\"bar": [
			"foo'bar"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"foo\nbar": [
			"foo\rbar"
		],
		"foo\tbar": {
			"minProperties": 4
		},
		"foo'bar": {
			"required": [
				"foo\"bar"
			]
		},
		"foo\"bar": [
			"foo'bar"
		]
	},
	"id": "2639146079984718anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `dependencies with escaped characters, invalid object 2`
## Original schema
```js
{
	"dependencies": {
		"foo\nbar": [
			"foo\rbar"
		],
		"foo\tbar": {
			"minProperties": 4
		},
		"foo'bar": {
			"required": [
				"foo\"bar"
			]
		},
		"foo\"bar": [
			"foo'bar"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"foo\nbar": [
			"foo\rbar"
		],
		"foo\tbar": {
			"minProperties": 4
		},
		"foo'bar": {
			"required": [
				"foo\"bar"
			]
		},
		"foo\"bar": [
			"foo'bar"
		]
	},
	"id": "2639146079984718anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `dependencies with escaped characters, invalid object 3`
## Original schema
```js
{
	"dependencies": {
		"foo\nbar": [
			"foo\rbar"
		],
		"foo\tbar": {
			"minProperties": 4
		},
		"foo'bar": {
			"required": [
				"foo\"bar"
			]
		},
		"foo\"bar": [
			"foo'bar"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"foo\nbar": [
			"foo\rbar"
		],
		"foo\tbar": {
			"minProperties": 4
		},
		"foo'bar": {
			"required": [
				"foo\"bar"
			]
		},
		"foo\"bar": [
			"foo'bar"
		]
	},
	"id": "2639146079984718anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `dependencies with escaped characters, invalid object 4`
## Original schema
```js
{
	"dependencies": {
		"foo\nbar": [
			"foo\rbar"
		],
		"foo\tbar": {
			"minProperties": 4
		},
		"foo'bar": {
			"required": [
				"foo\"bar"
			]
		},
		"foo\"bar": [
			"foo'bar"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"foo\nbar": [
			"foo\rbar"
		],
		"foo\tbar": {
			"minProperties": 4
		},
		"foo'bar": {
			"required": [
				"foo\"bar"
			]
		},
		"foo\"bar": [
			"foo'bar"
		]
	},
	"id": "2639146079984718anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `simple enum validation, one of the enum is valid`
## Original schema
```js
{
	"enum": [
		1,
		2,
		3
	]
}
```
## Schema after validating
```js
{
	"enum": [
		1,
		2,
		3
	],
	"id": "1694801733791742anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `simple enum validation, something else is invalid`
## Original schema
```js
{
	"enum": [
		1,
		2,
		3
	]
}
```
## Schema after validating
```js
{
	"enum": [
		1,
		2,
		3
	],
	"id": "1694801733791742anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `heterogeneous enum validation, one of the enum is valid`
## Original schema
```js
{
	"enum": [
		6,
		"foo",
		[],
		true,
		{
			"foo": 12
		}
	]
}
```
## Schema after validating
```js
{
	"enum": [
		6,
		"foo",
		[],
		true,
		{
			"foo": 12
		}
	],
	"id": "3598705776033386anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `heterogeneous enum validation, something else is invalid`
## Original schema
```js
{
	"enum": [
		6,
		"foo",
		[],
		true,
		{
			"foo": 12
		}
	]
}
```
## Schema after validating
```js
{
	"enum": [
		6,
		"foo",
		[],
		true,
		{
			"foo": 12
		}
	],
	"id": "3598705776033386anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `heterogeneous enum validation, objects are deep compared`
## Original schema
```js
{
	"enum": [
		6,
		"foo",
		[],
		true,
		{
			"foo": 12
		}
	]
}
```
## Schema after validating
```js
{
	"enum": [
		6,
		"foo",
		[],
		true,
		{
			"foo": 12
		}
	],
	"id": "3598705776033386anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `heterogeneous enum validation, valid object matches`
## Original schema
```js
{
	"enum": [
		6,
		"foo",
		[],
		true,
		{
			"foo": 12
		}
	]
}
```
## Schema after validating
```js
{
	"enum": [
		6,
		"foo",
		[],
		true,
		{
			"foo": 12
		}
	],
	"id": "3598705776033386anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `heterogeneous enum validation, extra properties in object is invalid`
## Original schema
```js
{
	"enum": [
		6,
		"foo",
		[],
		true,
		{
			"foo": 12
		}
	]
}
```
## Schema after validating
```js
{
	"enum": [
		6,
		"foo",
		[],
		true,
		{
			"foo": 12
		}
	],
	"id": "3598705776033386anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `heterogeneous enum-with-null validation, null is valid`
## Original schema
```js
{
	"enum": [
		6,
		null
	]
}
```
## Schema after validating
```js
{
	"enum": [
		6,
		null
	],
	"id": "6187660587679562anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `heterogeneous enum-with-null validation, number is valid`
## Original schema
```js
{
	"enum": [
		6,
		null
	]
}
```
## Schema after validating
```js
{
	"enum": [
		6,
		null
	],
	"id": "6187660587679562anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `heterogeneous enum-with-null validation, something else is invalid`
## Original schema
```js
{
	"enum": [
		6,
		null
	]
}
```
## Schema after validating
```js
{
	"enum": [
		6,
		null
	],
	"id": "6187660587679562anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enums in properties, both properties are valid`
## Original schema
```js
{
	"type": "object",
	"properties": {
		"foo": {
			"enum": [
				"foo"
			]
		},
		"bar": {
			"enum": [
				"bar"
			]
		}
	},
	"required": [
		"bar"
	]
}
```
## Schema after validating
```js
{
	"type": "object",
	"properties": {
		"foo": {
			"enum": [
				"foo"
			]
		},
		"bar": {
			"enum": [
				"bar"
			]
		}
	},
	"required": [
		"bar"
	],
	"id": "38291914772996427anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enums in properties, wrong foo value`
## Original schema
```js
{
	"type": "object",
	"properties": {
		"foo": {
			"enum": [
				"foo"
			]
		},
		"bar": {
			"enum": [
				"bar"
			]
		}
	},
	"required": [
		"bar"
	]
}
```
## Schema after validating
```js
{
	"type": "object",
	"properties": {
		"foo": {
			"enum": [
				"foo"
			]
		},
		"bar": {
			"enum": [
				"bar"
			]
		}
	},
	"required": [
		"bar"
	],
	"id": "38291914772996427anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enums in properties, wrong bar value`
## Original schema
```js
{
	"type": "object",
	"properties": {
		"foo": {
			"enum": [
				"foo"
			]
		},
		"bar": {
			"enum": [
				"bar"
			]
		}
	},
	"required": [
		"bar"
	]
}
```
## Schema after validating
```js
{
	"type": "object",
	"properties": {
		"foo": {
			"enum": [
				"foo"
			]
		},
		"bar": {
			"enum": [
				"bar"
			]
		}
	},
	"required": [
		"bar"
	],
	"id": "38291914772996427anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enums in properties, missing optional property is valid`
## Original schema
```js
{
	"type": "object",
	"properties": {
		"foo": {
			"enum": [
				"foo"
			]
		},
		"bar": {
			"enum": [
				"bar"
			]
		}
	},
	"required": [
		"bar"
	]
}
```
## Schema after validating
```js
{
	"type": "object",
	"properties": {
		"foo": {
			"enum": [
				"foo"
			]
		},
		"bar": {
			"enum": [
				"bar"
			]
		}
	},
	"required": [
		"bar"
	],
	"id": "38291914772996427anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enums in properties, missing required property is invalid`
## Original schema
```js
{
	"type": "object",
	"properties": {
		"foo": {
			"enum": [
				"foo"
			]
		},
		"bar": {
			"enum": [
				"bar"
			]
		}
	},
	"required": [
		"bar"
	]
}
```
## Schema after validating
```js
{
	"type": "object",
	"properties": {
		"foo": {
			"enum": [
				"foo"
			]
		},
		"bar": {
			"enum": [
				"bar"
			]
		}
	},
	"required": [
		"bar"
	],
	"id": "38291914772996427anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enums in properties, missing all properties is invalid`
## Original schema
```js
{
	"type": "object",
	"properties": {
		"foo": {
			"enum": [
				"foo"
			]
		},
		"bar": {
			"enum": [
				"bar"
			]
		}
	},
	"required": [
		"bar"
	]
}
```
## Schema after validating
```js
{
	"type": "object",
	"properties": {
		"foo": {
			"enum": [
				"foo"
			]
		},
		"bar": {
			"enum": [
				"bar"
			]
		}
	},
	"required": [
		"bar"
	],
	"id": "38291914772996427anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enum with escaped characters, member 1 is valid`
## Original schema
```js
{
	"enum": [
		"foo\nbar",
		"foo\rbar"
	]
}
```
## Schema after validating
```js
{
	"enum": [
		"foo\nbar",
		"foo\rbar"
	],
	"id": "40081663195834616anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enum with escaped characters, member 2 is valid`
## Original schema
```js
{
	"enum": [
		"foo\nbar",
		"foo\rbar"
	]
}
```
## Schema after validating
```js
{
	"enum": [
		"foo\nbar",
		"foo\rbar"
	],
	"id": "40081663195834616anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enum with escaped characters, another string is invalid`
## Original schema
```js
{
	"enum": [
		"foo\nbar",
		"foo\rbar"
	]
}
```
## Schema after validating
```js
{
	"enum": [
		"foo\nbar",
		"foo\rbar"
	],
	"id": "40081663195834616anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enum with false does not match 0, false is valid`
## Original schema
```js
{
	"enum": [
		false
	]
}
```
## Schema after validating
```js
{
	"enum": [
		false
	],
	"id": "8341970225173689anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enum with false does not match 0, integer zero is invalid`
## Original schema
```js
{
	"enum": [
		false
	]
}
```
## Schema after validating
```js
{
	"enum": [
		false
	],
	"id": "8341970225173689anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enum with false does not match 0, float zero is invalid`
## Original schema
```js
{
	"enum": [
		false
	]
}
```
## Schema after validating
```js
{
	"enum": [
		false
	],
	"id": "8341970225173689anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enum with true does not match 1, true is valid`
## Original schema
```js
{
	"enum": [
		true
	]
}
```
## Schema after validating
```js
{
	"enum": [
		true
	],
	"id": "9116789523788469anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enum with true does not match 1, integer one is invalid`
## Original schema
```js
{
	"enum": [
		true
	]
}
```
## Schema after validating
```js
{
	"enum": [
		true
	],
	"id": "9116789523788469anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enum with true does not match 1, float one is invalid`
## Original schema
```js
{
	"enum": [
		true
	]
}
```
## Schema after validating
```js
{
	"enum": [
		true
	],
	"id": "9116789523788469anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enum with 0 does not match false, false is invalid`
## Original schema
```js
{
	"enum": [
		0
	]
}
```
## Schema after validating
```js
{
	"enum": [
		0
	],
	"id": "269824561657541anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enum with 0 does not match false, integer zero is valid`
## Original schema
```js
{
	"enum": [
		0
	]
}
```
## Schema after validating
```js
{
	"enum": [
		0
	],
	"id": "269824561657541anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enum with 0 does not match false, float zero is valid`
## Original schema
```js
{
	"enum": [
		0
	]
}
```
## Schema after validating
```js
{
	"enum": [
		0
	],
	"id": "269824561657541anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enum with 1 does not match true, true is invalid`
## Original schema
```js
{
	"enum": [
		1
	]
}
```
## Schema after validating
```js
{
	"enum": [
		1
	],
	"id": "8055046062311864anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enum with 1 does not match true, integer one is valid`
## Original schema
```js
{
	"enum": [
		1
	]
}
```
## Schema after validating
```js
{
	"enum": [
		1
	],
	"id": "8055046062311864anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enum with 1 does not match true, float one is valid`
## Original schema
```js
{
	"enum": [
		1
	]
}
```
## Schema after validating
```js
{
	"enum": [
		1
	],
	"id": "8055046062311864anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `nul characters in strings, match string with nul`
## Original schema
```js
{
	"enum": [
		"hello\u0000there"
	]
}
```
## Schema after validating
```js
{
	"enum": [
		"hello\u0000there"
	],
	"id": "9899796798304086anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `nul characters in strings, do not match string lacking nul`
## Original schema
```js
{
	"enum": [
		"hello\u0000there"
	]
}
```
## Schema after validating
```js
{
	"enum": [
		"hello\u0000there"
	],
	"id": "9899796798304086anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `exclusiveMaximum validation, below the exclusiveMaximum is valid`
## Original schema
```js
{
	"exclusiveMaximum": 3
}
```
## Schema after validating
```js
{
	"exclusiveMaximum": 3,
	"id": "6784331346699481anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `exclusiveMaximum validation, boundary point is invalid`
## Original schema
```js
{
	"exclusiveMaximum": 3
}
```
## Schema after validating
```js
{
	"exclusiveMaximum": 3,
	"id": "6784331346699481anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `exclusiveMaximum validation, above the exclusiveMaximum is invalid`
## Original schema
```js
{
	"exclusiveMaximum": 3
}
```
## Schema after validating
```js
{
	"exclusiveMaximum": 3,
	"id": "6784331346699481anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `exclusiveMaximum validation, ignores non-numbers`
## Original schema
```js
{
	"exclusiveMaximum": 3
}
```
## Schema after validating
```js
{
	"exclusiveMaximum": 3,
	"id": "6784331346699481anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `exclusiveMinimum validation, above the exclusiveMinimum is valid`
## Original schema
```js
{
	"exclusiveMinimum": 1.1
}
```
## Schema after validating
```js
{
	"exclusiveMinimum": 1.1,
	"id": "7218607552521255anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `exclusiveMinimum validation, boundary point is invalid`
## Original schema
```js
{
	"exclusiveMinimum": 1.1
}
```
## Schema after validating
```js
{
	"exclusiveMinimum": 1.1,
	"id": "7218607552521255anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `exclusiveMinimum validation, below the exclusiveMinimum is invalid`
## Original schema
```js
{
	"exclusiveMinimum": 1.1
}
```
## Schema after validating
```js
{
	"exclusiveMinimum": 1.1,
	"id": "7218607552521255anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `exclusiveMinimum validation, ignores non-numbers`
## Original schema
```js
{
	"exclusiveMinimum": 1.1
}
```
## Schema after validating
```js
{
	"exclusiveMinimum": 1.1,
	"id": "7218607552521255anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, ignores integers`
## Original schema
```js
{
	"format": "email"
}
```
## Schema after validating
```js
{
	"format": "email",
	"id": "5558983810065516anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, ignores floats`
## Original schema
```js
{
	"format": "email"
}
```
## Schema after validating
```js
{
	"format": "email",
	"id": "5558983810065516anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, ignores objects`
## Original schema
```js
{
	"format": "email"
}
```
## Schema after validating
```js
{
	"format": "email",
	"id": "5558983810065516anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, ignores arrays`
## Original schema
```js
{
	"format": "email"
}
```
## Schema after validating
```js
{
	"format": "email",
	"id": "5558983810065516anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, ignores booleans`
## Original schema
```js
{
	"format": "email"
}
```
## Schema after validating
```js
{
	"format": "email",
	"id": "5558983810065516anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, ignores null`
## Original schema
```js
{
	"format": "email"
}
```
## Schema after validating
```js
{
	"format": "email",
	"id": "5558983810065516anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IDN e-mail addresses, ignores integers`
## Original schema
```js
{
	"format": "idn-email"
}
```
## Schema after validating
```js
{
	"format": "idn-email",
	"id": "20068550384301553anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IDN e-mail addresses, ignores floats`
## Original schema
```js
{
	"format": "idn-email"
}
```
## Schema after validating
```js
{
	"format": "idn-email",
	"id": "20068550384301553anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IDN e-mail addresses, ignores objects`
## Original schema
```js
{
	"format": "idn-email"
}
```
## Schema after validating
```js
{
	"format": "idn-email",
	"id": "20068550384301553anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IDN e-mail addresses, ignores arrays`
## Original schema
```js
{
	"format": "idn-email"
}
```
## Schema after validating
```js
{
	"format": "idn-email",
	"id": "20068550384301553anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IDN e-mail addresses, ignores booleans`
## Original schema
```js
{
	"format": "idn-email"
}
```
## Schema after validating
```js
{
	"format": "idn-email",
	"id": "20068550384301553anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IDN e-mail addresses, ignores null`
## Original schema
```js
{
	"format": "idn-email"
}
```
## Schema after validating
```js
{
	"format": "idn-email",
	"id": "20068550384301553anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of regexes, ignores integers`
## Original schema
```js
{
	"format": "regex"
}
```
## Schema after validating
```js
{
	"format": "regex",
	"id": "8193008213176503anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of regexes, ignores floats`
## Original schema
```js
{
	"format": "regex"
}
```
## Schema after validating
```js
{
	"format": "regex",
	"id": "8193008213176503anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of regexes, ignores objects`
## Original schema
```js
{
	"format": "regex"
}
```
## Schema after validating
```js
{
	"format": "regex",
	"id": "8193008213176503anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of regexes, ignores arrays`
## Original schema
```js
{
	"format": "regex"
}
```
## Schema after validating
```js
{
	"format": "regex",
	"id": "8193008213176503anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of regexes, ignores booleans`
## Original schema
```js
{
	"format": "regex"
}
```
## Schema after validating
```js
{
	"format": "regex",
	"id": "8193008213176503anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of regexes, ignores null`
## Original schema
```js
{
	"format": "regex"
}
```
## Schema after validating
```js
{
	"format": "regex",
	"id": "8193008213176503anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IP addresses, ignores integers`
## Original schema
```js
{
	"format": "ipv4"
}
```
## Schema after validating
```js
{
	"format": "ipv4",
	"id": "48817999574520377anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IP addresses, ignores floats`
## Original schema
```js
{
	"format": "ipv4"
}
```
## Schema after validating
```js
{
	"format": "ipv4",
	"id": "48817999574520377anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IP addresses, ignores objects`
## Original schema
```js
{
	"format": "ipv4"
}
```
## Schema after validating
```js
{
	"format": "ipv4",
	"id": "48817999574520377anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IP addresses, ignores arrays`
## Original schema
```js
{
	"format": "ipv4"
}
```
## Schema after validating
```js
{
	"format": "ipv4",
	"id": "48817999574520377anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IP addresses, ignores booleans`
## Original schema
```js
{
	"format": "ipv4"
}
```
## Schema after validating
```js
{
	"format": "ipv4",
	"id": "48817999574520377anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IP addresses, ignores null`
## Original schema
```js
{
	"format": "ipv4"
}
```
## Schema after validating
```js
{
	"format": "ipv4",
	"id": "48817999574520377anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, ignores integers`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "21370966543523484anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, ignores floats`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "21370966543523484anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, ignores objects`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "21370966543523484anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, ignores arrays`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "21370966543523484anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, ignores booleans`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "21370966543523484anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, ignores null`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "21370966543523484anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IDN hostnames, ignores integers`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "412029401963248anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IDN hostnames, ignores floats`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "412029401963248anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IDN hostnames, ignores objects`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "412029401963248anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IDN hostnames, ignores arrays`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "412029401963248anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IDN hostnames, ignores booleans`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "412029401963248anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IDN hostnames, ignores null`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "412029401963248anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of hostnames, ignores integers`
## Original schema
```js
{
	"format": "hostname"
}
```
## Schema after validating
```js
{
	"format": "hostname",
	"id": "2167048941896066anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of hostnames, ignores floats`
## Original schema
```js
{
	"format": "hostname"
}
```
## Schema after validating
```js
{
	"format": "hostname",
	"id": "2167048941896066anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of hostnames, ignores objects`
## Original schema
```js
{
	"format": "hostname"
}
```
## Schema after validating
```js
{
	"format": "hostname",
	"id": "2167048941896066anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of hostnames, ignores arrays`
## Original schema
```js
{
	"format": "hostname"
}
```
## Schema after validating
```js
{
	"format": "hostname",
	"id": "2167048941896066anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of hostnames, ignores booleans`
## Original schema
```js
{
	"format": "hostname"
}
```
## Schema after validating
```js
{
	"format": "hostname",
	"id": "2167048941896066anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of hostnames, ignores null`
## Original schema
```js
{
	"format": "hostname"
}
```
## Schema after validating
```js
{
	"format": "hostname",
	"id": "2167048941896066anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date strings, ignores integers`
## Original schema
```js
{
	"format": "date"
}
```
## Schema after validating
```js
{
	"format": "date",
	"id": "9122945925031938anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date strings, ignores floats`
## Original schema
```js
{
	"format": "date"
}
```
## Schema after validating
```js
{
	"format": "date",
	"id": "9122945925031938anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date strings, ignores objects`
## Original schema
```js
{
	"format": "date"
}
```
## Schema after validating
```js
{
	"format": "date",
	"id": "9122945925031938anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date strings, ignores arrays`
## Original schema
```js
{
	"format": "date"
}
```
## Schema after validating
```js
{
	"format": "date",
	"id": "9122945925031938anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date strings, ignores booleans`
## Original schema
```js
{
	"format": "date"
}
```
## Schema after validating
```js
{
	"format": "date",
	"id": "9122945925031938anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date strings, ignores null`
## Original schema
```js
{
	"format": "date"
}
```
## Schema after validating
```js
{
	"format": "date",
	"id": "9122945925031938anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, ignores integers`
## Original schema
```js
{
	"format": "date-time"
}
```
## Schema after validating
```js
{
	"format": "date-time",
	"id": "1036225280017038anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, ignores floats`
## Original schema
```js
{
	"format": "date-time"
}
```
## Schema after validating
```js
{
	"format": "date-time",
	"id": "1036225280017038anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, ignores objects`
## Original schema
```js
{
	"format": "date-time"
}
```
## Schema after validating
```js
{
	"format": "date-time",
	"id": "1036225280017038anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, ignores arrays`
## Original schema
```js
{
	"format": "date-time"
}
```
## Schema after validating
```js
{
	"format": "date-time",
	"id": "1036225280017038anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, ignores booleans`
## Original schema
```js
{
	"format": "date-time"
}
```
## Schema after validating
```js
{
	"format": "date-time",
	"id": "1036225280017038anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, ignores null`
## Original schema
```js
{
	"format": "date-time"
}
```
## Schema after validating
```js
{
	"format": "date-time",
	"id": "1036225280017038anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of time strings, ignores integers`
## Original schema
```js
{
	"format": "time"
}
```
## Schema after validating
```js
{
	"format": "time",
	"id": "023962135036033283anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of time strings, ignores floats`
## Original schema
```js
{
	"format": "time"
}
```
## Schema after validating
```js
{
	"format": "time",
	"id": "023962135036033283anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of time strings, ignores objects`
## Original schema
```js
{
	"format": "time"
}
```
## Schema after validating
```js
{
	"format": "time",
	"id": "023962135036033283anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of time strings, ignores arrays`
## Original schema
```js
{
	"format": "time"
}
```
## Schema after validating
```js
{
	"format": "time",
	"id": "023962135036033283anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of time strings, ignores booleans`
## Original schema
```js
{
	"format": "time"
}
```
## Schema after validating
```js
{
	"format": "time",
	"id": "023962135036033283anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of time strings, ignores null`
## Original schema
```js
{
	"format": "time"
}
```
## Schema after validating
```js
{
	"format": "time",
	"id": "023962135036033283anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON pointers, ignores integers`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "842084979273861anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON pointers, ignores floats`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "842084979273861anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON pointers, ignores objects`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "842084979273861anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON pointers, ignores arrays`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "842084979273861anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON pointers, ignores booleans`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "842084979273861anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON pointers, ignores null`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "842084979273861anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of relative JSON pointers, ignores integers`
## Original schema
```js
{
	"format": "relative-json-pointer"
}
```
## Schema after validating
```js
{
	"format": "relative-json-pointer",
	"id": "1291946101156145anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of relative JSON pointers, ignores floats`
## Original schema
```js
{
	"format": "relative-json-pointer"
}
```
## Schema after validating
```js
{
	"format": "relative-json-pointer",
	"id": "1291946101156145anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of relative JSON pointers, ignores objects`
## Original schema
```js
{
	"format": "relative-json-pointer"
}
```
## Schema after validating
```js
{
	"format": "relative-json-pointer",
	"id": "1291946101156145anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of relative JSON pointers, ignores arrays`
## Original schema
```js
{
	"format": "relative-json-pointer"
}
```
## Schema after validating
```js
{
	"format": "relative-json-pointer",
	"id": "1291946101156145anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of relative JSON pointers, ignores booleans`
## Original schema
```js
{
	"format": "relative-json-pointer"
}
```
## Schema after validating
```js
{
	"format": "relative-json-pointer",
	"id": "1291946101156145anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of relative JSON pointers, ignores null`
## Original schema
```js
{
	"format": "relative-json-pointer"
}
```
## Schema after validating
```js
{
	"format": "relative-json-pointer",
	"id": "1291946101156145anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IRIs, ignores integers`
## Original schema
```js
{
	"format": "iri"
}
```
## Schema after validating
```js
{
	"format": "iri",
	"id": "7138585151389074anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IRIs, ignores floats`
## Original schema
```js
{
	"format": "iri"
}
```
## Schema after validating
```js
{
	"format": "iri",
	"id": "7138585151389074anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IRIs, ignores objects`
## Original schema
```js
{
	"format": "iri"
}
```
## Schema after validating
```js
{
	"format": "iri",
	"id": "7138585151389074anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IRIs, ignores arrays`
## Original schema
```js
{
	"format": "iri"
}
```
## Schema after validating
```js
{
	"format": "iri",
	"id": "7138585151389074anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IRIs, ignores booleans`
## Original schema
```js
{
	"format": "iri"
}
```
## Schema after validating
```js
{
	"format": "iri",
	"id": "7138585151389074anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IRIs, ignores null`
## Original schema
```js
{
	"format": "iri"
}
```
## Schema after validating
```js
{
	"format": "iri",
	"id": "7138585151389074anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IRI references, ignores integers`
## Original schema
```js
{
	"format": "iri-reference"
}
```
## Schema after validating
```js
{
	"format": "iri-reference",
	"id": "108502811015736anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IRI references, ignores floats`
## Original schema
```js
{
	"format": "iri-reference"
}
```
## Schema after validating
```js
{
	"format": "iri-reference",
	"id": "108502811015736anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IRI references, ignores objects`
## Original schema
```js
{
	"format": "iri-reference"
}
```
## Schema after validating
```js
{
	"format": "iri-reference",
	"id": "108502811015736anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IRI references, ignores arrays`
## Original schema
```js
{
	"format": "iri-reference"
}
```
## Schema after validating
```js
{
	"format": "iri-reference",
	"id": "108502811015736anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IRI references, ignores booleans`
## Original schema
```js
{
	"format": "iri-reference"
}
```
## Schema after validating
```js
{
	"format": "iri-reference",
	"id": "108502811015736anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IRI references, ignores null`
## Original schema
```js
{
	"format": "iri-reference"
}
```
## Schema after validating
```js
{
	"format": "iri-reference",
	"id": "108502811015736anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, ignores integers`
## Original schema
```js
{
	"format": "uri"
}
```
## Schema after validating
```js
{
	"format": "uri",
	"id": "02588625804051814anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, ignores floats`
## Original schema
```js
{
	"format": "uri"
}
```
## Schema after validating
```js
{
	"format": "uri",
	"id": "02588625804051814anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, ignores objects`
## Original schema
```js
{
	"format": "uri"
}
```
## Schema after validating
```js
{
	"format": "uri",
	"id": "02588625804051814anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, ignores arrays`
## Original schema
```js
{
	"format": "uri"
}
```
## Schema after validating
```js
{
	"format": "uri",
	"id": "02588625804051814anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, ignores booleans`
## Original schema
```js
{
	"format": "uri"
}
```
## Schema after validating
```js
{
	"format": "uri",
	"id": "02588625804051814anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, ignores null`
## Original schema
```js
{
	"format": "uri"
}
```
## Schema after validating
```js
{
	"format": "uri",
	"id": "02588625804051814anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URI references, ignores integers`
## Original schema
```js
{
	"format": "uri-reference"
}
```
## Schema after validating
```js
{
	"format": "uri-reference",
	"id": "6191416400955914anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URI references, ignores floats`
## Original schema
```js
{
	"format": "uri-reference"
}
```
## Schema after validating
```js
{
	"format": "uri-reference",
	"id": "6191416400955914anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URI references, ignores objects`
## Original schema
```js
{
	"format": "uri-reference"
}
```
## Schema after validating
```js
{
	"format": "uri-reference",
	"id": "6191416400955914anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URI references, ignores arrays`
## Original schema
```js
{
	"format": "uri-reference"
}
```
## Schema after validating
```js
{
	"format": "uri-reference",
	"id": "6191416400955914anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URI references, ignores booleans`
## Original schema
```js
{
	"format": "uri-reference"
}
```
## Schema after validating
```js
{
	"format": "uri-reference",
	"id": "6191416400955914anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URI references, ignores null`
## Original schema
```js
{
	"format": "uri-reference"
}
```
## Schema after validating
```js
{
	"format": "uri-reference",
	"id": "6191416400955914anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URI templates, ignores integers`
## Original schema
```js
{
	"format": "uri-template"
}
```
## Schema after validating
```js
{
	"format": "uri-template",
	"id": "5222679514326696anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URI templates, ignores floats`
## Original schema
```js
{
	"format": "uri-template"
}
```
## Schema after validating
```js
{
	"format": "uri-template",
	"id": "5222679514326696anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URI templates, ignores objects`
## Original schema
```js
{
	"format": "uri-template"
}
```
## Schema after validating
```js
{
	"format": "uri-template",
	"id": "5222679514326696anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URI templates, ignores arrays`
## Original schema
```js
{
	"format": "uri-template"
}
```
## Schema after validating
```js
{
	"format": "uri-template",
	"id": "5222679514326696anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URI templates, ignores booleans`
## Original schema
```js
{
	"format": "uri-template"
}
```
## Schema after validating
```js
{
	"format": "uri-template",
	"id": "5222679514326696anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URI templates, ignores null`
## Original schema
```js
{
	"format": "uri-template"
}
```
## Schema after validating
```js
{
	"format": "uri-template",
	"id": "5222679514326696anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ignore if without then or else, valid when valid against lone if`
## Original schema
```js
{
	"if": {
		"const": 0
	}
}
```
## Schema after validating
```js
{
	"if": {
		"const": 0
	},
	"id": "6769868985216327anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ignore if without then or else, valid when invalid against lone if`
## Original schema
```js
{
	"if": {
		"const": 0
	}
}
```
## Schema after validating
```js
{
	"if": {
		"const": 0
	},
	"id": "6769868985216327anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ignore then without if, valid when valid against lone then`
## Original schema
```js
{
	"then": {
		"const": 0
	}
}
```
## Schema after validating
```js
{
	"then": {
		"const": 0
	},
	"id": "06292083529087789anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ignore then without if, valid when invalid against lone then`
## Original schema
```js
{
	"then": {
		"const": 0
	}
}
```
## Schema after validating
```js
{
	"then": {
		"const": 0
	},
	"id": "06292083529087789anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ignore else without if, valid when valid against lone else`
## Original schema
```js
{
	"else": {
		"const": 0
	}
}
```
## Schema after validating
```js
{
	"else": {
		"const": 0
	},
	"id": "9283029254550714anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ignore else without if, valid when invalid against lone else`
## Original schema
```js
{
	"else": {
		"const": 0
	}
}
```
## Schema after validating
```js
{
	"else": {
		"const": 0
	},
	"id": "9283029254550714anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `if and then without else, valid through then`
## Original schema
```js
{
	"if": {
		"exclusiveMaximum": 0
	},
	"then": {
		"minimum": -10
	}
}
```
## Schema after validating
```js
{
	"if": {
		"exclusiveMaximum": 0
	},
	"then": {
		"minimum": -10
	},
	"id": "6592206163475283anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `if and then without else, invalid through then`
## Original schema
```js
{
	"if": {
		"exclusiveMaximum": 0
	},
	"then": {
		"minimum": -10
	}
}
```
## Schema after validating
```js
{
	"if": {
		"exclusiveMaximum": 0
	},
	"then": {
		"minimum": -10
	},
	"id": "6592206163475283anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `if and then without else, valid when if test fails`
## Original schema
```js
{
	"if": {
		"exclusiveMaximum": 0
	},
	"then": {
		"minimum": -10
	}
}
```
## Schema after validating
```js
{
	"if": {
		"exclusiveMaximum": 0
	},
	"then": {
		"minimum": -10
	},
	"id": "6592206163475283anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `if and else without then, valid when if test passes`
## Original schema
```js
{
	"if": {
		"exclusiveMaximum": 0
	},
	"else": {
		"multipleOf": 2
	}
}
```
## Schema after validating
```js
{
	"if": {
		"exclusiveMaximum": 0
	},
	"else": {
		"multipleOf": 2
	},
	"id": "3430930463132187anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `if and else without then, valid through else`
## Original schema
```js
{
	"if": {
		"exclusiveMaximum": 0
	},
	"else": {
		"multipleOf": 2
	}
}
```
## Schema after validating
```js
{
	"if": {
		"exclusiveMaximum": 0
	},
	"else": {
		"multipleOf": 2
	},
	"id": "3430930463132187anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `if and else without then, invalid through else`
## Original schema
```js
{
	"if": {
		"exclusiveMaximum": 0
	},
	"else": {
		"multipleOf": 2
	}
}
```
## Schema after validating
```js
{
	"if": {
		"exclusiveMaximum": 0
	},
	"else": {
		"multipleOf": 2
	},
	"id": "3430930463132187anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validate against correct branch, then vs else, valid through then`
## Original schema
```js
{
	"if": {
		"exclusiveMaximum": 0
	},
	"then": {
		"minimum": -10
	},
	"else": {
		"multipleOf": 2
	}
}
```
## Schema after validating
```js
{
	"if": {
		"exclusiveMaximum": 0
	},
	"then": {
		"minimum": -10
	},
	"else": {
		"multipleOf": 2
	},
	"id": "7540840199754186anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validate against correct branch, then vs else, invalid through then`
## Original schema
```js
{
	"if": {
		"exclusiveMaximum": 0
	},
	"then": {
		"minimum": -10
	},
	"else": {
		"multipleOf": 2
	}
}
```
## Schema after validating
```js
{
	"if": {
		"exclusiveMaximum": 0
	},
	"then": {
		"minimum": -10
	},
	"else": {
		"multipleOf": 2
	},
	"id": "7540840199754186anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validate against correct branch, then vs else, valid through else`
## Original schema
```js
{
	"if": {
		"exclusiveMaximum": 0
	},
	"then": {
		"minimum": -10
	},
	"else": {
		"multipleOf": 2
	}
}
```
## Schema after validating
```js
{
	"if": {
		"exclusiveMaximum": 0
	},
	"then": {
		"minimum": -10
	},
	"else": {
		"multipleOf": 2
	},
	"id": "7540840199754186anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validate against correct branch, then vs else, invalid through else`
## Original schema
```js
{
	"if": {
		"exclusiveMaximum": 0
	},
	"then": {
		"minimum": -10
	},
	"else": {
		"multipleOf": 2
	}
}
```
## Schema after validating
```js
{
	"if": {
		"exclusiveMaximum": 0
	},
	"then": {
		"minimum": -10
	},
	"else": {
		"multipleOf": 2
	},
	"id": "7540840199754186anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `non-interference across combined schemas, valid, but would have been invalid through then`
## Original schema
```js
{
	"allOf": [
		{
			"if": {
				"exclusiveMaximum": 0
			}
		},
		{
			"then": {
				"minimum": -10
			}
		},
		{
			"else": {
				"multipleOf": 2
			}
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"if": {
				"exclusiveMaximum": 0
			}
		},
		{
			"then": {
				"minimum": -10
			}
		},
		{
			"else": {
				"multipleOf": 2
			}
		}
	],
	"id": "2699825557693645anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `non-interference across combined schemas, valid, but would have been invalid through else`
## Original schema
```js
{
	"allOf": [
		{
			"if": {
				"exclusiveMaximum": 0
			}
		},
		{
			"then": {
				"minimum": -10
			}
		},
		{
			"else": {
				"multipleOf": 2
			}
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"if": {
				"exclusiveMaximum": 0
			}
		},
		{
			"then": {
				"minimum": -10
			}
		},
		{
			"else": {
				"multipleOf": 2
			}
		}
	],
	"id": "2699825557693645anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `if with boolean schema true, boolean schema true in if always chooses the then path (valid)`
## Original schema
```js
{
	"if": true,
	"then": {
		"const": "then"
	},
	"else": {
		"const": "else"
	}
}
```
## Schema after validating
```js
{
	"if": true,
	"then": {
		"const": "then"
	},
	"else": {
		"const": "else"
	},
	"id": "5138585602877284anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `if with boolean schema true, boolean schema true in if always chooses the then path (invalid)`
## Original schema
```js
{
	"if": true,
	"then": {
		"const": "then"
	},
	"else": {
		"const": "else"
	}
}
```
## Schema after validating
```js
{
	"if": true,
	"then": {
		"const": "then"
	},
	"else": {
		"const": "else"
	},
	"id": "5138585602877284anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `if with boolean schema false, boolean schema false in if always chooses the else path (invalid)`
## Original schema
```js
{
	"if": false,
	"then": {
		"const": "then"
	},
	"else": {
		"const": "else"
	}
}
```
## Schema after validating
```js
{
	"if": false,
	"then": {
		"const": "then"
	},
	"else": {
		"const": "else"
	},
	"id": "7786481388697037anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `if with boolean schema false, boolean schema false in if always chooses the else path (valid)`
## Original schema
```js
{
	"if": false,
	"then": {
		"const": "then"
	},
	"else": {
		"const": "else"
	}
}
```
## Schema after validating
```js
{
	"if": false,
	"then": {
		"const": "then"
	},
	"else": {
		"const": "else"
	},
	"id": "7786481388697037anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `if appears at the end when serialized (keyword processing sequence), yes redirects to then and passes`
## Original schema
```js
{
	"then": {
		"const": "yes"
	},
	"else": {
		"const": "other"
	},
	"if": {
		"maxLength": 4
	}
}
```
## Schema after validating
```js
{
	"then": {
		"const": "yes"
	},
	"else": {
		"const": "other"
	},
	"if": {
		"maxLength": 4
	},
	"id": "06971565867116403anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `if appears at the end when serialized (keyword processing sequence), other redirects to else and passes`
## Original schema
```js
{
	"then": {
		"const": "yes"
	},
	"else": {
		"const": "other"
	},
	"if": {
		"maxLength": 4
	}
}
```
## Schema after validating
```js
{
	"then": {
		"const": "yes"
	},
	"else": {
		"const": "other"
	},
	"if": {
		"maxLength": 4
	},
	"id": "06971565867116403anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `if appears at the end when serialized (keyword processing sequence), no redirects to then and fails`
## Original schema
```js
{
	"then": {
		"const": "yes"
	},
	"else": {
		"const": "other"
	},
	"if": {
		"maxLength": 4
	}
}
```
## Schema after validating
```js
{
	"then": {
		"const": "yes"
	},
	"else": {
		"const": "other"
	},
	"if": {
		"maxLength": 4
	},
	"id": "06971565867116403anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `if appears at the end when serialized (keyword processing sequence), invalid redirects to else and fails`
## Original schema
```js
{
	"then": {
		"const": "yes"
	},
	"else": {
		"const": "other"
	},
	"if": {
		"maxLength": 4
	}
}
```
## Schema after validating
```js
{
	"then": {
		"const": "yes"
	},
	"else": {
		"const": "other"
	},
	"if": {
		"maxLength": 4
	},
	"id": "06971565867116403anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `evaluating the same schema location against the same data location twice is not a sign of an infinite loop, passing case`
## Original schema
```js
{
	"definitions": {
		"int": {
			"type": "integer"
		}
	},
	"allOf": [
		{
			"properties": {
				"foo": {
					"$ref": "#/definitions/int"
				}
			}
		},
		{
			"additionalProperties": {
				"$ref": "#/definitions/int"
			}
		}
	]
}
```
## Schema after validating
```js
{
	"definitions": {
		"int": {
			"type": "integer",
			"id": "45716305241028476anonymous#/definitions/int"
		}
	},
	"allOf": [
		{
			"properties": {
				"foo": {
					"$ref": "45716305241028476anonymous#/definitions/int"
				}
			}
		},
		{
			"additionalProperties": {
				"$ref": "45716305241028476anonymous#/definitions/int"
			}
		}
	],
	"id": "45716305241028476anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `evaluating the same schema location against the same data location twice is not a sign of an infinite loop, failing case`
## Original schema
```js
{
	"definitions": {
		"int": {
			"type": "integer"
		}
	},
	"allOf": [
		{
			"properties": {
				"foo": {
					"$ref": "#/definitions/int"
				}
			}
		},
		{
			"additionalProperties": {
				"$ref": "#/definitions/int"
			}
		}
	]
}
```
## Schema after validating
```js
{
	"definitions": {
		"int": {
			"type": "integer",
			"id": "45716305241028476anonymous#/definitions/int"
		}
	},
	"allOf": [
		{
			"properties": {
				"foo": {
					"$ref": "45716305241028476anonymous#/definitions/int"
				}
			}
		},
		{
			"additionalProperties": {
				"$ref": "45716305241028476anonymous#/definitions/int"
			}
		}
	],
	"id": "45716305241028476anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `a schema given for items, valid items`
## Original schema
```js
{
	"items": {
		"type": "integer"
	}
}
```
## Schema after validating
```js
{
	"items": {
		"type": "integer"
	},
	"id": "7235655625916317anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `a schema given for items, wrong type of items`
## Original schema
```js
{
	"items": {
		"type": "integer"
	}
}
```
## Schema after validating
```js
{
	"items": {
		"type": "integer"
	},
	"id": "7235655625916317anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `a schema given for items, ignores non-arrays`
## Original schema
```js
{
	"items": {
		"type": "integer"
	}
}
```
## Schema after validating
```js
{
	"items": {
		"type": "integer"
	},
	"id": "7235655625916317anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `a schema given for items, JavaScript pseudo-array is valid`
## Original schema
```js
{
	"items": {
		"type": "integer"
	}
}
```
## Schema after validating
```js
{
	"items": {
		"type": "integer"
	},
	"id": "7235655625916317anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `an array of schemas for items, correct types`
## Original schema
```js
{
	"items": [
		{
			"type": "integer"
		},
		{
			"type": "string"
		}
	]
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "integer"
		},
		{
			"type": "string"
		}
	],
	"id": "9476795488307252anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `an array of schemas for items, wrong types`
## Original schema
```js
{
	"items": [
		{
			"type": "integer"
		},
		{
			"type": "string"
		}
	]
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "integer"
		},
		{
			"type": "string"
		}
	],
	"id": "9476795488307252anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `an array of schemas for items, incomplete array of items`
## Original schema
```js
{
	"items": [
		{
			"type": "integer"
		},
		{
			"type": "string"
		}
	]
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "integer"
		},
		{
			"type": "string"
		}
	],
	"id": "9476795488307252anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `an array of schemas for items, array with additional items`
## Original schema
```js
{
	"items": [
		{
			"type": "integer"
		},
		{
			"type": "string"
		}
	]
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "integer"
		},
		{
			"type": "string"
		}
	],
	"id": "9476795488307252anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `an array of schemas for items, empty array`
## Original schema
```js
{
	"items": [
		{
			"type": "integer"
		},
		{
			"type": "string"
		}
	]
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "integer"
		},
		{
			"type": "string"
		}
	],
	"id": "9476795488307252anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `an array of schemas for items, JavaScript pseudo-array is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "integer"
		},
		{
			"type": "string"
		}
	]
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "integer"
		},
		{
			"type": "string"
		}
	],
	"id": "9476795488307252anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `items with boolean schema (true), any array is valid`
## Original schema
```js
{
	"items": true
}
```
## Schema after validating
```js
{
	"items": true,
	"id": "36999763040643074anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `items with boolean schema (true), empty array is valid`
## Original schema
```js
{
	"items": true
}
```
## Schema after validating
```js
{
	"items": true,
	"id": "36999763040643074anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `items with boolean schema (false), any non-empty array is invalid`
## Original schema
```js
{
	"items": false
}
```
## Schema after validating
```js
{
	"items": false,
	"id": "3168873774063432anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `items with boolean schema (false), empty array is valid`
## Original schema
```js
{
	"items": false
}
```
## Schema after validating
```js
{
	"items": false,
	"id": "3168873774063432anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `items and subitems, valid items`
## Original schema
```js
{
	"definitions": {
		"item": {
			"type": "array",
			"additionalItems": false,
			"items": [
				{
					"$ref": "#/definitions/sub-item"
				},
				{
					"$ref": "#/definitions/sub-item"
				}
			]
		},
		"sub-item": {
			"type": "object",
			"required": [
				"foo"
			]
		}
	},
	"type": "array",
	"additionalItems": false,
	"items": [
		{
			"$ref": "#/definitions/item"
		},
		{
			"$ref": "#/definitions/item"
		},
		{
			"$ref": "#/definitions/item"
		}
	]
}
```
## Schema after validating
```js
{
	"definitions": {
		"item": {
			"type": "array",
			"additionalItems": false,
			"items": [
				{
					"$ref": "8137998377257458anonymous#/definitions/sub-item"
				},
				{
					"$ref": "8137998377257458anonymous#/definitions/sub-item"
				}
			],
			"id": "8137998377257458anonymous#/definitions/item"
		},
		"sub-item": {
			"type": "object",
			"required": [
				"foo"
			],
			"id": "8137998377257458anonymous#/definitions/sub-item"
		}
	},
	"type": "array",
	"additionalItems": false,
	"items": [
		{
			"$ref": "8137998377257458anonymous#/definitions/item"
		},
		{
			"$ref": "8137998377257458anonymous#/definitions/item"
		},
		{
			"$ref": "8137998377257458anonymous#/definitions/item"
		}
	],
	"id": "8137998377257458anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `items and subitems, too many items`
## Original schema
```js
{
	"definitions": {
		"item": {
			"type": "array",
			"additionalItems": false,
			"items": [
				{
					"$ref": "#/definitions/sub-item"
				},
				{
					"$ref": "#/definitions/sub-item"
				}
			]
		},
		"sub-item": {
			"type": "object",
			"required": [
				"foo"
			]
		}
	},
	"type": "array",
	"additionalItems": false,
	"items": [
		{
			"$ref": "#/definitions/item"
		},
		{
			"$ref": "#/definitions/item"
		},
		{
			"$ref": "#/definitions/item"
		}
	]
}
```
## Schema after validating
```js
{
	"definitions": {
		"item": {
			"type": "array",
			"additionalItems": false,
			"items": [
				{
					"$ref": "8137998377257458anonymous#/definitions/sub-item"
				},
				{
					"$ref": "8137998377257458anonymous#/definitions/sub-item"
				}
			],
			"id": "8137998377257458anonymous#/definitions/item"
		},
		"sub-item": {
			"type": "object",
			"required": [
				"foo"
			],
			"id": "8137998377257458anonymous#/definitions/sub-item"
		}
	},
	"type": "array",
	"additionalItems": false,
	"items": [
		{
			"$ref": "8137998377257458anonymous#/definitions/item"
		},
		{
			"$ref": "8137998377257458anonymous#/definitions/item"
		},
		{
			"$ref": "8137998377257458anonymous#/definitions/item"
		}
	],
	"id": "8137998377257458anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `items and subitems, too many sub-items`
## Original schema
```js
{
	"definitions": {
		"item": {
			"type": "array",
			"additionalItems": false,
			"items": [
				{
					"$ref": "#/definitions/sub-item"
				},
				{
					"$ref": "#/definitions/sub-item"
				}
			]
		},
		"sub-item": {
			"type": "object",
			"required": [
				"foo"
			]
		}
	},
	"type": "array",
	"additionalItems": false,
	"items": [
		{
			"$ref": "#/definitions/item"
		},
		{
			"$ref": "#/definitions/item"
		},
		{
			"$ref": "#/definitions/item"
		}
	]
}
```
## Schema after validating
```js
{
	"definitions": {
		"item": {
			"type": "array",
			"additionalItems": false,
			"items": [
				{
					"$ref": "8137998377257458anonymous#/definitions/sub-item"
				},
				{
					"$ref": "8137998377257458anonymous#/definitions/sub-item"
				}
			],
			"id": "8137998377257458anonymous#/definitions/item"
		},
		"sub-item": {
			"type": "object",
			"required": [
				"foo"
			],
			"id": "8137998377257458anonymous#/definitions/sub-item"
		}
	},
	"type": "array",
	"additionalItems": false,
	"items": [
		{
			"$ref": "8137998377257458anonymous#/definitions/item"
		},
		{
			"$ref": "8137998377257458anonymous#/definitions/item"
		},
		{
			"$ref": "8137998377257458anonymous#/definitions/item"
		}
	],
	"id": "8137998377257458anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `items and subitems, wrong item`
## Original schema
```js
{
	"definitions": {
		"item": {
			"type": "array",
			"additionalItems": false,
			"items": [
				{
					"$ref": "#/definitions/sub-item"
				},
				{
					"$ref": "#/definitions/sub-item"
				}
			]
		},
		"sub-item": {
			"type": "object",
			"required": [
				"foo"
			]
		}
	},
	"type": "array",
	"additionalItems": false,
	"items": [
		{
			"$ref": "#/definitions/item"
		},
		{
			"$ref": "#/definitions/item"
		},
		{
			"$ref": "#/definitions/item"
		}
	]
}
```
## Schema after validating
```js
{
	"definitions": {
		"item": {
			"type": "array",
			"additionalItems": false,
			"items": [
				{
					"$ref": "8137998377257458anonymous#/definitions/sub-item"
				},
				{
					"$ref": "8137998377257458anonymous#/definitions/sub-item"
				}
			],
			"id": "8137998377257458anonymous#/definitions/item"
		},
		"sub-item": {
			"type": "object",
			"required": [
				"foo"
			],
			"id": "8137998377257458anonymous#/definitions/sub-item"
		}
	},
	"type": "array",
	"additionalItems": false,
	"items": [
		{
			"$ref": "8137998377257458anonymous#/definitions/item"
		},
		{
			"$ref": "8137998377257458anonymous#/definitions/item"
		},
		{
			"$ref": "8137998377257458anonymous#/definitions/item"
		}
	],
	"id": "8137998377257458anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `items and subitems, wrong sub-item`
## Original schema
```js
{
	"definitions": {
		"item": {
			"type": "array",
			"additionalItems": false,
			"items": [
				{
					"$ref": "#/definitions/sub-item"
				},
				{
					"$ref": "#/definitions/sub-item"
				}
			]
		},
		"sub-item": {
			"type": "object",
			"required": [
				"foo"
			]
		}
	},
	"type": "array",
	"additionalItems": false,
	"items": [
		{
			"$ref": "#/definitions/item"
		},
		{
			"$ref": "#/definitions/item"
		},
		{
			"$ref": "#/definitions/item"
		}
	]
}
```
## Schema after validating
```js
{
	"definitions": {
		"item": {
			"type": "array",
			"additionalItems": false,
			"items": [
				{
					"$ref": "8137998377257458anonymous#/definitions/sub-item"
				},
				{
					"$ref": "8137998377257458anonymous#/definitions/sub-item"
				}
			],
			"id": "8137998377257458anonymous#/definitions/item"
		},
		"sub-item": {
			"type": "object",
			"required": [
				"foo"
			],
			"id": "8137998377257458anonymous#/definitions/sub-item"
		}
	},
	"type": "array",
	"additionalItems": false,
	"items": [
		{
			"$ref": "8137998377257458anonymous#/definitions/item"
		},
		{
			"$ref": "8137998377257458anonymous#/definitions/item"
		},
		{
			"$ref": "8137998377257458anonymous#/definitions/item"
		}
	],
	"id": "8137998377257458anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `items and subitems, fewer items is valid`
## Original schema
```js
{
	"definitions": {
		"item": {
			"type": "array",
			"additionalItems": false,
			"items": [
				{
					"$ref": "#/definitions/sub-item"
				},
				{
					"$ref": "#/definitions/sub-item"
				}
			]
		},
		"sub-item": {
			"type": "object",
			"required": [
				"foo"
			]
		}
	},
	"type": "array",
	"additionalItems": false,
	"items": [
		{
			"$ref": "#/definitions/item"
		},
		{
			"$ref": "#/definitions/item"
		},
		{
			"$ref": "#/definitions/item"
		}
	]
}
```
## Schema after validating
```js
{
	"definitions": {
		"item": {
			"type": "array",
			"additionalItems": false,
			"items": [
				{
					"$ref": "8137998377257458anonymous#/definitions/sub-item"
				},
				{
					"$ref": "8137998377257458anonymous#/definitions/sub-item"
				}
			],
			"id": "8137998377257458anonymous#/definitions/item"
		},
		"sub-item": {
			"type": "object",
			"required": [
				"foo"
			],
			"id": "8137998377257458anonymous#/definitions/sub-item"
		}
	},
	"type": "array",
	"additionalItems": false,
	"items": [
		{
			"$ref": "8137998377257458anonymous#/definitions/item"
		},
		{
			"$ref": "8137998377257458anonymous#/definitions/item"
		},
		{
			"$ref": "8137998377257458anonymous#/definitions/item"
		}
	],
	"id": "8137998377257458anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `nested items, valid nested array`
## Original schema
```js
{
	"type": "array",
	"items": {
		"type": "array",
		"items": {
			"type": "array",
			"items": {
				"type": "array",
				"items": {
					"type": "number"
				}
			}
		}
	}
}
```
## Schema after validating
```js
{
	"type": "array",
	"items": {
		"type": "array",
		"items": {
			"type": "array",
			"items": {
				"type": "array",
				"items": {
					"type": "number"
				}
			}
		}
	},
	"id": "47381341275243805anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `nested items, nested array with invalid type`
## Original schema
```js
{
	"type": "array",
	"items": {
		"type": "array",
		"items": {
			"type": "array",
			"items": {
				"type": "array",
				"items": {
					"type": "number"
				}
			}
		}
	}
}
```
## Schema after validating
```js
{
	"type": "array",
	"items": {
		"type": "array",
		"items": {
			"type": "array",
			"items": {
				"type": "array",
				"items": {
					"type": "number"
				}
			}
		}
	},
	"id": "47381341275243805anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `nested items, not deep enough`
## Original schema
```js
{
	"type": "array",
	"items": {
		"type": "array",
		"items": {
			"type": "array",
			"items": {
				"type": "array",
				"items": {
					"type": "number"
				}
			}
		}
	}
}
```
## Schema after validating
```js
{
	"type": "array",
	"items": {
		"type": "array",
		"items": {
			"type": "array",
			"items": {
				"type": "array",
				"items": {
					"type": "number"
				}
			}
		}
	},
	"id": "47381341275243805anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxItems validation, shorter is valid`
## Original schema
```js
{
	"maxItems": 2
}
```
## Schema after validating
```js
{
	"maxItems": 2,
	"id": "8780397520633323anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxItems validation, exact length is valid`
## Original schema
```js
{
	"maxItems": 2
}
```
## Schema after validating
```js
{
	"maxItems": 2,
	"id": "8780397520633323anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxItems validation, too long is invalid`
## Original schema
```js
{
	"maxItems": 2
}
```
## Schema after validating
```js
{
	"maxItems": 2,
	"id": "8780397520633323anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxItems validation, ignores non-arrays`
## Original schema
```js
{
	"maxItems": 2
}
```
## Schema after validating
```js
{
	"maxItems": 2,
	"id": "8780397520633323anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxLength validation, shorter is valid`
## Original schema
```js
{
	"maxLength": 2
}
```
## Schema after validating
```js
{
	"maxLength": 2,
	"id": "5777349520556037anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxLength validation, exact length is valid`
## Original schema
```js
{
	"maxLength": 2
}
```
## Schema after validating
```js
{
	"maxLength": 2,
	"id": "5777349520556037anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxLength validation, too long is invalid`
## Original schema
```js
{
	"maxLength": 2
}
```
## Schema after validating
```js
{
	"maxLength": 2,
	"id": "5777349520556037anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxLength validation, ignores non-strings`
## Original schema
```js
{
	"maxLength": 2
}
```
## Schema after validating
```js
{
	"maxLength": 2,
	"id": "5777349520556037anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxLength validation, two supplementary Unicode code points is long enough`
## Original schema
```js
{
	"maxLength": 2
}
```
## Schema after validating
```js
{
	"maxLength": 2,
	"id": "5777349520556037anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxProperties validation, shorter is valid`
## Original schema
```js
{
	"maxProperties": 2
}
```
## Schema after validating
```js
{
	"maxProperties": 2,
	"id": "40022243062689067anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxProperties validation, exact length is valid`
## Original schema
```js
{
	"maxProperties": 2
}
```
## Schema after validating
```js
{
	"maxProperties": 2,
	"id": "40022243062689067anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxProperties validation, too long is invalid`
## Original schema
```js
{
	"maxProperties": 2
}
```
## Schema after validating
```js
{
	"maxProperties": 2,
	"id": "40022243062689067anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxProperties validation, ignores arrays`
## Original schema
```js
{
	"maxProperties": 2
}
```
## Schema after validating
```js
{
	"maxProperties": 2,
	"id": "40022243062689067anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxProperties validation, ignores strings`
## Original schema
```js
{
	"maxProperties": 2
}
```
## Schema after validating
```js
{
	"maxProperties": 2,
	"id": "40022243062689067anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxProperties validation, ignores other non-objects`
## Original schema
```js
{
	"maxProperties": 2
}
```
## Schema after validating
```js
{
	"maxProperties": 2,
	"id": "40022243062689067anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxProperties = 0 means the object is empty, no properties is valid`
## Original schema
```js
{
	"maxProperties": 0
}
```
## Schema after validating
```js
{
	"maxProperties": 0,
	"id": "7474564662183985anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxProperties = 0 means the object is empty, one property is invalid`
## Original schema
```js
{
	"maxProperties": 0
}
```
## Schema after validating
```js
{
	"maxProperties": 0,
	"id": "7474564662183985anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maximum validation, below the maximum is valid`
## Original schema
```js
{
	"maximum": 3
}
```
## Schema after validating
```js
{
	"maximum": 3,
	"id": "26148672209287716anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maximum validation, boundary point is valid`
## Original schema
```js
{
	"maximum": 3
}
```
## Schema after validating
```js
{
	"maximum": 3,
	"id": "26148672209287716anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maximum validation, above the maximum is invalid`
## Original schema
```js
{
	"maximum": 3
}
```
## Schema after validating
```js
{
	"maximum": 3,
	"id": "26148672209287716anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maximum validation, ignores non-numbers`
## Original schema
```js
{
	"maximum": 3
}
```
## Schema after validating
```js
{
	"maximum": 3,
	"id": "26148672209287716anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maximum validation with unsigned integer, below the maximum is invalid`
## Original schema
```js
{
	"maximum": 300
}
```
## Schema after validating
```js
{
	"maximum": 300,
	"id": "5826277027643818anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maximum validation with unsigned integer, boundary point integer is valid`
## Original schema
```js
{
	"maximum": 300
}
```
## Schema after validating
```js
{
	"maximum": 300,
	"id": "5826277027643818anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maximum validation with unsigned integer, boundary point float is valid`
## Original schema
```js
{
	"maximum": 300
}
```
## Schema after validating
```js
{
	"maximum": 300,
	"id": "5826277027643818anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maximum validation with unsigned integer, above the maximum is invalid`
## Original schema
```js
{
	"maximum": 300
}
```
## Schema after validating
```js
{
	"maximum": 300,
	"id": "5826277027643818anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minItems validation, longer is valid`
## Original schema
```js
{
	"minItems": 1
}
```
## Schema after validating
```js
{
	"minItems": 1,
	"id": "9184551522054556anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minItems validation, exact length is valid`
## Original schema
```js
{
	"minItems": 1
}
```
## Schema after validating
```js
{
	"minItems": 1,
	"id": "9184551522054556anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minItems validation, too short is invalid`
## Original schema
```js
{
	"minItems": 1
}
```
## Schema after validating
```js
{
	"minItems": 1,
	"id": "9184551522054556anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minItems validation, ignores non-arrays`
## Original schema
```js
{
	"minItems": 1
}
```
## Schema after validating
```js
{
	"minItems": 1,
	"id": "9184551522054556anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minLength validation, longer is valid`
## Original schema
```js
{
	"minLength": 2
}
```
## Schema after validating
```js
{
	"minLength": 2,
	"id": "5315808012044583anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minLength validation, exact length is valid`
## Original schema
```js
{
	"minLength": 2
}
```
## Schema after validating
```js
{
	"minLength": 2,
	"id": "5315808012044583anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minLength validation, too short is invalid`
## Original schema
```js
{
	"minLength": 2
}
```
## Schema after validating
```js
{
	"minLength": 2,
	"id": "5315808012044583anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minLength validation, ignores non-strings`
## Original schema
```js
{
	"minLength": 2
}
```
## Schema after validating
```js
{
	"minLength": 2,
	"id": "5315808012044583anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minLength validation, one supplementary Unicode code point is not long enough`
## Original schema
```js
{
	"minLength": 2
}
```
## Schema after validating
```js
{
	"minLength": 2,
	"id": "5315808012044583anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minProperties validation, longer is valid`
## Original schema
```js
{
	"minProperties": 1
}
```
## Schema after validating
```js
{
	"minProperties": 1,
	"id": "8886293771052691anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minProperties validation, exact length is valid`
## Original schema
```js
{
	"minProperties": 1
}
```
## Schema after validating
```js
{
	"minProperties": 1,
	"id": "8886293771052691anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minProperties validation, too short is invalid`
## Original schema
```js
{
	"minProperties": 1
}
```
## Schema after validating
```js
{
	"minProperties": 1,
	"id": "8886293771052691anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minProperties validation, ignores arrays`
## Original schema
```js
{
	"minProperties": 1
}
```
## Schema after validating
```js
{
	"minProperties": 1,
	"id": "8886293771052691anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minProperties validation, ignores strings`
## Original schema
```js
{
	"minProperties": 1
}
```
## Schema after validating
```js
{
	"minProperties": 1,
	"id": "8886293771052691anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minProperties validation, ignores other non-objects`
## Original schema
```js
{
	"minProperties": 1
}
```
## Schema after validating
```js
{
	"minProperties": 1,
	"id": "8886293771052691anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minimum validation, above the minimum is valid`
## Original schema
```js
{
	"minimum": 1.1
}
```
## Schema after validating
```js
{
	"minimum": 1.1,
	"id": "01895134881728011anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minimum validation, boundary point is valid`
## Original schema
```js
{
	"minimum": 1.1
}
```
## Schema after validating
```js
{
	"minimum": 1.1,
	"id": "01895134881728011anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minimum validation, below the minimum is invalid`
## Original schema
```js
{
	"minimum": 1.1
}
```
## Schema after validating
```js
{
	"minimum": 1.1,
	"id": "01895134881728011anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minimum validation, ignores non-numbers`
## Original schema
```js
{
	"minimum": 1.1
}
```
## Schema after validating
```js
{
	"minimum": 1.1,
	"id": "01895134881728011anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minimum validation with signed integer, negative above the minimum is valid`
## Original schema
```js
{
	"minimum": -2
}
```
## Schema after validating
```js
{
	"minimum": -2,
	"id": "8375299208799334anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minimum validation with signed integer, positive above the minimum is valid`
## Original schema
```js
{
	"minimum": -2
}
```
## Schema after validating
```js
{
	"minimum": -2,
	"id": "8375299208799334anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minimum validation with signed integer, boundary point is valid`
## Original schema
```js
{
	"minimum": -2
}
```
## Schema after validating
```js
{
	"minimum": -2,
	"id": "8375299208799334anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minimum validation with signed integer, boundary point with float is valid`
## Original schema
```js
{
	"minimum": -2
}
```
## Schema after validating
```js
{
	"minimum": -2,
	"id": "8375299208799334anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minimum validation with signed integer, float below the minimum is invalid`
## Original schema
```js
{
	"minimum": -2
}
```
## Schema after validating
```js
{
	"minimum": -2,
	"id": "8375299208799334anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minimum validation with signed integer, int below the minimum is invalid`
## Original schema
```js
{
	"minimum": -2
}
```
## Schema after validating
```js
{
	"minimum": -2,
	"id": "8375299208799334anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minimum validation with signed integer, ignores non-numbers`
## Original schema
```js
{
	"minimum": -2
}
```
## Schema after validating
```js
{
	"minimum": -2,
	"id": "8375299208799334anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `by int, int by int`
## Original schema
```js
{
	"multipleOf": 2
}
```
## Schema after validating
```js
{
	"multipleOf": 2,
	"id": "14368080649279746anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `by int, int by int fail`
## Original schema
```js
{
	"multipleOf": 2
}
```
## Schema after validating
```js
{
	"multipleOf": 2,
	"id": "14368080649279746anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `by int, ignores non-numbers`
## Original schema
```js
{
	"multipleOf": 2
}
```
## Schema after validating
```js
{
	"multipleOf": 2,
	"id": "14368080649279746anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `by number, zero is multiple of anything`
## Original schema
```js
{
	"multipleOf": 1.5
}
```
## Schema after validating
```js
{
	"multipleOf": 1.5,
	"id": "26237424534806797anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `by number, 4.5 is multiple of 1.5`
## Original schema
```js
{
	"multipleOf": 1.5
}
```
## Schema after validating
```js
{
	"multipleOf": 1.5,
	"id": "26237424534806797anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `by number, 35 is not multiple of 1.5`
## Original schema
```js
{
	"multipleOf": 1.5
}
```
## Schema after validating
```js
{
	"multipleOf": 1.5,
	"id": "26237424534806797anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `by small number, 0.0075 is multiple of 0.0001`
## Original schema
```js
{
	"multipleOf": 0.0001
}
```
## Schema after validating
```js
{
	"multipleOf": 0.0001,
	"id": "5592019449784311anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `by small number, 0.00751 is not multiple of 0.0001`
## Original schema
```js
{
	"multipleOf": 0.0001
}
```
## Schema after validating
```js
{
	"multipleOf": 0.0001,
	"id": "5592019449784311anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `invalid instance should not raise error when float division = inf, always invalid, but naive implementations may raise an overflow error`
## Original schema
```js
{
	"type": "integer",
	"multipleOf": 0.123456789
}
```
## Schema after validating
```js
{
	"type": "integer",
	"multipleOf": 0.123456789,
	"id": "25740212849691724anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `not, allowed`
## Original schema
```js
{
	"not": {
		"type": "integer"
	}
}
```
## Schema after validating
```js
{
	"not": {
		"type": "integer"
	},
	"id": "3328384887249778anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `not, disallowed`
## Original schema
```js
{
	"not": {
		"type": "integer"
	}
}
```
## Schema after validating
```js
{
	"not": {
		"type": "integer"
	},
	"id": "3328384887249778anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `not multiple types, valid`
## Original schema
```js
{
	"not": {
		"type": [
			"integer",
			"boolean"
		]
	}
}
```
## Schema after validating
```js
{
	"not": {
		"type": [
			"integer",
			"boolean"
		]
	},
	"id": "9939526220011565anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `not multiple types, mismatch`
## Original schema
```js
{
	"not": {
		"type": [
			"integer",
			"boolean"
		]
	}
}
```
## Schema after validating
```js
{
	"not": {
		"type": [
			"integer",
			"boolean"
		]
	},
	"id": "9939526220011565anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `not multiple types, other mismatch`
## Original schema
```js
{
	"not": {
		"type": [
			"integer",
			"boolean"
		]
	}
}
```
## Schema after validating
```js
{
	"not": {
		"type": [
			"integer",
			"boolean"
		]
	},
	"id": "9939526220011565anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `not more complex schema, match`
## Original schema
```js
{
	"not": {
		"type": "object",
		"properties": {
			"foo": {
				"type": "string"
			}
		}
	}
}
```
## Schema after validating
```js
{
	"not": {
		"type": "object",
		"properties": {
			"foo": {
				"type": "string"
			}
		}
	},
	"id": "6017445555425034anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `not more complex schema, other match`
## Original schema
```js
{
	"not": {
		"type": "object",
		"properties": {
			"foo": {
				"type": "string"
			}
		}
	}
}
```
## Schema after validating
```js
{
	"not": {
		"type": "object",
		"properties": {
			"foo": {
				"type": "string"
			}
		}
	},
	"id": "6017445555425034anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `not more complex schema, mismatch`
## Original schema
```js
{
	"not": {
		"type": "object",
		"properties": {
			"foo": {
				"type": "string"
			}
		}
	}
}
```
## Schema after validating
```js
{
	"not": {
		"type": "object",
		"properties": {
			"foo": {
				"type": "string"
			}
		}
	},
	"id": "6017445555425034anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `forbidden property, property present`
## Original schema
```js
{
	"properties": {
		"foo": {
			"not": {}
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"not": {}
		}
	},
	"id": "7050064578711217anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `forbidden property, property absent`
## Original schema
```js
{
	"properties": {
		"foo": {
			"not": {}
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"not": {}
		}
	},
	"id": "7050064578711217anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `not with boolean schema true, any value is invalid`
## Original schema
```js
{
	"not": true
}
```
## Schema after validating
```js
{
	"not": true,
	"id": "9232314537081359anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `not with boolean schema false, any value is valid`
## Original schema
```js
{
	"not": false
}
```
## Schema after validating
```js
{
	"not": false,
	"id": "46896685668197535anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf, first oneOf valid`
## Original schema
```js
{
	"oneOf": [
		{
			"type": "integer"
		},
		{
			"minimum": 2
		}
	]
}
```
## Schema after validating
```js
{
	"oneOf": [
		{
			"type": "integer"
		},
		{
			"minimum": 2
		}
	],
	"id": "6828308378328067anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf, second oneOf valid`
## Original schema
```js
{
	"oneOf": [
		{
			"type": "integer"
		},
		{
			"minimum": 2
		}
	]
}
```
## Schema after validating
```js
{
	"oneOf": [
		{
			"type": "integer"
		},
		{
			"minimum": 2
		}
	],
	"id": "6828308378328067anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf, both oneOf valid`
## Original schema
```js
{
	"oneOf": [
		{
			"type": "integer"
		},
		{
			"minimum": 2
		}
	]
}
```
## Schema after validating
```js
{
	"oneOf": [
		{
			"type": "integer"
		},
		{
			"minimum": 2
		}
	],
	"id": "6828308378328067anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf, neither oneOf valid`
## Original schema
```js
{
	"oneOf": [
		{
			"type": "integer"
		},
		{
			"minimum": 2
		}
	]
}
```
## Schema after validating
```js
{
	"oneOf": [
		{
			"type": "integer"
		},
		{
			"minimum": 2
		}
	],
	"id": "6828308378328067anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf with base schema, mismatch base schema`
## Original schema
```js
{
	"type": "string",
	"oneOf": [
		{
			"minLength": 2
		},
		{
			"maxLength": 4
		}
	]
}
```
## Schema after validating
```js
{
	"type": "string",
	"oneOf": [
		{
			"minLength": 2
		},
		{
			"maxLength": 4
		}
	],
	"id": "3333116190400778anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf with base schema, one oneOf valid`
## Original schema
```js
{
	"type": "string",
	"oneOf": [
		{
			"minLength": 2
		},
		{
			"maxLength": 4
		}
	]
}
```
## Schema after validating
```js
{
	"type": "string",
	"oneOf": [
		{
			"minLength": 2
		},
		{
			"maxLength": 4
		}
	],
	"id": "3333116190400778anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf with base schema, both oneOf valid`
## Original schema
```js
{
	"type": "string",
	"oneOf": [
		{
			"minLength": 2
		},
		{
			"maxLength": 4
		}
	]
}
```
## Schema after validating
```js
{
	"type": "string",
	"oneOf": [
		{
			"minLength": 2
		},
		{
			"maxLength": 4
		}
	],
	"id": "3333116190400778anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf with boolean schemas, all false, any value is invalid`
## Original schema
```js
{
	"oneOf": [
		false,
		false,
		false
	]
}
```
## Schema after validating
```js
{
	"oneOf": [
		false,
		false,
		false
	],
	"id": "7930795085177831anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf complex types, first oneOf valid (complex)`
## Original schema
```js
{
	"oneOf": [
		{
			"properties": {
				"bar": {
					"type": "integer"
				}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"oneOf": [
		{
			"properties": {
				"bar": {
					"type": "integer"
				}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		}
	],
	"id": "2167683910149123anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf complex types, second oneOf valid (complex)`
## Original schema
```js
{
	"oneOf": [
		{
			"properties": {
				"bar": {
					"type": "integer"
				}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"oneOf": [
		{
			"properties": {
				"bar": {
					"type": "integer"
				}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		}
	],
	"id": "2167683910149123anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf complex types, both oneOf valid (complex)`
## Original schema
```js
{
	"oneOf": [
		{
			"properties": {
				"bar": {
					"type": "integer"
				}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"oneOf": [
		{
			"properties": {
				"bar": {
					"type": "integer"
				}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		}
	],
	"id": "2167683910149123anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf complex types, neither oneOf valid (complex)`
## Original schema
```js
{
	"oneOf": [
		{
			"properties": {
				"bar": {
					"type": "integer"
				}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"oneOf": [
		{
			"properties": {
				"bar": {
					"type": "integer"
				}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		}
	],
	"id": "2167683910149123anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf with empty schema, one valid - valid`
## Original schema
```js
{
	"oneOf": [
		{
			"type": "number"
		},
		{}
	]
}
```
## Schema after validating
```js
{
	"oneOf": [
		{
			"type": "number"
		},
		{}
	],
	"id": "42052180686425245anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf with empty schema, both valid - invalid`
## Original schema
```js
{
	"oneOf": [
		{
			"type": "number"
		},
		{}
	]
}
```
## Schema after validating
```js
{
	"oneOf": [
		{
			"type": "number"
		},
		{}
	],
	"id": "42052180686425245anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf with required, both invalid - invalid`
## Original schema
```js
{
	"type": "object",
	"oneOf": [
		{
			"required": [
				"foo",
				"bar"
			]
		},
		{
			"required": [
				"foo",
				"baz"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"type": "object",
	"oneOf": [
		{
			"required": [
				"foo",
				"bar"
			]
		},
		{
			"required": [
				"foo",
				"baz"
			]
		}
	],
	"id": "7377348989346935anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf with required, first valid - valid`
## Original schema
```js
{
	"type": "object",
	"oneOf": [
		{
			"required": [
				"foo",
				"bar"
			]
		},
		{
			"required": [
				"foo",
				"baz"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"type": "object",
	"oneOf": [
		{
			"required": [
				"foo",
				"bar"
			]
		},
		{
			"required": [
				"foo",
				"baz"
			]
		}
	],
	"id": "7377348989346935anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf with required, second valid - valid`
## Original schema
```js
{
	"type": "object",
	"oneOf": [
		{
			"required": [
				"foo",
				"bar"
			]
		},
		{
			"required": [
				"foo",
				"baz"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"type": "object",
	"oneOf": [
		{
			"required": [
				"foo",
				"bar"
			]
		},
		{
			"required": [
				"foo",
				"baz"
			]
		}
	],
	"id": "7377348989346935anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf with required, both valid - invalid`
## Original schema
```js
{
	"type": "object",
	"oneOf": [
		{
			"required": [
				"foo",
				"bar"
			]
		},
		{
			"required": [
				"foo",
				"baz"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"type": "object",
	"oneOf": [
		{
			"required": [
				"foo",
				"bar"
			]
		},
		{
			"required": [
				"foo",
				"baz"
			]
		}
	],
	"id": "7377348989346935anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `nested oneOf, to check validation semantics, null is valid`
## Original schema
```js
{
	"oneOf": [
		{
			"oneOf": [
				{
					"type": "null"
				}
			]
		}
	]
}
```
## Schema after validating
```js
{
	"oneOf": [
		{
			"oneOf": [
				{
					"type": "null"
				}
			]
		}
	],
	"id": "9024625202461307anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `nested oneOf, to check validation semantics, anything non-null is invalid`
## Original schema
```js
{
	"oneOf": [
		{
			"oneOf": [
				{
					"type": "null"
				}
			]
		}
	]
}
```
## Schema after validating
```js
{
	"oneOf": [
		{
			"oneOf": [
				{
					"type": "null"
				}
			]
		}
	],
	"id": "9024625202461307anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `integer, a bignum is an integer`
## Original schema
```js
{
	"type": "integer"
}
```
## Schema after validating
```js
{
	"type": "integer",
	"id": "29487093097468575anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `number, a bignum is a number`
## Original schema
```js
{
	"type": "number"
}
```
## Schema after validating
```js
{
	"type": "number",
	"id": "4603867352140045anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `integer, a negative bignum is an integer`
## Original schema
```js
{
	"type": "integer"
}
```
## Schema after validating
```js
{
	"type": "integer",
	"id": "9937243167149048anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `number, a negative bignum is a number`
## Original schema
```js
{
	"type": "number"
}
```
## Schema after validating
```js
{
	"type": "number",
	"id": "38035975903099484anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `string, a bignum is not a string`
## Original schema
```js
{
	"type": "string"
}
```
## Schema after validating
```js
{
	"type": "string",
	"id": "2813315201764117anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `integer comparison, comparison works for high numbers`
## Original schema
```js
{
	"maximum": 18446744073709552000
}
```
## Schema after validating
```js
{
	"maximum": 18446744073709552000,
	"id": "6019498944576869anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `float comparison with high precision, comparison works for high numbers`
## Original schema
```js
{
	"exclusiveMaximum": 9.727837981879871e+26
}
```
## Schema after validating
```js
{
	"exclusiveMaximum": 9.727837981879871e+26,
	"id": "9411319656980739anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `integer comparison, comparison works for very negative numbers`
## Original schema
```js
{
	"minimum": -18446744073709552000
}
```
## Schema after validating
```js
{
	"minimum": -18446744073709552000,
	"id": "6296303029378403anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `float comparison with high precision on negative numbers, comparison works for very negative numbers`
## Original schema
```js
{
	"exclusiveMinimum": -9.727837981879871e+26
}
```
## Schema after validating
```js
{
	"exclusiveMinimum": -9.727837981879871e+26,
	"id": "5964020236507432anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of string-encoded content based on media type, a valid JSON document`
## Original schema
```js
{
	"contentMediaType": "application/json"
}
```
## Schema after validating
```js
{
	"contentMediaType": "application/json",
	"id": "4311304501537896anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of string-encoded content based on media type, an invalid JSON document`
## Original schema
```js
{
	"contentMediaType": "application/json"
}
```
## Schema after validating
```js
{
	"contentMediaType": "application/json",
	"id": "4311304501537896anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of string-encoded content based on media type, ignores non-strings`
## Original schema
```js
{
	"contentMediaType": "application/json"
}
```
## Schema after validating
```js
{
	"contentMediaType": "application/json",
	"id": "4311304501537896anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of binary string-encoding, a valid base64 string`
## Original schema
```js
{
	"contentEncoding": "base64"
}
```
## Schema after validating
```js
{
	"contentEncoding": "base64",
	"id": "36673363068512566anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of binary string-encoding, an invalid base64 string (% is not a valid character)`
## Original schema
```js
{
	"contentEncoding": "base64"
}
```
## Schema after validating
```js
{
	"contentEncoding": "base64",
	"id": "36673363068512566anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of binary string-encoding, ignores non-strings`
## Original schema
```js
{
	"contentEncoding": "base64"
}
```
## Schema after validating
```js
{
	"contentEncoding": "base64",
	"id": "36673363068512566anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of binary-encoded media type documents, a valid base64-encoded JSON document`
## Original schema
```js
{
	"contentMediaType": "application/json",
	"contentEncoding": "base64"
}
```
## Schema after validating
```js
{
	"contentMediaType": "application/json",
	"contentEncoding": "base64",
	"id": "5476013122012182anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of binary-encoded media type documents, a validly-encoded invalid JSON document`
## Original schema
```js
{
	"contentMediaType": "application/json",
	"contentEncoding": "base64"
}
```
## Schema after validating
```js
{
	"contentMediaType": "application/json",
	"contentEncoding": "base64",
	"id": "5476013122012182anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of binary-encoded media type documents, an invalid base64 string that is valid JSON`
## Original schema
```js
{
	"contentMediaType": "application/json",
	"contentEncoding": "base64"
}
```
## Schema after validating
```js
{
	"contentMediaType": "application/json",
	"contentEncoding": "base64",
	"id": "5476013122012182anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of binary-encoded media type documents, ignores non-strings`
## Original schema
```js
{
	"contentMediaType": "application/json",
	"contentEncoding": "base64"
}
```
## Schema after validating
```js
{
	"contentMediaType": "application/json",
	"contentEncoding": "base64",
	"id": "5476013122012182anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 regex $ does not match trailing newline, matches in Python, but should not in jsonschema`
## Original schema
```js
{
	"type": "string",
	"pattern": "^abc$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^abc$",
	"id": "5384568386179918anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 regex $ does not match trailing newline, should match`
## Original schema
```js
{
	"type": "string",
	"pattern": "^abc$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^abc$",
	"id": "5384568386179918anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 regex converts \t to horizontal tab, does not match`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\t$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\t$",
	"id": "2428468744563146anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 regex converts \t to horizontal tab, matches`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\t$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\t$",
	"id": "2428468744563146anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 regex escapes control codes with \c and upper letter, does not match`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\cC$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\cC$",
	"id": "9044773953373206anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 regex escapes control codes with \c and upper letter, matches`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\cC$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\cC$",
	"id": "9044773953373206anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 regex escapes control codes with \c and lower letter, does not match`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\cc$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\cc$",
	"id": "161276810296626anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 regex escapes control codes with \c and lower letter, matches`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\cc$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\cc$",
	"id": "161276810296626anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \d matches ascii digits only, ASCII zero matches`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\d$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\d$",
	"id": "9983464733264014anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \d matches ascii digits only, NKO DIGIT ZERO does not match (unlike e.g. Python)`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\d$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\d$",
	"id": "9983464733264014anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \d matches ascii digits only, NKO DIGIT ZERO (as \u escape) does not match`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\d$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\d$",
	"id": "9983464733264014anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \D matches everything but ascii digits, ASCII zero does not match`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\D$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\D$",
	"id": "08036544496271691anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \D matches everything but ascii digits, NKO DIGIT ZERO matches (unlike e.g. Python)`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\D$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\D$",
	"id": "08036544496271691anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \D matches everything but ascii digits, NKO DIGIT ZERO (as \u escape) matches`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\D$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\D$",
	"id": "08036544496271691anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \w matches ascii letters only, ASCII 'a' matches`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\w$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\w$",
	"id": "7947586925953214anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \w matches ascii letters only, latin-1 e-acute does not match (unlike e.g. Python)`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\w$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\w$",
	"id": "7947586925953214anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \W matches everything but ascii letters, ASCII 'a' does not match`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\W$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\W$",
	"id": "24821244200060844anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \W matches everything but ascii letters, latin-1 e-acute matches (unlike e.g. Python)`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\W$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\W$",
	"id": "24821244200060844anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \s matches whitespace, ASCII space matches`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\s$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\s$",
	"id": "3773982023754374anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \s matches whitespace, Character tabulation matches`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\s$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\s$",
	"id": "3773982023754374anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \s matches whitespace, Line tabulation matches`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\s$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\s$",
	"id": "3773982023754374anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \s matches whitespace, Form feed matches`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\s$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\s$",
	"id": "3773982023754374anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \s matches whitespace, latin-1 non-breaking-space matches`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\s$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\s$",
	"id": "3773982023754374anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \s matches whitespace, zero-width whitespace matches`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\s$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\s$",
	"id": "3773982023754374anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \s matches whitespace, line feed matches (line terminator)`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\s$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\s$",
	"id": "3773982023754374anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \s matches whitespace, paragraph separator matches (line terminator)`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\s$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\s$",
	"id": "3773982023754374anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \s matches whitespace, EM SPACE matches (Space_Separator)`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\s$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\s$",
	"id": "3773982023754374anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \s matches whitespace, Non-whitespace control does not match`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\s$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\s$",
	"id": "3773982023754374anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \s matches whitespace, Non-whitespace does not match`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\s$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\s$",
	"id": "3773982023754374anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \S matches everything but whitespace, ASCII space does not match`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\S$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\S$",
	"id": "3150031639739934anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \S matches everything but whitespace, Character tabulation does not match`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\S$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\S$",
	"id": "3150031639739934anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \S matches everything but whitespace, Line tabulation does not match`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\S$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\S$",
	"id": "3150031639739934anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \S matches everything but whitespace, Form feed does not match`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\S$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\S$",
	"id": "3150031639739934anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \S matches everything but whitespace, latin-1 non-breaking-space does not match`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\S$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\S$",
	"id": "3150031639739934anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \S matches everything but whitespace, zero-width whitespace does not match`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\S$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\S$",
	"id": "3150031639739934anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \S matches everything but whitespace, line feed does not match (line terminator)`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\S$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\S$",
	"id": "3150031639739934anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \S matches everything but whitespace, paragraph separator does not match (line terminator)`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\S$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\S$",
	"id": "3150031639739934anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \S matches everything but whitespace, EM SPACE does not match (Space_Separator)`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\S$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\S$",
	"id": "3150031639739934anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \S matches everything but whitespace, Non-whitespace control matches`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\S$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\S$",
	"id": "3150031639739934anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \S matches everything but whitespace, Non-whitespace matches`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\S$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\S$",
	"id": "3150031639739934anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `all integers are multiples of 0.5, if overflow is handled, valid if optional overflow handling is implemented`
## Original schema
```js
{
	"type": "integer",
	"multipleOf": 0.5
}
```
## Schema after validating
```js
{
	"type": "integer",
	"multipleOf": 0.5,
	"id": "3241295082318201anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, a valid date-time string`
## Original schema
```js
{
	"format": "date-time"
}
```
## Schema after validating
```js
{
	"format": "date-time",
	"id": "9724063848583744anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, a valid date-time string without second fraction`
## Original schema
```js
{
	"format": "date-time"
}
```
## Schema after validating
```js
{
	"format": "date-time",
	"id": "9724063848583744anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, a valid date-time string with plus offset`
## Original schema
```js
{
	"format": "date-time"
}
```
## Schema after validating
```js
{
	"format": "date-time",
	"id": "9724063848583744anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, a valid date-time string with minus offset`
## Original schema
```js
{
	"format": "date-time"
}
```
## Schema after validating
```js
{
	"format": "date-time",
	"id": "9724063848583744anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, a invalid day in date-time string`
## Original schema
```js
{
	"format": "date-time"
}
```
## Schema after validating
```js
{
	"format": "date-time",
	"id": "9724063848583744anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, an invalid offset in date-time string`
## Original schema
```js
{
	"format": "date-time"
}
```
## Schema after validating
```js
{
	"format": "date-time",
	"id": "9724063848583744anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, an invalid date-time string`
## Original schema
```js
{
	"format": "date-time"
}
```
## Schema after validating
```js
{
	"format": "date-time",
	"id": "9724063848583744anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, case-insensitive T and Z`
## Original schema
```js
{
	"format": "date-time"
}
```
## Schema after validating
```js
{
	"format": "date-time",
	"id": "9724063848583744anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, only RFC3339 not all of ISO 8601 are valid`
## Original schema
```js
{
	"format": "date-time"
}
```
## Schema after validating
```js
{
	"format": "date-time",
	"id": "9724063848583744anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, invalid non-padded month dates`
## Original schema
```js
{
	"format": "date-time"
}
```
## Schema after validating
```js
{
	"format": "date-time",
	"id": "9724063848583744anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, invalid non-padded day dates`
## Original schema
```js
{
	"format": "date-time"
}
```
## Schema after validating
```js
{
	"format": "date-time",
	"id": "9724063848583744anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date strings, a valid date string`
## Original schema
```js
{
	"format": "date"
}
```
## Schema after validating
```js
{
	"format": "date",
	"id": "14498824581118508anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date strings, an invalid date-time string`
## Original schema
```js
{
	"format": "date"
}
```
## Schema after validating
```js
{
	"format": "date",
	"id": "14498824581118508anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date strings, only RFC3339 not all of ISO 8601 are valid`
## Original schema
```js
{
	"format": "date"
}
```
## Schema after validating
```js
{
	"format": "date",
	"id": "14498824581118508anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date strings, invalidates non-padded month dates`
## Original schema
```js
{
	"format": "date"
}
```
## Schema after validating
```js
{
	"format": "date",
	"id": "14498824581118508anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date strings, invalidates non-padded day dates`
## Original schema
```js
{
	"format": "date"
}
```
## Schema after validating
```js
{
	"format": "date",
	"id": "14498824581118508anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, a valid e-mail address`
## Original schema
```js
{
	"format": "email"
}
```
## Schema after validating
```js
{
	"format": "email",
	"id": "0005770762651566841anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, an invalid e-mail address`
## Original schema
```js
{
	"format": "email"
}
```
## Schema after validating
```js
{
	"format": "email",
	"id": "0005770762651566841anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, tilde in local part is valid`
## Original schema
```js
{
	"format": "email"
}
```
## Schema after validating
```js
{
	"format": "email",
	"id": "0005770762651566841anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, tilde before local part is valid`
## Original schema
```js
{
	"format": "email"
}
```
## Schema after validating
```js
{
	"format": "email",
	"id": "0005770762651566841anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, tilde after local part is valid`
## Original schema
```js
{
	"format": "email"
}
```
## Schema after validating
```js
{
	"format": "email",
	"id": "0005770762651566841anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, dot before local part is not valid`
## Original schema
```js
{
	"format": "email"
}
```
## Schema after validating
```js
{
	"format": "email",
	"id": "0005770762651566841anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, dot after local part is not valid`
## Original schema
```js
{
	"format": "email"
}
```
## Schema after validating
```js
{
	"format": "email",
	"id": "0005770762651566841anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, two separated dots inside local part are valid`
## Original schema
```js
{
	"format": "email"
}
```
## Schema after validating
```js
{
	"format": "email",
	"id": "0005770762651566841anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, two subsequent dots inside local part are not valid`
## Original schema
```js
{
	"format": "email"
}
```
## Schema after validating
```js
{
	"format": "email",
	"id": "0005770762651566841anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of host names, a valid host name`
## Original schema
```js
{
	"format": "hostname"
}
```
## Schema after validating
```js
{
	"format": "hostname",
	"id": "29239707434812257anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of host names, a valid punycoded IDN hostname`
## Original schema
```js
{
	"format": "hostname"
}
```
## Schema after validating
```js
{
	"format": "hostname",
	"id": "29239707434812257anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of host names, a host name starting with an illegal character`
## Original schema
```js
{
	"format": "hostname"
}
```
## Schema after validating
```js
{
	"format": "hostname",
	"id": "29239707434812257anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of host names, a host name containing illegal characters`
## Original schema
```js
{
	"format": "hostname"
}
```
## Schema after validating
```js
{
	"format": "hostname",
	"id": "29239707434812257anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of host names, a host name with a component too long`
## Original schema
```js
{
	"format": "hostname"
}
```
## Schema after validating
```js
{
	"format": "hostname",
	"id": "29239707434812257anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of host names, starts with hyphen`
## Original schema
```js
{
	"format": "hostname"
}
```
## Schema after validating
```js
{
	"format": "hostname",
	"id": "29239707434812257anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of host names, ends with hyphen`
## Original schema
```js
{
	"format": "hostname"
}
```
## Schema after validating
```js
{
	"format": "hostname",
	"id": "29239707434812257anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of host names, starts with underscore`
## Original schema
```js
{
	"format": "hostname"
}
```
## Schema after validating
```js
{
	"format": "hostname",
	"id": "29239707434812257anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of host names, ends with underscore`
## Original schema
```js
{
	"format": "hostname"
}
```
## Schema after validating
```js
{
	"format": "hostname",
	"id": "29239707434812257anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of host names, contains underscore`
## Original schema
```js
{
	"format": "hostname"
}
```
## Schema after validating
```js
{
	"format": "hostname",
	"id": "29239707434812257anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of host names, maximum label length`
## Original schema
```js
{
	"format": "hostname"
}
```
## Schema after validating
```js
{
	"format": "hostname",
	"id": "29239707434812257anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of host names, exceeds maximum label length`
## Original schema
```js
{
	"format": "hostname"
}
```
## Schema after validating
```js
{
	"format": "hostname",
	"id": "29239707434812257anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of an internationalized e-mail addresses, a valid idn e-mail (example@example.test in Hangul)`
## Original schema
```js
{
	"format": "idn-email"
}
```
## Schema after validating
```js
{
	"format": "idn-email",
	"id": "2988970309888259anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of an internationalized e-mail addresses, an invalid idn e-mail address`
## Original schema
```js
{
	"format": "idn-email"
}
```
## Schema after validating
```js
{
	"format": "idn-email",
	"id": "2988970309888259anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of an internationalized e-mail addresses, a valid e-mail address`
## Original schema
```js
{
	"format": "idn-email"
}
```
## Schema after validating
```js
{
	"format": "idn-email",
	"id": "2988970309888259anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of an internationalized e-mail addresses, an invalid e-mail address`
## Original schema
```js
{
	"format": "idn-email"
}
```
## Schema after validating
```js
{
	"format": "idn-email",
	"id": "2988970309888259anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, a valid host name (example.test in Hangul)`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, illegal first char U+302E Hangul single dot tone mark`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, contains illegal char U+302E Hangul single dot tone mark`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, a host name with a component too long`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, invalid label, correct Punycode`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, valid Chinese Punycode`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, invalid Punycode`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, U-label contains "--" in the 3rd and 4th position`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, U-label starts with a dash`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, U-label ends with a dash`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, U-label starts and ends with a dash`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, Begins with a Spacing Combining Mark`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, Begins with a Nonspacing Mark`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, Begins with an Enclosing Mark`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, Exceptions that are PVALID, left-to-right chars`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, Exceptions that are PVALID, right-to-left chars`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, Exceptions that are DISALLOWED, right-to-left chars`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, Exceptions that are DISALLOWED, left-to-right chars`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, MIDDLE DOT with no preceding 'l'`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, MIDDLE DOT with nothing preceding`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, MIDDLE DOT with no following 'l'`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, MIDDLE DOT with nothing following`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, MIDDLE DOT with surrounding 'l's`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, Greek KERAIA not followed by Greek`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, Greek KERAIA not followed by anything`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, Greek KERAIA followed by Greek`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, Hebrew GERESH not preceded by Hebrew`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, Hebrew GERESH not preceded by anything`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, Hebrew GERESH preceded by Hebrew`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, Hebrew GERSHAYIM not preceded by Hebrew`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, Hebrew GERSHAYIM not preceded by anything`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, Hebrew GERSHAYIM preceded by Hebrew`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, KATAKANA MIDDLE DOT with no Hiragana, Katakana, or Han`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, KATAKANA MIDDLE DOT with no other characters`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, KATAKANA MIDDLE DOT with Hiragana`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, KATAKANA MIDDLE DOT with Katakana`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, KATAKANA MIDDLE DOT with Han`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, Arabic-Indic digits mixed with Extended Arabic-Indic digits`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, Arabic-Indic digits not mixed with Extended Arabic-Indic digits`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, Extended Arabic-Indic digits not mixed with Arabic-Indic digits`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, ZERO WIDTH JOINER not preceded by Virama`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, ZERO WIDTH JOINER not preceded by anything`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, ZERO WIDTH JOINER preceded by Virama`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, ZERO WIDTH NON-JOINER preceded by Virama`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of internationalized host names, ZERO WIDTH NON-JOINER not preceded by Virama but matches regexp`
## Original schema
```js
{
	"format": "idn-hostname"
}
```
## Schema after validating
```js
{
	"format": "idn-hostname",
	"id": "13450075881095547anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IP addresses, a valid IP address`
## Original schema
```js
{
	"format": "ipv4"
}
```
## Schema after validating
```js
{
	"format": "ipv4",
	"id": "278524298990827anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IP addresses, an IP address with too many components`
## Original schema
```js
{
	"format": "ipv4"
}
```
## Schema after validating
```js
{
	"format": "ipv4",
	"id": "278524298990827anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IP addresses, an IP address with out-of-range values`
## Original schema
```js
{
	"format": "ipv4"
}
```
## Schema after validating
```js
{
	"format": "ipv4",
	"id": "278524298990827anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IP addresses, an IP address without 4 components`
## Original schema
```js
{
	"format": "ipv4"
}
```
## Schema after validating
```js
{
	"format": "ipv4",
	"id": "278524298990827anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IP addresses, an IP address as an integer`
## Original schema
```js
{
	"format": "ipv4"
}
```
## Schema after validating
```js
{
	"format": "ipv4",
	"id": "278524298990827anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IP addresses, an IP address as an integer (decimal)`
## Original schema
```js
{
	"format": "ipv4"
}
```
## Schema after validating
```js
{
	"format": "ipv4",
	"id": "278524298990827anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, a valid IPv6 address`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "781710109320441anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, an IPv6 address with out-of-range values`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "781710109320441anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, an IPv6 address with too many components`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "781710109320441anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, an IPv6 address containing illegal characters`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "781710109320441anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, no digits is valid`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "781710109320441anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, leading colons is valid`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "781710109320441anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, trailing colons is valid`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "781710109320441anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, missing leading octet is invalid`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "781710109320441anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, missing trailing octet is invalid`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "781710109320441anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, missing leading octet with omitted octets later`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "781710109320441anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, two sets of double colons is invalid`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "781710109320441anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, mixed format with the ipv4 section as decimal octets`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "781710109320441anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, mixed format with double colons between the sections`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "781710109320441anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, mixed format with ipv4 section with octet out of range`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "781710109320441anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, mixed format with ipv4 section with a hex octet`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "781710109320441anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, mixed format with leading double colons (ipv4-mapped ipv6 address)`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "781710109320441anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, triple colons is invalid`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "781710109320441anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, 8 octets`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "781710109320441anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, insufficient octets without double colons`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "781710109320441anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, no colons is invalid`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "781710109320441anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, ipv4 is not ipv6`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "781710109320441anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, ipv4 segment must have 4 octets`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "781710109320441anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, leading whitespace is invalid`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "781710109320441anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, trailing whitespace is invalid`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "781710109320441anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, netmask is not a part of ipv6 address`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "781710109320441anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, zone id is not a part of ipv6 address`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "781710109320441anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, a long valid ipv6`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "781710109320441anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, a long invalid ipv6, below length limit, first`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "781710109320441anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, a long invalid ipv6, below length limit, second`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"id": "781710109320441anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IRI References, a valid IRI`
## Original schema
```js
{
	"format": "iri-reference"
}
```
## Schema after validating
```js
{
	"format": "iri-reference",
	"id": "7012706086193738anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IRI References, a valid protocol-relative IRI Reference`
## Original schema
```js
{
	"format": "iri-reference"
}
```
## Schema after validating
```js
{
	"format": "iri-reference",
	"id": "7012706086193738anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IRI References, a valid relative IRI Reference`
## Original schema
```js
{
	"format": "iri-reference"
}
```
## Schema after validating
```js
{
	"format": "iri-reference",
	"id": "7012706086193738anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IRI References, an invalid IRI Reference`
## Original schema
```js
{
	"format": "iri-reference"
}
```
## Schema after validating
```js
{
	"format": "iri-reference",
	"id": "7012706086193738anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IRI References, a valid IRI Reference`
## Original schema
```js
{
	"format": "iri-reference"
}
```
## Schema after validating
```js
{
	"format": "iri-reference",
	"id": "7012706086193738anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IRI References, a valid IRI fragment`
## Original schema
```js
{
	"format": "iri-reference"
}
```
## Schema after validating
```js
{
	"format": "iri-reference",
	"id": "7012706086193738anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IRI References, an invalid IRI fragment`
## Original schema
```js
{
	"format": "iri-reference"
}
```
## Schema after validating
```js
{
	"format": "iri-reference",
	"id": "7012706086193738anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IRIs, a valid IRI with anchor tag`
## Original schema
```js
{
	"format": "iri"
}
```
## Schema after validating
```js
{
	"format": "iri",
	"id": "408290156683214anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IRIs, a valid IRI with anchor tag and parantheses`
## Original schema
```js
{
	"format": "iri"
}
```
## Schema after validating
```js
{
	"format": "iri",
	"id": "408290156683214anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IRIs, a valid IRI with URL-encoded stuff`
## Original schema
```js
{
	"format": "iri"
}
```
## Schema after validating
```js
{
	"format": "iri",
	"id": "408290156683214anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IRIs, a valid IRI with many special characters`
## Original schema
```js
{
	"format": "iri"
}
```
## Schema after validating
```js
{
	"format": "iri",
	"id": "408290156683214anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IRIs, a valid IRI based on IPv6`
## Original schema
```js
{
	"format": "iri"
}
```
## Schema after validating
```js
{
	"format": "iri",
	"id": "408290156683214anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IRIs, an invalid IRI based on IPv6`
## Original schema
```js
{
	"format": "iri"
}
```
## Schema after validating
```js
{
	"format": "iri",
	"id": "408290156683214anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IRIs, an invalid relative IRI Reference`
## Original schema
```js
{
	"format": "iri"
}
```
## Schema after validating
```js
{
	"format": "iri",
	"id": "408290156683214anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IRIs, an invalid IRI`
## Original schema
```js
{
	"format": "iri"
}
```
## Schema after validating
```js
{
	"format": "iri",
	"id": "408290156683214anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IRIs, an invalid IRI though valid IRI reference`
## Original schema
```js
{
	"format": "iri"
}
```
## Schema after validating
```js
{
	"format": "iri",
	"id": "408290156683214anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON-pointers (JSON String Representation), a valid JSON-pointer`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "9388917886400887anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (~ not escaped)`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "9388917886400887anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON-pointers (JSON String Representation), valid JSON-pointer with empty segment`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "9388917886400887anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON-pointers (JSON String Representation), valid JSON-pointer with the last empty segment`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "9388917886400887anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #1`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "9388917886400887anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #2`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "9388917886400887anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #3`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "9388917886400887anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #4`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "9388917886400887anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #5`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "9388917886400887anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #6`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "9388917886400887anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #7`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "9388917886400887anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #8`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "9388917886400887anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #9`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "9388917886400887anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #10`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "9388917886400887anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #11`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "9388917886400887anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #12`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "9388917886400887anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON-pointers (JSON String Representation), valid JSON-pointer used adding to the last array position`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "9388917886400887anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON-pointers (JSON String Representation), valid JSON-pointer (- used as object member name)`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "9388917886400887anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON-pointers (JSON String Representation), valid JSON-pointer (multiple escaped characters)`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "9388917886400887anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON-pointers (JSON String Representation), valid JSON-pointer (escaped with fraction part) #1`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "9388917886400887anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON-pointers (JSON String Representation), valid JSON-pointer (escaped with fraction part) #2`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "9388917886400887anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (URI Fragment Identifier) #1`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "9388917886400887anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (URI Fragment Identifier) #2`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "9388917886400887anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (URI Fragment Identifier) #3`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "9388917886400887anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (some escaped, but not all) #1`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "9388917886400887anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (some escaped, but not all) #2`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "9388917886400887anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (wrong escape character) #1`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "9388917886400887anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (wrong escape character) #2`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "9388917886400887anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (multiple characters not escaped)`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "9388917886400887anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (isn't empty nor starts with /) #1`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "9388917886400887anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (isn't empty nor starts with /) #2`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "9388917886400887anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (isn't empty nor starts with /) #3`
## Original schema
```js
{
	"format": "json-pointer"
}
```
## Schema after validating
```js
{
	"format": "json-pointer",
	"id": "9388917886400887anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of regular expressions, a valid regular expression`
## Original schema
```js
{
	"format": "regex"
}
```
## Schema after validating
```js
{
	"format": "regex",
	"id": "15952118487745715anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of regular expressions, a regular expression with unclosed parens is invalid`
## Original schema
```js
{
	"format": "regex"
}
```
## Schema after validating
```js
{
	"format": "regex",
	"id": "15952118487745715anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of Relative JSON Pointers (RJP), a valid upwards RJP`
## Original schema
```js
{
	"format": "relative-json-pointer"
}
```
## Schema after validating
```js
{
	"format": "relative-json-pointer",
	"id": "35204035163481584anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of Relative JSON Pointers (RJP), a valid downwards RJP`
## Original schema
```js
{
	"format": "relative-json-pointer"
}
```
## Schema after validating
```js
{
	"format": "relative-json-pointer",
	"id": "35204035163481584anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of Relative JSON Pointers (RJP), a valid up and then down RJP, with array index`
## Original schema
```js
{
	"format": "relative-json-pointer"
}
```
## Schema after validating
```js
{
	"format": "relative-json-pointer",
	"id": "35204035163481584anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of Relative JSON Pointers (RJP), a valid RJP taking the member or index name`
## Original schema
```js
{
	"format": "relative-json-pointer"
}
```
## Schema after validating
```js
{
	"format": "relative-json-pointer",
	"id": "35204035163481584anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of Relative JSON Pointers (RJP), an invalid RJP that is a valid JSON Pointer`
## Original schema
```js
{
	"format": "relative-json-pointer"
}
```
## Schema after validating
```js
{
	"format": "relative-json-pointer",
	"id": "35204035163481584anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of Relative JSON Pointers (RJP), negative prefix`
## Original schema
```js
{
	"format": "relative-json-pointer"
}
```
## Schema after validating
```js
{
	"format": "relative-json-pointer",
	"id": "35204035163481584anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of time strings, a valid time string`
## Original schema
```js
{
	"format": "time"
}
```
## Schema after validating
```js
{
	"format": "time",
	"id": "5692427025367892anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of time strings, an invalid time string`
## Original schema
```js
{
	"format": "time"
}
```
## Schema after validating
```js
{
	"format": "time",
	"id": "5692427025367892anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of time strings, only RFC3339 not all of ISO 8601 are valid`
## Original schema
```js
{
	"format": "time"
}
```
## Schema after validating
```js
{
	"format": "time",
	"id": "5692427025367892anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URI References, a valid URI`
## Original schema
```js
{
	"format": "uri-reference"
}
```
## Schema after validating
```js
{
	"format": "uri-reference",
	"id": "6358818306761256anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URI References, a valid protocol-relative URI Reference`
## Original schema
```js
{
	"format": "uri-reference"
}
```
## Schema after validating
```js
{
	"format": "uri-reference",
	"id": "6358818306761256anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URI References, a valid relative URI Reference`
## Original schema
```js
{
	"format": "uri-reference"
}
```
## Schema after validating
```js
{
	"format": "uri-reference",
	"id": "6358818306761256anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URI References, an invalid URI Reference`
## Original schema
```js
{
	"format": "uri-reference"
}
```
## Schema after validating
```js
{
	"format": "uri-reference",
	"id": "6358818306761256anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URI References, a valid URI Reference`
## Original schema
```js
{
	"format": "uri-reference"
}
```
## Schema after validating
```js
{
	"format": "uri-reference",
	"id": "6358818306761256anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URI References, a valid URI fragment`
## Original schema
```js
{
	"format": "uri-reference"
}
```
## Schema after validating
```js
{
	"format": "uri-reference",
	"id": "6358818306761256anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URI References, an invalid URI fragment`
## Original schema
```js
{
	"format": "uri-reference"
}
```
## Schema after validating
```js
{
	"format": "uri-reference",
	"id": "6358818306761256anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `format: uri-template, a valid uri-template`
## Original schema
```js
{
	"format": "uri-template"
}
```
## Schema after validating
```js
{
	"format": "uri-template",
	"id": "10765852453072577anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `format: uri-template, an invalid uri-template`
## Original schema
```js
{
	"format": "uri-template"
}
```
## Schema after validating
```js
{
	"format": "uri-template",
	"id": "10765852453072577anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `format: uri-template, a valid uri-template without variables`
## Original schema
```js
{
	"format": "uri-template"
}
```
## Schema after validating
```js
{
	"format": "uri-template",
	"id": "10765852453072577anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `format: uri-template, a valid relative uri-template`
## Original schema
```js
{
	"format": "uri-template"
}
```
## Schema after validating
```js
{
	"format": "uri-template",
	"id": "10765852453072577anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, a valid URL with anchor tag`
## Original schema
```js
{
	"format": "uri"
}
```
## Schema after validating
```js
{
	"format": "uri",
	"id": "7551602684340453anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, a valid URL with anchor tag and parantheses`
## Original schema
```js
{
	"format": "uri"
}
```
## Schema after validating
```js
{
	"format": "uri",
	"id": "7551602684340453anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, a valid URL with URL-encoded stuff`
## Original schema
```js
{
	"format": "uri"
}
```
## Schema after validating
```js
{
	"format": "uri",
	"id": "7551602684340453anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, a valid puny-coded URL `
## Original schema
```js
{
	"format": "uri"
}
```
## Schema after validating
```js
{
	"format": "uri",
	"id": "7551602684340453anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, a valid URL with many special characters`
## Original schema
```js
{
	"format": "uri"
}
```
## Schema after validating
```js
{
	"format": "uri",
	"id": "7551602684340453anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, a valid URL based on IPv4`
## Original schema
```js
{
	"format": "uri"
}
```
## Schema after validating
```js
{
	"format": "uri",
	"id": "7551602684340453anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, a valid URL with ftp scheme`
## Original schema
```js
{
	"format": "uri"
}
```
## Schema after validating
```js
{
	"format": "uri",
	"id": "7551602684340453anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, a valid URL for a simple text file`
## Original schema
```js
{
	"format": "uri"
}
```
## Schema after validating
```js
{
	"format": "uri",
	"id": "7551602684340453anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, a valid URL `
## Original schema
```js
{
	"format": "uri"
}
```
## Schema after validating
```js
{
	"format": "uri",
	"id": "7551602684340453anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, a valid mailto URI`
## Original schema
```js
{
	"format": "uri"
}
```
## Schema after validating
```js
{
	"format": "uri",
	"id": "7551602684340453anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, a valid newsgroup URI`
## Original schema
```js
{
	"format": "uri"
}
```
## Schema after validating
```js
{
	"format": "uri",
	"id": "7551602684340453anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, a valid tel URI`
## Original schema
```js
{
	"format": "uri"
}
```
## Schema after validating
```js
{
	"format": "uri",
	"id": "7551602684340453anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, a valid URN`
## Original schema
```js
{
	"format": "uri"
}
```
## Schema after validating
```js
{
	"format": "uri",
	"id": "7551602684340453anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, an invalid protocol-relative URI Reference`
## Original schema
```js
{
	"format": "uri"
}
```
## Schema after validating
```js
{
	"format": "uri",
	"id": "7551602684340453anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, an invalid relative URI Reference`
## Original schema
```js
{
	"format": "uri"
}
```
## Schema after validating
```js
{
	"format": "uri",
	"id": "7551602684340453anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, an invalid URI`
## Original schema
```js
{
	"format": "uri"
}
```
## Schema after validating
```js
{
	"format": "uri",
	"id": "7551602684340453anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, an invalid URI though valid URI reference`
## Original schema
```js
{
	"format": "uri"
}
```
## Schema after validating
```js
{
	"format": "uri",
	"id": "7551602684340453anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, an invalid URI with spaces`
## Original schema
```js
{
	"format": "uri"
}
```
## Schema after validating
```js
{
	"format": "uri",
	"id": "7551602684340453anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, an invalid URI with spaces and missing scheme`
## Original schema
```js
{
	"format": "uri"
}
```
## Schema after validating
```js
{
	"format": "uri",
	"id": "7551602684340453anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, an invalid URI with comma in scheme`
## Original schema
```js
{
	"format": "uri"
}
```
## Schema after validating
```js
{
	"format": "uri",
	"id": "7551602684340453anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `Proper UTF-16 surrogate pair handling: pattern, matches empty`
## Original schema
```js
{
	"pattern": "^🐲*$"
}
```
## Schema after validating
```js
{
	"pattern": "^🐲*$",
	"id": "15539097651061695anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `Proper UTF-16 surrogate pair handling: pattern, matches single`
## Original schema
```js
{
	"pattern": "^🐲*$"
}
```
## Schema after validating
```js
{
	"pattern": "^🐲*$",
	"id": "15539097651061695anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `Proper UTF-16 surrogate pair handling: pattern, matches two`
## Original schema
```js
{
	"pattern": "^🐲*$"
}
```
## Schema after validating
```js
{
	"pattern": "^🐲*$",
	"id": "15539097651061695anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `Proper UTF-16 surrogate pair handling: pattern, doesn't match one`
## Original schema
```js
{
	"pattern": "^🐲*$"
}
```
## Schema after validating
```js
{
	"pattern": "^🐲*$",
	"id": "15539097651061695anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `Proper UTF-16 surrogate pair handling: pattern, doesn't match two`
## Original schema
```js
{
	"pattern": "^🐲*$"
}
```
## Schema after validating
```js
{
	"pattern": "^🐲*$",
	"id": "15539097651061695anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `Proper UTF-16 surrogate pair handling: pattern, doesn't match one ASCII`
## Original schema
```js
{
	"pattern": "^🐲*$"
}
```
## Schema after validating
```js
{
	"pattern": "^🐲*$",
	"id": "15539097651061695anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `Proper UTF-16 surrogate pair handling: pattern, doesn't match two ASCII`
## Original schema
```js
{
	"pattern": "^🐲*$"
}
```
## Schema after validating
```js
{
	"pattern": "^🐲*$",
	"id": "15539097651061695anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `Proper UTF-16 surrogate pair handling: patternProperties, matches empty`
## Original schema
```js
{
	"patternProperties": {
		"^🐲*$": {
			"type": "integer"
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"^🐲*$": {
			"type": "integer"
		}
	},
	"id": "7155026578088901anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `Proper UTF-16 surrogate pair handling: patternProperties, matches single`
## Original schema
```js
{
	"patternProperties": {
		"^🐲*$": {
			"type": "integer"
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"^🐲*$": {
			"type": "integer"
		}
	},
	"id": "7155026578088901anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `Proper UTF-16 surrogate pair handling: patternProperties, matches two`
## Original schema
```js
{
	"patternProperties": {
		"^🐲*$": {
			"type": "integer"
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"^🐲*$": {
			"type": "integer"
		}
	},
	"id": "7155026578088901anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `Proper UTF-16 surrogate pair handling: patternProperties, doesn't match one`
## Original schema
```js
{
	"patternProperties": {
		"^🐲*$": {
			"type": "integer"
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"^🐲*$": {
			"type": "integer"
		}
	},
	"id": "7155026578088901anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `Proper UTF-16 surrogate pair handling: patternProperties, doesn't match two`
## Original schema
```js
{
	"patternProperties": {
		"^🐲*$": {
			"type": "integer"
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"^🐲*$": {
			"type": "integer"
		}
	},
	"id": "7155026578088901anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `pattern validation, a matching pattern is valid`
## Original schema
```js
{
	"pattern": "^a*$"
}
```
## Schema after validating
```js
{
	"pattern": "^a*$",
	"id": "8166886875375745anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `pattern validation, a non-matching pattern is invalid`
## Original schema
```js
{
	"pattern": "^a*$"
}
```
## Schema after validating
```js
{
	"pattern": "^a*$",
	"id": "8166886875375745anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `pattern validation, ignores booleans`
## Original schema
```js
{
	"pattern": "^a*$"
}
```
## Schema after validating
```js
{
	"pattern": "^a*$",
	"id": "8166886875375745anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `pattern validation, ignores integers`
## Original schema
```js
{
	"pattern": "^a*$"
}
```
## Schema after validating
```js
{
	"pattern": "^a*$",
	"id": "8166886875375745anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `pattern validation, ignores floats`
## Original schema
```js
{
	"pattern": "^a*$"
}
```
## Schema after validating
```js
{
	"pattern": "^a*$",
	"id": "8166886875375745anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `pattern validation, ignores objects`
## Original schema
```js
{
	"pattern": "^a*$"
}
```
## Schema after validating
```js
{
	"pattern": "^a*$",
	"id": "8166886875375745anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `pattern validation, ignores arrays`
## Original schema
```js
{
	"pattern": "^a*$"
}
```
## Schema after validating
```js
{
	"pattern": "^a*$",
	"id": "8166886875375745anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `pattern validation, ignores null`
## Original schema
```js
{
	"pattern": "^a*$"
}
```
## Schema after validating
```js
{
	"pattern": "^a*$",
	"id": "8166886875375745anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `pattern is not anchored, matches a substring`
## Original schema
```js
{
	"pattern": "a+"
}
```
## Schema after validating
```js
{
	"pattern": "a+",
	"id": "4960304613964952anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `patternProperties validates properties matching a regex, a single valid match is valid`
## Original schema
```js
{
	"patternProperties": {
		"f.*o": {
			"type": "integer"
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"f.*o": {
			"type": "integer"
		}
	},
	"id": "8289137463339078anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `patternProperties validates properties matching a regex, multiple valid matches is valid`
## Original schema
```js
{
	"patternProperties": {
		"f.*o": {
			"type": "integer"
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"f.*o": {
			"type": "integer"
		}
	},
	"id": "8289137463339078anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `patternProperties validates properties matching a regex, a single invalid match is invalid`
## Original schema
```js
{
	"patternProperties": {
		"f.*o": {
			"type": "integer"
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"f.*o": {
			"type": "integer"
		}
	},
	"id": "8289137463339078anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `patternProperties validates properties matching a regex, multiple invalid matches is invalid`
## Original schema
```js
{
	"patternProperties": {
		"f.*o": {
			"type": "integer"
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"f.*o": {
			"type": "integer"
		}
	},
	"id": "8289137463339078anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `patternProperties validates properties matching a regex, ignores arrays`
## Original schema
```js
{
	"patternProperties": {
		"f.*o": {
			"type": "integer"
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"f.*o": {
			"type": "integer"
		}
	},
	"id": "8289137463339078anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `patternProperties validates properties matching a regex, ignores strings`
## Original schema
```js
{
	"patternProperties": {
		"f.*o": {
			"type": "integer"
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"f.*o": {
			"type": "integer"
		}
	},
	"id": "8289137463339078anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `patternProperties validates properties matching a regex, ignores other non-objects`
## Original schema
```js
{
	"patternProperties": {
		"f.*o": {
			"type": "integer"
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"f.*o": {
			"type": "integer"
		}
	},
	"id": "8289137463339078anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple simultaneous patternProperties are validated, a single valid match is valid`
## Original schema
```js
{
	"patternProperties": {
		"a*": {
			"type": "integer"
		},
		"aaa*": {
			"maximum": 20
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"a*": {
			"type": "integer"
		},
		"aaa*": {
			"maximum": 20
		}
	},
	"id": "7569135925971953anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple simultaneous patternProperties are validated, a simultaneous match is valid`
## Original schema
```js
{
	"patternProperties": {
		"a*": {
			"type": "integer"
		},
		"aaa*": {
			"maximum": 20
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"a*": {
			"type": "integer"
		},
		"aaa*": {
			"maximum": 20
		}
	},
	"id": "7569135925971953anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple simultaneous patternProperties are validated, multiple matches is valid`
## Original schema
```js
{
	"patternProperties": {
		"a*": {
			"type": "integer"
		},
		"aaa*": {
			"maximum": 20
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"a*": {
			"type": "integer"
		},
		"aaa*": {
			"maximum": 20
		}
	},
	"id": "7569135925971953anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple simultaneous patternProperties are validated, an invalid due to one is invalid`
## Original schema
```js
{
	"patternProperties": {
		"a*": {
			"type": "integer"
		},
		"aaa*": {
			"maximum": 20
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"a*": {
			"type": "integer"
		},
		"aaa*": {
			"maximum": 20
		}
	},
	"id": "7569135925971953anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple simultaneous patternProperties are validated, an invalid due to the other is invalid`
## Original schema
```js
{
	"patternProperties": {
		"a*": {
			"type": "integer"
		},
		"aaa*": {
			"maximum": 20
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"a*": {
			"type": "integer"
		},
		"aaa*": {
			"maximum": 20
		}
	},
	"id": "7569135925971953anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple simultaneous patternProperties are validated, an invalid due to both is invalid`
## Original schema
```js
{
	"patternProperties": {
		"a*": {
			"type": "integer"
		},
		"aaa*": {
			"maximum": 20
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"a*": {
			"type": "integer"
		},
		"aaa*": {
			"maximum": 20
		}
	},
	"id": "7569135925971953anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `regexes are not anchored by default and are case sensitive, non recognized members are ignored`
## Original schema
```js
{
	"patternProperties": {
		"[0-9]{2,}": {
			"type": "boolean"
		},
		"X_": {
			"type": "string"
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"[0-9]{2,}": {
			"type": "boolean"
		},
		"X_": {
			"type": "string"
		}
	},
	"id": "16880622447989824anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `regexes are not anchored by default and are case sensitive, recognized members are accounted for`
## Original schema
```js
{
	"patternProperties": {
		"[0-9]{2,}": {
			"type": "boolean"
		},
		"X_": {
			"type": "string"
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"[0-9]{2,}": {
			"type": "boolean"
		},
		"X_": {
			"type": "string"
		}
	},
	"id": "16880622447989824anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `regexes are not anchored by default and are case sensitive, regexes are case sensitive`
## Original schema
```js
{
	"patternProperties": {
		"[0-9]{2,}": {
			"type": "boolean"
		},
		"X_": {
			"type": "string"
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"[0-9]{2,}": {
			"type": "boolean"
		},
		"X_": {
			"type": "string"
		}
	},
	"id": "16880622447989824anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `regexes are not anchored by default and are case sensitive, regexes are case sensitive, 2`
## Original schema
```js
{
	"patternProperties": {
		"[0-9]{2,}": {
			"type": "boolean"
		},
		"X_": {
			"type": "string"
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"[0-9]{2,}": {
			"type": "boolean"
		},
		"X_": {
			"type": "string"
		}
	},
	"id": "16880622447989824anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `object properties validation, both properties present and valid is valid`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "integer"
		},
		"bar": {
			"type": "string"
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "integer"
		},
		"bar": {
			"type": "string"
		}
	},
	"id": "42038400105206186anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `object properties validation, one property invalid is invalid`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "integer"
		},
		"bar": {
			"type": "string"
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "integer"
		},
		"bar": {
			"type": "string"
		}
	},
	"id": "42038400105206186anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `object properties validation, both properties invalid is invalid`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "integer"
		},
		"bar": {
			"type": "string"
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "integer"
		},
		"bar": {
			"type": "string"
		}
	},
	"id": "42038400105206186anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `object properties validation, doesn't invalidate other properties`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "integer"
		},
		"bar": {
			"type": "string"
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "integer"
		},
		"bar": {
			"type": "string"
		}
	},
	"id": "42038400105206186anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `object properties validation, ignores arrays`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "integer"
		},
		"bar": {
			"type": "string"
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "integer"
		},
		"bar": {
			"type": "string"
		}
	},
	"id": "42038400105206186anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `object properties validation, ignores other non-objects`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "integer"
		},
		"bar": {
			"type": "string"
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "integer"
		},
		"bar": {
			"type": "string"
		}
	},
	"id": "42038400105206186anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `properties, patternProperties, additionalProperties interaction, property validates property`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "array",
			"maxItems": 3
		},
		"bar": {
			"type": "array"
		}
	},
	"patternProperties": {
		"f.o": {
			"minItems": 2
		}
	},
	"additionalProperties": {
		"type": "integer"
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "array",
			"maxItems": 3
		},
		"bar": {
			"type": "array"
		}
	},
	"patternProperties": {
		"f.o": {
			"minItems": 2
		}
	},
	"additionalProperties": {
		"type": "integer"
	},
	"id": "40345714444614633anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `properties, patternProperties, additionalProperties interaction, property invalidates property`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "array",
			"maxItems": 3
		},
		"bar": {
			"type": "array"
		}
	},
	"patternProperties": {
		"f.o": {
			"minItems": 2
		}
	},
	"additionalProperties": {
		"type": "integer"
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "array",
			"maxItems": 3
		},
		"bar": {
			"type": "array"
		}
	},
	"patternProperties": {
		"f.o": {
			"minItems": 2
		}
	},
	"additionalProperties": {
		"type": "integer"
	},
	"id": "40345714444614633anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `properties, patternProperties, additionalProperties interaction, patternProperty invalidates property`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "array",
			"maxItems": 3
		},
		"bar": {
			"type": "array"
		}
	},
	"patternProperties": {
		"f.o": {
			"minItems": 2
		}
	},
	"additionalProperties": {
		"type": "integer"
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "array",
			"maxItems": 3
		},
		"bar": {
			"type": "array"
		}
	},
	"patternProperties": {
		"f.o": {
			"minItems": 2
		}
	},
	"additionalProperties": {
		"type": "integer"
	},
	"id": "40345714444614633anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `properties, patternProperties, additionalProperties interaction, patternProperty validates nonproperty`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "array",
			"maxItems": 3
		},
		"bar": {
			"type": "array"
		}
	},
	"patternProperties": {
		"f.o": {
			"minItems": 2
		}
	},
	"additionalProperties": {
		"type": "integer"
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "array",
			"maxItems": 3
		},
		"bar": {
			"type": "array"
		}
	},
	"patternProperties": {
		"f.o": {
			"minItems": 2
		}
	},
	"additionalProperties": {
		"type": "integer"
	},
	"id": "40345714444614633anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `properties, patternProperties, additionalProperties interaction, patternProperty invalidates nonproperty`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "array",
			"maxItems": 3
		},
		"bar": {
			"type": "array"
		}
	},
	"patternProperties": {
		"f.o": {
			"minItems": 2
		}
	},
	"additionalProperties": {
		"type": "integer"
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "array",
			"maxItems": 3
		},
		"bar": {
			"type": "array"
		}
	},
	"patternProperties": {
		"f.o": {
			"minItems": 2
		}
	},
	"additionalProperties": {
		"type": "integer"
	},
	"id": "40345714444614633anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `properties, patternProperties, additionalProperties interaction, additionalProperty ignores property`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "array",
			"maxItems": 3
		},
		"bar": {
			"type": "array"
		}
	},
	"patternProperties": {
		"f.o": {
			"minItems": 2
		}
	},
	"additionalProperties": {
		"type": "integer"
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "array",
			"maxItems": 3
		},
		"bar": {
			"type": "array"
		}
	},
	"patternProperties": {
		"f.o": {
			"minItems": 2
		}
	},
	"additionalProperties": {
		"type": "integer"
	},
	"id": "40345714444614633anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `properties, patternProperties, additionalProperties interaction, additionalProperty validates others`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "array",
			"maxItems": 3
		},
		"bar": {
			"type": "array"
		}
	},
	"patternProperties": {
		"f.o": {
			"minItems": 2
		}
	},
	"additionalProperties": {
		"type": "integer"
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "array",
			"maxItems": 3
		},
		"bar": {
			"type": "array"
		}
	},
	"patternProperties": {
		"f.o": {
			"minItems": 2
		}
	},
	"additionalProperties": {
		"type": "integer"
	},
	"id": "40345714444614633anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `properties, patternProperties, additionalProperties interaction, additionalProperty invalidates others`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "array",
			"maxItems": 3
		},
		"bar": {
			"type": "array"
		}
	},
	"patternProperties": {
		"f.o": {
			"minItems": 2
		}
	},
	"additionalProperties": {
		"type": "integer"
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "array",
			"maxItems": 3
		},
		"bar": {
			"type": "array"
		}
	},
	"patternProperties": {
		"f.o": {
			"minItems": 2
		}
	},
	"additionalProperties": {
		"type": "integer"
	},
	"id": "40345714444614633anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `propertyNames validation, all property names valid`
## Original schema
```js
{
	"propertyNames": {
		"maxLength": 3
	}
}
```
## Schema after validating
```js
{
	"propertyNames": {
		"maxLength": 3
	},
	"id": "2150011936222409anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `propertyNames validation, some property names invalid`
## Original schema
```js
{
	"propertyNames": {
		"maxLength": 3
	}
}
```
## Schema after validating
```js
{
	"propertyNames": {
		"maxLength": 3
	},
	"id": "2150011936222409anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `propertyNames validation, object without properties is valid`
## Original schema
```js
{
	"propertyNames": {
		"maxLength": 3
	}
}
```
## Schema after validating
```js
{
	"propertyNames": {
		"maxLength": 3
	},
	"id": "2150011936222409anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `propertyNames validation, ignores arrays`
## Original schema
```js
{
	"propertyNames": {
		"maxLength": 3
	}
}
```
## Schema after validating
```js
{
	"propertyNames": {
		"maxLength": 3
	},
	"id": "2150011936222409anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `propertyNames validation, ignores strings`
## Original schema
```js
{
	"propertyNames": {
		"maxLength": 3
	}
}
```
## Schema after validating
```js
{
	"propertyNames": {
		"maxLength": 3
	},
	"id": "2150011936222409anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `propertyNames validation, ignores other non-objects`
## Original schema
```js
{
	"propertyNames": {
		"maxLength": 3
	}
}
```
## Schema after validating
```js
{
	"propertyNames": {
		"maxLength": 3
	},
	"id": "2150011936222409anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `propertyNames with boolean schema true, object with any properties is valid`
## Original schema
```js
{
	"propertyNames": true
}
```
## Schema after validating
```js
{
	"propertyNames": true,
	"id": "8232099948703782anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `propertyNames with boolean schema true, empty object is valid`
## Original schema
```js
{
	"propertyNames": true
}
```
## Schema after validating
```js
{
	"propertyNames": true,
	"id": "8232099948703782anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `propertyNames with boolean schema false, object with any properties is invalid`
## Original schema
```js
{
	"propertyNames": false
}
```
## Schema after validating
```js
{
	"propertyNames": false,
	"id": "0036964292048629055anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `propertyNames with boolean schema false, empty object is valid`
## Original schema
```js
{
	"propertyNames": false
}
```
## Schema after validating
```js
{
	"propertyNames": false,
	"id": "0036964292048629055anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `root pointer ref, match`
## Original schema
```js
{
	"properties": {
		"foo": {
			"$ref": "#"
		}
	},
	"additionalProperties": false
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"$ref": "8421361473620621anonymous#"
		}
	},
	"additionalProperties": false,
	"id": "8421361473620621anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `root pointer ref, recursive match`
## Original schema
```js
{
	"properties": {
		"foo": {
			"$ref": "#"
		}
	},
	"additionalProperties": false
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"$ref": "8421361473620621anonymous#"
		}
	},
	"additionalProperties": false,
	"id": "8421361473620621anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `root pointer ref, mismatch`
## Original schema
```js
{
	"properties": {
		"foo": {
			"$ref": "#"
		}
	},
	"additionalProperties": false
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"$ref": "8421361473620621anonymous#"
		}
	},
	"additionalProperties": false,
	"id": "8421361473620621anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `root pointer ref, recursive mismatch`
## Original schema
```js
{
	"properties": {
		"foo": {
			"$ref": "#"
		}
	},
	"additionalProperties": false
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"$ref": "8421361473620621anonymous#"
		}
	},
	"additionalProperties": false,
	"id": "8421361473620621anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `relative pointer ref to object, match`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "integer"
		},
		"bar": {
			"$ref": "#/properties/foo"
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "integer",
			"id": "7014813893185912anonymous#/properties/foo"
		},
		"bar": {
			"$ref": "7014813893185912anonymous#/properties/foo"
		}
	},
	"id": "7014813893185912anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `relative pointer ref to object, mismatch`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "integer"
		},
		"bar": {
			"$ref": "#/properties/foo"
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "integer",
			"id": "7014813893185912anonymous#/properties/foo"
		},
		"bar": {
			"$ref": "7014813893185912anonymous#/properties/foo"
		}
	},
	"id": "7014813893185912anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `relative pointer ref to array, match array`
## Original schema
```js
{
	"items": [
		{
			"type": "integer"
		},
		{
			"$ref": "#/items/0"
		}
	]
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "integer",
			"id": "6709192766631662anonymous#/items/0"
		},
		{
			"$ref": "6709192766631662anonymous#/items/0"
		}
	],
	"id": "6709192766631662anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `relative pointer ref to array, mismatch array`
## Original schema
```js
{
	"items": [
		{
			"type": "integer"
		},
		{
			"$ref": "#/items/0"
		}
	]
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "integer",
			"id": "6709192766631662anonymous#/items/0"
		},
		{
			"$ref": "6709192766631662anonymous#/items/0"
		}
	],
	"id": "6709192766631662anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `escaped pointer ref, slash invalid`
## Original schema
```js
{
	"definitions": {
		"tilde~field": {
			"type": "integer"
		},
		"slash/field": {
			"type": "integer"
		},
		"percent%field": {
			"type": "integer"
		}
	},
	"properties": {
		"tilde": {
			"$ref": "#/definitions/tilde~0field"
		},
		"slash": {
			"$ref": "#/definitions/slash~1field"
		},
		"percent": {
			"$ref": "#/definitions/percent%25field"
		}
	}
}
```
## Schema after validating
```js
{
	"definitions": {
		"tilde~field": {
			"type": "integer",
			"id": "33783510986772414anonymous#/definitions/tilde~0field"
		},
		"slash/field": {
			"type": "integer",
			"id": "33783510986772414anonymous#/definitions/slash~1field"
		},
		"percent%field": {
			"type": "integer",
			"id": "33783510986772414anonymous#/definitions/percent%25field"
		}
	},
	"properties": {
		"tilde": {
			"$ref": "33783510986772414anonymous#/definitions/tilde~0field"
		},
		"slash": {
			"$ref": "33783510986772414anonymous#/definitions/slash~1field"
		},
		"percent": {
			"$ref": "33783510986772414anonymous#/definitions/percent%25field"
		}
	},
	"id": "33783510986772414anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `escaped pointer ref, tilde invalid`
## Original schema
```js
{
	"definitions": {
		"tilde~field": {
			"type": "integer"
		},
		"slash/field": {
			"type": "integer"
		},
		"percent%field": {
			"type": "integer"
		}
	},
	"properties": {
		"tilde": {
			"$ref": "#/definitions/tilde~0field"
		},
		"slash": {
			"$ref": "#/definitions/slash~1field"
		},
		"percent": {
			"$ref": "#/definitions/percent%25field"
		}
	}
}
```
## Schema after validating
```js
{
	"definitions": {
		"tilde~field": {
			"type": "integer",
			"id": "33783510986772414anonymous#/definitions/tilde~0field"
		},
		"slash/field": {
			"type": "integer",
			"id": "33783510986772414anonymous#/definitions/slash~1field"
		},
		"percent%field": {
			"type": "integer",
			"id": "33783510986772414anonymous#/definitions/percent%25field"
		}
	},
	"properties": {
		"tilde": {
			"$ref": "33783510986772414anonymous#/definitions/tilde~0field"
		},
		"slash": {
			"$ref": "33783510986772414anonymous#/definitions/slash~1field"
		},
		"percent": {
			"$ref": "33783510986772414anonymous#/definitions/percent%25field"
		}
	},
	"id": "33783510986772414anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `escaped pointer ref, percent invalid`
## Original schema
```js
{
	"definitions": {
		"tilde~field": {
			"type": "integer"
		},
		"slash/field": {
			"type": "integer"
		},
		"percent%field": {
			"type": "integer"
		}
	},
	"properties": {
		"tilde": {
			"$ref": "#/definitions/tilde~0field"
		},
		"slash": {
			"$ref": "#/definitions/slash~1field"
		},
		"percent": {
			"$ref": "#/definitions/percent%25field"
		}
	}
}
```
## Schema after validating
```js
{
	"definitions": {
		"tilde~field": {
			"type": "integer",
			"id": "33783510986772414anonymous#/definitions/tilde~0field"
		},
		"slash/field": {
			"type": "integer",
			"id": "33783510986772414anonymous#/definitions/slash~1field"
		},
		"percent%field": {
			"type": "integer",
			"id": "33783510986772414anonymous#/definitions/percent%25field"
		}
	},
	"properties": {
		"tilde": {
			"$ref": "33783510986772414anonymous#/definitions/tilde~0field"
		},
		"slash": {
			"$ref": "33783510986772414anonymous#/definitions/slash~1field"
		},
		"percent": {
			"$ref": "33783510986772414anonymous#/definitions/percent%25field"
		}
	},
	"id": "33783510986772414anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `escaped pointer ref, slash valid`
## Original schema
```js
{
	"definitions": {
		"tilde~field": {
			"type": "integer"
		},
		"slash/field": {
			"type": "integer"
		},
		"percent%field": {
			"type": "integer"
		}
	},
	"properties": {
		"tilde": {
			"$ref": "#/definitions/tilde~0field"
		},
		"slash": {
			"$ref": "#/definitions/slash~1field"
		},
		"percent": {
			"$ref": "#/definitions/percent%25field"
		}
	}
}
```
## Schema after validating
```js
{
	"definitions": {
		"tilde~field": {
			"type": "integer",
			"id": "33783510986772414anonymous#/definitions/tilde~0field"
		},
		"slash/field": {
			"type": "integer",
			"id": "33783510986772414anonymous#/definitions/slash~1field"
		},
		"percent%field": {
			"type": "integer",
			"id": "33783510986772414anonymous#/definitions/percent%25field"
		}
	},
	"properties": {
		"tilde": {
			"$ref": "33783510986772414anonymous#/definitions/tilde~0field"
		},
		"slash": {
			"$ref": "33783510986772414anonymous#/definitions/slash~1field"
		},
		"percent": {
			"$ref": "33783510986772414anonymous#/definitions/percent%25field"
		}
	},
	"id": "33783510986772414anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `escaped pointer ref, tilde valid`
## Original schema
```js
{
	"definitions": {
		"tilde~field": {
			"type": "integer"
		},
		"slash/field": {
			"type": "integer"
		},
		"percent%field": {
			"type": "integer"
		}
	},
	"properties": {
		"tilde": {
			"$ref": "#/definitions/tilde~0field"
		},
		"slash": {
			"$ref": "#/definitions/slash~1field"
		},
		"percent": {
			"$ref": "#/definitions/percent%25field"
		}
	}
}
```
## Schema after validating
```js
{
	"definitions": {
		"tilde~field": {
			"type": "integer",
			"id": "33783510986772414anonymous#/definitions/tilde~0field"
		},
		"slash/field": {
			"type": "integer",
			"id": "33783510986772414anonymous#/definitions/slash~1field"
		},
		"percent%field": {
			"type": "integer",
			"id": "33783510986772414anonymous#/definitions/percent%25field"
		}
	},
	"properties": {
		"tilde": {
			"$ref": "33783510986772414anonymous#/definitions/tilde~0field"
		},
		"slash": {
			"$ref": "33783510986772414anonymous#/definitions/slash~1field"
		},
		"percent": {
			"$ref": "33783510986772414anonymous#/definitions/percent%25field"
		}
	},
	"id": "33783510986772414anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `escaped pointer ref, percent valid`
## Original schema
```js
{
	"definitions": {
		"tilde~field": {
			"type": "integer"
		},
		"slash/field": {
			"type": "integer"
		},
		"percent%field": {
			"type": "integer"
		}
	},
	"properties": {
		"tilde": {
			"$ref": "#/definitions/tilde~0field"
		},
		"slash": {
			"$ref": "#/definitions/slash~1field"
		},
		"percent": {
			"$ref": "#/definitions/percent%25field"
		}
	}
}
```
## Schema after validating
```js
{
	"definitions": {
		"tilde~field": {
			"type": "integer",
			"id": "33783510986772414anonymous#/definitions/tilde~0field"
		},
		"slash/field": {
			"type": "integer",
			"id": "33783510986772414anonymous#/definitions/slash~1field"
		},
		"percent%field": {
			"type": "integer",
			"id": "33783510986772414anonymous#/definitions/percent%25field"
		}
	},
	"properties": {
		"tilde": {
			"$ref": "33783510986772414anonymous#/definitions/tilde~0field"
		},
		"slash": {
			"$ref": "33783510986772414anonymous#/definitions/slash~1field"
		},
		"percent": {
			"$ref": "33783510986772414anonymous#/definitions/percent%25field"
		}
	},
	"id": "33783510986772414anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `nested refs, nested ref valid`
## Original schema
```js
{
	"definitions": {
		"a": {
			"type": "integer"
		},
		"b": {
			"$ref": "#/definitions/a"
		},
		"c": {
			"$ref": "#/definitions/b"
		}
	},
	"$ref": "#/definitions/c"
}
```
## Schema after validating
```js
{
	"definitions": {
		"a": {
			"type": "integer"
		},
		"b": {
			"$ref": "5767531907684362anonymous#/definitions/a"
		},
		"c": {
			"$ref": "5767531907684362anonymous#/definitions/b"
		}
	},
	"$ref": "5767531907684362anonymous#/definitions/c",
	"id": "5767531907684362anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `nested refs, nested ref invalid`
## Original schema
```js
{
	"definitions": {
		"a": {
			"type": "integer"
		},
		"b": {
			"$ref": "#/definitions/a"
		},
		"c": {
			"$ref": "#/definitions/b"
		}
	},
	"$ref": "#/definitions/c"
}
```
## Schema after validating
```js
{
	"definitions": {
		"a": {
			"type": "integer"
		},
		"b": {
			"$ref": "5767531907684362anonymous#/definitions/a"
		},
		"c": {
			"$ref": "5767531907684362anonymous#/definitions/b"
		}
	},
	"$ref": "5767531907684362anonymous#/definitions/c",
	"id": "5767531907684362anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ref overrides any sibling keywords, ref valid`
## Original schema
```js
{
	"definitions": {
		"reffed": {
			"type": "array"
		}
	},
	"properties": {
		"foo": {
			"$ref": "#/definitions/reffed",
			"maxItems": 2
		}
	}
}
```
## Schema after validating
```js
{
	"definitions": {
		"reffed": {
			"type": "array",
			"id": "3135321836917031anonymous#/definitions/reffed"
		}
	},
	"properties": {
		"foo": {
			"$ref": "3135321836917031anonymous#/definitions/reffed",
			"maxItems": 2
		}
	},
	"id": "3135321836917031anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ref overrides any sibling keywords, ref valid, maxItems ignored`
## Original schema
```js
{
	"definitions": {
		"reffed": {
			"type": "array"
		}
	},
	"properties": {
		"foo": {
			"$ref": "#/definitions/reffed",
			"maxItems": 2
		}
	}
}
```
## Schema after validating
```js
{
	"definitions": {
		"reffed": {
			"type": "array",
			"id": "3135321836917031anonymous#/definitions/reffed"
		}
	},
	"properties": {
		"foo": {
			"$ref": "3135321836917031anonymous#/definitions/reffed",
			"maxItems": 2
		}
	},
	"id": "3135321836917031anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ref overrides any sibling keywords, ref invalid`
## Original schema
```js
{
	"definitions": {
		"reffed": {
			"type": "array"
		}
	},
	"properties": {
		"foo": {
			"$ref": "#/definitions/reffed",
			"maxItems": 2
		}
	}
}
```
## Schema after validating
```js
{
	"definitions": {
		"reffed": {
			"type": "array",
			"id": "3135321836917031anonymous#/definitions/reffed"
		}
	},
	"properties": {
		"foo": {
			"$ref": "3135321836917031anonymous#/definitions/reffed",
			"maxItems": 2
		}
	},
	"id": "3135321836917031anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `remote ref, containing refs itself, remote ref valid`
## Original schema
```js
{
	"$ref": "http://json-schema.org/draft-07/schema#"
}
```
## Schema after validating
```js
{
	"$ref": "http://json-schema.org/draft-07/schema#",
	"id": "9920926383275941anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `remote ref, containing refs itself, remote ref invalid`
## Original schema
```js
{
	"$ref": "http://json-schema.org/draft-07/schema#"
}
```
## Schema after validating
```js
{
	"$ref": "http://json-schema.org/draft-07/schema#",
	"id": "9920926383275941anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `property named $ref that is not a reference, property named $ref valid`
## Original schema
```js
{
	"properties": {
		"$ref": {
			"type": "string"
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"$ref": {
			"type": "string"
		}
	},
	"id": "7281870952870377anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `property named $ref that is not a reference, property named $ref invalid`
## Original schema
```js
{
	"properties": {
		"$ref": {
			"type": "string"
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"$ref": {
			"type": "string"
		}
	},
	"id": "7281870952870377anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `property named $ref, containing an actual $ref, property named $ref valid`
## Original schema
```js
{
	"properties": {
		"$ref": {
			"$ref": "#/definitions/is-string"
		}
	},
	"definitions": {
		"is-string": {
			"type": "string"
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"$ref": {
			"$ref": "4920143160983752anonymous#/definitions/is-string"
		}
	},
	"definitions": {
		"is-string": {
			"type": "string",
			"id": "4920143160983752anonymous#/definitions/is-string"
		}
	},
	"id": "4920143160983752anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `property named $ref, containing an actual $ref, property named $ref invalid`
## Original schema
```js
{
	"properties": {
		"$ref": {
			"$ref": "#/definitions/is-string"
		}
	},
	"definitions": {
		"is-string": {
			"type": "string"
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"$ref": {
			"$ref": "4920143160983752anonymous#/definitions/is-string"
		}
	},
	"definitions": {
		"is-string": {
			"type": "string",
			"id": "4920143160983752anonymous#/definitions/is-string"
		}
	},
	"id": "4920143160983752anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `$ref to boolean schema false, any value is invalid`
## Original schema
```js
{
	"$ref": "#/definitions/bool",
	"definitions": {
		"bool": false
	}
}
```
## Schema after validating
```js
{
	"$ref": "9960767788440337anonymous#/definitions/bool",
	"definitions": {
		"bool": false
	},
	"id": "9960767788440337anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `naive replacement of $ref with its destination is not correct, do not evaluate the $ref inside the enum`
## Original schema
```js
{
	"definitions": {
		"a_string": {
			"type": "string"
		}
	},
	"enum": [
		{
			"$ref": "#/definitions/a_string"
		}
	]
}
```
## Schema after validating
```js
{
	"definitions": {
		"a_string": {
			"type": "string"
		}
	},
	"enum": [
		{
			"$ref": "#/definitions/a_string"
		}
	],
	"id": "12648635018289434anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `naive replacement of $ref with its destination is not correct, match the enum exactly`
## Original schema
```js
{
	"definitions": {
		"a_string": {
			"type": "string"
		}
	},
	"enum": [
		{
			"$ref": "#/definitions/a_string"
		}
	]
}
```
## Schema after validating
```js
{
	"definitions": {
		"a_string": {
			"type": "string"
		}
	},
	"enum": [
		{
			"$ref": "#/definitions/a_string"
		}
	],
	"id": "12648635018289434anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ref within remote ref, ref within ref valid`
## Original schema
```js
{
	"$ref": "http://localhost:1234/subSchemas.json#/refToInteger"
}
```
## Schema after validating
```js
{
	"$ref": "http://localhost:1234/subSchemas.json#/refToInteger",
	"id": "1222757431752235anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ref within remote ref, ref within ref invalid`
## Original schema
```js
{
	"$ref": "http://localhost:1234/subSchemas.json#/refToInteger"
}
```
## Schema after validating
```js
{
	"$ref": "http://localhost:1234/subSchemas.json#/refToInteger",
	"id": "1222757431752235anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `base URI change - change folder, number is valid`
## Original schema
```js
{
	"$id": "http://localhost:1234/scope_change_defs1.json",
	"type": "object",
	"properties": {
		"list": {
			"$ref": "#/definitions/baz"
		}
	},
	"definitions": {
		"baz": {
			"$id": "baseUriChangeFolder/",
			"type": "array",
			"items": {
				"$ref": "folderInteger.json"
			}
		}
	}
}
```
## Schema after validating
```js
{
	"$id": "http://localhost:1234/scope_change_defs1.json",
	"type": "object",
	"properties": {
		"list": {
			"$ref": "09173415873397728anonymous#/definitions/baz"
		}
	},
	"definitions": {
		"baz": {
			"$id": "baseUriChangeFolder/",
			"type": "array",
			"items": {
				"$ref": "folderInteger.json"
			},
			"id": "09173415873397728anonymous#/definitions/baz"
		}
	},
	"id": "09173415873397728anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `base URI change - change folder, string is invalid`
## Original schema
```js
{
	"$id": "http://localhost:1234/scope_change_defs1.json",
	"type": "object",
	"properties": {
		"list": {
			"$ref": "#/definitions/baz"
		}
	},
	"definitions": {
		"baz": {
			"$id": "baseUriChangeFolder/",
			"type": "array",
			"items": {
				"$ref": "folderInteger.json"
			}
		}
	}
}
```
## Schema after validating
```js
{
	"$id": "http://localhost:1234/scope_change_defs1.json",
	"type": "object",
	"properties": {
		"list": {
			"$ref": "09173415873397728anonymous#/definitions/baz"
		}
	},
	"definitions": {
		"baz": {
			"$id": "baseUriChangeFolder/",
			"type": "array",
			"items": {
				"$ref": "folderInteger.json"
			},
			"id": "09173415873397728anonymous#/definitions/baz"
		}
	},
	"id": "09173415873397728anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `base URI change - change folder in subschema, number is valid`
## Original schema
```js
{
	"$id": "http://localhost:1234/scope_change_defs2.json",
	"type": "object",
	"properties": {
		"list": {
			"$ref": "#/definitions/baz/definitions/bar"
		}
	},
	"definitions": {
		"baz": {
			"$id": "baseUriChangeFolderInSubschema/",
			"definitions": {
				"bar": {
					"type": "array",
					"items": {
						"$ref": "folderInteger.json"
					}
				}
			}
		}
	}
}
```
## Schema after validating
```js
{
	"$id": "http://localhost:1234/scope_change_defs2.json",
	"type": "object",
	"properties": {
		"list": {
			"$ref": "13269243921504814anonymous#/definitions/baz/definitions/bar"
		}
	},
	"definitions": {
		"baz": {
			"$id": "baseUriChangeFolderInSubschema/",
			"definitions": {
				"bar": {
					"type": "array",
					"items": {
						"$ref": "folderInteger.json"
					},
					"id": "13269243921504814anonymous#/definitions/baz/definitions/bar"
				}
			}
		}
	},
	"id": "13269243921504814anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `base URI change - change folder in subschema, string is invalid`
## Original schema
```js
{
	"$id": "http://localhost:1234/scope_change_defs2.json",
	"type": "object",
	"properties": {
		"list": {
			"$ref": "#/definitions/baz/definitions/bar"
		}
	},
	"definitions": {
		"baz": {
			"$id": "baseUriChangeFolderInSubschema/",
			"definitions": {
				"bar": {
					"type": "array",
					"items": {
						"$ref": "folderInteger.json"
					}
				}
			}
		}
	}
}
```
## Schema after validating
```js
{
	"$id": "http://localhost:1234/scope_change_defs2.json",
	"type": "object",
	"properties": {
		"list": {
			"$ref": "13269243921504814anonymous#/definitions/baz/definitions/bar"
		}
	},
	"definitions": {
		"baz": {
			"$id": "baseUriChangeFolderInSubschema/",
			"definitions": {
				"bar": {
					"type": "array",
					"items": {
						"$ref": "folderInteger.json"
					},
					"id": "13269243921504814anonymous#/definitions/baz/definitions/bar"
				}
			}
		}
	},
	"id": "13269243921504814anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `required validation, present required property is valid`
## Original schema
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"required": [
		"foo"
	]
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"required": [
		"foo"
	],
	"id": "07569033865604813anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `required validation, non-present required property is invalid`
## Original schema
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"required": [
		"foo"
	]
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"required": [
		"foo"
	],
	"id": "07569033865604813anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `required validation, ignores arrays`
## Original schema
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"required": [
		"foo"
	]
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"required": [
		"foo"
	],
	"id": "07569033865604813anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `required validation, ignores strings`
## Original schema
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"required": [
		"foo"
	]
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"required": [
		"foo"
	],
	"id": "07569033865604813anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `required validation, ignores other non-objects`
## Original schema
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"required": [
		"foo"
	]
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"required": [
		"foo"
	],
	"id": "07569033865604813anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `required default validation, not required by default`
## Original schema
```js
{
	"properties": {
		"foo": {}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {}
	},
	"id": "006390660011418081anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `required with empty array, property not required`
## Original schema
```js
{
	"properties": {
		"foo": {}
	},
	"required": []
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {}
	},
	"required": [],
	"id": "47627956697696483anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `required with escaped characters, object with all properties present is valid`
## Original schema
```js
{
	"required": [
		"foo\nbar",
		"foo\"bar",
		"foo\\bar",
		"foo\rbar",
		"foo\tbar",
		"foo\fbar"
	]
}
```
## Schema after validating
```js
{
	"required": [
		"foo\nbar",
		"foo\"bar",
		"foo\\bar",
		"foo\rbar",
		"foo\tbar",
		"foo\fbar"
	],
	"id": "4078837708303402anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `required with escaped characters, object with some properties missing is invalid`
## Original schema
```js
{
	"required": [
		"foo\nbar",
		"foo\"bar",
		"foo\\bar",
		"foo\rbar",
		"foo\tbar",
		"foo\fbar"
	]
}
```
## Schema after validating
```js
{
	"required": [
		"foo\nbar",
		"foo\"bar",
		"foo\\bar",
		"foo\rbar",
		"foo\tbar",
		"foo\fbar"
	],
	"id": "4078837708303402anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `integer type matches integers, an integer is an integer`
## Original schema
```js
{
	"type": "integer"
}
```
## Schema after validating
```js
{
	"type": "integer",
	"id": "06171931246849671anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `integer type matches integers, a float with zero fractional part is an integer`
## Original schema
```js
{
	"type": "integer"
}
```
## Schema after validating
```js
{
	"type": "integer",
	"id": "06171931246849671anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `integer type matches integers, a float is not an integer`
## Original schema
```js
{
	"type": "integer"
}
```
## Schema after validating
```js
{
	"type": "integer",
	"id": "06171931246849671anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `integer type matches integers, a string is not an integer`
## Original schema
```js
{
	"type": "integer"
}
```
## Schema after validating
```js
{
	"type": "integer",
	"id": "06171931246849671anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `integer type matches integers, a string is still not an integer, even if it looks like one`
## Original schema
```js
{
	"type": "integer"
}
```
## Schema after validating
```js
{
	"type": "integer",
	"id": "06171931246849671anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `integer type matches integers, an object is not an integer`
## Original schema
```js
{
	"type": "integer"
}
```
## Schema after validating
```js
{
	"type": "integer",
	"id": "06171931246849671anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `integer type matches integers, an array is not an integer`
## Original schema
```js
{
	"type": "integer"
}
```
## Schema after validating
```js
{
	"type": "integer",
	"id": "06171931246849671anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `integer type matches integers, a boolean is not an integer`
## Original schema
```js
{
	"type": "integer"
}
```
## Schema after validating
```js
{
	"type": "integer",
	"id": "06171931246849671anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `integer type matches integers, null is not an integer`
## Original schema
```js
{
	"type": "integer"
}
```
## Schema after validating
```js
{
	"type": "integer",
	"id": "06171931246849671anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `number type matches numbers, an integer is a number`
## Original schema
```js
{
	"type": "number"
}
```
## Schema after validating
```js
{
	"type": "number",
	"id": "6691006184225494anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `number type matches numbers, a float with zero fractional part is a number (and an integer)`
## Original schema
```js
{
	"type": "number"
}
```
## Schema after validating
```js
{
	"type": "number",
	"id": "6691006184225494anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `number type matches numbers, a float is a number`
## Original schema
```js
{
	"type": "number"
}
```
## Schema after validating
```js
{
	"type": "number",
	"id": "6691006184225494anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `number type matches numbers, a string is not a number`
## Original schema
```js
{
	"type": "number"
}
```
## Schema after validating
```js
{
	"type": "number",
	"id": "6691006184225494anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `number type matches numbers, a string is still not a number, even if it looks like one`
## Original schema
```js
{
	"type": "number"
}
```
## Schema after validating
```js
{
	"type": "number",
	"id": "6691006184225494anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `number type matches numbers, an object is not a number`
## Original schema
```js
{
	"type": "number"
}
```
## Schema after validating
```js
{
	"type": "number",
	"id": "6691006184225494anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `number type matches numbers, an array is not a number`
## Original schema
```js
{
	"type": "number"
}
```
## Schema after validating
```js
{
	"type": "number",
	"id": "6691006184225494anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `number type matches numbers, a boolean is not a number`
## Original schema
```js
{
	"type": "number"
}
```
## Schema after validating
```js
{
	"type": "number",
	"id": "6691006184225494anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `number type matches numbers, null is not a number`
## Original schema
```js
{
	"type": "number"
}
```
## Schema after validating
```js
{
	"type": "number",
	"id": "6691006184225494anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `string type matches strings, 1 is not a string`
## Original schema
```js
{
	"type": "string"
}
```
## Schema after validating
```js
{
	"type": "string",
	"id": "8745229818852438anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `string type matches strings, a float is not a string`
## Original schema
```js
{
	"type": "string"
}
```
## Schema after validating
```js
{
	"type": "string",
	"id": "8745229818852438anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `string type matches strings, a string is a string`
## Original schema
```js
{
	"type": "string"
}
```
## Schema after validating
```js
{
	"type": "string",
	"id": "8745229818852438anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `string type matches strings, a string is still a string, even if it looks like a number`
## Original schema
```js
{
	"type": "string"
}
```
## Schema after validating
```js
{
	"type": "string",
	"id": "8745229818852438anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `string type matches strings, an empty string is still a string`
## Original schema
```js
{
	"type": "string"
}
```
## Schema after validating
```js
{
	"type": "string",
	"id": "8745229818852438anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `string type matches strings, an object is not a string`
## Original schema
```js
{
	"type": "string"
}
```
## Schema after validating
```js
{
	"type": "string",
	"id": "8745229818852438anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `string type matches strings, an array is not a string`
## Original schema
```js
{
	"type": "string"
}
```
## Schema after validating
```js
{
	"type": "string",
	"id": "8745229818852438anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `string type matches strings, a boolean is not a string`
## Original schema
```js
{
	"type": "string"
}
```
## Schema after validating
```js
{
	"type": "string",
	"id": "8745229818852438anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `string type matches strings, null is not a string`
## Original schema
```js
{
	"type": "string"
}
```
## Schema after validating
```js
{
	"type": "string",
	"id": "8745229818852438anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `object type matches objects, an integer is not an object`
## Original schema
```js
{
	"type": "object"
}
```
## Schema after validating
```js
{
	"type": "object",
	"id": "24158385835991392anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `object type matches objects, a float is not an object`
## Original schema
```js
{
	"type": "object"
}
```
## Schema after validating
```js
{
	"type": "object",
	"id": "24158385835991392anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `object type matches objects, a string is not an object`
## Original schema
```js
{
	"type": "object"
}
```
## Schema after validating
```js
{
	"type": "object",
	"id": "24158385835991392anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `object type matches objects, an object is an object`
## Original schema
```js
{
	"type": "object"
}
```
## Schema after validating
```js
{
	"type": "object",
	"id": "24158385835991392anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `object type matches objects, an array is not an object`
## Original schema
```js
{
	"type": "object"
}
```
## Schema after validating
```js
{
	"type": "object",
	"id": "24158385835991392anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `object type matches objects, a boolean is not an object`
## Original schema
```js
{
	"type": "object"
}
```
## Schema after validating
```js
{
	"type": "object",
	"id": "24158385835991392anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `object type matches objects, null is not an object`
## Original schema
```js
{
	"type": "object"
}
```
## Schema after validating
```js
{
	"type": "object",
	"id": "24158385835991392anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `array type matches arrays, an integer is not an array`
## Original schema
```js
{
	"type": "array"
}
```
## Schema after validating
```js
{
	"type": "array",
	"id": "8832492829026068anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `array type matches arrays, a float is not an array`
## Original schema
```js
{
	"type": "array"
}
```
## Schema after validating
```js
{
	"type": "array",
	"id": "8832492829026068anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `array type matches arrays, a string is not an array`
## Original schema
```js
{
	"type": "array"
}
```
## Schema after validating
```js
{
	"type": "array",
	"id": "8832492829026068anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `array type matches arrays, an object is not an array`
## Original schema
```js
{
	"type": "array"
}
```
## Schema after validating
```js
{
	"type": "array",
	"id": "8832492829026068anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `array type matches arrays, an array is an array`
## Original schema
```js
{
	"type": "array"
}
```
## Schema after validating
```js
{
	"type": "array",
	"id": "8832492829026068anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `array type matches arrays, a boolean is not an array`
## Original schema
```js
{
	"type": "array"
}
```
## Schema after validating
```js
{
	"type": "array",
	"id": "8832492829026068anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `array type matches arrays, null is not an array`
## Original schema
```js
{
	"type": "array"
}
```
## Schema after validating
```js
{
	"type": "array",
	"id": "8832492829026068anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, an integer is not a boolean`
## Original schema
```js
{
	"type": "boolean"
}
```
## Schema after validating
```js
{
	"type": "boolean",
	"id": "005157455142132061anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, zero is not a boolean`
## Original schema
```js
{
	"type": "boolean"
}
```
## Schema after validating
```js
{
	"type": "boolean",
	"id": "005157455142132061anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, a float is not a boolean`
## Original schema
```js
{
	"type": "boolean"
}
```
## Schema after validating
```js
{
	"type": "boolean",
	"id": "005157455142132061anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, a string is not a boolean`
## Original schema
```js
{
	"type": "boolean"
}
```
## Schema after validating
```js
{
	"type": "boolean",
	"id": "005157455142132061anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, an empty string is not a boolean`
## Original schema
```js
{
	"type": "boolean"
}
```
## Schema after validating
```js
{
	"type": "boolean",
	"id": "005157455142132061anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, an object is not a boolean`
## Original schema
```js
{
	"type": "boolean"
}
```
## Schema after validating
```js
{
	"type": "boolean",
	"id": "005157455142132061anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, an array is not a boolean`
## Original schema
```js
{
	"type": "boolean"
}
```
## Schema after validating
```js
{
	"type": "boolean",
	"id": "005157455142132061anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, true is a boolean`
## Original schema
```js
{
	"type": "boolean"
}
```
## Schema after validating
```js
{
	"type": "boolean",
	"id": "005157455142132061anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, false is a boolean`
## Original schema
```js
{
	"type": "boolean"
}
```
## Schema after validating
```js
{
	"type": "boolean",
	"id": "005157455142132061anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, null is not a boolean`
## Original schema
```js
{
	"type": "boolean"
}
```
## Schema after validating
```js
{
	"type": "boolean",
	"id": "005157455142132061anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `null type matches only the null object, an integer is not null`
## Original schema
```js
{
	"type": "null"
}
```
## Schema after validating
```js
{
	"type": "null",
	"id": "626907975966138anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `null type matches only the null object, a float is not null`
## Original schema
```js
{
	"type": "null"
}
```
## Schema after validating
```js
{
	"type": "null",
	"id": "626907975966138anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `null type matches only the null object, zero is not null`
## Original schema
```js
{
	"type": "null"
}
```
## Schema after validating
```js
{
	"type": "null",
	"id": "626907975966138anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `null type matches only the null object, a string is not null`
## Original schema
```js
{
	"type": "null"
}
```
## Schema after validating
```js
{
	"type": "null",
	"id": "626907975966138anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `null type matches only the null object, an empty string is not null`
## Original schema
```js
{
	"type": "null"
}
```
## Schema after validating
```js
{
	"type": "null",
	"id": "626907975966138anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `null type matches only the null object, an object is not null`
## Original schema
```js
{
	"type": "null"
}
```
## Schema after validating
```js
{
	"type": "null",
	"id": "626907975966138anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `null type matches only the null object, an array is not null`
## Original schema
```js
{
	"type": "null"
}
```
## Schema after validating
```js
{
	"type": "null",
	"id": "626907975966138anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `null type matches only the null object, true is not null`
## Original schema
```js
{
	"type": "null"
}
```
## Schema after validating
```js
{
	"type": "null",
	"id": "626907975966138anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `null type matches only the null object, false is not null`
## Original schema
```js
{
	"type": "null"
}
```
## Schema after validating
```js
{
	"type": "null",
	"id": "626907975966138anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `null type matches only the null object, null is null`
## Original schema
```js
{
	"type": "null"
}
```
## Schema after validating
```js
{
	"type": "null",
	"id": "626907975966138anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple types can be specified in an array, an integer is valid`
## Original schema
```js
{
	"type": [
		"integer",
		"string"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"integer",
		"string"
	],
	"id": "3727875939869454anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple types can be specified in an array, a string is valid`
## Original schema
```js
{
	"type": [
		"integer",
		"string"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"integer",
		"string"
	],
	"id": "3727875939869454anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple types can be specified in an array, a float is invalid`
## Original schema
```js
{
	"type": [
		"integer",
		"string"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"integer",
		"string"
	],
	"id": "3727875939869454anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple types can be specified in an array, an object is invalid`
## Original schema
```js
{
	"type": [
		"integer",
		"string"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"integer",
		"string"
	],
	"id": "3727875939869454anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple types can be specified in an array, an array is invalid`
## Original schema
```js
{
	"type": [
		"integer",
		"string"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"integer",
		"string"
	],
	"id": "3727875939869454anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple types can be specified in an array, a boolean is invalid`
## Original schema
```js
{
	"type": [
		"integer",
		"string"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"integer",
		"string"
	],
	"id": "3727875939869454anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple types can be specified in an array, null is invalid`
## Original schema
```js
{
	"type": [
		"integer",
		"string"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"integer",
		"string"
	],
	"id": "3727875939869454anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `type as array with one item, string is valid`
## Original schema
```js
{
	"type": [
		"string"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"string"
	],
	"id": "37573130393430065anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `type as array with one item, number is invalid`
## Original schema
```js
{
	"type": [
		"string"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"string"
	],
	"id": "37573130393430065anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `type: array or object, array is valid`
## Original schema
```js
{
	"type": [
		"array",
		"object"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"array",
		"object"
	],
	"id": "8197201409382062anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `type: array or object, object is valid`
## Original schema
```js
{
	"type": [
		"array",
		"object"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"array",
		"object"
	],
	"id": "8197201409382062anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `type: array or object, number is invalid`
## Original schema
```js
{
	"type": [
		"array",
		"object"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"array",
		"object"
	],
	"id": "8197201409382062anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `type: array or object, string is invalid`
## Original schema
```js
{
	"type": [
		"array",
		"object"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"array",
		"object"
	],
	"id": "8197201409382062anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `type: array or object, null is invalid`
## Original schema
```js
{
	"type": [
		"array",
		"object"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"array",
		"object"
	],
	"id": "8197201409382062anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `type: array, object or null, array is valid`
## Original schema
```js
{
	"type": [
		"array",
		"object",
		"null"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"array",
		"object",
		"null"
	],
	"id": "29160606642865505anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `type: array, object or null, object is valid`
## Original schema
```js
{
	"type": [
		"array",
		"object",
		"null"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"array",
		"object",
		"null"
	],
	"id": "29160606642865505anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `type: array, object or null, null is valid`
## Original schema
```js
{
	"type": [
		"array",
		"object",
		"null"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"array",
		"object",
		"null"
	],
	"id": "29160606642865505anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `type: array, object or null, number is invalid`
## Original schema
```js
{
	"type": [
		"array",
		"object",
		"null"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"array",
		"object",
		"null"
	],
	"id": "29160606642865505anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `type: array, object or null, string is invalid`
## Original schema
```js
{
	"type": [
		"array",
		"object",
		"null"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"array",
		"object",
		"null"
	],
	"id": "29160606642865505anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, unique array of integers is valid`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"id": "13908490207678126anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, non-unique array of integers is invalid`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"id": "13908490207678126anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, numbers are unique if mathematically unequal`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"id": "13908490207678126anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, false is not equal to zero`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"id": "13908490207678126anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, true is not equal to one`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"id": "13908490207678126anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, unique array of objects is valid`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"id": "13908490207678126anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, non-unique array of objects is invalid`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"id": "13908490207678126anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, unique array of nested objects is valid`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"id": "13908490207678126anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, non-unique array of nested objects is invalid`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"id": "13908490207678126anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, unique array of arrays is valid`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"id": "13908490207678126anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, non-unique array of arrays is invalid`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"id": "13908490207678126anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, 1 and true are unique`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"id": "13908490207678126anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, 0 and false are unique`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"id": "13908490207678126anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, [1] and [true] are unique`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"id": "13908490207678126anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, [0] and [false] are unique`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"id": "13908490207678126anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, nested [1] and [true] are unique`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"id": "13908490207678126anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, nested [0] and [false] are unique`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"id": "13908490207678126anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, unique heterogeneous types are valid`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"id": "13908490207678126anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, non-unique heterogeneous types are invalid`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"id": "13908490207678126anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, different objects are unique`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"id": "13908490207678126anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, objects are non-unique despite key order`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"id": "13908490207678126anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, {"a": false} and {"a": 0} are unique`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"id": "13908490207678126anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, {"a": true} and {"a": 1} are unique`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"id": "13908490207678126anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems with an array of items, [false, true] from items array is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"id": "7842499771960498anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems with an array of items, [true, false] from items array is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"id": "7842499771960498anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems with an array of items, [false, false] from items array is not valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"id": "7842499771960498anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems with an array of items, [true, true] from items array is not valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"id": "7842499771960498anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems with an array of items, unique array extended from [false, true] is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"id": "7842499771960498anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems with an array of items, unique array extended from [true, false] is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"id": "7842499771960498anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems with an array of items, non-unique array extended from [false, true] is not valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"id": "7842499771960498anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems with an array of items, non-unique array extended from [true, false] is not valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"id": "7842499771960498anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems with an array of items and additionalItems=false, [false, true] from items array is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"additionalItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"additionalItems": false,
	"id": "6440663709044485anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems with an array of items and additionalItems=false, [true, false] from items array is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"additionalItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"additionalItems": false,
	"id": "6440663709044485anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems with an array of items and additionalItems=false, [false, false] from items array is not valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"additionalItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"additionalItems": false,
	"id": "6440663709044485anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems with an array of items and additionalItems=false, [true, true] from items array is not valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"additionalItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"additionalItems": false,
	"id": "6440663709044485anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems with an array of items and additionalItems=false, extra items are invalid even if unique`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"additionalItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"additionalItems": false,
	"id": "6440663709044485anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false validation, unique array of integers is valid`
## Original schema
```js
{
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"uniqueItems": false,
	"id": "7649472579190666anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false validation, non-unique array of integers is valid`
## Original schema
```js
{
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"uniqueItems": false,
	"id": "7649472579190666anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false validation, numbers are unique if mathematically unequal`
## Original schema
```js
{
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"uniqueItems": false,
	"id": "7649472579190666anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false validation, false is not equal to zero`
## Original schema
```js
{
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"uniqueItems": false,
	"id": "7649472579190666anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false validation, true is not equal to one`
## Original schema
```js
{
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"uniqueItems": false,
	"id": "7649472579190666anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false validation, unique array of objects is valid`
## Original schema
```js
{
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"uniqueItems": false,
	"id": "7649472579190666anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false validation, non-unique array of objects is valid`
## Original schema
```js
{
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"uniqueItems": false,
	"id": "7649472579190666anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false validation, unique array of nested objects is valid`
## Original schema
```js
{
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"uniqueItems": false,
	"id": "7649472579190666anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false validation, non-unique array of nested objects is valid`
## Original schema
```js
{
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"uniqueItems": false,
	"id": "7649472579190666anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false validation, unique array of arrays is valid`
## Original schema
```js
{
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"uniqueItems": false,
	"id": "7649472579190666anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false validation, non-unique array of arrays is valid`
## Original schema
```js
{
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"uniqueItems": false,
	"id": "7649472579190666anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false validation, 1 and true are unique`
## Original schema
```js
{
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"uniqueItems": false,
	"id": "7649472579190666anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false validation, 0 and false are unique`
## Original schema
```js
{
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"uniqueItems": false,
	"id": "7649472579190666anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false validation, unique heterogeneous types are valid`
## Original schema
```js
{
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"uniqueItems": false,
	"id": "7649472579190666anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false validation, non-unique heterogeneous types are valid`
## Original schema
```js
{
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"uniqueItems": false,
	"id": "7649472579190666anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false with an array of items, [false, true] from items array is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"id": "9223366431768871anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false with an array of items, [true, false] from items array is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"id": "9223366431768871anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false with an array of items, [false, false] from items array is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"id": "9223366431768871anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false with an array of items, [true, true] from items array is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"id": "9223366431768871anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false with an array of items, unique array extended from [false, true] is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"id": "9223366431768871anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false with an array of items, unique array extended from [true, false] is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"id": "9223366431768871anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false with an array of items, non-unique array extended from [false, true] is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"id": "9223366431768871anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false with an array of items, non-unique array extended from [true, false] is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"id": "9223366431768871anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false with an array of items and additionalItems=false, [false, true] from items array is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"additionalItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"additionalItems": false,
	"id": "6134787438226321anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false with an array of items and additionalItems=false, [true, false] from items array is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"additionalItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"additionalItems": false,
	"id": "6134787438226321anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false with an array of items and additionalItems=false, [false, false] from items array is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"additionalItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"additionalItems": false,
	"id": "6134787438226321anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false with an array of items and additionalItems=false, [true, true] from items array is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"additionalItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"additionalItems": false,
	"id": "6134787438226321anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false with an array of items and additionalItems=false, extra items are invalid even if unique`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"additionalItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"additionalItems": false,
	"id": "6134787438226321anonymous"
}
```

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)