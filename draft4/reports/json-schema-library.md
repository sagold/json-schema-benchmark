# [`json-schema-library`](https://github.com/sagold/json-schema-library) - test summary

# All validators fail this test

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`json-schema-library`](https://github.com/sagold/json-schema-library) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`json-schema-library`](https://github.com/sagold/json-schema-library) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`additionalItems as schema, additional items do not match schema`|Expected result: `false` but validator returned: `true`
`array of items with no additionalItems, additional items are not permitted`|Expected result: `false` but validator returned: `true`
`additionalItems should not look in applicators, invalid case, items defined in allOf are not examined`|Expected result: `false` but validator returned: `true`
`invalid definition, invalid definition schema`|Expected result: `false` but validator returned: `true`
`an array of schemas for items, wrong types`|Expected result: `false` but validator returned: `true`
`items and subitems, too many items`|Expected result: `false` but validator returned: `true`
`items and subitems, too many sub-items`|Expected result: `false` but validator returned: `true`
`items and subitems, wrong item`|Expected result: `false` but validator returned: `true`
`items and subitems, wrong sub-item`|Expected result: `false` but validator returned: `true`
`all integers are multiples of 0.5, if overflow is handled, valid if optional overflow handling is implemented`|Expected result: `true` but validator returned: `false`
`relative pointer ref to array, mismatch array`|Expected result: `false` but validator returned: `true`
`ref overrides any sibling keywords, ref valid, maxItems ignored`|Expected result: `true` but validator returned: `false`
`remote ref, containing refs itself, remote ref invalid`|Expected result: `false` but validator returned: `true`
`Recursive references between schemas, invalid tree`|Expected result: `false` but validator returned: `true`
`Location-independent identifier, mismatch`|Expected result: `false` but validator returned: `true`
`Location-independent identifier with absolute URI, mismatch`|Expected result: `false` but validator returned: `true`
`Location-independent identifier with base URI change in subschema, mismatch`|Expected result: `false` but validator returned: `true`
`base URI change, base URI change ref invalid`|Expected result: `false` but validator returned: `true`
`base URI change - change folder, string is invalid`|Expected result: `false` but validator returned: `true`
`base URI change - change folder in subschema, string is invalid`|Expected result: `false` but validator returned: `true`
`root ref in remote ref, object is invalid`|Expected result: `false` but validator returned: `true`
`uniqueItems with an array of items and additionalItems=false, extra items are invalid even if unique`|Expected result: `false` but validator returned: `true`
`uniqueItems=false with an array of items and additionalItems=false, extra items are invalid even if unique`|Expected result: `false` but validator returned: `true`

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)