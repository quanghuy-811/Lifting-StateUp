import { Button, Card } from "flowbite-react";

const CardItem = (props) => {
  const { data, addToCart, btnDetailProduct } = props;
  return (
    <div>
      <Card
        className="max-w-sm"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={data.hinhAnh}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.tenSP}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {data.manHinh}
        </p>

        <Button
          color="dark"
          onClick={() => {
            addToCart(data);
          }}
        >
          Add To Cart
        </Button>

        <Button
          color="warning"
          onClick={() => {
            btnDetailProduct(data);
          }}
        >
          Detail
        </Button>
      </Card>
    </div>
  );
};

export default CardItem;
