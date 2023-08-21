import { createSlice } from "@reduxjs/toolkit";
import productData from "../Data/productData";
import { toast } from "react-toastify";

const initialState = {
    cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
    items: [
        {
          id: 1,
          title: "Samsung Galaxy S7",
          price: 70.0,
          img: "https://res.cloudinary.com/drjz1atnh/image/upload/v1689745672/product-1_aszcap.jpg",
          quantity: 1,
        },
        {
          id: 2,
          title: "Moto G5 Plus",
          price: 60.0,
          img: "https://res.cloudinary.com/drjz1atnh/image/upload/v1689745672/product-3_ufgke8.jpg",
          quantity: 1,
        },
        {
          id: 3,
          title: "Xiaomi Redmi Note 2",
          price: 50.0,
          img: "https://res.cloudinary.com/drjz1atnh/image/upload/v1689745672/product-2_yredah.jpg",
          quantity: 1,
        },
        {
          id: 4,
          title: "Nokia G20",
          price: 20.0,
          img: "https://res.cloudinary.com/drjz1atnh/image/upload/v1689745672/product-12_qzxrt9.jpg",
          quantity: 1,
        },
        {
          id: 5,
          title: "Apple i phone",
          price: 35.0,
          img: "https://res.cloudinary.com/drjz1atnh/image/upload/v1689745672/product-11_w3wr2e.jpg",
          quantity: 1,
        },
        {
          id: 6,
          title: "Apple i phone",
          price: 50.0,
          img: "https://res.cloudinary.com/drjz1atnh/image/upload/v1689745710/pd-6_uoskft.jpg",
          quantity: 1,
        },
        {
          id: 7,
          title: "Apple i phone",
          price: 22.0,
          img: "https://res.cloudinary.com/drjz1atnh/image/upload/v1689745710/pd-4_lrkgsb.jpg",
          quantity: 1,
        },
        {
          id: 8,
          title: "Apple i phone",
          price: 15.0,
          img: "https://res.cloudinary.com/drjz1atnh/image/upload/v1689745710/pd-5_dex6qv.jpg",
          quantity: 1,
        },
        {
          id: 9,
          title: "Apple i phone",
          price: 33.0,
          img: "https://res.cloudinary.com/drjz1atnh/image/upload/v1689745710/pd-1_xp3ojy.jpg",
          quantity: 1,
        },
        {
          id: 10,
          title: "Apple i phone",
          price: 10.0,
          img: "https://res.cloudinary.com/drjz1atnh/image/upload/v1689745673/product-10_qlrbz4.jpg",
          quantity: 1,
        },
        {
          id: 11,
          title: "Apple i phone",
          price: 20.0,
          img: "https://res.cloudinary.com/drjz1atnh/image/upload/v1689745710/pd-5_dex6qv.jpg",
          quantity: 1,
        },
        {
          id: 12,
          title: "Apple i phone",
          price: 30.0,
          img: "https://res.cloudinary.com/drjz1atnh/image/upload/v1689745672/product-4_gkz8je.jpg",
          quantity: 1,
        },
      ],
    totalQuantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
      } else {
        state.cart.push(action.payload);
        toast.success("Product added to cart", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          console.log("carttotal", cartTotal);
          console.log("cartitem", cartItem);
          const { price, quantity } = cartItem;
          console.log(price, quantity);
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          localStorage.setItem("cart", JSON.stringify(state.cart));
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      toast.error("Product removed from cart", {
        position: "bottom-left",
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          toast.info("Increased product quantity", {
            position: "bottom-left",
          });
          localStorage.setItem("cart", JSON.stringify(state.cart));
          return { ...item, quantity: item.quantity + 1 }; 
          
        }
        return item;
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          toast.info("Decreased product quantity", {
            position: "bottom-left",
          });
          localStorage.setItem("cart", JSON.stringify(state.cart));
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      
    },

    

  },
  
  
});

export const {
  addToCart,
  getCartTotal,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;