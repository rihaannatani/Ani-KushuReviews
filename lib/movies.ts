export type Movie = {
  id: string;
  title: string;
  imageUrl: string;
  tags: string[];
};

export const movies: Movie[] = [
  {
    id: "1",
    title: "Interstellar",
    imageUrl: "https://picsum.photos/seed/interstellar/500/750",
    tags: ["english", "movie", "sci-fi"],
  },
  {
    id: "2",
    title: "Yeh Jawaani Hai Deewani",
    imageUrl: "https://picsum.photos/seed/yjhd/500/750",
    tags: ["hindi", "movie", "romcom"],
  },
  {
    id: "3",
    title: "The Office",
    imageUrl: "https://picsum.photos/seed/office/500/750",
    tags: ["english", "show", "comedy"],
  },
];

export function getMovieById(id: string) {
  return movies.find((m) => m.id === id) ?? null;
}
