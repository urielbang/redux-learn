import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUTS = [
  {
    id: "p1",
    price: 6,
    title: "MyFirst book",
    description: "The first book i ever write",
  },
  {
    id: "p2",
    price: 5,
    title: "My Second book",
    description: "The Second book i ever write",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUTS.map((product) => {
          return (
            <ProductItem
              key={product.id}
              title={product.title}
              price={product.price}
              id={product.id}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
