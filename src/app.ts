import express, { Request, Response, NextFunction } from 'express';
import cors from "cors";
require("dotenv").config({path: './src/dotenv/.env'});
const NODE_ENV = process.env.NODE_ENV;
if (NODE_ENV === "development") {
    console.log("개발환경");
    require("dotenv").config({path: './src/dotenv/.env.development'});
} else {
    console.log('운영환경');
    require("dotenv").config({path: './src/dotenv/.env.production'})
}

const app = express();	// express 객체 받아옴

const PORT = process.env.PORT || 1234;

app.use(cors()); // CORS 이슈 해결
app.use(express.urlencoded({ extended: true })); // query 받기
app.use(express.json()); // body 받기

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hi! This is my first express server');
});	// HTTP GET method 정의

app.use("/member", require("./routes/memberRouter"));

app.listen(PORT, () => {
    console.log(`
  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
  ┃   Server listening on port: ${PORT}    ┃
  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
  `);
})	// 8000번 포트에서 서버 실행

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    return res.status(500).json({ message: err.message });
});
