import {useState, useEffect} from "react";
import './App.css';
const initialProduct = [
  {
    id: 1,
    name: "Samsung Galaxy A10",
    price: "40906000",
    img: "assets/img/samsung-galaxy.jpg",
    info: {
      screen: "AMOLED Full HD 9.0",
      os: "Android 9.0",
      frontCamera: "20MP",
      backCamera: "Chính 48MB, phụ 30MP",
    },
    ram: "4 GB",
    rom: "64 GB",
  },
  {
    id: 2,
    name: "IPhone12",
    price: "200306000",
    img: "assets/img/iphone-12.jpg",
    info: {
      screen: "Full HD 12.0",
      os: "IOS 14",
      frontCamera: "20MP",
      backCamera: "Chính 100MB, phụ 30MP",
    },
    ram: "16 GB",
    rom: "32 GB",
  },
  {
    id: 3,
    name: "Xiaomi Note 10",
    price: "10005000",
    img: "assets/img/xiaomi-redmi-note-10-5g.jpg",
    info: {
      screen: "OLED 10.0",
      os: "Android 8.0",
      frontCamera: "69MP",
      backCamera: "Chính 96MB, phụ 30MP",
    },
    ram: "10 GB",
    rom: "64 GB",
  },
];

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectProduct, setSelectProduct] = useState(null);

  useEffect(() =>{
    setProducts(initialProduct);

  })
  return (
    <div className="App">
    </div>
  );
}
/*
App
  Header
  Cart
  ProductList
    Product
    Product
    Product
  ProductDetail

  => từ product ra product list
  => Thêm product vào cart
  - Event onClick ProductComponent
  - function (App) => add product vào cart
  - nếu product đã exist => increase quantity
  - nếu product new => add new product vào cart
  Chức năng :
  bấm nút + - => tăng quantity
  bấm nút delete => xóa
  Event onclick button viewDetails
  function onViewDetailHandler => button View Detail Product component 


 */
export default App;
