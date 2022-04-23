# [`jjv`](https://github.com/acornejo/jjv) - test summary


# [`jjv`](https://github.com/acornejo/jjv) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`jjv`](https://github.com/acornejo/jjv) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`additionalItems should not look in applicators, valid case, items defined in allOf are not examined`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`additionalProperties being false does not allow other properties, ignores strings`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`allOf with boolean schemas, some false, any value is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf with boolean schemas, all false, any value is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`anyOf with boolean schemas, all false, any value is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean schema 'false', number is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean schema 'false', string is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean schema 'false', boolean true is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean schema 'false', boolean false is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean schema 'false', null is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
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
`contains keyword validation, array without items matching schema is invalid`|Expected result: `false` but validator returned: `true`
`contains keyword validation, empty array is invalid`|Expected result: `false` but validator returned: `true`
`contains keyword with const keyword, array without item 5 is invalid`|Expected result: `false` but validator returned: `true`
`contains keyword with boolean schema true, empty array is invalid`|Expected result: `false` but validator returned: `true`
`contains keyword with boolean schema false, any non-empty array is invalid`|Expected result: `false` but validator returned: `true`
`contains keyword with boolean schema false, empty array is invalid`|Expected result: `false` but validator returned: `true`
`items + contains, matches items, does not match contains`|Expected result: `false` but validator returned: `true`
`dependencies with boolean subschemas, object with property having schema false is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`dependencies with boolean subschemas, object with both properties is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`exclusiveMaximum validation, boundary point is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`exclusiveMaximum validation, above the exclusiveMaximum is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`exclusiveMinimum validation, boundary point is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`exclusiveMinimum validation, below the exclusiveMinimum is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of e-mail addresses, ignores integers`|Expected result: `true` but validator returned: `false`
`validation of e-mail addresses, ignores floats`|Expected result: `true` but validator returned: `false`
`validation of e-mail addresses, ignores objects`|Expected result: `true` but validator returned: `false`
`validation of e-mail addresses, ignores arrays`|Expected result: `true` but validator returned: `false`
`validation of e-mail addresses, ignores booleans`|Expected result: `true` but validator returned: `false`
`validation of e-mail addresses, ignores null`|Expected result: `true` but validator returned: `false`
`validation of IP addresses, ignores integers`|Expected result: `true` but validator returned: `false`
`validation of IP addresses, ignores floats`|Expected result: `true` but validator returned: `false`
`validation of IP addresses, ignores objects`|Expected result: `true` but validator returned: `false`
`validation of IP addresses, ignores arrays`|Expected result: `true` but validator returned: `false`
`validation of IP addresses, ignores booleans`|Expected result: `true` but validator returned: `false`
`validation of IP addresses, ignores null`|Expected result: `true` but validator returned: `false`
`validation of IPv6 addresses, ignores integers`|Expected result: `true` but validator returned: `false`
`validation of IPv6 addresses, ignores floats`|Expected result: `true` but validator returned: `false`
`validation of IPv6 addresses, ignores objects`|Expected result: `true` but validator returned: `false`
`validation of IPv6 addresses, ignores arrays`|Expected result: `true` but validator returned: `false`
`validation of IPv6 addresses, ignores booleans`|Expected result: `true` but validator returned: `false`
`validation of IPv6 addresses, ignores null`|Expected result: `true` but validator returned: `false`
`validation of hostnames, ignores integers`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of hostnames, ignores floats`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of hostnames, ignores objects`|Expected result: `true` but validator returned: `false`
`validation of hostnames, ignores arrays`|Expected result: `true` but validator returned: `false`
`validation of hostnames, ignores booleans`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of hostnames, ignores null`|Expected result: `true` but validator returned: `"Cannot read property 'length' of null"`
`validation of date-time strings, ignores integers`|Expected result: `true` but validator returned: `"v.indexOf is not a function"`
`validation of date-time strings, ignores floats`|Expected result: `true` but validator returned: `false`
`validation of date-time strings, ignores objects`|Expected result: `true` but validator returned: `false`
`validation of date-time strings, ignores arrays`|Expected result: `true` but validator returned: `false`
`validation of date-time strings, ignores booleans`|Expected result: `true` but validator returned: `false`
`validation of date-time strings, ignores null`|Expected result: `true` but validator returned: `false`
`validation of URIs, ignores integers`|Expected result: `true` but validator returned: `false`
`validation of URIs, ignores floats`|Expected result: `true` but validator returned: `false`
`validation of URIs, ignores objects`|Expected result: `true` but validator returned: `false`
`validation of URIs, ignores arrays`|Expected result: `true` but validator returned: `false`
`validation of URIs, ignores booleans`|Expected result: `true` but validator returned: `false`
`validation of URIs, ignores null`|Expected result: `true` but validator returned: `false`
`if and then without else, invalid through then`|Expected result: `false` but validator returned: `true`
`if and else without then, invalid through else`|Expected result: `false` but validator returned: `true`
`validate against correct branch, then vs else, invalid through then`|Expected result: `false` but validator returned: `true`
`validate against correct branch, then vs else, invalid through else`|Expected result: `false` but validator returned: `true`
`if with boolean schema true, boolean schema true in if always chooses the then path (invalid)`|Expected result: `false` but validator returned: `true`
`if with boolean schema false, boolean schema false in if always chooses the else path (invalid)`|Expected result: `false` but validator returned: `true`
`if appears at the end when serialized (keyword processing sequence), no redirects to then and fails`|Expected result: `false` but validator returned: `true`
`if appears at the end when serialized (keyword processing sequence), invalid redirects to else and fails`|Expected result: `false` but validator returned: `true`
`an array of schemas for items, incomplete array of items`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`an array of schemas for items, empty array`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`items with boolean schema (false), any non-empty array is invalid`|Expected result: `false` but validator returned: `true`
`items with boolean schemas, array with two items is invalid`|Expected result: `false` but validator returned: `true`
`items and subitems, fewer items is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`maxLength validation, two supplementary Unicode code points is long enough`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`maxProperties validation, ignores arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`minLength validation, one supplementary Unicode code point is not long enough`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`minProperties validation, ignores arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`not with boolean schema false, any value is valid`|Expected result: `true` but validator returned: `false`
`oneOf with boolean schemas, one true, any value is valid`|Expected result: `true` but validator returned: `false`
`float comparison with high precision, comparison works for high numbers`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`float comparison with high precision on negative numbers, comparison works for very negative numbers`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of string-encoded content based on media type, an invalid JSON document`|Expected result: `false` but validator returned: `true`
`validation of binary string-encoding, an invalid base64 string (% is not a valid character)`|Expected result: `false` but validator returned: `true`
`validation of binary-encoded media type documents, a validly-encoded invalid JSON document`|Expected result: `false` but validator returned: `true`
`validation of binary-encoded media type documents, an invalid base64 string that is valid JSON`|Expected result: `false` but validator returned: `true`
`all integers are multiples of 0.5, if overflow is handled, valid if optional overflow handling is implemented`|Expected result: `true` but validator returned: `false`
`validation of date strings, an invalid date-time string`|Expected result: `false` but validator returned: `true`
`validation of date strings, only RFC3339 not all of ISO 8601 are valid`|Expected result: `false` but validator returned: `true`
`validation of date strings, invalidates non-padded month dates`|Expected result: `false` but validator returned: `true`
`validation of date strings, invalidates non-padded day dates`|Expected result: `false` but validator returned: `true`
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
`validation of IPv6 addresses, leading colons is valid`|Expected result: `true` but validator returned: `false`
`validation of IPv6 addresses, trailing colons is valid`|Expected result: `true` but validator returned: `false`
`validation of IPv6 addresses, mixed format with the ipv4 section as decimal octets`|Expected result: `true` but validator returned: `false`
`validation of IPv6 addresses, mixed format with leading double colons (ipv4-mapped ipv6 address)`|Expected result: `true` but validator returned: `false`
`validation of IRI References, an invalid IRI Reference`|Expected result: `false` but validator returned: `true`
`validation of IRI References, an invalid IRI fragment`|Expected result: `false` but validator returned: `true`
`validation of IRIs, an invalid IRI based on IPv6`|Expected result: `false` but validator returned: `true`
`validation of IRIs, an invalid relative IRI Reference`|Expected result: `false` but validator returned: `true`
`validation of IRIs, an invalid IRI`|Expected result: `false` but validator returned: `true`
`validation of IRIs, an invalid IRI though valid IRI reference`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (~ not escaped)`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (URI Fragment Identifier) #1`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (URI Fragment Identifier) #2`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (URI Fragment Identifier) #3`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (some escaped, but not all) #1`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (some escaped, but not all) #2`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (wrong escape character) #1`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (wrong escape character) #2`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (multiple characters not escaped)`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (isn't empty nor starts with /) #1`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (isn't empty nor starts with /) #2`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (isn't empty nor starts with /) #3`|Expected result: `false` but validator returned: `true`
`validation of regular expressions, a regular expression with unclosed parens is invalid`|Expected result: `false` but validator returned: `true`
`validation of Relative JSON Pointers (RJP), an invalid RJP that is a valid JSON Pointer`|Expected result: `false` but validator returned: `true`
`validation of Relative JSON Pointers (RJP), negative prefix`|Expected result: `false` but validator returned: `true`
`validation of time strings, an invalid time string`|Expected result: `false` but validator returned: `true`
`validation of time strings, only RFC3339 not all of ISO 8601 are valid`|Expected result: `false` but validator returned: `true`
`validation of URI References, an invalid URI Reference`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of URI References, an invalid URI fragment`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`format: uri-template, an invalid uri-template`|Expected result: `false` but validator returned: `true`
`validation of URIs, a valid URL based on IPv4`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of URIs, a valid URL `|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of URIs, a valid tel URI`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of URIs, a valid URN`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of URIs, an invalid protocol-relative URI Reference`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of URIs, an invalid URI with spaces`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`Proper UTF-16 surrogate pair handling: pattern, matches empty`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: pattern, matches two`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: patternProperties, doesn't match two`|Expected result: `false` but validator returned: `true`
`patternProperties with boolean schemas, object with property matching schema false is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`patternProperties with boolean schemas, object with both properties is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`patternProperties with boolean schemas, object with a property matching both true and false is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`properties with boolean schema, only 'false' property present is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`properties with boolean schema, both properties present is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`propertyNames validation, some property names invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`propertyNames with boolean schema false, object with any properties is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`escaped pointer ref, slash valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`escaped pointer ref, tilde valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`escaped pointer ref, percent valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`$ref to boolean schema false, any value is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`Recursive references between schemas, valid tree`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`refs with quote, object with numbers is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`Location-independent identifier, match`|Expected result: `true` but validator returned: `false`
`Location-independent identifier with absolute URI, match`|Expected result: `true` but validator returned: `false`
`Location-independent identifier with base URI change in subschema, match`|Expected result: `true` but validator returned: `false`
`base URI change, base URI change ref valid`|Expected result: `true` but validator returned: `false`
`base URI change - change folder, number is valid`|Expected result: `true` but validator returned: `false`
`base URI change - change folder in subschema, number is valid`|Expected result: `true` but validator returned: `false`
`root ref in remote ref, string is valid`|Expected result: `true` but validator returned: `false`
`root ref in remote ref, null is valid`|Expected result: `true` but validator returned: `false`
`required validation, ignores strings`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`required validation, ignores other non-objects`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems validation, objects are non-unique despite key order`|Expected result: `false` but validator returned: `true`
`uniqueItems=false validation, non-unique array of integers is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false validation, numbers are unique if mathematically unequal`|Expected result: `true` but validator returned: `false`
`uniqueItems=false validation, non-unique array of objects is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false validation, non-unique array of nested objects is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false validation, non-unique array of arrays is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false validation, non-unique heterogeneous types are valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false with an array of items, [false, false] from items array is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false with an array of items, [true, true] from items array is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false with an array of items, non-unique array extended from [false, true] is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false with an array of items, non-unique array extended from [true, false] is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false with an array of items and additionalItems=false, [false, false] from items array is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false with an array of items and additionalItems=false, [true, true] from items array is valid`|Expected result: `true` but validator returned: `false`

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)