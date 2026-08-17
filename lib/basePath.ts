export const BASE_PATH = "/larkSpireWebsite";

export function getAssetPath(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (cleanPath.startsWith(BASE_PATH)) return cleanPath;
  return `${BASE_PATH}${cleanPath}`;
}
