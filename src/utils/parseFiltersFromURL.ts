export const parseFiltersFromURL = (urlSearch: string) => {
  const params = new URLSearchParams(urlSearch);
  const filters: Record<string, string> = {};
  let page = 1;

  params.forEach((value, key) => {
    if (key === "page") {
      const parsed = parseInt(value);
      if (!isNaN(parsed)) page = parsed;
    } else {
      filters[key] = value;
    }
  });

  return { filters, page };
};
