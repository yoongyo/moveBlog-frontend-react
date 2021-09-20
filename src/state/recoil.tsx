import {atom} from 'recoil';


export const CategoryListState = atom<Object[]>({
    key: "CategoryState",
    default: []
})

export const IsDarkModeState = atom<boolean>({
    key: "IsDarkModeState",
    default: localStorage.getItem("darkMode") === "true"
})