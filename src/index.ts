import express from "express";
import healthRoutes from "./routes/health.routes";
import usersRoutes from "./routes/users.routes";
import productsRoutes from "./routes/products.routes";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Routes
app.use(healthRoutes);
app.use(usersRoutes);
app.use(productsRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
