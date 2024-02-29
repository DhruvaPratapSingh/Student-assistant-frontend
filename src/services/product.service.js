import apiUtil from "../utils/apiutils";

class ProductService {
  route = "/products";

  addProduct = async (name, title, description, price, file) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("pImage", file);
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);

    return apiUtil.postFormData(this.route + "/add-Product", formData);
  };
}

export default new ProductService();
