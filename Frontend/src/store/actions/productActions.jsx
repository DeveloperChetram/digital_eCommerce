import axios from "../../api/axiosconfig";
import { loadproduct } from "../reducers/productSlice";

export const asyncLoadProducts = () => async (dispatch, getState) => {
    try{
        const { data } = await axios.get("/products")
        dispatch(loadproduct(data))
        console.log("Products loaded successfully:", data);
    }
    catch (err) {
        console.error("Error loading products:", err);
    }
}

export const asyncCreateProduct = (product) => async (dispatch, getState) => {
  try {
await axios.post("/products", product)
dispatch(asyncLoadProducts())
}

catch (err) {
    console.error(err);
}
}

export const asyncUpdateProduct = (product) => async (dispatch, getState) => {
  try {
await axios.patch("/products/"+product.id, product)
dispatch(asyncLoadProducts())
}

catch (err) {
    console.error(err);
}
}
export const asyncDeleteProduct = (id) => async (dispatch, getState) => {
  try {
await axios.delete("/products/"+id)
dispatch(asyncLoadProducts())
}

catch (err) {
    console.error(err);
}
}
