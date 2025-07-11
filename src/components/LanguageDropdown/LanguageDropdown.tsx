import { useEffect } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import DropdownComponent from "../DropdownComponent/DropdownComponent";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchSupportedLanguages } from "../../redux/thunks/fetchSupportedLanguages";
import { getSupportedLanguages } from "../../redux/selectors/getSupportedLanguages";

function LanguageDropdown() {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector(getSupportedLanguages);

  useEffect(() => {
    dispatch(fetchSupportedLanguages());
  }, []);

  return (
    <DropdownComponent
      options={items.map((item) => item.english_name)}
      onChange={() => {}}
      label="Language"
    />
  );
}

export default LanguageDropdown;
