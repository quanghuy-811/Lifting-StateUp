import { useState } from "react";
import CardItem from "./CardItem";
import Cart from "./Cart";
import { Modal } from "flowbite-react";
import ModalDetail from "./ModalDetail";

const data = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/imgPhone/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/imgPhone/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/imgPhone/applephone.jpg",
  },
];

const LiftingStateUp = () => {
  const [detailProduct, setDetailProduct] = useState(null);
  let [dataTab, setDataTab] = useState([]);

  const openModal = (item) => setDetailProduct(item);
  const closeModal = () => setDetailProduct(null);

  const renderCard = () => {
    return data.map((item) => {
      return (
        <CardItem
          key={item.maSP}
          data={item}
          addToCart={addToCart}
          btnDetailProduct={btnDetailProduct}
        />
      );
    });
  };
  //Chi tiết sản phẩm
  const btnDetailProduct = (param) => {
    setDetailProduct(param);
  };
  // Thêm giỏ hàng
  const addToCart = (product) => {
    const productCart = { ...product, soLuong: 1 };
    const sp = dataTab.find((item) => item.maSP === productCart.maSP);
    if (sp) {
      sp.soLuong += 1;
    } else {
      dataTab = [...dataTab, productCart];
    }
    const newCart = [...dataTab];

    setDataTab(newCart);
  };

  // Xóa SP
  const delProduct = (maSp) => {
    const newCart = [...dataTab.filter((item) => item.maSP !== maSp)];
    setDataTab(newCart);
  };

  // Tăng giảm số lượng
  const updateQuantity = (maSP, quantity) => {
    const sp = dataTab.find((item) => item.maSP === maSP);

    if (sp) {
      sp.soLuong += quantity;
      if (sp.soLuong === 0) {
        if (window.confirm("Bạn có muốn xóa không")) {
          delProduct(sp.maSP);
        } else {
          sp.soLuong = 1;
        }
        return;
      }
    }

    setDataTab([...dataTab]);
  };

  return (
    <div className="container">
      <h1 className="title">Lffiting State Up</h1>

      <Cart
        cart={dataTab}
        delProduct={delProduct}
        updateQuantity={updateQuantity}
      />
      <h2 className="title">Danh sách sản phẩm </h2>
      <div className="grid grid-cols-3 gap-5">{renderCard()}</div>

      {detailProduct && (
        <ModalDetail
          detailProduct={detailProduct}
          openModal={openModal}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default LiftingStateUp;
