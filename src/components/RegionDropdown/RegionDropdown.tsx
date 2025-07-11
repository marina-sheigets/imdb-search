import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import DropdownComponent from "../DropdownComponent/DropdownComponent";
import type { Option } from "../../types/Option";
import { getSupportedRegions } from "../../redux/selectors/getSupportedRegions";
import { fetchSupportedRegions } from "../../redux/thunks/fetchSupportedRegions";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { setUrlParam } from "../../utils/setURLParam";
import { fetchMovies } from "../../redux/thunks/fetchMovies";
import { parseFiltersFromURL } from "../../utils/parseFiltersFromURL";
import { getURLParam } from "../../utils/getURLParam";

function RegionDropdown() {
  const dispatch = useAppDispatch();

  const { items } = useAppSelector(getSupportedRegions);

  const [options, setOptions] = useState<Option[]>([]);
  const [selectedRegion, setSelectedRegion] = useState("");

  const setInitialOption = () => {
    const paramRegion = getURLParam("region");

    if (paramRegion) {
      setSelectedRegion(paramRegion);
      return;
    }

    const USA = items.find((item) => item.iso_3166_1 === "US");

    if (!USA) {
      return;
    }

    setSelectedRegion(USA.iso_3166_1);
  };

  const handleChangeRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(e.target.value);

    setUrlParam("region", e.target.value);
    dispatch(fetchMovies(parseFiltersFromURL(window.location.search)));
  };

  useEffect(() => {
    if (!items?.length) {
      return;
    }

    const mappedOptions = items.map((item) => ({
      label: item.english_name,
      value: item.iso_3166_1,
    }));

    setOptions(mappedOptions);
    setInitialOption();
  }, [items]);

  useEffect(() => {
    dispatch(fetchSupportedRegions());
  }, []);

  return (
    <DropdownComponent
      value={selectedRegion}
      options={options}
      onChange={handleChangeRegion}
      label="Region"
    />
  );
}

export default RegionDropdown;
