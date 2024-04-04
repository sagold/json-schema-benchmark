# json-schema-benchmark (draft7)
Performance benchmark for Node.js JSON-schema validators. 

> [2022/04/23] The purpose of [this fork](https://github.com/sagold/json-schema-benchmark) is just to have an updated benchmark result for the current state of supported draft features and their performance. I have no intention on maintaining this repository.
>
> Changes made:
> - updated ajv setup and integrated ajv formats plugin
> - changed default draft to draft 07
> - updated benchmark results
>
> [2022/11/13] updated libraries and rerun benchmark
> [2024/04/05] updated libraries and rerun benchmark

Also tests against [official JSON-schema test suite](https://github.com/json-schema/JSON-Schema-Test-Suite), version draft7. and checks
for validators that cause side-effects on schema or data. The top 6 validators that fail the least tests are included in the benchmark.

[Contribute to these benchmarks](https://github.com/ebdrup/json-schema-benchmark/blob/master/CONTRIBUTING.md)

# Performance

![performance](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=62,4,1&chs=600x416&chxl=-1:|@exodus&#x2F;schemasafe|ajv|djv|@cfworker&#x2F;json-schema|json-schema-library|jsonschema&chd=t:100,85.7,13.3,4.4,2.1,1)

|Validator|Relative speed|Number of test runs per second|
|---------|:------------:|:----------------------------:|
|[`@exodus/schemasafe`](https://github.com/ExodusMovement/schemasafe)|100%|29168 (± 0.17%)|
|[`ajv`](https://ajv.js.org)|85.7%|25010 (± 0.15%)|
|[`djv`](https://github.com/korzio/djv#readme)|13.3%|3881 (± 0.19%)|
|[`@cfworker/json-schema`](https://github.com/cfworker/cfworker/tree/master/packages/json-schema/README.md)|4.4%|1272 (± 1.17%)|
|[`json-schema-library`](https://github.com/sagold/json-schema-library)|2.1%|615 (± 0.21%)|
|[`jsonschema`](https://github.com/tdegrunt/jsonschema#readme)|1%|301 (± 0.4%)|

1049 tests are run in each test run.

Validators tested: [`json-schema-library (9.3.4)`](https://github.com/sagold/json-schema-library), [`@cfworker/json-schema (1.12.8)`](https://github.com/cfworker/cfworker/tree/master/packages/json-schema/README.md), [`jsonschema (1.4.1)`](https://github.com/tdegrunt/jsonschema#readme), [`ajv (8.12.0)`](https://ajv.js.org), [`@exodus/schemasafe (1.3.0)`](https://github.com/ExodusMovement/schemasafe), [`djv (2.1.4)`](https://github.com/korzio/djv#readme), [`is-my-json-valid (2.20.6)`](https://github.com/mafintosh/is-my-json-valid#readme), [`jsen (0.6.6)`](https://github.com/bugventure/jsen), [`tv4 (1.3.0)`](https://github.com/geraintluff/tv4), [`jjv (1.0.2)`](https://github.com/acornejo/jjv), [`jassi (0.1.2)`](https://github.com/iclanzan/jassi), [`z-schema (6.0.1)`](https://github.com/zaggino/z-schema), [`request-validator (0.3.3)`](https://github.com/bugventure/request-validator), [`json-schema-validator-generator (1.1.11)`](https://github.com/danwang/json-schema-validator-generator), [`themis (1.1.6)`](https://github.com/playlyfe/themis), [`JSV (4.0.2)`](http://github.com/garycourt/JSV), [`json-model (0.2.24)`](https://github.com/geraintluff/json-model), [`jsck (0.3.2)`](https://github.com/pandastrike/jsck#readme), [`skeemas (1.2.5)`](https://github.com/Prestaul/skeemas#readme), [`schemasaurus (0.7.8)`](https://github.com/AlexeyGrishin/schemasaurus), [`json-gate (0.8.23)`](https://github.com/oferei/json-gate#readme), [`revalidator (0.3.1)`](https://github.com/flatiron/revalidator), 

(validators not in the results above where excluded because of failing tests - see below for details)

[`@exodus/schemasafe`](https://github.com/ExodusMovement/schemasafe) is currently the fastest JSON-schema validator out there.

# Test failure summary

This test suite uses the [official JSON-schema test suite](https://github.com/json-schema/JSON-Schema-Test-Suite), version draft7.

If a validator does not pass a test in the official test suite, it will show up in these results.

![failing tests](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=14,4,1&chs=600x416&chxl=-1:|json-schema-library|@cfworker&#x2F;json-schema|jsonschema|ajv|@exodus&#x2F;schemasafe|djv|is-my-json-valid|jsen|tv4|jjv|jassi|z-schema|request-validator|json-schema-validator-generator|themis|JSV|json-model|jsck|skeemas|schemasaurus|json-gate|revalidator&chd=t:41,41,46,58,101,157,164,198,212,229,229,249,264,273,275,291,291,341,361,378,420,449&chxr=0,0,449&chds=0,449)

|Validator|Number of failing tests (click for details)|
|---------|-----------------------|
|[`json-schema-library`](https://github.com/sagold/json-schema-library)|[41](https://github.com/sagold/json-schema-benchmark/blob/master//reports/json-schema-library.md)|
|[`@cfworker/json-schema`](https://github.com/cfworker/cfworker/tree/master/packages/json-schema/README.md)|[41](https://github.com/sagold/json-schema-benchmark/blob/master//reports/@cfworker&#x2F;json-schema.md)|
|[`jsonschema`](https://github.com/tdegrunt/jsonschema#readme)|[46](https://github.com/sagold/json-schema-benchmark/blob/master//reports/jsonschema.md)|
|[`ajv`](https://ajv.js.org)|[58](https://github.com/sagold/json-schema-benchmark/blob/master//reports/ajv.md)|
|[`@exodus/schemasafe`](https://github.com/ExodusMovement/schemasafe)|[101](https://github.com/sagold/json-schema-benchmark/blob/master//reports/@exodus&#x2F;schemasafe.md)|
|[`djv`](https://github.com/korzio/djv#readme)|[157](https://github.com/sagold/json-schema-benchmark/blob/master//reports/djv.md)|
|[`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid#readme)|[164](https://github.com/sagold/json-schema-benchmark/blob/master//reports/is-my-json-valid.md)|
|[`jsen`](https://github.com/bugventure/jsen)|[198](https://github.com/sagold/json-schema-benchmark/blob/master//reports/jsen.md)|
|[`tv4`](https://github.com/geraintluff/tv4)|[212](https://github.com/sagold/json-schema-benchmark/blob/master//reports/tv4.md)|
|[`jjv`](https://github.com/acornejo/jjv)|[229](https://github.com/sagold/json-schema-benchmark/blob/master//reports/jjv.md)|
|[`jassi`](https://github.com/iclanzan/jassi)|[229](https://github.com/sagold/json-schema-benchmark/blob/master//reports/jassi.md)|
|[`z-schema`](https://github.com/zaggino/z-schema)|[249](https://github.com/sagold/json-schema-benchmark/blob/master//reports/z-schema.md)|
|[`request-validator`](https://github.com/bugventure/request-validator)|[264](https://github.com/sagold/json-schema-benchmark/blob/master//reports/request-validator.md)|
|[`json-schema-validator-generator`](https://github.com/danwang/json-schema-validator-generator)|[273](https://github.com/sagold/json-schema-benchmark/blob/master//reports/json-schema-validator-generator.md)|
|[`themis`](https://github.com/playlyfe/themis)|[275](https://github.com/sagold/json-schema-benchmark/blob/master//reports/themis.md)|
|[`JSV`](http://github.com/garycourt/JSV)|[291](https://github.com/sagold/json-schema-benchmark/blob/master//reports/JSV.md)|
|[`json-model`](https://github.com/geraintluff/json-model)|[291](https://github.com/sagold/json-schema-benchmark/blob/master//reports/json-model.md)|
|[`jsck`](https://github.com/pandastrike/jsck#readme)|[341](https://github.com/sagold/json-schema-benchmark/blob/master//reports/jsck.md)|
|[`skeemas`](https://github.com/Prestaul/skeemas#readme)|[361](https://github.com/sagold/json-schema-benchmark/blob/master//reports/skeemas.md)|
|[`schemasaurus`](https://github.com/AlexeyGrishin/schemasaurus)|[378](https://github.com/sagold/json-schema-benchmark/blob/master//reports/schemasaurus.md)|
|[`json-gate`](https://github.com/oferei/json-gate#readme)|[420](https://github.com/sagold/json-schema-benchmark/blob/master//reports/json-gate.md)|
|[`revalidator`](https://github.com/flatiron/revalidator)|[449](https://github.com/sagold/json-schema-benchmark/blob/master//reports/revalidator.md)|

Some validators have deliberately chosen not to support parts of the spec. Go to the homepage of the validator to learn if
that is the case for these tests.

# Side-effects summary

Number of tests that caused side-effects. The schema or data was altered by the validator.

|Validator|Number of side-effects (BAD)|
|---------|----------------------------|
|[`json-model`](https://github.com/geraintluff/json-model)|[981](https://github.com/sagold/json-schema-benchmark/blob/master//reports/json-model-side-effects.md)|
|[`revalidator`](https://github.com/flatiron/revalidator)|[983](https://github.com/sagold/json-schema-benchmark/blob/master//reports/revalidator-side-effects.md)|

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
