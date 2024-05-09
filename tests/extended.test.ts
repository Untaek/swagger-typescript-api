import * as fs from "node:fs/promises";
import * as os from "node:os";
import * as path from "node:path";

import { afterAll, beforeAll, describe, expect, test } from "vitest";

import { generateApi } from "../src/index.js";
import { collectAllSchemas, sleep } from "./utils.js";

describe("extended", async () => {
  let tmpdir = "";

  beforeAll(async () => {
    tmpdir = await fs.mkdtemp(path.join(os.tmpdir(), "swagger-typescript-api"));
  });

  afterAll(async () => {
    await fs.rm(tmpdir, { recursive: true });
  });

  const typePrefix = "IMySuperPrefix";
  const typeSuffix = "MySuperSuffix";

  const schemas = await collectAllSchemas();

  test.each(schemas)("$name", async (schema) => {
    // @ts-expect-error
    await generateApi({
      name: schema.name,
      input: schema.filePath,
      output: tmpdir,
      silent: true,
      extractEnums: true,
      extractRequestBody: true,
      extractRequestParams: true,
      extractResponseBody: true,
      extractResponseError: true,
      extractResponses: true,
      generateClient: true,
      generateRouteTypes: false,
      sortRoutes: true,
      sortTypes: true,
      typePrefix: typePrefix,
      typeSuffix: typeSuffix,
    });

    const content = await fs.readFile(path.join(tmpdir, `${schema.name}.ts`), {
      encoding: "utf-8",
    });

    await sleep(1000);

    expect(content).toMatchFileSnapshot(
      path.join(__dirname, "__snapshots__", "extended", `${schema.name}.ts`),
    );
  });
});
