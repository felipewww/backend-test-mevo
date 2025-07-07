import dotenv from "dotenv"
import process from "node:process";

if (process.env.NODE_ENV === "test") {
    dotenv.config({ override: true, path: [".env", ".env.test"] });
} else {
    dotenv.config();
}
