// Интерфейс списка товаров
export interface EnumProuctItem {
    id: number;
    id_group: number;
    name: string;
    group_name: string;
    price: string;
    selected: boolean;
  }

// Интерфейс списка групп
export interface EnumGroupItem {
    id: number;
    name: string;
}