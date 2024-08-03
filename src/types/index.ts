export interface Country {
  flags: {
    svg: string | null;
  };
  name: {
    common: string | null;
  };
  capital?: string[] | null;
  region: string | null;
  subregion: string | null;
  population: number | null;
  cca3: string | null;
}
