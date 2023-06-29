import express, { Request, Response, NextFunction } from 'express';

const app = express();	// express 객체 받아옴

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hi! This is my first express server');
});	// HTTP GET method 정의

app.use("/member", require("./routes/memberRouter"));

app.listen('8000', () => {})	// 8000번 포트에서 서버 실행

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    return res.status(500).json({ message: err.message });
});
