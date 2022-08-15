# [`jjv`](https://github.com/acornejo/jjv) - test summary

# All validators fail this test

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`jjv`](https://github.com/acornejo/jjv) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`jjv`](https://github.com/acornejo/jjv) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`additionalItems should not look in applicators, valid case, items defined in allOf are not examined`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`additionalProperties being false does not allow other properties, ignores strings`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`valid definition, valid definition schema`|Expected result: `true` but validator returned: `false`
`validation of e-mail addresses, ignores integers`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of e-mail addresses, ignores floats`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of e-mail addresses, ignores objects`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of e-mail addresses, ignores arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of e-mail addresses, ignores booleans`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of e-mail addresses, ignores null`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IP addresses, ignores integers`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IP addresses, ignores floats`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IP addresses, ignores objects`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IP addresses, ignores arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IP addresses, ignores booleans`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IP addresses, ignores null`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, ignores integers`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, ignores floats`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, ignores objects`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, ignores arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, ignores booleans`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, ignores null`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of hostnames, ignores integers`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of hostnames, ignores floats`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of hostnames, ignores objects`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of hostnames, ignores arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of hostnames, ignores booleans`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of hostnames, ignores null`|Expected result: `true` but validator returned: `"Cannot read properties of null (reading 'length')"`. **This excludes this validator from performance tests**
`validation of date-time strings, ignores integers`|Expected result: `true` but validator returned: `"v.indexOf is not a function"`. **This excludes this validator from performance tests**
`validation of date-time strings, ignores floats`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of date-time strings, ignores objects`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of date-time strings, ignores arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of date-time strings, ignores booleans`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of date-time strings, ignores null`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of URIs, ignores integers`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of URIs, ignores floats`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of URIs, ignores objects`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of URIs, ignores arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of URIs, ignores booleans`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of URIs, ignores null`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`an array of schemas for items, incomplete array of items`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`an array of schemas for items, empty array`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`items and subitems, fewer items is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`maxLength validation, two supplementary Unicode code points is long enough`|Expected result: `true` but validator returned: `false`
`maxProperties validation, ignores arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`minLength validation, one supplementary Unicode code point is not long enough`|Expected result: `false` but validator returned: `true`
`minProperties validation, ignores arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`all integers are multiples of 0.5, if overflow is handled, valid if optional overflow handling is implemented`|Expected result: `true` but validator returned: `false`
`validation of IPv6 addresses, leading colons is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, trailing colons is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, mixed format with the ipv4 section as decimal octets`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, mixed format with leading double colons (ipv4-mapped ipv6 address)`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of URIs, a valid URL based on IPv4`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of URIs, a valid URL `|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of URIs, a valid tel URI`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of URIs, a valid URN`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of URIs, an invalid protocol-relative URI Reference`|Expected result: `false` but validator returned: `true`
`validation of URIs, an invalid URI with spaces`|Expected result: `false` but validator returned: `true`
`Proper UTF-16 surrogate pair handling: pattern, matches empty`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: pattern, matches two`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: patternProperties, doesn't match two`|Expected result: `false` but validator returned: `true`
`escaped pointer ref, slash valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`escaped pointer ref, tilde valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`escaped pointer ref, percent valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`remote ref, containing refs itself, remote ref valid`|Expected result: `true` but validator returned: `false`
`Recursive references between schemas, valid tree`|Expected result: `true` but validator returned: `false`
`refs with quote, object with numbers is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`Location-independent identifier, match`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`Location-independent identifier with absolute URI, match`|Expected result: `true` but validator returned: `false`
`Location-independent identifier with base URI change in subschema, match`|Expected result: `true` but validator returned: `false`
`base URI change, base URI change ref valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`base URI change - change folder, number is valid`|Expected result: `true` but validator returned: `false`
`base URI change - change folder in subschema, number is valid`|Expected result: `true` but validator returned: `false`
`root ref in remote ref, string is valid`|Expected result: `true` but validator returned: `false`
`root ref in remote ref, null is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`required validation, ignores strings`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`required validation, ignores other non-objects`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems validation, objects are non-unique despite key order`|Expected result: `false` but validator returned: `true`
`uniqueItems=false validation, non-unique array of integers is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false validation, numbers are unique if mathematically unequal`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false validation, non-unique array of objects is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false validation, non-unique array of nested objects is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false validation, non-unique array of arrays is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false validation, non-unique heterogeneous types are valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false with an array of items, [false, false] from items array is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false with an array of items, [true, true] from items array is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false with an array of items, non-unique array extended from [false, true] is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false with an array of items, non-unique array extended from [true, false] is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false with an array of items and additionalItems=false, [false, false] from items array is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false with an array of items and additionalItems=false, [true, true] from items array is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)