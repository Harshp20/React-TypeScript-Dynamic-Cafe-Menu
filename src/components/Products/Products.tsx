import "./Products.scss";

interface Props {
  product: {
    id: number;
    type: string;
    title: string;
    description: string;
  };
}

const Products: React.FC<Props> = ({ product }) => {
  const { id, type, title, description } = product;
  return (
    <div className="card-container">
      <div className="category">{type}</div>
      <div className="item-name">{title}</div>
      <div className="thumbnail">
        <img src="" alt="" />
      </div>
      <div className="description">{description}</div>
    </div>
  );
};

export default Products;
