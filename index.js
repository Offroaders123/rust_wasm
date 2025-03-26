// @ts-check

import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const wasmBuffer = await readFile(resolve(import.meta.dirname, "target/wasm32-unknown-unknown/release/rust_wasm.wasm"));

const wasmModule = await WebAssembly.instantiate(wasmBuffer);
const { add } = wasmModule.instance.exports;

console.log("2 + 3 =", add(2, 3));