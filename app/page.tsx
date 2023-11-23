async function getData() {
  // Fetch data from your API here.
  //: Promise<Ticker[]>
  const res = await fetch("https://www.sec.gov/files/company_tickers.json");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = res.json();
  //const keys = Object.keys(res.json());
  //const data = keys.map((key) => res.json()[key]);
  return data;
}

export default async function Home() {
  const data = await getData();
  return <>{JSON.stringify(data)}</>;
}
