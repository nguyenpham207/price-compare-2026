type ProductCardProps = {
  name: string;
  category: string;
};

export default function ProductCard({ name, category }: ProductCardProps) {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        padding: '1rem',
        marginBottom: '1rem',
        borderRadius: '6px',
      }}
    >
      <h3>{name}</h3>
      <p>Category: {category}</p>
    </div>
  );
}
