# [`ajv`](https://ajv.js.org) - test summary


# [`ajv`](https://ajv.js.org) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`ajv`](https://ajv.js.org) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`additionalItems as schema, additional items match schema`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`additionalItems as schema, additional items do not match schema`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`items is schema, no additionalItems, all items match schema`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`array of items with no additionalItems, empty array`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`array of items with no additionalItems, fewer number of items present (1)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`array of items with no additionalItems, fewer number of items present (2)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`array of items with no additionalItems, equal number of items present`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`array of items with no additionalItems, additional items are not permitted`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`additionalItems as false without items, items defaults to empty schema so everything is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`additionalItems as false without items, ignores non-arrays`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`additionalItems are allowed by default, only the first item is validated`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`additionalItems should not look in applicators, valid case, items defined in allOf are not examined`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`additionalItems should not look in applicators, invalid case, items defined in allOf are not examined`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`additionalProperties being false does not allow other properties, no additional properties is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`additionalProperties being false does not allow other properties, an additional property is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`additionalProperties being false does not allow other properties, ignores arrays`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`additionalProperties being false does not allow other properties, ignores strings`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`additionalProperties being false does not allow other properties, ignores other non-objects`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`additionalProperties being false does not allow other properties, patternProperties are not additional properties`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`non-ASCII pattern with additionalProperties, matching the pattern is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`non-ASCII pattern with additionalProperties, not matching the pattern is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`additionalProperties allows a schema which should validate, no additional properties is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`additionalProperties allows a schema which should validate, an additional valid property is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`additionalProperties allows a schema which should validate, an additional invalid property is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`additionalProperties can exist by itself, an additional valid property is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`additionalProperties can exist by itself, an additional invalid property is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`additionalProperties are allowed by default, additional properties are allowed`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`additionalProperties should not look in applicators, properties defined in allOf are not examined`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`allOf, allOf`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`allOf, mismatch second`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`allOf, mismatch first`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`allOf, wrong type`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`allOf with base schema, valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`allOf with base schema, mismatch base schema`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`allOf with base schema, mismatch first allOf`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`allOf with base schema, mismatch second allOf`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`allOf with base schema, mismatch both`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`allOf simple types, valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`allOf simple types, mismatch one`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`allOf with boolean schemas, all true, any value is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`allOf with boolean schemas, some false, any value is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`allOf with boolean schemas, all false, any value is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`allOf with one empty schema, any data is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`allOf with two empty schemas, any data is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`allOf with the first empty schema, number is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`allOf with the first empty schema, string is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`allOf with the last empty schema, number is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`allOf with the last empty schema, string is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`nested allOf, to check validation semantics, null is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`nested allOf, to check validation semantics, anything non-null is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`allOf combined with anyOf, oneOf, allOf: false, anyOf: false, oneOf: false`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`allOf combined with anyOf, oneOf, allOf: false, anyOf: false, oneOf: true`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`allOf combined with anyOf, oneOf, allOf: false, anyOf: true, oneOf: false`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`allOf combined with anyOf, oneOf, allOf: false, anyOf: true, oneOf: true`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`allOf combined with anyOf, oneOf, allOf: true, anyOf: false, oneOf: false`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`allOf combined with anyOf, oneOf, allOf: true, anyOf: false, oneOf: true`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`allOf combined with anyOf, oneOf, allOf: true, anyOf: true, oneOf: false`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`allOf combined with anyOf, oneOf, allOf: true, anyOf: true, oneOf: true`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`anyOf, first anyOf valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`anyOf, second anyOf valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`anyOf, both anyOf valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`anyOf, neither anyOf valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`anyOf with base schema, mismatch base schema`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`anyOf with base schema, one anyOf valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`anyOf with base schema, both anyOf invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`anyOf with boolean schemas, all true, any value is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`anyOf with boolean schemas, some true, any value is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`anyOf with boolean schemas, all false, any value is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`anyOf complex types, first anyOf valid (complex)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`anyOf complex types, second anyOf valid (complex)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`anyOf complex types, both anyOf valid (complex)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`anyOf complex types, neither anyOf valid (complex)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`anyOf with one empty schema, string is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`anyOf with one empty schema, number is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`nested anyOf, to check validation semantics, null is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`nested anyOf, to check validation semantics, anything non-null is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`nested anyOf, to check validation semantics, null is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`nested anyOf, to check validation semantics, anything non-null is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`boolean schema 'true', number is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`boolean schema 'true', string is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`boolean schema 'true', boolean true is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`boolean schema 'true', boolean false is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`boolean schema 'true', null is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`boolean schema 'true', object is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`boolean schema 'true', empty object is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`boolean schema 'true', array is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`boolean schema 'true', empty array is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`boolean schema 'false', number is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`boolean schema 'false', string is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`boolean schema 'false', boolean true is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`boolean schema 'false', boolean false is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`boolean schema 'false', null is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`boolean schema 'false', object is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`boolean schema 'false', empty object is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`boolean schema 'false', array is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`boolean schema 'false', empty array is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`const validation, same value is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`const validation, another value is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`const validation, another type is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`const with object, same object is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`const with object, same object with different property order is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`const with object, another object is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`const with object, another type is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`const with array, same array is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`const with array, another array item is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`const with array, array with additional items is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`const with null, null is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`const with null, not null is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`const with false does not match 0, false is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`const with false does not match 0, integer zero is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`const with false does not match 0, float zero is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`const with true does not match 1, true is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`const with true does not match 1, integer one is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`const with true does not match 1, float one is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`const with [false] does not match [0], [false] is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`const with [false] does not match [0], [0] is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`const with [false] does not match [0], [0.0] is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`const with [true] does not match [1], [true] is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`const with [true] does not match [1], [1] is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`const with [true] does not match [1], [1.0] is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`const with {"a": false} does not match {"a": 0}, {"a": false} is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`const with {"a": false} does not match {"a": 0}, {"a": 0} is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`const with {"a": false} does not match {"a": 0}, {"a": 0.0} is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`const with {"a": true} does not match {"a": 1}, {"a": true} is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`const with {"a": true} does not match {"a": 1}, {"a": 1} is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`const with {"a": true} does not match {"a": 1}, {"a": 1.0} is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`const with 0 does not match other zero-like types, false is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`const with 0 does not match other zero-like types, integer zero is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`const with 0 does not match other zero-like types, float zero is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`const with 0 does not match other zero-like types, empty object is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`const with 0 does not match other zero-like types, empty array is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`const with 0 does not match other zero-like types, empty string is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`const with 1 does not match true, true is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`const with 1 does not match true, integer one is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`const with 1 does not match true, float one is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`const with -2.0 matches integer and float types, integer -2 is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`const with -2.0 matches integer and float types, integer 2 is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`const with -2.0 matches integer and float types, float -2.0 is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`const with -2.0 matches integer and float types, float 2.0 is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`const with -2.0 matches integer and float types, float -2.00001 is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`float and integers are equal up to 64-bit representation limits, integer is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`float and integers are equal up to 64-bit representation limits, integer minus one is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`float and integers are equal up to 64-bit representation limits, float is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`float and integers are equal up to 64-bit representation limits, float minus one is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`nul characters in strings, match string with nul`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`nul characters in strings, do not match string lacking nul`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`contains keyword validation, array with item matching schema (5) is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`contains keyword validation, array with item matching schema (6) is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`contains keyword validation, array with two items matching schema (5, 6) is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`contains keyword validation, array without items matching schema is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`contains keyword validation, empty array is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`contains keyword validation, not array is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`contains keyword with const keyword, array with item 5 is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`contains keyword with const keyword, array with two items 5 is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`contains keyword with const keyword, array without item 5 is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`contains keyword with boolean schema true, any non-empty array is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`contains keyword with boolean schema true, empty array is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`contains keyword with boolean schema false, any non-empty array is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`contains keyword with boolean schema false, empty array is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`contains keyword with boolean schema false, non-arrays are valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`items + contains, matches items, does not match contains`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`items + contains, does not match items, matches contains`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`items + contains, matches both items and contains`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`items + contains, matches neither items nor contains`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`invalid type for default, valid when property is specified`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`invalid type for default, still valid when the invalid default is used`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`invalid string value for default, valid when property is specified`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`invalid string value for default, still valid when the invalid default is used`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`valid definition, valid definition schema`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`invalid definition, invalid definition schema`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`dependencies, neither`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`dependencies, nondependant`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`dependencies, with dependency`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`dependencies, missing dependency`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`dependencies, ignores arrays`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`dependencies, ignores strings`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`dependencies, ignores other non-objects`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`dependencies with empty array, empty object`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`dependencies with empty array, object with one property`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`dependencies with empty array, non-object is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`multiple dependencies, neither`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`multiple dependencies, nondependants`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`multiple dependencies, with dependencies`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`multiple dependencies, missing dependency`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`multiple dependencies, missing other dependency`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`multiple dependencies, missing both dependencies`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`multiple dependencies subschema, valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`multiple dependencies subschema, no dependency`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`multiple dependencies subschema, wrong type`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`multiple dependencies subschema, wrong type other`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`multiple dependencies subschema, wrong type both`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`dependencies with boolean subschemas, object with property having schema true is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`dependencies with boolean subschemas, object with property having schema false is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`dependencies with boolean subschemas, object with both properties is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`dependencies with boolean subschemas, empty object is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`dependencies with escaped characters, valid object 1`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`dependencies with escaped characters, valid object 2`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`dependencies with escaped characters, valid object 3`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 1`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 2`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 3`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 4`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`simple enum validation, one of the enum is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`simple enum validation, something else is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`heterogeneous enum validation, one of the enum is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`heterogeneous enum validation, something else is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`heterogeneous enum validation, objects are deep compared`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`heterogeneous enum validation, valid object matches`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`heterogeneous enum validation, extra properties in object is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`heterogeneous enum-with-null validation, null is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`heterogeneous enum-with-null validation, number is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`heterogeneous enum-with-null validation, something else is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`enums in properties, both properties are valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`enums in properties, wrong foo value`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`enums in properties, wrong bar value`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`enums in properties, missing optional property is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`enums in properties, missing required property is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`enums in properties, missing all properties is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`enum with escaped characters, member 1 is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`enum with escaped characters, member 2 is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`enum with escaped characters, another string is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`enum with false does not match 0, false is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`enum with false does not match 0, integer zero is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`enum with false does not match 0, float zero is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`enum with true does not match 1, true is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`enum with true does not match 1, integer one is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`enum with true does not match 1, float one is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`enum with 0 does not match false, false is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`enum with 0 does not match false, integer zero is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`enum with 0 does not match false, float zero is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`enum with 1 does not match true, true is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`enum with 1 does not match true, integer one is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`enum with 1 does not match true, float one is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`nul characters in strings, match string with nul`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`nul characters in strings, do not match string lacking nul`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`exclusiveMaximum validation, below the exclusiveMaximum is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`exclusiveMaximum validation, boundary point is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`exclusiveMaximum validation, above the exclusiveMaximum is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`exclusiveMaximum validation, ignores non-numbers`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`exclusiveMinimum validation, above the exclusiveMinimum is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`exclusiveMinimum validation, boundary point is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`exclusiveMinimum validation, below the exclusiveMinimum is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`exclusiveMinimum validation, ignores non-numbers`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of e-mail addresses, ignores integers`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of e-mail addresses, ignores floats`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of e-mail addresses, ignores objects`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of e-mail addresses, ignores arrays`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of e-mail addresses, ignores booleans`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of e-mail addresses, ignores null`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IDN e-mail addresses, ignores integers`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IDN e-mail addresses, ignores floats`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IDN e-mail addresses, ignores objects`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IDN e-mail addresses, ignores arrays`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IDN e-mail addresses, ignores booleans`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IDN e-mail addresses, ignores null`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of regexes, ignores integers`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of regexes, ignores floats`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of regexes, ignores objects`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of regexes, ignores arrays`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of regexes, ignores booleans`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of regexes, ignores null`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of IP addresses, ignores integers`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IP addresses, ignores floats`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IP addresses, ignores objects`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IP addresses, ignores arrays`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IP addresses, ignores booleans`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IP addresses, ignores null`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IPv6 addresses, ignores integers`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IPv6 addresses, ignores floats`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IPv6 addresses, ignores objects`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IPv6 addresses, ignores arrays`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IPv6 addresses, ignores booleans`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IPv6 addresses, ignores null`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IDN hostnames, ignores integers`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IDN hostnames, ignores floats`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IDN hostnames, ignores objects`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IDN hostnames, ignores arrays`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IDN hostnames, ignores booleans`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IDN hostnames, ignores null`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of hostnames, ignores integers`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of hostnames, ignores floats`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of hostnames, ignores objects`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of hostnames, ignores arrays`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of hostnames, ignores booleans`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of hostnames, ignores null`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of date strings, ignores integers`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of date strings, ignores floats`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of date strings, ignores objects`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of date strings, ignores arrays`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of date strings, ignores booleans`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of date strings, ignores null`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of date-time strings, ignores integers`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of date-time strings, ignores floats`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of date-time strings, ignores objects`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of date-time strings, ignores arrays`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of date-time strings, ignores booleans`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of date-time strings, ignores null`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of time strings, ignores integers`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of time strings, ignores floats`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of time strings, ignores objects`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of time strings, ignores arrays`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of time strings, ignores booleans`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of time strings, ignores null`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of JSON pointers, ignores integers`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of JSON pointers, ignores floats`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of JSON pointers, ignores objects`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of JSON pointers, ignores arrays`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of JSON pointers, ignores booleans`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of JSON pointers, ignores null`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of relative JSON pointers, ignores integers`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of relative JSON pointers, ignores floats`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of relative JSON pointers, ignores objects`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of relative JSON pointers, ignores arrays`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of relative JSON pointers, ignores booleans`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of relative JSON pointers, ignores null`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of IRIs, ignores integers`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IRIs, ignores floats`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IRIs, ignores objects`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IRIs, ignores arrays`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IRIs, ignores booleans`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IRIs, ignores null`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IRI references, ignores integers`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IRI references, ignores floats`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IRI references, ignores objects`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IRI references, ignores arrays`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IRI references, ignores booleans`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IRI references, ignores null`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of URIs, ignores integers`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of URIs, ignores floats`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of URIs, ignores objects`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of URIs, ignores arrays`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of URIs, ignores booleans`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of URIs, ignores null`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of URI references, ignores integers`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URI references, ignores floats`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URI references, ignores objects`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of URI references, ignores arrays`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URI references, ignores booleans`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URI references, ignores null`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URI templates, ignores integers`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URI templates, ignores floats`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URI templates, ignores objects`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of URI templates, ignores arrays`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URI templates, ignores booleans`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URI templates, ignores null`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ignore if without then or else, valid when valid against lone if`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ignore if without then or else, valid when invalid against lone if`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ignore then without if, valid when valid against lone then`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ignore then without if, valid when invalid against lone then`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ignore else without if, valid when valid against lone else`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ignore else without if, valid when invalid against lone else`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`if and then without else, valid through then`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`if and then without else, invalid through then`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`if and then without else, valid when if test fails`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`if and else without then, valid when if test passes`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`if and else without then, valid through else`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`if and else without then, invalid through else`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validate against correct branch, then vs else, valid through then`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validate against correct branch, then vs else, invalid through then`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validate against correct branch, then vs else, valid through else`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validate against correct branch, then vs else, invalid through else`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`non-interference across combined schemas, valid, but would have been invalid through then`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`non-interference across combined schemas, valid, but would have been invalid through else`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`if with boolean schema true, boolean schema true in if always chooses the then path (valid)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`if with boolean schema true, boolean schema true in if always chooses the then path (invalid)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`if with boolean schema false, boolean schema false in if always chooses the else path (invalid)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`if with boolean schema false, boolean schema false in if always chooses the else path (valid)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`if appears at the end when serialized (keyword processing sequence), yes redirects to then and passes`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`if appears at the end when serialized (keyword processing sequence), other redirects to else and passes`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`if appears at the end when serialized (keyword processing sequence), no redirects to then and fails`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`if appears at the end when serialized (keyword processing sequence), invalid redirects to else and fails`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`evaluating the same schema location against the same data location twice is not a sign of an infinite loop, passing case`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`evaluating the same schema location against the same data location twice is not a sign of an infinite loop, failing case`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`a schema given for items, valid items`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`a schema given for items, wrong type of items`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`a schema given for items, ignores non-arrays`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`a schema given for items, JavaScript pseudo-array is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`an array of schemas for items, correct types`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`an array of schemas for items, wrong types`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`an array of schemas for items, incomplete array of items`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`an array of schemas for items, array with additional items`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`an array of schemas for items, empty array`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`an array of schemas for items, JavaScript pseudo-array is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`items with boolean schema (true), any array is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`items with boolean schema (true), empty array is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`items with boolean schema (false), any non-empty array is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`items with boolean schema (false), empty array is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`items with boolean schemas, array with one item is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`items with boolean schemas, array with two items is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`items with boolean schemas, empty array is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`items and subitems, valid items`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`items and subitems, too many items`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`items and subitems, too many sub-items`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`items and subitems, wrong item`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`items and subitems, wrong sub-item`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`items and subitems, fewer items is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`nested items, valid nested array`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`nested items, nested array with invalid type`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`nested items, not deep enough`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`maxItems validation, shorter is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`maxItems validation, exact length is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`maxItems validation, too long is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`maxItems validation, ignores non-arrays`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`maxLength validation, shorter is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`maxLength validation, exact length is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`maxLength validation, too long is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`maxLength validation, ignores non-strings`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`maxLength validation, two supplementary Unicode code points is long enough`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`maxProperties validation, shorter is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`maxProperties validation, exact length is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`maxProperties validation, too long is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`maxProperties validation, ignores arrays`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`maxProperties validation, ignores strings`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`maxProperties validation, ignores other non-objects`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`maxProperties = 0 means the object is empty, no properties is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`maxProperties = 0 means the object is empty, one property is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`maximum validation, below the maximum is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`maximum validation, boundary point is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`maximum validation, above the maximum is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`maximum validation, ignores non-numbers`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`maximum validation with unsigned integer, below the maximum is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`maximum validation with unsigned integer, boundary point integer is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`maximum validation with unsigned integer, boundary point float is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`maximum validation with unsigned integer, above the maximum is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`minItems validation, longer is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`minItems validation, exact length is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`minItems validation, too short is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`minItems validation, ignores non-arrays`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`minLength validation, longer is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`minLength validation, exact length is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`minLength validation, too short is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`minLength validation, ignores non-strings`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`minLength validation, one supplementary Unicode code point is not long enough`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`minProperties validation, longer is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`minProperties validation, exact length is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`minProperties validation, too short is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`minProperties validation, ignores arrays`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`minProperties validation, ignores strings`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`minProperties validation, ignores other non-objects`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`minimum validation, above the minimum is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`minimum validation, boundary point is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`minimum validation, below the minimum is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`minimum validation, ignores non-numbers`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`minimum validation with signed integer, negative above the minimum is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`minimum validation with signed integer, positive above the minimum is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`minimum validation with signed integer, boundary point is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`minimum validation with signed integer, boundary point with float is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`minimum validation with signed integer, float below the minimum is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`minimum validation with signed integer, int below the minimum is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`minimum validation with signed integer, ignores non-numbers`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`by int, int by int`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`by int, int by int fail`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`by int, ignores non-numbers`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`by number, zero is multiple of anything`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`by number, 4.5 is multiple of 1.5`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`by number, 35 is not multiple of 1.5`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`by small number, 0.0075 is multiple of 0.0001`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`by small number, 0.00751 is not multiple of 0.0001`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`invalid instance should not raise error when float division = inf, always invalid, but naive implementations may raise an overflow error`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`not, allowed`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`not, disallowed`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`not multiple types, valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`not multiple types, mismatch`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`not multiple types, other mismatch`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`not more complex schema, match`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`not more complex schema, other match`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`not more complex schema, mismatch`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`forbidden property, property present`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`forbidden property, property absent`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`not with boolean schema true, any value is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`not with boolean schema false, any value is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`oneOf, first oneOf valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`oneOf, second oneOf valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`oneOf, both oneOf valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`oneOf, neither oneOf valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`oneOf with base schema, mismatch base schema`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`oneOf with base schema, one oneOf valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`oneOf with base schema, both oneOf valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`oneOf with boolean schemas, all true, any value is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`oneOf with boolean schemas, one true, any value is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`oneOf with boolean schemas, more than one true, any value is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`oneOf with boolean schemas, all false, any value is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`oneOf complex types, first oneOf valid (complex)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`oneOf complex types, second oneOf valid (complex)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`oneOf complex types, both oneOf valid (complex)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`oneOf complex types, neither oneOf valid (complex)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`oneOf with empty schema, one valid - valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`oneOf with empty schema, both valid - invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`oneOf with required, both invalid - invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`oneOf with required, first valid - valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`oneOf with required, second valid - valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`oneOf with required, both valid - invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`oneOf with missing optional property, first oneOf valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`oneOf with missing optional property, second oneOf valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`oneOf with missing optional property, both oneOf valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`oneOf with missing optional property, neither oneOf valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`nested oneOf, to check validation semantics, null is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`nested oneOf, to check validation semantics, anything non-null is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`integer, a bignum is an integer`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`number, a bignum is a number`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`integer, a negative bignum is an integer`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`number, a negative bignum is a number`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`string, a bignum is not a string`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`integer comparison, comparison works for high numbers`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`float comparison with high precision, comparison works for high numbers`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`integer comparison, comparison works for very negative numbers`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`float comparison with high precision on negative numbers, comparison works for very negative numbers`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of string-encoded content based on media type, a valid JSON document`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of string-encoded content based on media type, an invalid JSON document`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of string-encoded content based on media type, ignores non-strings`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of binary string-encoding, a valid base64 string`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of binary string-encoding, an invalid base64 string (% is not a valid character)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of binary string-encoding, ignores non-strings`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of binary-encoded media type documents, a valid base64-encoded JSON document`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of binary-encoded media type documents, a validly-encoded invalid JSON document`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of binary-encoded media type documents, an invalid base64 string that is valid JSON`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of binary-encoded media type documents, ignores non-strings`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 regex $ does not match trailing newline, matches in Python, but should not in jsonschema`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 regex $ does not match trailing newline, should match`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 regex converts \t to horizontal tab, does not match`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 regex converts \t to horizontal tab, matches`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 regex escapes control codes with \c and upper letter, does not match`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 regex escapes control codes with \c and upper letter, matches`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 regex escapes control codes with \c and lower letter, does not match`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 regex escapes control codes with \c and lower letter, matches`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 \d matches ascii digits only, ASCII zero matches`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 \d matches ascii digits only, NKO DIGIT ZERO does not match (unlike e.g. Python)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 \d matches ascii digits only, NKO DIGIT ZERO (as \u escape) does not match`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 \D matches everything but ascii digits, ASCII zero does not match`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 \D matches everything but ascii digits, NKO DIGIT ZERO matches (unlike e.g. Python)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 \D matches everything but ascii digits, NKO DIGIT ZERO (as \u escape) matches`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 \w matches ascii letters only, ASCII 'a' matches`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 \w matches ascii letters only, latin-1 e-acute does not match (unlike e.g. Python)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 \W matches everything but ascii letters, ASCII 'a' does not match`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 \W matches everything but ascii letters, latin-1 e-acute matches (unlike e.g. Python)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 \s matches whitespace, ASCII space matches`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 \s matches whitespace, Character tabulation matches`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 \s matches whitespace, Line tabulation matches`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 \s matches whitespace, Form feed matches`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 \s matches whitespace, latin-1 non-breaking-space matches`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 \s matches whitespace, zero-width whitespace matches`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 \s matches whitespace, line feed matches (line terminator)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 \s matches whitespace, paragraph separator matches (line terminator)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 \s matches whitespace, EM SPACE matches (Space_Separator)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 \s matches whitespace, Non-whitespace control does not match`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 \s matches whitespace, Non-whitespace does not match`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 \S matches everything but whitespace, ASCII space does not match`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 \S matches everything but whitespace, Character tabulation does not match`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 \S matches everything but whitespace, Line tabulation does not match`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 \S matches everything but whitespace, Form feed does not match`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 \S matches everything but whitespace, latin-1 non-breaking-space does not match`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 \S matches everything but whitespace, zero-width whitespace does not match`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 \S matches everything but whitespace, line feed does not match (line terminator)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 \S matches everything but whitespace, paragraph separator does not match (line terminator)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 \S matches everything but whitespace, EM SPACE does not match (Space_Separator)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 \S matches everything but whitespace, Non-whitespace control matches`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ECMA 262 \S matches everything but whitespace, Non-whitespace matches`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`all integers are multiples of 0.5, if overflow is handled, valid if optional overflow handling is implemented`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of date-time strings, a valid date-time string`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of date-time strings, a valid date-time string without second fraction`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of date-time strings, a valid date-time string with plus offset`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of date-time strings, a valid date-time string with minus offset`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of date-time strings, a invalid day in date-time string`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of date-time strings, an invalid offset in date-time string`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of date-time strings, an invalid date-time string`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of date-time strings, case-insensitive T and Z`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of date-time strings, only RFC3339 not all of ISO 8601 are valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of date-time strings, invalid non-padded month dates`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of date-time strings, invalid non-padded day dates`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of date strings, a valid date string`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of date strings, an invalid date-time string`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of date strings, only RFC3339 not all of ISO 8601 are valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of date strings, invalidates non-padded month dates`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of date strings, invalidates non-padded day dates`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of e-mail addresses, a valid e-mail address`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of e-mail addresses, an invalid e-mail address`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of e-mail addresses, tilde in local part is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of e-mail addresses, tilde before local part is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of e-mail addresses, tilde after local part is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of e-mail addresses, dot before local part is not valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of e-mail addresses, dot after local part is not valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of e-mail addresses, two separated dots inside local part are valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of e-mail addresses, two subsequent dots inside local part are not valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of host names, a valid host name`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of host names, a valid punycoded IDN hostname`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of host names, a host name starting with an illegal character`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of host names, a host name containing illegal characters`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of host names, a host name with a component too long`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of host names, starts with hyphen`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of host names, ends with hyphen`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of host names, starts with underscore`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of host names, ends with underscore`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of host names, contains underscore`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of host names, maximum label length`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of host names, exceeds maximum label length`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of an internationalized e-mail addresses, a valid idn e-mail (example@example.test in Hangul)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of an internationalized e-mail addresses, an invalid idn e-mail address`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of an internationalized e-mail addresses, a valid e-mail address`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of an internationalized e-mail addresses, an invalid e-mail address`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, a valid host name (example.test in Hangul)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, illegal first char U+302E Hangul single dot tone mark`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, contains illegal char U+302E Hangul single dot tone mark`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, a host name with a component too long`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, invalid label, correct Punycode`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, valid Chinese Punycode`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, invalid Punycode`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, U-label contains "--" in the 3rd and 4th position`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, U-label starts with a dash`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, U-label ends with a dash`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, U-label starts and ends with a dash`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, Begins with a Spacing Combining Mark`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, Begins with a Nonspacing Mark`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, Begins with an Enclosing Mark`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, Exceptions that are PVALID, left-to-right chars`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, Exceptions that are PVALID, right-to-left chars`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, Exceptions that are DISALLOWED, right-to-left chars`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, Exceptions that are DISALLOWED, left-to-right chars`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, MIDDLE DOT with no preceding 'l'`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, MIDDLE DOT with nothing preceding`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, MIDDLE DOT with no following 'l'`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, MIDDLE DOT with nothing following`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, MIDDLE DOT with surrounding 'l's`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, Greek KERAIA not followed by Greek`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, Greek KERAIA not followed by anything`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, Greek KERAIA followed by Greek`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, Hebrew GERESH not preceded by Hebrew`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, Hebrew GERESH not preceded by anything`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, Hebrew GERESH preceded by Hebrew`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, Hebrew GERSHAYIM not preceded by Hebrew`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, Hebrew GERSHAYIM not preceded by anything`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, Hebrew GERSHAYIM preceded by Hebrew`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, KATAKANA MIDDLE DOT with no Hiragana, Katakana, or Han`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, KATAKANA MIDDLE DOT with no other characters`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, KATAKANA MIDDLE DOT with Hiragana`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, KATAKANA MIDDLE DOT with Katakana`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, KATAKANA MIDDLE DOT with Han`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, Arabic-Indic digits mixed with Extended Arabic-Indic digits`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, Arabic-Indic digits not mixed with Extended Arabic-Indic digits`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, Extended Arabic-Indic digits not mixed with Arabic-Indic digits`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, ZERO WIDTH JOINER not preceded by Virama`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, ZERO WIDTH JOINER not preceded by anything`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, ZERO WIDTH JOINER preceded by Virama`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, ZERO WIDTH NON-JOINER preceded by Virama`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of internationalized host names, ZERO WIDTH NON-JOINER not preceded by Virama but matches regexp`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IP addresses, a valid IP address`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of IP addresses, an IP address with too many components`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of IP addresses, an IP address with out-of-range values`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of IP addresses, an IP address without 4 components`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of IP addresses, an IP address as an integer`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of IP addresses, an IP address as an integer (decimal)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, a valid IPv6 address`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, an IPv6 address with out-of-range values`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, an IPv6 address with too many components`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, an IPv6 address containing illegal characters`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, no digits is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, leading colons is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IPv6 addresses, trailing colons is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IPv6 addresses, missing leading octet is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, missing trailing octet is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, missing leading octet with omitted octets later`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, two sets of double colons is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, mixed format with the ipv4 section as decimal octets`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IPv6 addresses, mixed format with double colons between the sections`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, mixed format with ipv4 section with octet out of range`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, mixed format with ipv4 section with a hex octet`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, mixed format with leading double colons (ipv4-mapped ipv6 address)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IPv6 addresses, triple colons is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, 8 octets`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, insufficient octets without double colons`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, no colons is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, ipv4 is not ipv6`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, ipv4 segment must have 4 octets`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, leading whitespace is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IPv6 addresses, trailing whitespace is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IPv6 addresses, netmask is not a part of ipv6 address`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, zone id is not a part of ipv6 address`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IPv6 addresses, a long valid ipv6`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, a long invalid ipv6, below length limit, first`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, a long invalid ipv6, below length limit, second`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of IRI References, a valid IRI`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IRI References, a valid protocol-relative IRI Reference`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IRI References, a valid relative IRI Reference`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IRI References, an invalid IRI Reference`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IRI References, a valid IRI Reference`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IRI References, a valid IRI fragment`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IRI References, an invalid IRI fragment`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IRIs, a valid IRI with anchor tag`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IRIs, a valid IRI with anchor tag and parantheses`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IRIs, a valid IRI with URL-encoded stuff`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IRIs, a valid IRI with many special characters`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IRIs, a valid IRI based on IPv6`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IRIs, an invalid IRI based on IPv6`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IRIs, an invalid relative IRI Reference`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IRIs, an invalid IRI`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of IRIs, an invalid IRI though valid IRI reference`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of JSON-pointers (JSON String Representation), a valid JSON-pointer`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (~ not escaped)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer with empty segment`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer with the last empty segment`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #1`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #2`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #3`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #4`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #5`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #6`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #7`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #8`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #9`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #10`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #11`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #12`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer used adding to the last array position`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer (- used as object member name)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer (multiple escaped characters)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer (escaped with fraction part) #1`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer (escaped with fraction part) #2`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (URI Fragment Identifier) #1`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (URI Fragment Identifier) #2`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (URI Fragment Identifier) #3`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (some escaped, but not all) #1`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (some escaped, but not all) #2`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (wrong escape character) #1`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (wrong escape character) #2`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (multiple characters not escaped)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (isn't empty nor starts with /) #1`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (isn't empty nor starts with /) #2`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (isn't empty nor starts with /) #3`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of regular expressions, a valid regular expression`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of regular expressions, a regular expression with unclosed parens is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of Relative JSON Pointers (RJP), a valid upwards RJP`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of Relative JSON Pointers (RJP), a valid downwards RJP`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of Relative JSON Pointers (RJP), a valid up and then down RJP, with array index`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of Relative JSON Pointers (RJP), a valid RJP taking the member or index name`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of Relative JSON Pointers (RJP), an invalid RJP that is a valid JSON Pointer`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of Relative JSON Pointers (RJP), negative prefix`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of time strings, a valid time string`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of time strings, an invalid time string`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of time strings, only RFC3339 not all of ISO 8601 are valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of URI References, a valid URI`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URI References, a valid protocol-relative URI Reference`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URI References, a valid relative URI Reference`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URI References, an invalid URI Reference`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`validation of URI References, a valid URI Reference`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URI References, a valid URI fragment`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URI References, an invalid URI fragment`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`format: uri-template, a valid uri-template`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`format: uri-template, an invalid uri-template`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`format: uri-template, a valid uri-template without variables`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`format: uri-template, a valid relative uri-template`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URIs, a valid URL with anchor tag`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URIs, a valid URL with anchor tag and parantheses`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URIs, a valid URL with URL-encoded stuff`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URIs, a valid puny-coded URL `|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URIs, a valid URL with many special characters`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URIs, a valid URL based on IPv4`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URIs, a valid URL with ftp scheme`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URIs, a valid URL for a simple text file`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URIs, a valid URL `|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URIs, a valid mailto URI`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URIs, a valid newsgroup URI`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URIs, a valid tel URI`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URIs, a valid URN`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URIs, an invalid protocol-relative URI Reference`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URIs, an invalid relative URI Reference`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URIs, an invalid URI`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URIs, an invalid URI though valid URI reference`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URIs, an invalid URI with spaces`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URIs, an invalid URI with spaces and missing scheme`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`validation of URIs, an invalid URI with comma in scheme`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`Proper UTF-16 surrogate pair handling: pattern, matches empty`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`Proper UTF-16 surrogate pair handling: pattern, matches single`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`Proper UTF-16 surrogate pair handling: pattern, matches two`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`Proper UTF-16 surrogate pair handling: pattern, doesn't match one`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`Proper UTF-16 surrogate pair handling: pattern, doesn't match two`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`Proper UTF-16 surrogate pair handling: pattern, doesn't match one ASCII`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`Proper UTF-16 surrogate pair handling: pattern, doesn't match two ASCII`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`Proper UTF-16 surrogate pair handling: patternProperties, matches empty`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`Proper UTF-16 surrogate pair handling: patternProperties, matches single`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`Proper UTF-16 surrogate pair handling: patternProperties, matches two`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`Proper UTF-16 surrogate pair handling: patternProperties, doesn't match one`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`Proper UTF-16 surrogate pair handling: patternProperties, doesn't match two`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`pattern validation, a matching pattern is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`pattern validation, a non-matching pattern is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`pattern validation, ignores booleans`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`pattern validation, ignores integers`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`pattern validation, ignores floats`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`pattern validation, ignores objects`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`pattern validation, ignores arrays`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`pattern validation, ignores null`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`pattern is not anchored, matches a substring`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`patternProperties validates properties matching a regex, a single valid match is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`patternProperties validates properties matching a regex, multiple valid matches is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`patternProperties validates properties matching a regex, a single invalid match is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`patternProperties validates properties matching a regex, multiple invalid matches is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`patternProperties validates properties matching a regex, ignores arrays`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`patternProperties validates properties matching a regex, ignores strings`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`patternProperties validates properties matching a regex, ignores other non-objects`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`multiple simultaneous patternProperties are validated, a single valid match is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`multiple simultaneous patternProperties are validated, a simultaneous match is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`multiple simultaneous patternProperties are validated, multiple matches is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`multiple simultaneous patternProperties are validated, an invalid due to one is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`multiple simultaneous patternProperties are validated, an invalid due to the other is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`multiple simultaneous patternProperties are validated, an invalid due to both is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`regexes are not anchored by default and are case sensitive, non recognized members are ignored`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`regexes are not anchored by default and are case sensitive, recognized members are accounted for`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`regexes are not anchored by default and are case sensitive, regexes are case sensitive`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`regexes are not anchored by default and are case sensitive, regexes are case sensitive, 2`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`patternProperties with boolean schemas, object with property matching schema true is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`patternProperties with boolean schemas, object with property matching schema false is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`patternProperties with boolean schemas, object with both properties is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`patternProperties with boolean schemas, object with a property matching both true and false is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`patternProperties with boolean schemas, empty object is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`object properties validation, both properties present and valid is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`object properties validation, one property invalid is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`object properties validation, both properties invalid is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`object properties validation, doesn't invalidate other properties`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`object properties validation, ignores arrays`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`object properties validation, ignores other non-objects`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`properties, patternProperties, additionalProperties interaction, property validates property`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`properties, patternProperties, additionalProperties interaction, property invalidates property`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`properties, patternProperties, additionalProperties interaction, patternProperty invalidates property`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`properties, patternProperties, additionalProperties interaction, patternProperty validates nonproperty`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`properties, patternProperties, additionalProperties interaction, patternProperty invalidates nonproperty`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`properties, patternProperties, additionalProperties interaction, additionalProperty ignores property`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`properties, patternProperties, additionalProperties interaction, additionalProperty validates others`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`properties, patternProperties, additionalProperties interaction, additionalProperty invalidates others`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`properties with boolean schema, no property present is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`properties with boolean schema, only 'true' property present is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`properties with boolean schema, only 'false' property present is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`properties with boolean schema, both properties present is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`properties with escaped characters, object with all numbers is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`properties with escaped characters, object with strings is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`propertyNames validation, all property names valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`propertyNames validation, some property names invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`propertyNames validation, object without properties is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`propertyNames validation, ignores arrays`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`propertyNames validation, ignores strings`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`propertyNames validation, ignores other non-objects`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`propertyNames with boolean schema true, object with any properties is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`propertyNames with boolean schema true, empty object is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`propertyNames with boolean schema false, object with any properties is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`propertyNames with boolean schema false, empty object is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`root pointer ref, match`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`root pointer ref, recursive match`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`root pointer ref, mismatch`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`root pointer ref, recursive mismatch`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`relative pointer ref to object, match`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`relative pointer ref to object, mismatch`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`relative pointer ref to array, match array`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`relative pointer ref to array, mismatch array`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`escaped pointer ref, slash invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`escaped pointer ref, tilde invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`escaped pointer ref, percent invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`escaped pointer ref, slash valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`escaped pointer ref, tilde valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`escaped pointer ref, percent valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`nested refs, nested ref valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`nested refs, nested ref invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ref overrides any sibling keywords, ref valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ref overrides any sibling keywords, ref valid, maxItems ignored`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`ref overrides any sibling keywords, ref invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`remote ref, containing refs itself, remote ref valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`remote ref, containing refs itself, remote ref invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`property named $ref that is not a reference, property named $ref valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`property named $ref that is not a reference, property named $ref invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`property named $ref, containing an actual $ref, property named $ref valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`property named $ref, containing an actual $ref, property named $ref invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`$ref to boolean schema true, any value is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`$ref to boolean schema false, any value is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`Recursive references between schemas, valid tree`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`Recursive references between schemas, invalid tree`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`refs with quote, object with numbers is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`refs with quote, object with strings is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`Location-independent identifier, match`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`Location-independent identifier, mismatch`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`Location-independent identifier with absolute URI, match`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`Location-independent identifier with absolute URI, mismatch`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`Location-independent identifier with base URI change in subschema, match`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`Location-independent identifier with base URI change in subschema, mismatch`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`naive replacement of $ref with its destination is not correct, do not evaluate the $ref inside the enum`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`naive replacement of $ref with its destination is not correct, match the enum exactly`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`remote ref, remote ref valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`remote ref, remote ref invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`fragment within remote ref, remote fragment valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`fragment within remote ref, remote fragment invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ref within remote ref, ref within ref valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`ref within remote ref, ref within ref invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`base URI change, base URI change ref valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`base URI change, base URI change ref invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`base URI change - change folder, number is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`base URI change - change folder, string is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`base URI change - change folder in subschema, number is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`base URI change - change folder in subschema, string is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`root ref in remote ref, string is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`root ref in remote ref, null is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`root ref in remote ref, object is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`required validation, present required property is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`required validation, non-present required property is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`required validation, ignores arrays`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`required validation, ignores strings`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`required validation, ignores other non-objects`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`required default validation, not required by default`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`required with empty array, property not required`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`required with escaped characters, object with all properties present is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`required with escaped characters, object with some properties missing is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`integer type matches integers, an integer is an integer`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`integer type matches integers, a float with zero fractional part is an integer`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`integer type matches integers, a float is not an integer`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`integer type matches integers, a string is not an integer`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`integer type matches integers, a string is still not an integer, even if it looks like one`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`integer type matches integers, an object is not an integer`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`integer type matches integers, an array is not an integer`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`integer type matches integers, a boolean is not an integer`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`integer type matches integers, null is not an integer`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`number type matches numbers, an integer is a number`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`number type matches numbers, a float with zero fractional part is a number (and an integer)`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`number type matches numbers, a float is a number`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`number type matches numbers, a string is not a number`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`number type matches numbers, a string is still not a number, even if it looks like one`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`number type matches numbers, an object is not a number`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`number type matches numbers, an array is not a number`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`number type matches numbers, a boolean is not a number`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`number type matches numbers, null is not a number`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`string type matches strings, 1 is not a string`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`string type matches strings, a float is not a string`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`string type matches strings, a string is a string`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`string type matches strings, a string is still a string, even if it looks like a number`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`string type matches strings, an empty string is still a string`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`string type matches strings, an object is not a string`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`string type matches strings, an array is not a string`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`string type matches strings, a boolean is not a string`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`string type matches strings, null is not a string`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`object type matches objects, an integer is not an object`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`object type matches objects, a float is not an object`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`object type matches objects, a string is not an object`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`object type matches objects, an object is an object`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`object type matches objects, an array is not an object`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`object type matches objects, a boolean is not an object`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`object type matches objects, null is not an object`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`array type matches arrays, an integer is not an array`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`array type matches arrays, a float is not an array`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`array type matches arrays, a string is not an array`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`array type matches arrays, an object is not an array`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`array type matches arrays, an array is an array`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`array type matches arrays, a boolean is not an array`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`array type matches arrays, null is not an array`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`boolean type matches booleans, an integer is not a boolean`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`boolean type matches booleans, zero is not a boolean`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`boolean type matches booleans, a float is not a boolean`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`boolean type matches booleans, a string is not a boolean`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`boolean type matches booleans, an empty string is not a boolean`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`boolean type matches booleans, an object is not a boolean`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`boolean type matches booleans, an array is not a boolean`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`boolean type matches booleans, true is a boolean`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`boolean type matches booleans, false is a boolean`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`boolean type matches booleans, null is not a boolean`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`null type matches only the null object, an integer is not null`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`null type matches only the null object, a float is not null`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`null type matches only the null object, zero is not null`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`null type matches only the null object, a string is not null`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`null type matches only the null object, an empty string is not null`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`null type matches only the null object, an object is not null`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`null type matches only the null object, an array is not null`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`null type matches only the null object, true is not null`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`null type matches only the null object, false is not null`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`null type matches only the null object, null is null`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`multiple types can be specified in an array, an integer is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`multiple types can be specified in an array, a string is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`multiple types can be specified in an array, a float is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`multiple types can be specified in an array, an object is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`multiple types can be specified in an array, an array is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`multiple types can be specified in an array, a boolean is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`multiple types can be specified in an array, null is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`type as array with one item, string is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`type as array with one item, number is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`type: array or object, array is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`type: array or object, object is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`type: array or object, number is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`type: array or object, string is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`type: array or object, null is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`type: array, object or null, array is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`type: array, object or null, object is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`type: array, object or null, null is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`type: array, object or null, number is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`type: array, object or null, string is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems validation, unique array of integers is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems validation, non-unique array of integers is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems validation, numbers are unique if mathematically unequal`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems validation, false is not equal to zero`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems validation, true is not equal to one`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems validation, unique array of objects is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems validation, non-unique array of objects is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems validation, unique array of nested objects is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems validation, non-unique array of nested objects is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems validation, unique array of arrays is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems validation, non-unique array of arrays is invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems validation, 1 and true are unique`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems validation, 0 and false are unique`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems validation, [1] and [true] are unique`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems validation, [0] and [false] are unique`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems validation, nested [1] and [true] are unique`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems validation, nested [0] and [false] are unique`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems validation, unique heterogeneous types are valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`uniqueItems validation, non-unique heterogeneous types are invalid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems validation, different objects are unique`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems validation, objects are non-unique despite key order`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`uniqueItems validation, {"a": false} and {"a": 0} are unique`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems validation, {"a": true} and {"a": 1} are unique`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems with an array of items, [false, true] from items array is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems with an array of items, [true, false] from items array is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems with an array of items, [false, false] from items array is not valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems with an array of items, [true, true] from items array is not valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems with an array of items, unique array extended from [false, true] is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems with an array of items, unique array extended from [true, false] is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems with an array of items, non-unique array extended from [false, true] is not valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems with an array of items, non-unique array extended from [true, false] is not valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems with an array of items and additionalItems=false, [false, true] from items array is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems with an array of items and additionalItems=false, [true, false] from items array is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems with an array of items and additionalItems=false, [false, false] from items array is not valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems with an array of items and additionalItems=false, [true, true] from items array is not valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems with an array of items and additionalItems=false, extra items are invalid even if unique`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**
`uniqueItems=false validation, unique array of integers is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`uniqueItems=false validation, non-unique array of integers is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`uniqueItems=false validation, numbers are unique if mathematically unequal`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`uniqueItems=false validation, false is not equal to zero`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`uniqueItems=false validation, true is not equal to one`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`uniqueItems=false validation, unique array of objects is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`uniqueItems=false validation, non-unique array of objects is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`uniqueItems=false validation, unique array of nested objects is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`uniqueItems=false validation, non-unique array of nested objects is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`uniqueItems=false validation, unique array of arrays is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`uniqueItems=false validation, non-unique array of arrays is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`uniqueItems=false validation, 1 and true are unique`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`uniqueItems=false validation, 0 and false are unique`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`uniqueItems=false validation, unique heterogeneous types are valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`uniqueItems=false validation, non-unique heterogeneous types are valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`uniqueItems=false with an array of items, [false, true] from items array is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`uniqueItems=false with an array of items, [true, false] from items array is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`uniqueItems=false with an array of items, [false, false] from items array is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`uniqueItems=false with an array of items, [true, true] from items array is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`uniqueItems=false with an array of items, unique array extended from [false, true] is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`uniqueItems=false with an array of items, unique array extended from [true, false] is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`uniqueItems=false with an array of items, non-unique array extended from [false, true] is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`uniqueItems=false with an array of items, non-unique array extended from [true, false] is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`uniqueItems=false with an array of items and additionalItems=false, [false, true] from items array is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`uniqueItems=false with an array of items and additionalItems=false, [true, false] from items array is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`uniqueItems=false with an array of items and additionalItems=false, [false, false] from items array is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`uniqueItems=false with an array of items and additionalItems=false, [true, true] from items array is valid`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`)
`uniqueItems=false with an array of items and additionalItems=false, extra items are invalid even if unique`|The schema failed to load(`Cannot set property 'defaultMeta' of undefined`). **This excludes this validator from performance tests**

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)