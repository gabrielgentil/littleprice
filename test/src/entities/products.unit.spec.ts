import { ProductData } from "../../../src/usecases/products/product-data"
import { InMemoryProduct } from "../../../src/usecases/products/repository/in-memory-product"


describe('Product', () => {
  test('should have return a item with describe product', async() => {
    const product: ProductData[] = [{ describe: 'Biscoito Caseiro Du Bebel 140Gr', price: '10,00' }]
    const sut = new InMemoryProduct(product)
    const response = await sut.findProductByDescribe('Biscoito Caseiro Du Bebel 140Gr')

    expect(response?.describe).toBe('Biscoito Caseiro Du Bebel 140Gr')
  })
})