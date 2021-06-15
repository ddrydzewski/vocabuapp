export const isNewCategory = (categories: string[] , newCategory: string): boolean => {
  return !(categories.includes(newCategory));
};
