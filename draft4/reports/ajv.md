# [`ajv`](https://ajv.js.org) - test summary

# All validators fail this test

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`ajv`](https://ajv.js.org) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`ajv`](https://ajv.js.org) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`valid definition, valid definition schema`|The schema failed to load(`can't resolve reference http://json-schema.org/draft-04/schema# from id #`)
`invalid definition, invalid definition schema`|The schema failed to load(`can't resolve reference http://json-schema.org/draft-04/schema# from id #`)
`maximum validation (explicit false exclusivity), below the maximum is valid`|The schema failed to load(`schema is invalid: data/exclusiveMaximum must be number`). **This excludes this validator from performance tests**
`maximum validation (explicit false exclusivity), boundary point is valid`|The schema failed to load(`schema is invalid: data/exclusiveMaximum must be number`). **This excludes this validator from performance tests**
`maximum validation (explicit false exclusivity), above the maximum is invalid`|The schema failed to load(`schema is invalid: data/exclusiveMaximum must be number`). **This excludes this validator from performance tests**
`maximum validation (explicit false exclusivity), ignores non-numbers`|The schema failed to load(`schema is invalid: data/exclusiveMaximum must be number`). **This excludes this validator from performance tests**
`exclusiveMaximum validation, below the maximum is still valid`|The schema failed to load(`schema is invalid: data/exclusiveMaximum must be number`). **This excludes this validator from performance tests**
`exclusiveMaximum validation, boundary point is invalid`|The schema failed to load(`schema is invalid: data/exclusiveMaximum must be number`). **This excludes this validator from performance tests**
`minimum validation (explicit false exclusivity), above the minimum is valid`|The schema failed to load(`schema is invalid: data/exclusiveMinimum must be number`). **This excludes this validator from performance tests**
`minimum validation (explicit false exclusivity), boundary point is valid`|The schema failed to load(`schema is invalid: data/exclusiveMinimum must be number`). **This excludes this validator from performance tests**
`minimum validation (explicit false exclusivity), below the minimum is invalid`|The schema failed to load(`schema is invalid: data/exclusiveMinimum must be number`). **This excludes this validator from performance tests**
`minimum validation (explicit false exclusivity), ignores non-numbers`|The schema failed to load(`schema is invalid: data/exclusiveMinimum must be number`). **This excludes this validator from performance tests**
`exclusiveMinimum validation, above the minimum is still valid`|The schema failed to load(`schema is invalid: data/exclusiveMinimum must be number`). **This excludes this validator from performance tests**
`exclusiveMinimum validation, boundary point is invalid`|The schema failed to load(`schema is invalid: data/exclusiveMinimum must be number`). **This excludes this validator from performance tests**
`float comparison with high precision, comparison works for high numbers`|The schema failed to load(`schema is invalid: data/exclusiveMaximum must be number`). **This excludes this validator from performance tests**
`float comparison with high precision on negative numbers, comparison works for very negative numbers`|The schema failed to load(`schema is invalid: data/exclusiveMinimum must be number`). **This excludes this validator from performance tests**
`all integers are multiples of 0.5, if overflow is handled, valid if optional overflow handling is implemented`|Expected result: `true` but validator returned: `false`
`ref overrides any sibling keywords, ref valid, maxItems ignored`|Expected result: `true` but validator returned: `false`
`remote ref, containing refs itself, remote ref valid`|The schema failed to load(`can't resolve reference http://json-schema.org/draft-04/schema# from id #`)
`remote ref, containing refs itself, remote ref invalid`|The schema failed to load(`can't resolve reference http://json-schema.org/draft-04/schema# from id #`)
`Recursive references between schemas, valid tree`|The schema failed to load(`NOT SUPPORTED: keyword "id", use "$id" for schema ID`)
`Recursive references between schemas, invalid tree`|The schema failed to load(`NOT SUPPORTED: keyword "id", use "$id" for schema ID`)
`Location-independent identifier, match`|The schema failed to load(`can't resolve reference #foo from id #`). **This excludes this validator from performance tests**
`Location-independent identifier, mismatch`|The schema failed to load(`can't resolve reference #foo from id #`). **This excludes this validator from performance tests**
`Location-independent identifier with absolute URI, match`|The schema failed to load(`can't resolve reference http://localhost:1234/bar#foo from id #`)
`Location-independent identifier with absolute URI, mismatch`|The schema failed to load(`can't resolve reference http://localhost:1234/bar#foo from id #`). **This excludes this validator from performance tests**
`Location-independent identifier with base URI change in subschema, match`|The schema failed to load(`NOT SUPPORTED: keyword "id", use "$id" for schema ID`)
`Location-independent identifier with base URI change in subschema, mismatch`|The schema failed to load(`NOT SUPPORTED: keyword "id", use "$id" for schema ID`)
`remote ref, remote ref valid`|The schema failed to load(`can't resolve reference http://localhost:1234/integer.json from id #`). **This excludes this validator from performance tests**
`remote ref, remote ref invalid`|The schema failed to load(`can't resolve reference http://localhost:1234/integer.json from id #`). **This excludes this validator from performance tests**
`fragment within remote ref, remote fragment valid`|The schema failed to load(`can't resolve reference http://localhost:1234/subSchemas.json#/integer from id #`). **This excludes this validator from performance tests**
`fragment within remote ref, remote fragment invalid`|The schema failed to load(`can't resolve reference http://localhost:1234/subSchemas.json#/integer from id #`). **This excludes this validator from performance tests**
`ref within remote ref, ref within ref valid`|The schema failed to load(`can't resolve reference http://localhost:1234/subSchemas.json#/refToInteger from id #`)
`ref within remote ref, ref within ref invalid`|The schema failed to load(`can't resolve reference http://localhost:1234/subSchemas.json#/refToInteger from id #`)
`base URI change, base URI change ref valid`|The schema failed to load(`NOT SUPPORTED: keyword "id", use "$id" for schema ID`). **This excludes this validator from performance tests**
`base URI change, base URI change ref invalid`|The schema failed to load(`NOT SUPPORTED: keyword "id", use "$id" for schema ID`)
`base URI change - change folder, number is valid`|The schema failed to load(`NOT SUPPORTED: keyword "id", use "$id" for schema ID`)
`base URI change - change folder, string is invalid`|The schema failed to load(`NOT SUPPORTED: keyword "id", use "$id" for schema ID`)
`base URI change - change folder in subschema, number is valid`|The schema failed to load(`NOT SUPPORTED: keyword "id", use "$id" for schema ID`)
`base URI change - change folder in subschema, string is invalid`|The schema failed to load(`NOT SUPPORTED: keyword "id", use "$id" for schema ID`)
`root ref in remote ref, string is valid`|The schema failed to load(`NOT SUPPORTED: keyword "id", use "$id" for schema ID`)
`root ref in remote ref, null is valid`|The schema failed to load(`NOT SUPPORTED: keyword "id", use "$id" for schema ID`). **This excludes this validator from performance tests**
`root ref in remote ref, object is invalid`|The schema failed to load(`NOT SUPPORTED: keyword "id", use "$id" for schema ID`)

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)