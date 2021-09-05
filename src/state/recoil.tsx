import {atom} from 'recoil';


export const CategoryListState = atom<Object[]>({
    key: "CategoryState",
    default: []
})