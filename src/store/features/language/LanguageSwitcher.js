// src/features/language/LanguageSwitcher.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "./languageSlice";

export default function LanguageSwitcher() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language.value);

  const handleChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  return (
    <select
      value={lang}
      onChange={handleChange}
      className="
        border 
        border-primary 
        rounded 
        px-3 py-1 
        bg-white dark:bg-black 
        text-black dark:text-white
        focus:ring-2 focus:ring-primary
      "
    >
      <option value="en">English</option>
      <option value="ar">العربية</option>
    </select>
  );
}
