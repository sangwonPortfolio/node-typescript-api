import express, { Request, Response, NextFunction } from 'express';
import cors from "cors";

const app = express();	// express 객체 받아옴

const PORT = 8000;

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
  ┃     http://localhost:${PORT}/api       ┃
  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
  `);
})	// 8000번 포트에서 서버 실행

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    return res.status(500).json({ message: err.message });
});
