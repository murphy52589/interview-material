export interface Category {
  title: string;
  enabled: boolean;
  subcategories: Category[];
  expanded?: boolean;
}

const categories: Category[] = [
  {
    title: "Category 1",
    enabled: true,
    subcategories: [
      {
        title: "Subcategory 1.1",
        enabled: true,
        subcategories: [],
      },
      {
        title: "Subcategory 1.2",
        enabled: false,
        subcategories: [],
      },
    ],
  },
  {
    title: "Category 2",
    enabled: false,
    subcategories: [],
  },
  {
    title: "Category 3",
    enabled: true,
    subcategories: [
      {
        title: "Subcategory 3.1",
        enabled: true,
        subcategories: [],
      },
    ],
  },
];

export default categories;
