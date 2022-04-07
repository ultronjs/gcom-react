import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "PS5",
    description:
      "The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment.",
  },
  {
    _id: uuid(),
    categoryName: "XBOX",
    description: "Xbox is a video gaming brand created and owned by Microsoft.",
  },
  {
    _id: uuid(),
    categoryName: "Nintendo Switch",
    description:
      "The Nintendo Switch is a video game console developed by Nintendo.Nintendo Switch is designed to fit your life, transforming from home console to portable system in a snap.",
  },
  {
    _id: uuid(),
    categoryName: "Desktop/PC",
    description:
      "A desktop computer is a personal computer designed for regular use at a single location on or near a desk due to its size and power requirements",
  },
];
