import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

app.get('/ping', (req: Request, res: Response) => {
    res.json({ message: 'pong' });
});

app.get("/user", (req,res) =>{
    res.send(users)
})
app.get("/products", (req,res) =>{
    res.send(products);
})

console.log("feature branch code")

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;

