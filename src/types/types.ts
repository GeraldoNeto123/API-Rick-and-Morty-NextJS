export interface Character {
  id: string;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
  created: Date;
}

export interface Info {
  count: number;
  pages: number;
  next: String;
  prev?: String;
}
