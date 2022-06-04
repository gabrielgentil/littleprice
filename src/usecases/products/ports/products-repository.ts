import { ProductData } from "../product-data";

export interface ProductRepository {
  findProductByDescribe(describe: string): Promise<ProductData | null>
}