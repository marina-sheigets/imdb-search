export function setUrlParam(key: string, value: string | number | boolean) {
  const params = new URLSearchParams(window.location.search);
  params.set(key, value.toString());

  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.pushState({}, "", newUrl);
}