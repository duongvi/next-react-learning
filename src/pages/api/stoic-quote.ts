import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Forward the request to the external API
    const response = await fetch("https://stoic.tekloon.net/stoic-quote");
    if (!response.ok) {
      throw new Error(`Failed to fetch from the Stoic API: ${response.statusText}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching quote:", error);
    res.status(500).json({ error: "Failed to fetch quote" });
  }
}
