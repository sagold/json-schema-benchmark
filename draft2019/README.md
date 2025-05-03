# json-schema-benchmark (draft2019)
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

Also tests against [official JSON-schema test suite](https://github.com/json-schema/JSON-Schema-Test-Suite), version draft2019. and checks
for validators that cause side-effects on schema or data. The top 6 validators that fail the least tests are included in the benchmark.

[Contribute to these benchmarks](https://github.com/ebdrup/json-schema-benchmark/blob/master/CONTRIBUTING.md)

# Performance

![performance](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=62,4,1&chs=600x416&chxl=-1:|jsen|z-schema|json-schema-validator-generator|themis|is-my-json-valid|ajv&chd=t:100,99.3,99.3,99.2,98.5,98.4)

|Validator|Relative speed|Number of test runs per second|
|---------|:------------:|:----------------------------:|
|[`jsen`](https://github.com/bugventure/jsen)|100%|171220257 (± 2.25%)|
|[`z-schema`](https://github.com/zaggino/z-schema)|99.3%|170061438 (± 2.13%)|
|[`json-schema-validator-generator`](https://github.com/danwang/json-schema-validator-generator)|99.3%|169966704 (± 2.76%)|
|[`themis`](https://github.com/playlyfe/themis)|99.2%|169894607 (± 3.45%)|
|[`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid#readme)|98.5%|168650651 (± 2.77%)|
|[`ajv`](https://ajv.js.org)|98.4%|168521562 (± 2.8%)|

0 tests are run in each test run.

Validators tested: [`json-schema-validator-generator (1.1.11)`](https://github.com/danwang/json-schema-validator-generator), [`is-my-json-valid (2.20.6)`](https://github.com/mafintosh/is-my-json-valid#readme), [`jsen (0.6.6)`](https://github.com/bugventure/jsen), [`ajv (8.17.1)`](https://ajv.js.org), [`themis (1.1.6)`](https://github.com/playlyfe/themis), [`z-schema (6.0.2)`](https://github.com/zaggino/z-schema), [`jjv (1.0.2)`](https://github.com/acornejo/jjv), [`djv (2.1.4)`](https://github.com/korzio/djv#readme), [`skeemas (1.2.5)`](https://github.com/Prestaul/skeemas#readme), [`schemasaurus (0.7.8)`](https://github.com/AlexeyGrishin/schemasaurus), [`jsck (0.3.2)`](https://github.com/pandastrike/jsck#readme), [`jassi (0.1.2)`](https://github.com/iclanzan/jassi), [`JSV (4.0.2)`](http://github.com/garycourt/JSV), [`request-validator (0.3.3)`](https://github.com/bugventure/request-validator), [`json-gate (0.8.23)`](https://github.com/oferei/json-gate#readme), [`json-model (0.2.24)`](https://github.com/geraintluff/json-model), [`tv4 (1.3.0)`](https://github.com/geraintluff/tv4), [`jsonschema (1.5.0)`](https://github.com/tdegrunt/jsonschema#readme), [`revalidator (0.3.1)`](https://github.com/flatiron/revalidator), [`json-schema-library (10.0.0)`](https://github.com/sagold/json-schema-library), [`@exodus/schemasafe (1.3.0)`](https://github.com/ExodusMovement/schemasafe), [`@cfworker/json-schema (4.1.1)`](https://github.com/cfworker/cfworker/tree/master/packages/json-schema/README.md), 

(validators not in the results above where excluded because of failing tests - see below for details)

[`jsen`](https://github.com/bugventure/jsen) is currently the fastest JSON-schema validator out there.

# Test failure summary

This test suite uses the [official JSON-schema test suite](https://github.com/json-schema/JSON-Schema-Test-Suite), version draft2019.

If a validator does not pass a test in the official test suite, it will show up in these results.

![failing tests](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=14,4,1&chs=600x416&chxl=-1:|json-schema-validator-generator|is-my-json-valid|jsen|ajv|themis|z-schema|jjv|djv|skeemas|schemasaurus|jsck|jassi|JSV|request-validator|json-gate|json-model|tv4|jsonschema|revalidator|json-schema-library|@exodus&#x2F;schemasafe|@cfworker&#x2F;json-schema&chd=t:0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0&chxr=0,0,0&chds=0,0)

|Validator|Number of failing tests (click for details)|
|---------|-----------------------|
|[`json-schema-validator-generator`](https://github.com/danwang/json-schema-validator-generator)|[0](https://github.com/sagold/json-schema-benchmark/blob/master/draft2019/reports/json-schema-validator-generator.md)|
|[`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid#readme)|[0](https://github.com/sagold/json-schema-benchmark/blob/master/draft2019/reports/is-my-json-valid.md)|
|[`jsen`](https://github.com/bugventure/jsen)|[0](https://github.com/sagold/json-schema-benchmark/blob/master/draft2019/reports/jsen.md)|
|[`ajv`](https://ajv.js.org)|[0](https://github.com/sagold/json-schema-benchmark/blob/master/draft2019/reports/ajv.md)|
|[`themis`](https://github.com/playlyfe/themis)|[0](https://github.com/sagold/json-schema-benchmark/blob/master/draft2019/reports/themis.md)|
|[`z-schema`](https://github.com/zaggino/z-schema)|[0](https://github.com/sagold/json-schema-benchmark/blob/master/draft2019/reports/z-schema.md)|
|[`jjv`](https://github.com/acornejo/jjv)|[0](https://github.com/sagold/json-schema-benchmark/blob/master/draft2019/reports/jjv.md)|
|[`djv`](https://github.com/korzio/djv#readme)|[0](https://github.com/sagold/json-schema-benchmark/blob/master/draft2019/reports/djv.md)|
|[`skeemas`](https://github.com/Prestaul/skeemas#readme)|[0](https://github.com/sagold/json-schema-benchmark/blob/master/draft2019/reports/skeemas.md)|
|[`schemasaurus`](https://github.com/AlexeyGrishin/schemasaurus)|[0](https://github.com/sagold/json-schema-benchmark/blob/master/draft2019/reports/schemasaurus.md)|
|[`jsck`](https://github.com/pandastrike/jsck#readme)|[0](https://github.com/sagold/json-schema-benchmark/blob/master/draft2019/reports/jsck.md)|
|[`jassi`](https://github.com/iclanzan/jassi)|[0](https://github.com/sagold/json-schema-benchmark/blob/master/draft2019/reports/jassi.md)|
|[`JSV`](http://github.com/garycourt/JSV)|[0](https://github.com/sagold/json-schema-benchmark/blob/master/draft2019/reports/JSV.md)|
|[`request-validator`](https://github.com/bugventure/request-validator)|[0](https://github.com/sagold/json-schema-benchmark/blob/master/draft2019/reports/request-validator.md)|
|[`json-gate`](https://github.com/oferei/json-gate#readme)|[0](https://github.com/sagold/json-schema-benchmark/blob/master/draft2019/reports/json-gate.md)|
|[`json-model`](https://github.com/geraintluff/json-model)|[0](https://github.com/sagold/json-schema-benchmark/blob/master/draft2019/reports/json-model.md)|
|[`tv4`](https://github.com/geraintluff/tv4)|[0](https://github.com/sagold/json-schema-benchmark/blob/master/draft2019/reports/tv4.md)|
|[`jsonschema`](https://github.com/tdegrunt/jsonschema#readme)|[0](https://github.com/sagold/json-schema-benchmark/blob/master/draft2019/reports/jsonschema.md)|
|[`revalidator`](https://github.com/flatiron/revalidator)|[0](https://github.com/sagold/json-schema-benchmark/blob/master/draft2019/reports/revalidator.md)|
|[`json-schema-library`](https://github.com/sagold/json-schema-library)|[0](https://github.com/sagold/json-schema-benchmark/blob/master/draft2019/reports/json-schema-library.md)|
|[`@exodus/schemasafe`](https://github.com/ExodusMovement/schemasafe)|[0](https://github.com/sagold/json-schema-benchmark/blob/master/draft2019/reports/@exodus&#x2F;schemasafe.md)|
|[`@cfworker/json-schema`](https://github.com/cfworker/cfworker/tree/master/packages/json-schema/README.md)|[0](https://github.com/sagold/json-schema-benchmark/blob/master/draft2019/reports/@cfworker&#x2F;json-schema.md)|

Some validators have deliberately chosen not to support parts of the spec. Go to the homepage of the validator to learn if
that is the case for these tests.

# Side-effects summary

Number of tests that caused side-effects. The schema or data was altered by the validator.

|Validator|Number of side-effects (BAD)|
|---------|----------------------------|

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

[Benchmarks owned by themis](https://cdn.rawgit.com/playlyfe/themis/master/benchmark/results.html)

[Benchmarks owned by z-schema](https://rawgit.com/zaggino/z-schema/master/benchmark/results.html)

[Benchmarks owned by jsck](https://github.com/pandastrike/jsck/blob/master/doc/benchmarks.md)

There is also a [benchmark suite](https://github.com/Sembiance/cosmicrealms.com/tree/master/sandbox/benchmark-of-node-dot-js-json-validation-modules-part-3)
by cosmicrealms.

# License
MIT
