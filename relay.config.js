module.exports = {
    // ...
    // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
    src: "./src",
    language: "javascript", // "javascript" | "typescript" | "flow"
    schema: "./src/schema/schema.graphql",
    exclude: ["**/node_modules/**", "src/__generated__/*"],
  }