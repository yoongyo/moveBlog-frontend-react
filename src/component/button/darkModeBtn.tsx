import React from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import { useRecoilState } from 'recoil';
import { IsDarkModeState } from '../../state/recoil';

export const DarkModeBtn = () => {
    const [themeMode, setThemeMode] = useRecoilState<boolean>(IsDarkModeState);

	const onChange = () => {
		setThemeMode(!themeMode);
		if (themeMode) {
			localStorage.setItem("darkMode", "false")
		} else {
			localStorage.setItem("darkMode", "true")
		}
	}

    return (
        <DarkModeToggle
          onChange={onChange}
          checked={themeMode}
          size={60}
          className="justify-items-end"
        />
      );
}