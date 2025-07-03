"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:3000",
        "https://librarymanager-kappa.vercel.app/",
        "192.168.31.*",
    ],
}));
const port = process.env.PORT || 5000;
mongoose_1.default
    .connect(process.env.MONGO_URL || "mongodb://localhost:27017/playground")
    .then(() => {
    console.log("Connected to MongoDB");
})
    .catch((err) => {
    console.log(err);
});
(0, routes_1.routes)(app);
app.get("/", (req, res) => {
    res.send("Hello From Typescript");
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
