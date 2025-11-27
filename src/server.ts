
import http, { IncomingMessage, Server, ServerResponse } from 'http';
import config from './config';
import addRoutes, { RouteHandler, routes } from './helpers/RouteHandler';
import path from 'path';
import "./routes";

const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    console.log("Server is running...");

    const method = req.method?.toUpperCase() || ""
    const path = req.url || "";
    const methodMap = routes.get(method);
    const handler: RouteHandler | undefined = methodMap?.get(path)

    if (handler) {
        handler(req, res);
    } else {
        res.writeHead(404, { "content-type": "application/json" });
        res.end(JSON.stringify({
            success: false,
            message: "Route not found!!!",
            path,
        }))
    }



    // if (req.url == '/api/users' && req.method == "POST") {
    //     let body = '';
    //     req.on("data", chunk => {
    //         body += chunk.toString();
    //     });

    //     req.on("end", () => {
    //         try {
    //             const parseBody = JSON.parse(body);
    //             console.log(parseBody);
    //             console.log("Caching current changes");
    //             console.log("Caching current changes2");
    //             res.end(JSON.stringify(parseBody));
    //         } catch (error: any) {
    //             console.log(error?.message);
    //         }
    //     });


    // }


});

server.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
})