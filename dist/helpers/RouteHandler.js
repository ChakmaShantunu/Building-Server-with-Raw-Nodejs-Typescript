"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes = new Map();
function addRoutes(method, path, handler) {
    if (!routes.has(method))
        routes.set(method, new Map());
    routes.get(method).set(path, handler);
}
exports.default = addRoutes;
