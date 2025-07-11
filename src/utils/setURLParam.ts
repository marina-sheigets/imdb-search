export function setUrlParam(key: string, value: string | number | boolean | null | undefined) {
  const params = new URLSearchParams(window.location.search);

  if (!value) {
    params.delete(key);
  } else {
    params.set(key, value.toString());
  }

  const newQuery = params.toString();
  const newUrl = newQuery
    ? `${window.location.pathname}?${newQuery}`
    : window.location.pathname;

  window.history.pushState({}, "", newUrl);
}
