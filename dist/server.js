"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const config_1 = __importDefault(require("./config"));
const server = http_1.default.createServer((req, res) => {
    console.log("Server is running...");
    // if (req.url == "/" && req.method == "GET") {
    //     res.writeHead(200, { "content-type": "application/json" });
    //     res.end(JSON.stringify(
    //         {
    //             message: "Hello from node js with typescript...",
    //             path: req.url,
    //         }
    //     ))
    // }
    if (req.url == '/api' && req.method == "GET") {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({
            message: "Health status ok",
            path: req.url,
        }));
    }
    if (req.url == '/api/users' && req.method == "POST") {
        let body = '';
        req.on("data", chunk => {
            body += chunk.toString();
        });
        req.on("end", () => {
            try {
                const parseBody = JSON.parse(body);
                console.log(parseBody);
                console.log("Caching current changes");
                console.log("Caching current changes2");
                res.end(JSON.stringify(parseBody));
            }
            catch (error) {
                console.log(error?.message);
            }
        });
    }
});
server.listen(config_1.default.port, () => {
    console.log(`Server is running on port ${config_1.default.port}`);
});
