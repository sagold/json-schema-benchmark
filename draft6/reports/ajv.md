# [`ajv`](https://ajv.js.org) - test summary


# [`ajv`](https://ajv.js.org) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`ajv`](https://ajv.js.org) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`valid definition, valid definition schema`|The schema failed to load(`can't resolve reference http://json-schema.org/draft-06/schema# from id #`)
`invalid definition, invalid definition schema`|The schema failed to load(`can't resolve reference http://json-schema.org/draft-06/schema# from id #`)
`all integers are multiples of 0.5, if overflow is handled, valid if optional overflow handling is implemented`|Expected result: `true` but validator returned: `false`
`ref overrides any sibling keywords, ref valid, maxItems ignored`|Expected result: `true` but validator returned: `false`
`remote ref, containing refs itself, remote ref valid`|The schema failed to load(`can't resolve reference http://json-schema.org/draft-06/schema# from id #`)
`remote ref, containing refs itself, remote ref invalid`|The schema failed to load(`can't resolve reference http://json-schema.org/draft-06/schema# from id #`)
`remote ref, remote ref valid`|The schema failed to load(`can't resolve reference http://localhost:1234/integer.json from id #`)
`remote ref, remote ref invalid`|The schema failed to load(`can't resolve reference http://localhost:1234/integer.json from id #`)
`fragment within remote ref, remote fragment valid`|The schema failed to load(`can't resolve reference http://localhost:1234/subSchemas.json#/integer from id #`)
`fragment within remote ref, remote fragment invalid`|The schema failed to load(`can't resolve reference http://localhost:1234/subSchemas.json#/integer from id #`)
`ref within remote ref, ref within ref valid`|The schema failed to load(`can't resolve reference http://localhost:1234/subSchemas.json#/refToInteger from id #`)
`ref within remote ref, ref within ref invalid`|The schema failed to load(`can't resolve reference http://localhost:1234/subSchemas.json#/refToInteger from id #`)
`base URI change, base URI change ref valid`|The schema failed to load(`can't resolve reference folderInteger.json from id http://localhost:1234/baseUriChange/`)
`base URI change, base URI change ref invalid`|The schema failed to load(`can't resolve reference folderInteger.json from id http://localhost:1234/baseUriChange/`)
`base URI change - change folder, number is valid`|The schema failed to load(`can't resolve reference folderInteger.json from id http://localhost:1234/baseUriChangeFolder/`)
`base URI change - change folder, string is invalid`|The schema failed to load(`can't resolve reference folderInteger.json from id http://localhost:1234/baseUriChangeFolder/`)
`base URI change - change folder in subschema, number is valid`|The schema failed to load(`can't resolve reference folderInteger.json from id http://localhost:1234/baseUriChangeFolderInSubschema/`)
`base URI change - change folder in subschema, string is invalid`|The schema failed to load(`can't resolve reference folderInteger.json from id http://localhost:1234/baseUriChangeFolderInSubschema/`)
`root ref in remote ref, string is valid`|The schema failed to load(`can't resolve reference name.json#/definitions/orNull from id http://localhost:1234/object`)
`root ref in remote ref, null is valid`|The schema failed to load(`can't resolve reference name.json#/definitions/orNull from id http://localhost:1234/object`)
`root ref in remote ref, object is invalid`|The schema failed to load(`can't resolve reference name.json#/definitions/orNull from id http://localhost:1234/object`)

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)