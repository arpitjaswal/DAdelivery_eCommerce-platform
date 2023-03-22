import { products } from "./constants/data.js"
import product from "./models/product-schema.js";

const defaultData = async()=>{
    try {
        await product.insertMany(products);

        console.log("Data imported successfully!");
    } catch (error) {
        console.log("Error occurred", error.message);
    }
}
export default defaultData;