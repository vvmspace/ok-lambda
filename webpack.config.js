const path = require("path");
const glob = require("glob");
module.exports = {
    mode: "production",
    entry: glob.sync("./src/functions/**/*.function.ts").reduce((acc, path) => {
        const name = path.split("/").pop().replace(".function.ts", "");
        acc[name] = path;
        return acc;
    }, {}),
    target: "node",
    module: {
        rules: [
            {
                test: /\.ts/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "umd"
    },
    watchOptions: {
        ignored: /node_modules/
    },
};
