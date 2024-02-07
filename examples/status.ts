#!/usr/bin/env -S npm run tsn -T

import Edgen from 'edgen';

const client = new Edgen();

async function main() {
  const stat1 = await client.chat.completions.status.create();
  console.log("Chat Completions Status");
  console.log("=======================");
  console.log("Active Model: %s", stat1.active_model);
  console.log("Download    : %s", stat1.download_ongoing);
  console.log("Progress    : %s", stat1.download_progress);
  console.log("Errors      : %s", stat1.last_errors);

  const stat2 = await client.audio.transcriptions.status.create();
  console.log("Audio Transcriptions Status");
  console.log("===========================");
  console.log("Active Model: %s", stat2.active_model);
  console.log("Download    : %s", stat2.download_ongoing);
  console.log("Progress    : %s", stat2.download_progress);
  console.log("Errors      : %s", stat2.last_errors);
}

main();
