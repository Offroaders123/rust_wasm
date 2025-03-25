# rust_wasm

Creating TypeScript packages with Rust.

The goal here is to explore the idea behind using Rust as a native implementation, and using WebAssembly as the compilation target.

In concept, I want to allow for doing something like reading and writing a LevelDB database, but purely with a JS package API. How this is implemented is another story (in this case, it is Rust), the end goal is for the JS API to be what the user sees and implements their project on top of.

Rust works great for low-level memory management and safety. These are big pluses. I really have been liking Rust, using it for my own new projects recently. I still love JS too, and I think using these together can really make for a great combo.

For this use-case specifically, I'm not choosing Rust outright (at least initially) for the possible performance gains. If anything, I am more interested in treating it as a medium that you can use for more than one compilation target. It works locally in the terminal as a native application, as well as in the browser when compiled to WebAssembly.

Lower-level programming concepts seem to be more commonly (and safely) implemented in lower-level languages (understandably, this is a good thing). This means that more complex libraries are initially implemented in something like Rust, and meant to be used in the tooling there.

The JS ecosystem is an interesting one, where people now are looking for high-level APIs for low-level features. I am in this boat as well.

Initially people have rewritten low-level libraries in JS, because of the low-level specific APIs available in these local runtimes (like Node.js or Bun for example). The pitfall here is that we have now started implementing highly-technical implementations with a runtime and language that's meant for (realistically) high-level application code. This works, and has been working for a while. I think it's a great thing we've tried. Now there are a few more tricks up our sleeve nowadays though. We don't need to write low-level concepts for our projects with high-level code. Why not containerize this low-level implementation, and allow it to blossom in the ways it knows best? Then we simply attach the high-level APIs to it, rather than intermingling the two together.

This is not a new concept, and I don't think I'm coming up with anything new here. I do wish it was more commonplace nowadays though, since from my own perspective, it doesn't seem to have taken off just yet. I want to see low-level packages implemented in native languages, then bundled with WebAssembly, which is callable from any environment that the JS accesses it from.

I don't mean to use WASM instead of native binaries as a whole (on a system level), but rather that instead of implementing low-level libraries in JS, to use it with JS programs, we should now be compiling these libraries to WebAssembly. Say for example something like [`JSZip`](https://github.com/Stuk/jszip), I feel that the underlying data and binary work should be done with WebAssembly memory and structs, rather than with JS itself. I still think it should be an overarching JS API from the user' point of view, just not implemented with such.

Longer story longer, I am going to try this out eventually to port Minecraft Bedrock's LevelDB implementation for use in Node.js and the browser, with WebAssembly.

Another notable mention: I don't have essentially any experience or references about Python yet. However, I thought I heard that some Python APIs are implemented by a native C binding, and Python itself calls those APIs, which make it much faster, because it's just using native code under the hood. This feels like a similar outlook to what I want to try here. However, this is a little less native, since it will target WASM rather than a fully low-level system binary.

Another mention: NBT is another example of this. The JS API could accept plain JS objects, and the Rust bindings would handle converting all of these to more concise Rust primitives (while doing binary data mapping), and the Rust implementation would return the raw buffer that would be returned otherwise, by the current JS API implementation (this is in reference to [NBTify](https://github.com/Offroaders123/NBTify)).
