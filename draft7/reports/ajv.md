# [`ajv`](https://ajv.js.org) - test summary


# [`ajv`](https://ajv.js.org) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`ajv`](https://ajv.js.org) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`validation of string-encoded content based on media type, an invalid JSON document`|Expected result: `false` but validator returned: `true`
`validation of binary string-encoding, an invalid base64 string (% is not a valid character)`|Expected result: `false` but validator returned: `true`
`validation of binary-encoded media type documents, a validly-encoded invalid JSON document`|Expected result: `false` but validator returned: `true`
`validation of binary-encoded media type documents, an invalid base64 string that is valid JSON`|Expected result: `false` but validator returned: `true`
`all integers are multiples of 0.5, if overflow is handled, valid if optional overflow handling is implemented`|Expected result: `true` but validator returned: `false`
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
`validation of IRI References, an invalid IRI Reference`|Expected result: `false` but validator returned: `true`
`validation of IRI References, an invalid IRI fragment`|Expected result: `false` but validator returned: `true`
`validation of IRIs, an invalid IRI based on IPv6`|Expected result: `false` but validator returned: `true`
`validation of IRIs, an invalid relative IRI Reference`|Expected result: `false` but validator returned: `true`
`validation of IRIs, an invalid IRI`|Expected result: `false` but validator returned: `true`
`validation of IRIs, an invalid IRI though valid IRI reference`|Expected result: `false` but validator returned: `true`
`ref overrides any sibling keywords, ref valid, maxItems ignored`|Expected result: `true` but validator returned: `false`
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