import { v4 as uuid } from "uuid";
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Sony PS5 Marvel's Spiderman Miles Morales (PS5)",
    currentPrice: 2579,
    mrp: 3999,
    rating: 4.5,
    discount: 36,
    outOfStock: true,
    brand: "Sony",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246690/G-COM/PS5_Marvel_Spiderman_iqjvnq.jpg",
    addedToWishList: false,
    isBestSeller: true,
    addedToCart: false,
    categoryName: "PlayStation",
    accessoriesType: "Games",
  },
  {
    _id: uuid(),
    name: "PS5 Sackboy : A Big Adventure",
    currentPrice: 2790,
    mrp: 3999,
    rating: 4,
    discount: 30,
    outOfStock: false,
    brand: "Sony",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246691/G-COM/PS5_Sackboy_ycnctv.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "PlayStation",
    accessoriesType: "Games",
  },
  {
    _id: uuid(),
    name: "PS5 Demon's Souls",
    currentPrice: 3040,
    mrp: 4999,
    rating: 4,
    discount: 39,
    outOfStock: false,
    brand: "Sony",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246690/G-COM/PS5_Demon_Souls_xeucli.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "PlayStation",
    accessoriesType: "Games",
  },
  {
    _id: uuid(),
    name: "PS5 RATCHET & CLANK: RIFT APART",
    currentPrice: 2699,
    mrp: 4999,
    rating: 3,
    discount: 46,
    outOfStock: false,
    brand: "Sony",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246690/G-COM/PS5_RATCHET_ezgj3q.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "PlayStation",
    accessoriesType: "Games",
  },
  {
    _id: uuid(),
    name: "PS5 RETURNAL",
    currentPrice: 3168,
    mrp: 4999,
    rating: 4.5,
    discount: 37,
    outOfStock: false,
    brand: "Sony",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649251760/G-COM/ps5_returnal_ymzlvu.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "PlayStation",
    accessoriesType: "Games",
  },
  {
    _id: uuid(),
    name: "Microsoft 1 TB Xbox One S Console - Anthem Bundle",
    currentPrice: 70000,
    mrp: 80000,
    rating: 5,
    discount: 14,
    outOfStock: false,
    brand: "Microsoft",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246693/G-COM/XBOX_Anthem_Bundle_ybiscx.jpg",
    addedToWishList: false,
    isBestSeller: true,
    addedToCart: false,
    categoryName: "XBOX",
    accessoriesType: "Controller",
  },
  {
    _id: uuid(),
    name: "Microsoft Xbox One Wireless Controller with Bluetooth",
    currentPrice: 5900,
    mrp: 6999,
    rating: 4.5,
    discount: 16,
    outOfStock: true,
    brand: "Microsoft",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246686/G-COM/xbox_white_wireless_vrpssj.jpg",
    addedToWishList: false,
    isBestSeller: true,
    addedToCart: false,
    categoryName: "XBOX",
    accessoriesType: "Controller",
  },
  {
    _id: uuid(),
    name: "Microsoft Xbox Wireless Adapter for Windows - Xbox One",
    currentPrice: 2499,
    mrp: 6999,
    rating: 4.5,
    discount: 64,
    outOfStock: false,
    brand: "Microsoft",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246686/G-COM/xbox_controller_wireless_ra8ru4.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "XBOX",
    accessoriesType: "Controller",
  },
  {
    _id: uuid(),
    name: "Xbox Wireless Controller,White",
    currentPrice: 9999,
    mrp: 15998,
    rating: 5,
    discount: 38,
    outOfStock: false,
    brand: "Microsoft",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246686/G-COM/xbox_white_wireless_vrpssj.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "XBOX",
    accessoriesType: "Controller",
  },
  {
    _id: uuid(),
    name: "Logitech G29 Driving Force Racing Wheel ",
    currentPrice: 26995,
    mrp: 36995,
    rating: 4.5,
    discount: 27,
    outOfStock: false,
    brand: "Logitech",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246689/G-COM/logitech_racing_wheel_tzihoq.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "PC",
    accessoriesType: "Racing Wheel",
  },
  {
    _id: uuid(),
    name: "HORI Officially Licensed Nintendo Switch Mario Kart Racing Wheel ",
    currentPrice: 6399,
    mrp: 7999,
    rating: 4.5,
    discount: 20,
    outOfStock: false,
    brand: "Hori",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246688/G-COM/hori_racing_wheel_p4e0yb.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "Nintendo",
    accessoriesType: "Racing Wheel",
  },
  {
    _id: uuid(),
    name: "Thrustmaster T80 |PC Racing Game Wheel | PS3/PS4",
    currentPrice: 11399,
    mrp: 13999,
    rating: 4,
    discount: 19,
    outOfStock: false,
    brand: "ThrustMaster",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246691/G-COM/thrustmaster_racing_wheel_elwepi.jpg",
    addedToWishList: false,
    isBestSeller: true,
    addedToCart: false,
    categoryName: "PlayStation",
    accessoriesType: "Racing Wheel",
  },
  {
    _id: uuid(),
    name: "Thrustmaster Ferrari 458 Sp_ider | Racing Game Wheel | Xbox One",
    currentPrice: 12499,
    mrp: 14999,
    rating: 4.5,
    discount: 17,
    outOfStock: false,
    brand: "ThrustMaster",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246691/G-COM/thrustmaster_racing_wheel_xbox_blmh9f.jpg",
    addedToWishList: false,
    isBestSeller: true,
    addedToCart: false,
    categoryName: "XBOX",
    accessoriesType: "Racing Wheel",
  },
  {
    _id: uuid(),
    name: "boAt Immortal IM-200 7.1 Wired Over Ear Headphones",
    currentPrice: 1299,
    mrp: 4999,
    rating: 3,
    discount: 74,
    outOfStock: false,
    brand: "Boat",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246686/G-COM/boat_headset_xrckgr.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "PC",
    accessoriesType: "Headset",
  },
  {
    _id: uuid(),
    name: "Hyperx Cloud Core 7.1 Wired On Ear Headphones",
    currentPrice: 6490,
    mrp: 8490,
    rating: 4.5,
    discount: 24,
    outOfStock: false,
    brand: "HyperX",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246688/G-COM/hyperx_headset_h50bzp.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "PC",
    accessoriesType: "Headset",
  },
  {
    _id: uuid(),
    name: "Xbox Stereo Headset",
    currentPrice: 5098,
    mrp: 5990,
    rating: 4,
    discount: 15,
    outOfStock: false,
    brand: "Microsoft",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649251808/G-COM/xbox_headsetjpg_tsvdqj.jpg",
    addedToWishList: false,
    isBestSeller: true,
    addedToCart: false,
    categoryName: "XBOX",
    accessoriesType: "Headset",
  },
  {
    _id: uuid(),
    name: "PULSE 3D??? wireless headset White - (PlayStation??5)",
    currentPrice: 8590,
    mrp: 10000,
    rating: 4.5,
    discount: 17,
    outOfStock: false,
    brand: "Sony",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246690/G-COM/playstation_headset_whbdqd.jpg",
    addedToWishList: false,
    isBestSeller: true,
    addedToCart: false,
    categoryName: "PlayStation",
    accessoriesType: "Headset",
  },
  {
    _id: uuid(),
    name: "Elgato Game Capture HD60 S - Stream",
    currentPrice: 13499,
    mrp: 21600,
    rating: 4.5,
    discount: 38,
    outOfStock: false,
    brand: "Elgato",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246687/G-COM/Elgato_Game_Capture_y04hkb.jpg",
    addedToWishList: false,
    isBestSeller: true,
    addedToCart: false,
    categoryName: "PC",
    accessoriesType: "Streaming Devices",
  },
  {
    _id: uuid(),
    name: "Elgato Game Capture HD60 Pro 1080p60",
    currentPrice: 16392,
    mrp: 24700,
    rating: 4,
    discount: 34,
    outOfStock: false,
    brand: "Elgato",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246688/G-COM/ElgatoGame1_ep3v8a.jpg",
    addedToWishList: false,
    isBestSeller: true,
    addedToCart: false,
    categoryName: "PC",
    accessoriesType: "Streaming Devices",
  },
  {
    _id: uuid(),
    name: "Corsair Elgato Stream Deck Mini - Live Content Creation Controller",
    currentPrice: 10040,
    mrp: 14400,
    rating: 5,
    discount: 30,
    outOfStock: false,
    brand: "Elgato",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649251869/elgato_stream_Desk_a1jlny.jpg",
    addedToWishList: false,
    isBestSeller: true,
    addedToCart: false,
    categoryName: "PC",
    accessoriesType: "Streaming Devices",
  },
  {
    _id: uuid(),
    name: "Oculus?? Quest 2 Advanced All-In-One Virtual Reality Headset",
    currentPrice: 30999,
    mrp: 69999,
    rating: 4.5,
    discount: 56,
    outOfStock: false,
    brand: "Oculus",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246690/G-COM/oculus_vr_uagrav.jpg",
    addedToWishList: false,
    isBestSeller: true,
    addedToCart: false,
    categoryName: "PC",
    accessoriesType: "VR",
  },
  {
    _id: uuid(),
    name: "Virtual Reality Headset Glasses",
    currentPrice: 499,
    mrp: 999,
    rating: 2,
    discount: 50,
    outOfStock: false,
    brand: "Flowres",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246693/G-COM/vr3_jvyr73.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "PC",
    accessoriesType: "VR",
  },
  {
    _id: uuid(),
    name: "Irusu Play VR Plus Virtual Reality Headset",
    currentPrice: 2699,
    mrp: 3999,
    rating: 3.5,
    discount: 33,
    outOfStock: false,
    brand: "IRUSU",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246692/G-COM/vr2_aa2gjz.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "PC",
    accessoriesType: "VR",
  },
  {
    _id: uuid(),
    name: "KontrolFreek FPS Freek Galaxy Purple for PlayStation 4",
    currentPrice: 649,
    mrp: 1499,
    rating: 4.5,
    discount: 57,
    outOfStock: false,
    brand: "KontrolFreek",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246692/G-COM/thumb_grip1_mxzuqk.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "PlayStation",
    accessoriesType: "Thumb Grips",
  },
  {
    _id: uuid(),
    name: "KontrolFreek Call of Duty: Black Ops 4 Performance Thumbsticks",
    currentPrice: 999,
    mrp: 1999,
    rating: 4.5,
    discount: 50,
    outOfStock: false,
    brand: "KontrolFreek",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246692/G-COM/thumb_grip2_gt4ict.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "XBOX",
    accessoriesType: "Thumb Grips",
  },
  {
    _id: uuid(),
    name: "KontrolFreek FPS Freek Phantom Thumb Grips for PS4",
    currentPrice: 749,
    mrp: 1299,
    rating: 4.5,
    discount: 42,
    outOfStock: false,
    brand: "KontrolFreek",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246692/G-COM/thumb_grip3_kwmqg6.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "PlayStation",
    accessoriesType: "Thumb Grips",
  },
  {
    _id: uuid(),
    name: "New World Special Design Army Soft Silicone Case Cover Gel Skin",
    currentPrice: 322,
    mrp: 499,
    rating: 4.5,
    discount: 35,
    outOfStock: false,
    brand: "New World",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246687/G-COM/cover_playstation_controller_lusfld.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "PlayStation",
    accessoriesType: "Cases and Covers",
  },
  {
    _id: uuid(),
    name: "New World Soft Silicone Case cover Protective Skin for XBOX",
    currentPrice: 308,
    mrp: 499,
    rating: 4.5,
    discount: 38,
    outOfStock: false,
    brand: "New World",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246687/G-COM/cover_xbox_controller_io6zp8.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "XBOX",
    accessoriesType: "Cases and Covers",
  },
  {
    _id: uuid(),
    name: "Turtle Beach Recon 50P Black & Blue",
    currentPrice: 999,
    mrp: 2499,
    rating: 4,
    discount: 60,
    outOfStock: false,
    brand: "Turtle Beach",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246689/G-COM/international_brands_turtle_beach_headset_eb6lb6.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "PC",
    accessoriesType: "International Brands",
  },
  {
    _id: uuid(),
    name: "PowerA Wired Gaming Controller for Nintendo Switch",
    currentPrice: 2027,
    mrp: 2999,
    rating: 4.5,
    discount: 32,
    outOfStock: false,
    brand: "PowerA",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246688/G-COM/international_brands__nitendo_controller_rnwiv6.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "Nintendo",
    accessoriesType: "International Brands",
  },
  {
    _id: uuid(),
    name: "Turtle Beach Recon 70 Green Camo",
    currentPrice: 990,
    mrp: 3499,
    rating: 4.5,
    discount: 72,
    outOfStock: false,
    brand: "Turtle Beach",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649252016/turtle_beach_camo_qa3p8r.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "PC",
    accessoriesType: "International Brands",
  },
  {
    _id: uuid(),
    name: "Electronic Arts Fifa 19 (PS4)",
    currentPrice: 599,
    mrp: 1499,
    rating: 4.5,
    discount: 60,
    outOfStock: false,
    brand: "EA",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246687/G-COM/ea_fifa_lmiwfn.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "PlayStation",
    accessoriesType: "Games",
  },
  {
    _id: uuid(),
    name: "FIFA 22 (PS4)",
    currentPrice: 2500,
    mrp: 3999,
    rating: 4.5,
    discount: 37,
    outOfStock: false,
    brand: "EA",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246687/G-COM/ea_fifa22_zhrx9w.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "PlayStation",
    accessoriesType: "Games",
  },
  {
    _id: uuid(),
    name: "FIFA 21 Standard Edition (Free PS5 Upgrade)",
    currentPrice: 1299,
    mrp: 2199,
    rating: 4.5,
    discount: 41,
    outOfStock: false,
    brand: "EA",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649252309/G-COM/fifa_21_f9aobj.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "PlayStation",
    accessoriesType: "Games",
  },
  {
    _id: uuid(),
    name: "Grand Theft Auto V - Premium Edition (PS4)",
    currentPrice: 1435,
    mrp: 2199,
    rating: 4.5,
    discount: 35,
    outOfStock: false,
    brand: "RockStar",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246691/G-COM/rockstar_v_premium_wqihho.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "PlayStation",
    accessoriesType: "Games",
  },
  {
    _id: uuid(),
    name: "Red Dead Redemption - 2 (PS4)",
    currentPrice: 1660,
    mrp: 2799,
    rating: 4.5,
    discount: 41,
    outOfStock: false,
    brand: "RockStar",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246691/G-COM/rockstar_reddead_nbohcz.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "PlayStation",
    accessoriesType: "Games",
  },
  {
    _id: uuid(),
    name: "Grand Theft Auto: The Trilogy - The Definitive Edition (PS4)",
    currentPrice: 3249,
    mrp: 3999,
    rating: 4.5,
    discount: 19,
    outOfStock: false,
    brand: "RockStar",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246691/G-COM/rockstar_grand_auto_trilogh_bcxlxd.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "PlayStation",
    accessoriesType: "Games",
  },
  {
    _id: uuid(),
    name: "WB Games Mortal Kombat 11 (PS4)",
    currentPrice: 1498,
    mrp: 1999,
    rating: 4.5,
    discount: 25,
    outOfStock: false,
    brand: "Warner Bros",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246690/G-COM/Mortal_Kombat_11_etdnkz.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "PlayStation",
    accessoriesType: "Games",
  },
  {
    _id: uuid(),
    name: "WB Games Hitman 2 (PS4)",
    currentPrice: 1229,
    mrp: 1499,
    rating: 4.5,
    discount: 18,
    outOfStock: false,
    brand: "Warner Bros",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246693/G-COM/wb_hitman_k11zr1.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "PlayStation",
    accessoriesType: "Games",
  },
  {
    _id: uuid(),
    name: "WB Games Fortnite: The Last Laugh Bundle (PS5)",
    currentPrice: 3190,
    mrp: 3499,
    rating: 4,
    discount: 9,
    outOfStock: false,
    brand: "Warner Bros",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246693/G-COM/wb_fortnite_hde3i7.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "PlayStation",
    accessoriesType: "Games",
  },
  {
    _id: uuid(),
    name: "Marvel's Avengers (Free PS5 Upgrade)",
    currentPrice: 1410,
    mrp: 3999,
    rating: 4,
    discount: 65,
    outOfStock: false,
    brand: "Marvel",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246689/G-COM/marvel_avengers_ffhqym.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "PlayStation",
    accessoriesType: "Games",
  },
  {
    _id: uuid(),
    name: "LEGO Marvel Collection (PS4)",
    currentPrice: 1799,
    mrp: 2499,
    rating: 4,
    discount: 28,
    outOfStock: false,
    brand: "Marvel",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246689/G-COM/marvel_lego_zqihuo.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "PlayStation",
    accessoriesType: "Games",
  },
  {
    _id: uuid(),
    name: "PS5 Marvel's Avengers",
    currentPrice: 1998,
    mrp: 3999,
    rating: 4,
    discount: 50,
    outOfStock: false,
    brand: "Marvel",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649252017/ps5_marvel_Avengers_wd2vt9.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "PlayStation",
    accessoriesType: "Games",
  },
  {
    _id: uuid(),
    name: "Far Cry 6 (PS4) - PlayStation 4",
    currentPrice: 2340,
    mrp: 3999,
    rating: 3,
    discount: 41,
    outOfStock: false,
    brand: "Ubisoft",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_scale,h_171,w_304/v1649246692/G-COM/ubisoft_far_cry_6_a8uacy.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "PlayStation",
    accessoriesType: "Games",
  },
  {
    _id: uuid(),
    name: "Tom Clancy's Rainbow Six Siege (PC)",
    currentPrice: 482,
    mrp: 999,
    rating: 3,
    discount: 52,
    outOfStock: false,
    brand: "Ubisoft",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649246692/G-COM/ubisoft_rainbox_pc_lnsbn4.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "PC",
    accessoriesType: "Games",
  },
  {
    _id: uuid(),
    name: "Assassin's Creed IV: Black Flag (PS4)",
    currentPrice: 1099,
    mrp: 1299,
    rating: 4.5,
    discount: 15,
    outOfStock: false,
    brand: "Ubisoft",
    productImg:
      "https://res.cloudinary.com/bansal-s/image/upload/c_fit,h_171,w_304/v1649251305/G-COM/assassins_creed_kdafye.jpg",
    addedToWishList: false,
    isBestSeller: false,
    addedToCart: false,
    categoryName: "PlayStation",
    accessoriesType: "Games",
  },
];
