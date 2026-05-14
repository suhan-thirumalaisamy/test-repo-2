import { Router, Request, Response } from "express";

const router = Router();

// In-memory products store (no DB)
const products = [
  { id: 1, name: "Laptop", price: 999.99, category: "Electronics" },
  { id: 2, name: "Headphones", price: 49.99, category: "Electronics" },
  { id: 3, name: "Coffee Mug", price: 12.99, category: "Kitchen" },
];

/**
 * GET /products
 * Returns the list of all products
 */
router.get("/products", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    count: products.length,
    data: products,
  });
});

/**
 * GET /products/:id
 * Returns a single product by ID
 */
router.get("/products/:id", (req: Request, res: Response) => {
  const id = req.params.id as string;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    res.status(404).json({
      success: false,
      message: `Product with id ${req.params.id} not found`,
    });
    return;
  }

  res.status(200).json({
    success: true,
    data: product,
  });
});

export default router;
