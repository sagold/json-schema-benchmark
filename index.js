const testRunner = require("./testRunner");
const validators = require("./validators");

(async () => {
  const draft2020Validators = await validators(
    "https://json-schema.org/draft/2020-12/schema",
    "2020-12"
  );
  const draft2019Validators = await validators(
    "https://json-schema.org/draft/2019-09/schema",
    "2019-09"
  );
  const draft07Validators = await validators(
    "http://json-schema.org/draft-07/schema",
    "7"
  );
  const draft06Validators = await validators(
    "http://json-schema.org/draft-06/schema",
    "6"
  );
  const draft04Validators = await validators(
    "http://json-schema.org/draft-04/schema",
    "4"
  );
  await testRunner({
    validators: draft2020Validators,
    schemaVersion: "draft2020",
    folder: "",
  });
  await testRunner({
    validators: draft2019Validators,
    schemaVersion: "draft2019",
    folder: "draft2019",
  });
  await testRunner({
    validators: draft07Validators,
    schemaVersion: "draft7",
    folder: "draft7",
  });
  await testRunner({
    validators: draft06Validators,
    schemaVersion: "draft6",
    folder: "draft6",
  });
  await testRunner({
    validators: draft04Validators,
    schemaVersion: "draft4",
    folder: "draft4",
  });
})();
