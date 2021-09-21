import ClockLoader from "react-spinners/ClockLoader";
import React, {useState} from 'react'
import { useRecoilState } from "recoil";
import { IsDarkModeState } from "../../state/recoil";
import { COLORS } from "../../colors/color";
export const Spinner = () => {
    const [isDarkMode, setIsDarkMode] = useRecoilState<boolean>(IsDarkModeState);
    return (
        <ClockLoader size={150} color={isDarkMode ? "white": COLORS.darkBackground}/>
    )
}