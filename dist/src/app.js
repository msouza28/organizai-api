"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_source_1 = require("./data-source");
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
// Configuração básica do CORS
app.use((0, cors_1.default)());
app.use(express_1.default.json());
data_source_1.AppDataSource.initialize().then(async () => {
    console.log("Data Source foi inicializado!");
    app.use('/users', UserRoutes_1.default);
    app.listen(port, () => console.log(`Server running on port ${port}`));
}).catch(error => console.log(error));
