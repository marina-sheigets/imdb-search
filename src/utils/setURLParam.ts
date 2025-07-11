export function setUrlParam(key: string, value: string) {
  const params = new URLSearchParams(window.location.search);
  params.set(key, value);

  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.pushState({}, "", newUrl);
}