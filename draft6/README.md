# json-schema-benchmark (draft6)
Performance benchmark for Node.js JSON-schema validators. 

> [2022/04/23] The purpose of [this fork](https://github.com/sagold/json-schema-benchmark) is just to have an updated benchmark result for the current state of supported draft features and their performance. I have no intention on maintaining this repository.
>
> Changes made:
> - updated ajv setup and integrated ajv formats plugin
> - changed default draft to draft 07
> - updated benchmark results

Also tests against [official JSON-schema test suite](https://github.com/json-schema/JSON-Schema-Test-Suite), version draft6. and checks
for validators that cause side-effects on schema or data. The top 6 validators that fail the least tests are included in the benchmark.

[Contribute to these benchmarks](https://github.com/ebdrup/json-schema-benchmark/blob/master/CONTRIBUTING.md)

# Performance

![performance](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=62,4,1&chs=600x416&chxl=-1:|@exodus&#x2F;schemasafe|ajv|djv|@cfworker&#x2F;json-schema|json-schema-library|jsonschema&chd=t:100,70,11.6,4.7,2.2,1)

|Validator|Relative speed|Number of test runs per second|
|---------|:------------:|:----------------------------:|
|[`@exodus/schemasafe`](https://github.com/ExodusMovement/schemasafe)|100%|8696 (± 5.97%)|
|[`ajv`](https://ajv.js.org)|70%|6086 (± 2.72%)|
|[`djv`](https://github.com/korzio/djv#readme)|11.6%|1012 (± 1.9%)|
|[`@cfworker/json-schema`](https://github.com/cfworker/cfworker/tree/master/packages/json-schema/README.md)|4.7%|410 (± 1.11%)|
|[`json-schema-library`](https://github.com/sagold/json-schema-library)|2.2%|190 (± 1.71%)|
|[`jsonschema`](https://github.com/tdegrunt/jsonschema#readme)|1%|89 (± 2.16%)|

884 tests are run in each test run.

Validators tested: [`json-schema-library (6.1.0)`](https://github.com/sagold/json-schema-library), [`@cfworker/json-schema (1.12.4)`](https://github.com/cfworker/cfworker/tree/master/packages/json-schema/README.md), [`@exodus/schemasafe (1.0.0-rc.7)`](https://github.com/ExodusMovement/schemasafe), [`jsonschema (1.4.1)`](https://github.com/tdegrunt/jsonschema#readme), [`ajv (8.11.0)`](https://ajv.js.org), [`djv (2.1.4)`](https://github.com/korzio/djv#readme), [`is-my-json-valid (2.20.6)`](https://github.com/mafintosh/is-my-json-valid#readme), [`jsen (0.6.6)`](https://github.com/bugventure/jsen), [`tv4 (1.3.0)`](https://github.com/geraintluff/tv4), [`z-schema (5.0.3)`](https://github.com/zaggino/z-schema), [`jjv (1.0.2)`](https://github.com/acornejo/jjv), [`jassi (0.1.2)`](https://github.com/iclanzan/jassi), [`themis (1.1.6)`](https://github.com/playlyfe/themis), [`request-validator (0.3.3)`](https://github.com/bugventure/request-validator), [`json-schema-validator-generator (1.1.11)`](https://github.com/danwang/json-schema-validator-generator), [`json-model (0.2.24)`](https://github.com/geraintluff/json-model), [`jsck (0.3.2)`](https://github.com/pandastrike/jsck#readme), [`JSV (4.0.2)`](http://github.com/garycourt/JSV), [`skeemas (1.2.5)`](https://github.com/Prestaul/skeemas#readme), [`schemasaurus (0.7.8)`](https://github.com/AlexeyGrishin/schemasaurus), [`json-gate (0.8.23)`](https://github.com/oferei/json-gate#readme), [`revalidator (0.3.1)`](https://github.com/flatiron/revalidator), 

(validators not in the results above where excluded because of failing tests - see below for details)

[`@exodus/schemasafe`](https://github.com/ExodusMovement/schemasafe) is currently the fastest JSON-schema validator out there.

# Test failure summary

This test suite uses the [official JSON-schema test suite](https://github.com/json-schema/JSON-Schema-Test-Suite), version draft6.

If a validator does not pass a test in the official test suite, it will show up in these results.

![failing tests](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=14,4,1&chs=600x416&chxl=-1:|json-schema-library|@cfworker&#x2F;json-schema|@exodus&#x2F;schemasafe|jsonschema|ajv|djv|is-my-json-valid|jsen|tv4|z-schema|jjv|jassi|themis|request-validator|json-schema-validator-generator|json-model|jsck|JSV|skeemas|schemasaurus|json-gate|revalidator&chd=t:2,4,8,11,21,99,111,141,155,169,171,172,189,207,216,225,227,234,235,237,342,384&chxr=0,0,384&chds=0,384)

|Validator|Number of failing tests (click for details)|
|---------|-----------------------|
|[`json-schema-library`](https://github.com/sagold/json-schema-library)|[2](https://github.com/sagold/json-schema-benchmark/blob/master/draft6/reports/json-schema-library.md)|
|[`@cfworker/json-schema`](https://github.com/cfworker/cfworker/tree/master/packages/json-schema/README.md)|[4](https://github.com/sagold/json-schema-benchmark/blob/master/draft6/reports/@cfworker&#x2F;json-schema.md)|
|[`@exodus/schemasafe`](https://github.com/ExodusMovement/schemasafe)|[8](https://github.com/sagold/json-schema-benchmark/blob/master/draft6/reports/@exodus&#x2F;schemasafe.md)|
|[`jsonschema`](https://github.com/tdegrunt/jsonschema#readme)|[11](https://github.com/sagold/json-schema-benchmark/blob/master/draft6/reports/jsonschema.md)|
|[`ajv`](https://ajv.js.org)|[21](https://github.com/sagold/json-schema-benchmark/blob/master/draft6/reports/ajv.md)|
|[`djv`](https://github.com/korzio/djv#readme)|[99](https://github.com/sagold/json-schema-benchmark/blob/master/draft6/reports/djv.md)|
|[`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid#readme)|[111](https://github.com/sagold/json-schema-benchmark/blob/master/draft6/reports/is-my-json-valid.md)|
|[`jsen`](https://github.com/bugventure/jsen)|[141](https://github.com/sagold/json-schema-benchmark/blob/master/draft6/reports/jsen.md)|
|[`tv4`](https://github.com/geraintluff/tv4)|[155](https://github.com/sagold/json-schema-benchmark/blob/master/draft6/reports/tv4.md)|
|[`z-schema`](https://github.com/zaggino/z-schema)|[169](https://github.com/sagold/json-schema-benchmark/blob/master/draft6/reports/z-schema.md)|
|[`jjv`](https://github.com/acornejo/jjv)|[171](https://github.com/sagold/json-schema-benchmark/blob/master/draft6/reports/jjv.md)|
|[`jassi`](https://github.com/iclanzan/jassi)|[172](https://github.com/sagold/json-schema-benchmark/blob/master/draft6/reports/jassi.md)|
|[`themis`](https://github.com/playlyfe/themis)|[189](https://github.com/sagold/json-schema-benchmark/blob/master/draft6/reports/themis.md)|
|[`request-validator`](https://github.com/bugventure/request-validator)|[207](https://github.com/sagold/json-schema-benchmark/blob/master/draft6/reports/request-validator.md)|
|[`json-schema-validator-generator`](https://github.com/danwang/json-schema-validator-generator)|[216](https://github.com/sagold/json-schema-benchmark/blob/master/draft6/reports/json-schema-validator-generator.md)|
|[`json-model`](https://github.com/geraintluff/json-model)|[225](https://github.com/sagold/json-schema-benchmark/blob/master/draft6/reports/json-model.md)|
|[`jsck`](https://github.com/pandastrike/jsck#readme)|[227](https://github.com/sagold/json-schema-benchmark/blob/master/draft6/reports/jsck.md)|
|[`JSV`](http://github.com/garycourt/JSV)|[234](https://github.com/sagold/json-schema-benchmark/blob/master/draft6/reports/JSV.md)|
|[`skeemas`](https://github.com/Prestaul/skeemas#readme)|[235](https://github.com/sagold/json-schema-benchmark/blob/master/draft6/reports/skeemas.md)|
|[`schemasaurus`](https://github.com/AlexeyGrishin/schemasaurus)|[237](https://github.com/sagold/json-schema-benchmark/blob/master/draft6/reports/schemasaurus.md)|
|[`json-gate`](https://github.com/oferei/json-gate#readme)|[342](https://github.com/sagold/json-schema-benchmark/blob/master/draft6/reports/json-gate.md)|
|[`revalidator`](https://github.com/flatiron/revalidator)|[384](https://github.com/sagold/json-schema-benchmark/blob/master/draft6/reports/revalidator.md)|

Some validators have deliberately chosen not to support parts of the spec. Go to the homepage of the validator to learn if
that is the case for these tests.

# Side-effects summary

Number of tests that caused side-effects. The schema or data was altered by the validator.

|Validator|Number of side-effects (BAD)|
|---------|----------------------------|
|[`revalidator`](https://github.com/flatiron/revalidator)|[818](https://github.com/sagold/json-schema-benchmark/blob/master/draft6/reports/revalidator-side-effects.md)|
|[`json-model`](https://github.com/geraintluff/json-model)|[833](https://github.com/sagold/json-schema-benchmark/blob/master/draft6/reports/json-model-side-effects.md)|

Validators not in the list have no side-effects on data or schemas.

# Tests for other JSON-schema versions

- [draft7](https://github.com/sagold/json-schema-benchmark)
- [draft6](https://github.com/sagold/json-schema-benchmark/tree/master/draft6)
- [draft4](https://github.com/sagold/json-schema-benchmark/tree/master/draft4)

# Features of validators

Note that these benchmarks and tests do not take into account other more advanced features of the validators. I encourage
you to take a look at each validator if you are looking for special features.

# Benchmarks by validator authors and others

Several of the validators have build benchmarks themselves. They are
more detailed then the benchmarks provided above.

[Benchmarks owned by z-schema](https://rawgit.com/zaggino/z-schema/master/benchmark/results.html)

[Benchmarks owned by themis](https://cdn.rawgit.com/playlyfe/themis/master/benchmark/results.html)

[Benchmarks owned by jsck](https://github.com/pandastrike/jsck/blob/master/doc/benchmarks.md)

There is also a [benchmark suite](https://github.com/Sembiance/cosmicrealms.com/tree/master/sandbox/benchmark-of-node-dot-js-json-validation-modules-part-3)
by cosmicrealms.

# License
MIT
