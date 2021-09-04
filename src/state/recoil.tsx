import {atom} from 'recoil';

export const CategoryState = atom({
    key: "PostState",
    default: {"categoryId": ""}
})

export const CategoryListState = atom<Object[]>({
    key: "CategoryState",
    default: []
})