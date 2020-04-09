import { IconName } from '@fortawesome/fontawesome-svg-core';

export interface NavStruct {
    struct: NavOption[];
}

export interface NavOption {
    key: string;
    link: string;
    iconName: IconName;
    hasSubCategories: boolean;
    subCategories?: SubCategory[] | null;
    children: NavItem[] | null;
}

export interface NavItem {
    key: string;
    subCategoryId: string | null;
    link: string;
}

export interface SubCategory {
    categoryId: string;
    sortOrder: number;
}

export default NavStruct;
