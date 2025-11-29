import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "../data/users.json");

function readUsers() {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
}