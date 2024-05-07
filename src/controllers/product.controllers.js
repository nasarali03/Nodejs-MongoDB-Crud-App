import Product from "../model/product.model.js";

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    if (!products) {
      return res.status(404).json({ message: "Products not found" });
    }
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const insertProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    if (!product) {
      return res
        .status(500)
        .json({ message: "There is a problem in inserting data" });
    }
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const upadteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product Deleted Successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export { getProducts, getProduct, insertProduct, upadteProduct, deleteProduct };
