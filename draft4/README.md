# json-schema-benchmark (draft4)
Performance benchmark for Node.js JSON-schema validators. 

> [2022/04/23] The purpose of [this fork](https://github.com/sagold/json-schema-benchmark) is just to have an updated benchmark result for the current state of supported draft features and their performance. I have no intention on maintaining this repository.
>
> Changes made:
> - updated ajv setup and integrated ajv formats plugin
> - changed default draft to draft 07
> - updated benchmark results

Also tests against [official JSON-schema test suite](https://github.com/json-schema/JSON-Schema-Test-Suite), version draft4. and checks
for validators that cause side-effects on schema or data. The top 6 validators that fail the least tests are included in the benchmark.

[Contribute to these benchmarks](https://github.com/ebdrup/json-schema-benchmark/blob/master/CONTRIBUTING.md)

# Performance

![performance](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=62,4,1&chs=600x416&chxl=-1:|@exodus&#x2F;schemasafe|is-my-json-valid|z-schema|@cfworker&#x2F;json-schema|json-schema-library|jsonschema&chd=t:100,41,4.8,3.7,2,1)

|Validator|Relative speed|Number of test runs per second|
|---------|:------------:|:----------------------------:|
|[`@exodus/schemasafe`](https://github.com/ExodusMovement/schemasafe)|100%|10929 (± 4.77%)|
|[`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid#readme)|41%|4483 (± 1.32%)|
|[`z-schema`](https://github.com/zaggino/z-schema)|4.8%|530 (± 1.51%)|
|[`@cfworker/json-schema`](https://github.com/cfworker/cfworker/tree/master/packages/json-schema/README.md)|3.7%|399 (± 4.04%)|
|[`json-schema-library`](https://github.com/sagold/json-schema-library)|2%|221 (± 1.72%)|
|[`jsonschema`](https://github.com/tdegrunt/jsonschema#readme)|1%|107 (± 0.91%)|

692 tests are run in each test run.

Validators tested: [`json-schema-library (6.0.0)`](https://github.com/sagold/json-schema-library), [`@exodus/schemasafe (1.0.0-rc.6)`](https://github.com/ExodusMovement/schemasafe), [`@cfworker/json-schema (1.12.2)`](https://github.com/cfworker/cfworker/tree/master/packages/json-schema/README.md), [`jsonschema (1.4.0)`](https://github.com/tdegrunt/jsonschema#readme), [`z-schema (5.0.3)`](https://github.com/zaggino/z-schema), [`is-my-json-valid (2.20.6)`](https://github.com/mafintosh/is-my-json-valid#readme), [`jsen (0.6.6)`](https://github.com/bugventure/jsen), [`ajv (8.11.0)`](https://ajv.js.org), [`jsck (0.3.2)`](https://github.com/pandastrike/jsck#readme), [`themis (1.1.6)`](https://github.com/playlyfe/themis), [`tv4 (1.3.0)`](https://github.com/geraintluff/tv4), [`skeemas (1.2.5)`](https://github.com/Prestaul/skeemas#readme), [`schemasaurus (0.7.8)`](https://github.com/AlexeyGrishin/schemasaurus), [`request-validator (0.3.3)`](https://github.com/bugventure/request-validator), [`jassi (0.1.2)`](https://github.com/iclanzan/jassi), [`djv (2.1.4)`](https://github.com/korzio/djv#readme), [`jjv (1.0.2)`](https://github.com/acornejo/jjv), [`json-schema-validator-generator (1.1.11)`](https://github.com/danwang/json-schema-validator-generator), [`json-model (0.2.24)`](https://github.com/geraintluff/json-model), [`JSV (4.0.2)`](http://github.com/garycourt/JSV), [`json-gate (0.8.23)`](https://github.com/oferei/json-gate#readme), [`revalidator (0.3.1)`](https://github.com/flatiron/revalidator), 

(validators not in the results above where excluded because of failing tests - see below for details)

[`@exodus/schemasafe`](https://github.com/ExodusMovement/schemasafe) is currently the fastest JSON-schema validator out there.

# Test failure summary

This test suite uses the [official JSON-schema test suite](https://github.com/json-schema/JSON-Schema-Test-Suite), version draft4.

If a validator does not pass a test in the official test suite, it will show up in these results.

![failing tests](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=14,4,1&chs=600x416&chxl=-1:|json-schema-library|@exodus&#x2F;schemasafe|@cfworker&#x2F;json-schema|jsonschema|z-schema|is-my-json-valid|jsen|ajv|jsck|themis|tv4|skeemas|schemasaurus|request-validator|jassi|djv|jjv|json-schema-validator-generator|json-model|JSV|json-gate|revalidator&chd=t:3,7,8,16,21,27,32,44,55,59,70,76,77,81,87,88,90,92,120,145,229,297&chxr=0,0,297&chds=0,297)

|Validator|Number of failing tests (click for details)|
|---------|-----------------------|
|[`json-schema-library`](https://github.com/sagold/json-schema-library)|[3](https://github.com/sagold/json-schema-benchmark/blob/master/draft4/reports/json-schema-library.md)|
|[`@exodus/schemasafe`](https://github.com/ExodusMovement/schemasafe)|[7](https://github.com/sagold/json-schema-benchmark/blob/master/draft4/reports/@exodus&#x2F;schemasafe.md)|
|[`@cfworker/json-schema`](https://github.com/cfworker/cfworker/tree/master/packages/json-schema/README.md)|[8](https://github.com/sagold/json-schema-benchmark/blob/master/draft4/reports/@cfworker&#x2F;json-schema.md)|
|[`jsonschema`](https://github.com/tdegrunt/jsonschema#readme)|[16](https://github.com/sagold/json-schema-benchmark/blob/master/draft4/reports/jsonschema.md)|
|[`z-schema`](https://github.com/zaggino/z-schema)|[21](https://github.com/sagold/json-schema-benchmark/blob/master/draft4/reports/z-schema.md)|
|[`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid#readme)|[27](https://github.com/sagold/json-schema-benchmark/blob/master/draft4/reports/is-my-json-valid.md)|
|[`jsen`](https://github.com/bugventure/jsen)|[32](https://github.com/sagold/json-schema-benchmark/blob/master/draft4/reports/jsen.md)|
|[`ajv`](https://ajv.js.org)|[44](https://github.com/sagold/json-schema-benchmark/blob/master/draft4/reports/ajv.md)|
|[`jsck`](https://github.com/pandastrike/jsck#readme)|[55](https://github.com/sagold/json-schema-benchmark/blob/master/draft4/reports/jsck.md)|
|[`themis`](https://github.com/playlyfe/themis)|[59](https://github.com/sagold/json-schema-benchmark/blob/master/draft4/reports/themis.md)|
|[`tv4`](https://github.com/geraintluff/tv4)|[70](https://github.com/sagold/json-schema-benchmark/blob/master/draft4/reports/tv4.md)|
|[`skeemas`](https://github.com/Prestaul/skeemas#readme)|[76](https://github.com/sagold/json-schema-benchmark/blob/master/draft4/reports/skeemas.md)|
|[`schemasaurus`](https://github.com/AlexeyGrishin/schemasaurus)|[77](https://github.com/sagold/json-schema-benchmark/blob/master/draft4/reports/schemasaurus.md)|
|[`request-validator`](https://github.com/bugventure/request-validator)|[81](https://github.com/sagold/json-schema-benchmark/blob/master/draft4/reports/request-validator.md)|
|[`jassi`](https://github.com/iclanzan/jassi)|[87](https://github.com/sagold/json-schema-benchmark/blob/master/draft4/reports/jassi.md)|
|[`djv`](https://github.com/korzio/djv#readme)|[88](https://github.com/sagold/json-schema-benchmark/blob/master/draft4/reports/djv.md)|
|[`jjv`](https://github.com/acornejo/jjv)|[90](https://github.com/sagold/json-schema-benchmark/blob/master/draft4/reports/jjv.md)|
|[`json-schema-validator-generator`](https://github.com/danwang/json-schema-validator-generator)|[92](https://github.com/sagold/json-schema-benchmark/blob/master/draft4/reports/json-schema-validator-generator.md)|
|[`json-model`](https://github.com/geraintluff/json-model)|[120](https://github.com/sagold/json-schema-benchmark/blob/master/draft4/reports/json-model.md)|
|[`JSV`](http://github.com/garycourt/JSV)|[145](https://github.com/sagold/json-schema-benchmark/blob/master/draft4/reports/JSV.md)|
|[`json-gate`](https://github.com/oferei/json-gate#readme)|[229](https://github.com/sagold/json-schema-benchmark/blob/master/draft4/reports/json-gate.md)|
|[`revalidator`](https://github.com/flatiron/revalidator)|[297](https://github.com/sagold/json-schema-benchmark/blob/master/draft4/reports/revalidator.md)|

Some validators have deliberately chosen not to support parts of the spec. Go to the homepage of the validator to learn if
that is the case for these tests.

# Side-effects summary

Number of tests that caused side-effects. The schema or data was altered by the validator.

|Validator|Number of side-effects (BAD)|
|---------|----------------------------|
|[`tv4`](https://github.com/geraintluff/tv4)|[13](https://github.com/sagold/json-schema-benchmark/blob/master/draft4/reports/tv4-side-effects.md)|
|[`revalidator`](https://github.com/flatiron/revalidator)|[645](https://github.com/sagold/json-schema-benchmark/blob/master/draft4/reports/revalidator-side-effects.md)|
|[`json-model`](https://github.com/geraintluff/json-model)|[676](https://github.com/sagold/json-schema-benchmark/blob/master/draft4/reports/json-model-side-effects.md)|

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

[Benchmarks owned by jsck](https://github.com/pandastrike/jsck/blob/master/doc/benchmarks.md)

[Benchmarks owned by themis](https://cdn.rawgit.com/playlyfe/themis/master/benchmark/results.html)

There is also a [benchmark suite](https://github.com/Sembiance/cosmicrealms.com/tree/master/sandbox/benchmark-of-node-dot-js-json-validation-modules-part-3)
by cosmicrealms.

# License
MIT
