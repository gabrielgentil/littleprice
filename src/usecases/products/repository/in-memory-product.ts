import { ProductRepository } from "../ports/products-repository";
import { ProductData } from "../product-data";


export class InMemoryProduct implements ProductRepository {

  private repository: ProductData[]


	constructor (repository: ProductData[]) {
		this.repository = repository
	}

  async findProductByDescribe (describe: string): Promise<ProductData | null> {
    const found = this.repository.find(product => product.describe === describe)

    return found || null

  }
}