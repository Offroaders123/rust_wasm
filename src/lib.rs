// #![no_std]  // Remove dependency on Rust's standard library

#[unsafe(no_mangle)]  // Ensure function name is preserved in WASM
pub extern "C" fn add(a: i32, b: i32) -> i32 {
    a + b
}
