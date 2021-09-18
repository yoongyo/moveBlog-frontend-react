import React from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import { useRecoilState } from 'recoil';
import { IsDarkModeState } from '../../state/recoil';

export const DarkModeBtn = () => {
    const [themeMode, setThemeMode] = useRecoilState<boolean>(IsDarkModeState);

    return (
        <DarkModeToggle
          onChange={setThemeMode}
          checked={themeMode}
          size={60}
          className="justify-items-end"
        />
      );
}