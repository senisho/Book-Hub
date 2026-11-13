const LAST_SEARCH_KEY = "bookhub-last-search";

// Read the last search text (returns "" if nothing was saved yet)
export function getLastSearch() {
  return localStorage.getItem(LAST_SEARCH_KEY) || "";
}

// Save the search text so it can be restored later
export function saveLastSearch(text) {
  localStorage.setItem(LAST_SEARCH_KEY, text);
}