export interface Props {
  title: string;
  slug: string;
  color: "green" | "blue" | "orange" | "purple" | "pink";
  description: string;
}
export type Category = Props;

export const categories: Props[] = [
  {
    title: "Entrees",
    slug: "entrees",
    color: "green",
    description:
      "Discover delicious and satisfying vegan entrees that will be the star of your meal, from classic dishes to creative new ideas.",
  },
  {
    title: "Sides & Snacks",
    slug: "sides-and-snacks",
    color: "blue",
    description:
      "Find tasty and nutritious vegan side dishes and snacks to complete your meal, with options for all tastes and occasions.",
  },
  {
    title: "Desserts",
    slug: "desserts",
    color: "pink",
    description:
      "Indulge in sweet and satisfying vegan desserts that will satisfy your sweet tooth, from classic treats to new and creative recipes.",
  },
  {
    title: "Beverages",
    slug: "beverages",
    color: "orange",
    description:
      "Refresh and rejuvenate with delicious and healthy vegan beverages, including smoothies, juices, and more.",
  },
  {
    title: "Special Occasions",
    slug: "special-occasions",
    color: "purple",
    description:
      "Find the perfect vegan recipes for your next celebration, from birthdays to holidays and everything in between.",
  },
  {
    title: "Breakfast",
    slug: "breakfast",
    color: "green",
    description:
      "Start your day off right with delicious and nutritious vegan breakfast recipes, including smoothie bowls, tofu scramble, and more.",
  },
  {
    title: "Lunch",
    slug: "lunch",
    color: "blue",
    description:
      "Find tasty and filling vegan lunch recipes that are easy to make and perfect for work or school, including salads, sandwiches, and more.",
  },
  {
    title: "Soups & Stews",
    slug: "soups-and-stews",
    color: "pink",
    description:
      "Warm up with comforting and hearty vegan soups and stews, perfect for cold weather or a cozy night in.",
  },
  {
    title: "Bread & Pastry",
    slug: "bread-and-pastry",
    color: "orange",
    description:
      "Indulge in delicious and satisfying vegan bread and pastry recipes, from classic baked goods to creative new twists.",
  },
  {
    title: "Global Cuisines",
    slug: "global-cuisines",
    color: "purple",
    description:
      "Explore delicious vegan recipes from around the world, including cuisine from India, Mexico, Italy, and more.",
  },

];
