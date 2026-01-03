import ProductCard from './components/ProductCard'

const products = [
  { id: 1, name: 'peptide A', category: 'Wellness'},
  { id: 1, name: 'peptide B', category: 'Fitness'},
  { id: 1, name: 'peptide C', category: 'Recovery'},
];


export default function ProductsPage() {
  return (
    <section style={{ maxWidth: '600px' }}>
      <h2>Products</h2>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name= {product.name}
          category= {product.category}
        />
      ))}
      </section>
  );
}