import express from 'express';

const app: any = express();

app.use(express.json());


app.listen(3000, () => console.log('System is running at 3020'));

app.get('/health-check', (req, res) => res.status(200).json({status:200, message: "Service is up..!!"}));


export default app
