import express from 'express';
const app = express();
const products = [{ sku: 'BK-101', name: 'Notebook', quantity: 42 }, { sku: 'PN-202', name: 'Pen set', quantity: 18 }];
app.get('/api/inventory', (_req, res) => res.json(products));
app.get('/health', (_req, res) => res.json({ status: 'ok' }));
const port = Number(process.env.PORT || 3000);
app.listen(port, () => console.log(`Inventory API listening on ${port}`));