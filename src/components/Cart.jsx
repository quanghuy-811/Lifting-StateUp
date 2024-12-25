import React from "react";
import { Button, Table } from "flowbite-react";

const Cart = (props) => {
  const { cart, delProduct, updateQuantity } = props;
  // Tổng số lượng sản phẩm trong giỏ hàng
  const countCart = () => {
    const count = cart.reduce((total, item) => {
      return (total += item.soLuong);
    }, 0);

    return count;
  };

  // Tổng tiền phải thanh toán
  const totalMoney = () => {
    if (cart.length > 0) {
      const total = cart.reduce((total, item) => {
        return (total += item.soLuong * item.giaBan);
      }, 0);

      return total.toLocaleString();
    } else {
      return 0;
    }
  };
  return (
    <div>
      <div className="my-2 text-2xl font-bold">
        <h1>
          Giỏ hàng: <span>{countCart()}</span>
        </h1>
        <h1>
          Tổng Thanh toán: <span>{totalMoney()}</span>
        </h1>
      </div>
      <div className="overflow-x-auto my-5">
        <Table>
          <Table.Head>
            <Table.HeadCell>Mã SP</Table.HeadCell>
            <Table.HeadCell>Hình Ảnh</Table.HeadCell>
            <Table.HeadCell>Tên SP</Table.HeadCell>
            <Table.HeadCell>Số lượng</Table.HeadCell>
            <Table.HeadCell>Đơn giá</Table.HeadCell>
            <Table.HeadCell>Thành tiền</Table.HeadCell>
            <Table.HeadCell>
              <span>Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {cart.map((product) => {
              return (
                <Table.Row
                  key={product.maSP}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {product.maSP}
                  </Table.Cell>
                  <Table.Cell>
                    <img width={100} src={product.hinhAnh} alt="" />
                  </Table.Cell>
                  <Table.Cell>{product.tenSP}</Table.Cell>
                  <Table.Cell>
                    <div className="flex justify-center text-4xl">
                      <Button
                        color="blue"
                        onClick={() => {
                          updateQuantity(product.maSP, -1);
                        }}
                      >
                        -
                      </Button>
                      <span className="mx-2">{product.soLuong}</span>
                      <Button
                        color="blue"
                        onClick={() => {
                          updateQuantity(product.maSP, 1);
                        }}
                      >
                        +
                      </Button>
                    </div>
                  </Table.Cell>
                  <Table.Cell>{product.giaBan.toLocaleString()}</Table.Cell>
                  <Table.Cell>
                    {(product.soLuong * product.giaBan).toLocaleString()}
                  </Table.Cell>
                  <Table.Cell>
                    <Button
                      color="failure"
                      onClick={() => {
                        delProduct(product.maSP);
                      }}
                    >
                      xóa
                    </Button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default Cart;
