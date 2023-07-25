const {
  createOneCategory,
  listCategories,
} = require("../controllers/category.controller");
const { Router } = require("express");
const { auth } = require("../middleware/auth");

class CategoryRouter {
  routesFromCategory() {
    const categoryRoutes = Router();
    categoryRoutes.post("/createOneCategory", auth, createOneCategory);
    categoryRoutes.get("/listCategories", auth, listCategories);
    return categoryRoutes;
  }
}

module.exports = new CategoryRouter();
