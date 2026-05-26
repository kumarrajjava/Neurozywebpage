import "../styles/Products.css";

const Products = () => {
  return (
    <section className="page products">
      <div className="products-content">
        <h2>
          Our <span>Products</span>
        </h2>

        <div className="product-cards">
          <div className="product-card">Product 1</div>
          <div className="product-card">Product 2</div>
          <div className="product-card">Product 3</div>
        </div>
      </div>
    </section>
  );
};

export default Products;
