import express from 'express';
// import config from "config";
import routes from "./routes";

const app = express();

// const port = config.get('port');

app.listen(4000, () => {
    routes(app);
});