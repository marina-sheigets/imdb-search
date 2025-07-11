import ContentFilterCheckbox from "../ContentFilterCheckbox/ContentFilterCheckbox";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import PageInput from "../PageInput/PageInput";
import RegionDropdown from "../RegionDropdown/RegionDropdown";
import ReleaseYearInput from "../ReleaseYearInput/ReleaseYearInput";
import YearInput from "../YearInput/YearInput";
import "./FiltersContent.css";

function FiltersContent() {
  return (
    <div className="filters-content">
      <LanguageDropdown />
      <ReleaseYearInput />
      <YearInput />
      <RegionDropdown />
      <PageInput />
      <ContentFilterCheckbox />
    </div>
  );
}

export default FiltersContent;
