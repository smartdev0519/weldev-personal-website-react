export interface IThemeContextApi {
  selectedColor: string;
  setSelectedColor?: (value: string) => void;
  cursor: number;
  setCursor?: (value: number) => void;
  toggleColorMode?: () => void;
}
