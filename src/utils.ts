export function getImageUrl(path: string): string {
  return new URL(`./Assets/Images/${path}`, import.meta.url).href;
}

export function getIconUrl(path: string): string {
  return new URL(`./Assets/Icons/${path}`, import.meta.url).href;
}

export function openLink(url: string) {
  window.open(url, "_blank");
}

export function copy(text: string) {
  navigator.clipboard.writeText(text);
  alert(`Copied: ${text}`);
}