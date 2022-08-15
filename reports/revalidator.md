# [`revalidator`](https://github.com/flatiron/revalidator) - test summary


# [`revalidator`](https://github.com/flatiron/revalidator) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`revalidator`](https://github.com/flatiron/revalidator) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`additionalItems as schema, additional items do not match schema`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`array of items with no additionalItems, additional items are not permitted`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`additionalItems should not look in applicators, invalid case, items defined in allOf are not examined`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`additionalProperties being false does not allow other properties, ignores arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`additionalProperties being false does not allow other properties, ignores strings`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`additionalProperties allows a schema which should validate, an additional valid property is valid`|Expected result: `true` but validator returned: `"Cannot read properties of undefined (reading 'format')"`. **This excludes this validator from performance tests**
`additionalProperties allows a schema which should validate, an additional invalid property is invalid`|Expected result: `false` but validator returned: `"Cannot read properties of undefined (reading 'format')"`. **This excludes this validator from performance tests**
`additionalProperties can exist by itself, an additional valid property is valid`|Expected result: `true` but validator returned: `"Cannot read properties of undefined (reading 'format')"`. **This excludes this validator from performance tests**
`additionalProperties can exist by itself, an additional invalid property is invalid`|Expected result: `false` but validator returned: `"Cannot read properties of undefined (reading 'format')"`. **This excludes this validator from performance tests**
`additionalProperties should not look in applicators, properties defined in allOf are not examined`|Expected result: `false` but validator returned: `"Cannot read properties of undefined (reading 'format')"`. **This excludes this validator from performance tests**
`allOf, mismatch second`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf, mismatch first`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf, wrong type`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf with base schema, mismatch base schema`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf with base schema, mismatch first allOf`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf with base schema, mismatch second allOf`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf with base schema, mismatch both`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf simple types, mismatch one`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf with boolean schemas, some false, any value is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf with boolean schemas, all false, any value is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf with the first empty schema, string is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf with the last empty schema, string is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`nested allOf, to check validation semantics, null is valid`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`nested allOf, to check validation semantics, anything non-null is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf combined with anyOf, oneOf, allOf: false, anyOf: false, oneOf: false`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf combined with anyOf, oneOf, allOf: false, anyOf: false, oneOf: true`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf combined with anyOf, oneOf, allOf: false, anyOf: true, oneOf: false`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf combined with anyOf, oneOf, allOf: false, anyOf: true, oneOf: true`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf combined with anyOf, oneOf, allOf: true, anyOf: false, oneOf: false`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf combined with anyOf, oneOf, allOf: true, anyOf: false, oneOf: true`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf combined with anyOf, oneOf, allOf: true, anyOf: true, oneOf: false`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`anyOf, neither anyOf valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`anyOf with base schema, mismatch base schema`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`anyOf with base schema, both anyOf invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`anyOf with boolean schemas, all false, any value is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`anyOf complex types, neither anyOf valid (complex)`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`nested anyOf, to check validation semantics, null is valid`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`nested anyOf, to check validation semantics, anything non-null is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`nested anyOf, to check validation semantics, null is valid`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`nested anyOf, to check validation semantics, anything non-null is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean schema 'true', null is valid`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`boolean schema 'false', number is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean schema 'false', string is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean schema 'false', boolean true is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean schema 'false', boolean false is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean schema 'false', null is invalid`|Expected result: `false` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`boolean schema 'false', object is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean schema 'false', empty object is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean schema 'false', array is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean schema 'false', empty array is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const validation, another value is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const validation, another type is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with object, another object is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with object, another type is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with array, another array item is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with array, array with additional items is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with null, null is valid`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`const with null, not null is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with false does not match 0, integer zero is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with false does not match 0, float zero is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with true does not match 1, integer one is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with true does not match 1, float one is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with [false] does not match [0], [0] is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with [false] does not match [0], [0.0] is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with [true] does not match [1], [1] is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with [true] does not match [1], [1.0] is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with {"a": false} does not match {"a": 0}, {"a": 0} is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with {"a": false} does not match {"a": 0}, {"a": 0.0} is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with {"a": true} does not match {"a": 1}, {"a": 1} is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with {"a": true} does not match {"a": 1}, {"a": 1.0} is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with 0 does not match other zero-like types, false is invalid`|Expected result: `false` but validator returned: `true`
`const with 0 does not match other zero-like types, empty object is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with 0 does not match other zero-like types, empty array is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with 0 does not match other zero-like types, empty string is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with 1 does not match true, true is invalid`|Expected result: `false` but validator returned: `true`
`const with -2.0 matches integer and float types, integer 2 is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with -2.0 matches integer and float types, float 2.0 is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with -2.0 matches integer and float types, float -2.00001 is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`float and integers are equal up to 64-bit representation limits, integer minus one is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`float and integers are equal up to 64-bit representation limits, float minus one is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`nul characters in strings, do not match string lacking nul`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`contains keyword validation, array without items matching schema is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`contains keyword validation, empty array is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`contains keyword with const keyword, array without item 5 is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`contains keyword with boolean schema true, empty array is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`contains keyword with boolean schema false, any non-empty array is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`contains keyword with boolean schema false, empty array is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`items + contains, matches items, does not match contains`|Expected result: `false` but validator returned: `true`
`items + contains, does not match items, matches contains`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`items + contains, matches neither items nor contains`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`invalid definition, invalid definition schema`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`dependencies, missing dependency`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`multiple dependencies, missing dependency`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`multiple dependencies, missing other dependency`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`multiple dependencies, missing both dependencies`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`multiple dependencies subschema, wrong type`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`multiple dependencies subschema, wrong type other`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`multiple dependencies subschema, wrong type both`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`dependencies with boolean subschemas, object with property having schema false is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`dependencies with boolean subschemas, object with both properties is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 1`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 2`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 3`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 4`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`simple enum validation, something else is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`heterogeneous enum validation, something else is invalid`|Expected result: `false` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`heterogeneous enum validation, objects are deep compared`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`heterogeneous enum validation, extra properties in object is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`heterogeneous enum-with-null validation, null is valid`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`heterogeneous enum-with-null validation, something else is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`enums in properties, missing required property is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`enums in properties, missing all properties is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`enum with escaped characters, another string is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`enum with false does not match 0, integer zero is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`enum with false does not match 0, float zero is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`enum with true does not match 1, integer one is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`enum with true does not match 1, float one is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`enum with 0 does not match false, false is invalid`|Expected result: `false` but validator returned: `true`
`enum with 1 does not match true, true is invalid`|Expected result: `false` but validator returned: `true`
`nul characters in strings, do not match string lacking nul`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`exclusiveMaximum validation, boundary point is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`exclusiveMaximum validation, above the exclusiveMaximum is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`exclusiveMinimum validation, boundary point is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`exclusiveMinimum validation, below the exclusiveMinimum is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of e-mail addresses, ignores null`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`
`validation of IDN e-mail addresses, ignores null`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`
`validation of regexes, ignores null`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`validation of IP addresses, ignores null`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`
`validation of IPv6 addresses, ignores null`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`
`validation of IDN hostnames, ignores null`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`
`validation of hostnames, ignores null`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`
`validation of date strings, ignores null`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`validation of date-time strings, ignores null`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`
`validation of time strings, ignores null`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`validation of JSON pointers, ignores null`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`
`validation of relative JSON pointers, ignores null`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`validation of IRIs, ignores null`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`
`validation of IRI references, ignores null`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`
`validation of URIs, ignores null`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`
`validation of URI references, ignores null`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`validation of URI templates, ignores null`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`if and then without else, invalid through then`|Expected result: `false` but validator returned: `true`
`if and else without then, invalid through else`|Expected result: `false` but validator returned: `true`
`validate against correct branch, then vs else, invalid through then`|Expected result: `false` but validator returned: `true`
`validate against correct branch, then vs else, invalid through else`|Expected result: `false` but validator returned: `true`
`if with boolean schema true, boolean schema true in if always chooses the then path (invalid)`|Expected result: `false` but validator returned: `true`
`if with boolean schema false, boolean schema false in if always chooses the else path (invalid)`|Expected result: `false` but validator returned: `true`
`if appears at the end when serialized (keyword processing sequence), no redirects to then and fails`|Expected result: `false` but validator returned: `true`
`if appears at the end when serialized (keyword processing sequence), invalid redirects to else and fails`|Expected result: `false` but validator returned: `true`
`evaluating the same schema location against the same data location twice is not a sign of an infinite loop, failing case`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`a schema given for items, wrong type of items`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`an array of schemas for items, wrong types`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`items with boolean schema (false), any non-empty array is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`items with boolean schemas, array with two items is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`items and subitems, too many items`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`items and subitems, too many sub-items`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`items and subitems, wrong item`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`items and subitems, wrong sub-item`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`maxItems validation, too long is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`maxLength validation, too long is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`maxProperties validation, too long is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`maxProperties = 0 means the object is empty, one property is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`maximum validation, above the maximum is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`maximum validation with unsigned integer, above the maximum is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`minItems validation, too short is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`minLength validation, too short is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`minLength validation, one supplementary Unicode code point is not long enough`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`minProperties validation, too short is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`minimum validation, below the minimum is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`minimum validation with signed integer, float below the minimum is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`minimum validation with signed integer, int below the minimum is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`by int, int by int fail`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`by number, 35 is not multiple of 1.5`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`by small number, 0.00751 is not multiple of 0.0001`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`invalid instance should not raise error when float division = inf, always invalid, but naive implementations may raise an overflow error`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`not, disallowed`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`not multiple types, mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`not multiple types, other mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`not more complex schema, mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`forbidden property, property present`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`not with boolean schema true, any value is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf, both oneOf valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf, neither oneOf valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with base schema, mismatch base schema`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with base schema, both oneOf valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with boolean schemas, all true, any value is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with boolean schemas, more than one true, any value is invalid`|Expected result: `false` but validator returned: `true`
`oneOf with boolean schemas, all false, any value is invalid`|Expected result: `false` but validator returned: `true`
`oneOf complex types, both oneOf valid (complex)`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf complex types, neither oneOf valid (complex)`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with empty schema, both valid - invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with required, both invalid - invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with required, both valid - invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with missing optional property, both oneOf valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with missing optional property, neither oneOf valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`nested oneOf, to check validation semantics, null is valid`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`nested oneOf, to check validation semantics, anything non-null is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`string, a bignum is not a string`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`float comparison with high precision, comparison works for high numbers`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`float comparison with high precision on negative numbers, comparison works for very negative numbers`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of string-encoded content based on media type, an invalid JSON document`|Expected result: `false` but validator returned: `true`
`validation of binary string-encoding, an invalid base64 string (% is not a valid character)`|Expected result: `false` but validator returned: `true`
`validation of binary-encoded media type documents, a validly-encoded invalid JSON document`|Expected result: `false` but validator returned: `true`
`validation of binary-encoded media type documents, an invalid base64 string that is valid JSON`|Expected result: `false` but validator returned: `true`
`ECMA 262 regex $ does not match trailing newline, matches in Python, but should not in jsonschema`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`ECMA 262 regex converts \t to horizontal tab, does not match`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`ECMA 262 regex escapes control codes with \c and upper letter, does not match`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`ECMA 262 regex escapes control codes with \c and lower letter, does not match`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`ECMA 262 \d matches ascii digits only, NKO DIGIT ZERO does not match (unlike e.g. Python)`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`ECMA 262 \d matches ascii digits only, NKO DIGIT ZERO (as \u escape) does not match`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`ECMA 262 \D matches everything but ascii digits, ASCII zero does not match`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`ECMA 262 \w matches ascii letters only, latin-1 e-acute does not match (unlike e.g. Python)`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`ECMA 262 \W matches everything but ascii letters, ASCII 'a' does not match`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`ECMA 262 \s matches whitespace, Non-whitespace control does not match`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`ECMA 262 \s matches whitespace, Non-whitespace does not match`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`ECMA 262 \S matches everything but whitespace, ASCII space does not match`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`ECMA 262 \S matches everything but whitespace, Character tabulation does not match`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`ECMA 262 \S matches everything but whitespace, Line tabulation does not match`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`ECMA 262 \S matches everything but whitespace, Form feed does not match`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`ECMA 262 \S matches everything but whitespace, latin-1 non-breaking-space does not match`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`ECMA 262 \S matches everything but whitespace, zero-width whitespace does not match`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`ECMA 262 \S matches everything but whitespace, line feed does not match (line terminator)`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`ECMA 262 \S matches everything but whitespace, paragraph separator does not match (line terminator)`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`ECMA 262 \S matches everything but whitespace, EM SPACE does not match (Space_Separator)`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of date-time strings, a invalid day in date-time string`|Expected result: `false` but validator returned: `true`
`validation of date-time strings, an invalid offset in date-time string`|Expected result: `false` but validator returned: `true`
`validation of date-time strings, an invalid date-time string`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of date-time strings, only RFC3339 not all of ISO 8601 are valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of date-time strings, invalid non-padded month dates`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of date-time strings, invalid non-padded day dates`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of date strings, an invalid date-time string`|Expected result: `false` but validator returned: `true`
`validation of date strings, only RFC3339 not all of ISO 8601 are valid`|Expected result: `false` but validator returned: `true`
`validation of date strings, invalidates non-padded month dates`|Expected result: `false` but validator returned: `true`
`validation of date strings, invalidates non-padded day dates`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, an invalid e-mail address`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of e-mail addresses, dot before local part is not valid`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, dot after local part is not valid`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, two subsequent dots inside local part are not valid`|Expected result: `false` but validator returned: `true`
`validation of host names, a host name starting with an illegal character`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, a host name containing illegal characters`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, a host name with a component too long`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, starts with hyphen`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, ends with hyphen`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, starts with underscore`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, ends with underscore`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, contains underscore`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, exceeds maximum label length`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of an internationalized e-mail addresses, an invalid idn e-mail address`|Expected result: `false` but validator returned: `true`
`validation of an internationalized e-mail addresses, an invalid e-mail address`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, illegal first char U+302E Hangul single dot tone mark`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, contains illegal char U+302E Hangul single dot tone mark`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, a host name with a component too long`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, invalid label, correct Punycode`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, invalid Punycode`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, U-label contains "--" in the 3rd and 4th position`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, U-label starts with a dash`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, U-label ends with a dash`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, U-label starts and ends with a dash`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Begins with a Spacing Combining Mark`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Begins with a Nonspacing Mark`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Begins with an Enclosing Mark`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Exceptions that are DISALLOWED, right-to-left chars`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Exceptions that are DISALLOWED, left-to-right chars`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, MIDDLE DOT with no preceding 'l'`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, MIDDLE DOT with nothing preceding`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, MIDDLE DOT with no following 'l'`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, MIDDLE DOT with nothing following`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Greek KERAIA not followed by Greek`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Greek KERAIA not followed by anything`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Hebrew GERESH not preceded by Hebrew`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Hebrew GERESH not preceded by anything`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Hebrew GERSHAYIM not preceded by Hebrew`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Hebrew GERSHAYIM not preceded by anything`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, KATAKANA MIDDLE DOT with no Hiragana, Katakana, or Han`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, KATAKANA MIDDLE DOT with no other characters`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Arabic-Indic digits mixed with Extended Arabic-Indic digits`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, ZERO WIDTH JOINER not preceded by Virama`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, ZERO WIDTH JOINER not preceded by anything`|Expected result: `false` but validator returned: `true`
`validation of IP addresses, an IP address with too many components`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IP addresses, an IP address with out-of-range values`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IP addresses, an IP address without 4 components`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IP addresses, an IP address as an integer`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IP addresses, an IP address as an integer (decimal)`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, an IPv6 address with out-of-range values`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, an IPv6 address with too many components`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, an IPv6 address containing illegal characters`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, missing leading octet is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, missing trailing octet is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, missing leading octet with omitted octets later`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, two sets of double colons is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, mixed format with ipv4 section with octet out of range`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, mixed format with ipv4 section with a hex octet`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, triple colons is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, insufficient octets without double colons`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, no colons is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, ipv4 is not ipv6`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, ipv4 segment must have 4 octets`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, leading whitespace is invalid`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, trailing whitespace is invalid`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, netmask is not a part of ipv6 address`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, zone id is not a part of ipv6 address`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, a long invalid ipv6, below length limit, first`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, a long invalid ipv6, below length limit, second`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IRI References, an invalid IRI Reference`|Expected result: `false` but validator returned: `true`
`validation of IRI References, an invalid IRI fragment`|Expected result: `false` but validator returned: `true`
`validation of IRIs, an invalid IRI based on IPv6`|Expected result: `false` but validator returned: `true`
`validation of IRIs, an invalid relative IRI Reference`|Expected result: `false` but validator returned: `true`
`validation of IRIs, an invalid IRI`|Expected result: `false` but validator returned: `true`
`validation of IRIs, an invalid IRI though valid IRI reference`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (~ not escaped)`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (URI Fragment Identifier) #1`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (URI Fragment Identifier) #2`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (URI Fragment Identifier) #3`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (some escaped, but not all) #1`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (some escaped, but not all) #2`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (wrong escape character) #1`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (wrong escape character) #2`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (multiple characters not escaped)`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (isn't empty nor starts with /) #1`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (isn't empty nor starts with /) #2`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (isn't empty nor starts with /) #3`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of regular expressions, a regular expression with unclosed parens is invalid`|Expected result: `false` but validator returned: `true`
`validation of Relative JSON Pointers (RJP), an invalid RJP that is a valid JSON Pointer`|Expected result: `false` but validator returned: `true`
`validation of Relative JSON Pointers (RJP), negative prefix`|Expected result: `false` but validator returned: `true`
`validation of time strings, an invalid time string`|Expected result: `false` but validator returned: `true`
`validation of time strings, only RFC3339 not all of ISO 8601 are valid`|Expected result: `false` but validator returned: `true`
`validation of URI References, an invalid URI Reference`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of URI References, an invalid URI fragment`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`format: uri-template, an invalid uri-template`|Expected result: `false` but validator returned: `true`
`validation of URIs, an invalid protocol-relative URI Reference`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of URIs, an invalid relative URI Reference`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of URIs, an invalid URI`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of URIs, an invalid URI though valid URI reference`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of URIs, an invalid URI with spaces`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of URIs, an invalid URI with spaces and missing scheme`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of URIs, an invalid URI with comma in scheme`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`Proper UTF-16 surrogate pair handling: pattern, doesn't match one`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`Proper UTF-16 surrogate pair handling: pattern, doesn't match two`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`Proper UTF-16 surrogate pair handling: pattern, doesn't match one ASCII`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`Proper UTF-16 surrogate pair handling: pattern, doesn't match two ASCII`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`Proper UTF-16 surrogate pair handling: patternProperties, doesn't match two`|Expected result: `false` but validator returned: `true`
`pattern validation, a non-matching pattern is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`pattern validation, ignores null`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`patternProperties with boolean schemas, object with property matching schema false is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`patternProperties with boolean schemas, object with both properties is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`patternProperties with boolean schemas, object with a property matching both true and false is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`properties, patternProperties, additionalProperties interaction, additionalProperty validates others`|Expected result: `true` but validator returned: `"Cannot read properties of undefined (reading 'format')"`. **This excludes this validator from performance tests**
`properties, patternProperties, additionalProperties interaction, additionalProperty invalidates others`|Expected result: `false` but validator returned: `"Cannot read properties of undefined (reading 'format')"`. **This excludes this validator from performance tests**
`properties with boolean schema, only 'false' property present is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`properties with boolean schema, both properties present is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`propertyNames validation, some property names invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`propertyNames with boolean schema false, object with any properties is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`root pointer ref, recursive mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`relative pointer ref to object, mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`relative pointer ref to array, mismatch array`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`escaped pointer ref, slash invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`escaped pointer ref, tilde invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`escaped pointer ref, percent invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`nested refs, nested ref invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`ref overrides any sibling keywords, ref valid, maxItems ignored`|Expected result: `true` but validator returned: `false`
`ref overrides any sibling keywords, ref invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`remote ref, containing refs itself, remote ref invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`property named $ref, containing an actual $ref, property named $ref invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`$ref to boolean schema false, any value is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`Recursive references between schemas, invalid tree`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`refs with quote, object with strings is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`Location-independent identifier, mismatch`|Expected result: `false` but validator returned: `true`
`Location-independent identifier with absolute URI, mismatch`|Expected result: `false` but validator returned: `true`
`Location-independent identifier with base URI change in subschema, mismatch`|Expected result: `false` but validator returned: `true`
`naive replacement of $ref with its destination is not correct, do not evaluate the $ref inside the enum`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`remote ref, remote ref invalid`|Expected result: `false` but validator returned: `true`
`fragment within remote ref, remote fragment invalid`|Expected result: `false` but validator returned: `true`
`ref within remote ref, ref within ref invalid`|Expected result: `false` but validator returned: `true`
`base URI change, base URI change ref invalid`|Expected result: `false` but validator returned: `true`
`base URI change - change folder, string is invalid`|Expected result: `false` but validator returned: `true`
`base URI change - change folder in subschema, string is invalid`|Expected result: `false` but validator returned: `true`
`root ref in remote ref, object is invalid`|Expected result: `false` but validator returned: `true`
`required validation, non-present required property is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`required with escaped characters, object with some properties missing is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`integer type matches integers, a float is not an integer`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`integer type matches integers, a string is not an integer`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`integer type matches integers, a string is still not an integer, even if it looks like one`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`integer type matches integers, an object is not an integer`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`integer type matches integers, an array is not an integer`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`integer type matches integers, a boolean is not an integer`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`integer type matches integers, null is not an integer`|Expected result: `false` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`number type matches numbers, a string is not a number`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`number type matches numbers, a string is still not a number, even if it looks like one`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`number type matches numbers, an object is not a number`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`number type matches numbers, an array is not a number`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`number type matches numbers, a boolean is not a number`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`number type matches numbers, null is not a number`|Expected result: `false` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`string type matches strings, 1 is not a string`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`string type matches strings, a float is not a string`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`string type matches strings, an object is not a string`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`string type matches strings, an array is not a string`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`string type matches strings, a boolean is not a string`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`string type matches strings, null is not a string`|Expected result: `false` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`object type matches objects, an integer is not an object`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`object type matches objects, a float is not an object`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`object type matches objects, a string is not an object`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`object type matches objects, an array is not an object`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`object type matches objects, a boolean is not an object`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`object type matches objects, null is not an object`|Expected result: `false` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`boolean type matches booleans, an integer is not a boolean`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean type matches booleans, zero is not a boolean`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean type matches booleans, a float is not a boolean`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean type matches booleans, a string is not a boolean`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean type matches booleans, an empty string is not a boolean`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean type matches booleans, an object is not a boolean`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean type matches booleans, an array is not a boolean`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean type matches booleans, null is not a boolean`|Expected result: `false` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`null type matches only the null object, an integer is not null`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`null type matches only the null object, a float is not null`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`null type matches only the null object, zero is not null`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`null type matches only the null object, a string is not null`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`null type matches only the null object, an empty string is not null`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`null type matches only the null object, an object is not null`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`null type matches only the null object, an array is not null`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`null type matches only the null object, true is not null`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`null type matches only the null object, false is not null`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`null type matches only the null object, null is null`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`multiple types can be specified in an array, a float is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`multiple types can be specified in an array, an object is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`multiple types can be specified in an array, an array is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`multiple types can be specified in an array, a boolean is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`multiple types can be specified in an array, null is invalid`|Expected result: `false` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`type as array with one item, number is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`type: array or object, number is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`type: array or object, string is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`type: array or object, null is invalid`|Expected result: `false` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`type: array, object or null, null is valid`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`type: array, object or null, number is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`type: array, object or null, string is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems validation, non-unique array of integers is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems validation, numbers are unique if mathematically unequal`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems validation, non-unique array of objects is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems validation, non-unique array of nested objects is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems validation, non-unique array of arrays is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems validation, non-unique heterogeneous types are invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems validation, objects are non-unique despite key order`|Expected result: `false` but validator returned: `true`
`uniqueItems with an array of items, [false, false] from items array is not valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems with an array of items, [true, true] from items array is not valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems with an array of items, non-unique array extended from [false, true] is not valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems with an array of items, non-unique array extended from [true, false] is not valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems with an array of items and additionalItems=false, [false, false] from items array is not valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems with an array of items and additionalItems=false, [true, true] from items array is not valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems with an array of items and additionalItems=false, extra items are invalid even if unique`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems=false with an array of items and additionalItems=false, extra items are invalid even if unique`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)