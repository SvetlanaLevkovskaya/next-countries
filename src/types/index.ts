export interface Country {
  flags: {
    svg: string;
  };
  name: {
    common: string;
  };
  capital?: string[];
  region: string;
  subregion: string;
  population: number;
  cca3: string;
}
