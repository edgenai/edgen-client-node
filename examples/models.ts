#!/usr/bin/env -S npm run tsn -T

import Edgen from 'edgen';

const client = new Edgen();

async function main() {
  const models = await client.models.list();

  console.log("Models Listing");
  console.log("==============");
  for await (const model of models) {
      console.log("id     : %s", model.id);
      console.log("type   : %s", model.object);
      console.log("created: %s", model.created);
      console.log("owner  : %s", model.owned_by);
  };

  console.log("One Model");
  console.log("=========");
  try {
      const model = await client.models.retrieve("TheFake%2fMy-fake-model-GGUF");
      console.log("id     : %s", model.id);
      console.log("type   : %s", model.object);
      console.log("created: %s", model.created);
      console.log("owner  : %s", model.owned_by);
  } catch (e) {
      console.log("ERROR: %s", e)
  }

  console.log("Delete Model");
  console.log("============");
  try {
      const model = await client.models.del("TheFake%2fMy-fake-model-GGUF");
      console.log("id     : %s", model.id);
      console.log("type   : %s", model.object);
      console.log("deleted: %s", model.deleted);
  } catch (e) {
      console.log("ERROR: %s", e)
  }
}

main();
