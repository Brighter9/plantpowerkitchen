export interface Props {
  name: string;
  slug: string;
  image: string;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "Abhinav",
    slug: "Abhinav",
    image: "./src/assets/authors/avatar.jpg",
    bio: "yo i am here to make your vegan life easy ",
  }
]
