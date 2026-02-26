export interface Event {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
  capacity: string;
  startDate: string;
  endDate: string;
}

export async function getEvents(): Promise<Event[]> {
  const res = await fetch(
    "https://699eb77178dda56d396b1b91.mockapi.io/events",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch events");
  }

  return res.json();
}