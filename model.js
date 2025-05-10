const API_URL =
  "https://quotes-api-three.vercel.app/api/randomquote?language=es";
const CORS_PROXY = "https://corsproxy.io/?";

export async function fetchQuote() {
  try {
    const url = `${CORS_PROXY}${API_URL}`;
    const response = await fetch(url, {
      mode: "cors",
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const { quote, author } = await response.json();
    return { quote, author };
  } catch (error) {
    console.error("Fetch error details:", error);
    return null;
  }
}