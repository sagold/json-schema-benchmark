# [`json-schema-library`](https://github.com/sagold/json-schema-library) - test summary

# All validators fail this test

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`json-schema-library`](https://github.com/sagold/json-schema-library) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`json-schema-library`](https://github.com/sagold/json-schema-library) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`valid definition, valid definition schema`|Expected result: `true` but validator returned: `"Cannot read properties of undefined (reading 'const')"`
`invalid definition, invalid definition schema`|Expected result: `false` but validator returned: `"Cannot read properties of undefined (reading 'const')"`
`all integers are multiples of 0.5, if overflow is handled, valid if optional overflow handling is implemented`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: patternProperties, doesn't match two`|Expected result: `false` but validator returned: `true`
`remote ref, containing refs itself, remote ref valid`|Expected result: `true` but validator returned: `"Cannot read properties of undefined (reading 'const')"`
`remote ref, containing refs itself, remote ref invalid`|Expected result: `false` but validator returned: `"Cannot read properties of undefined (reading 'const')"`

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)