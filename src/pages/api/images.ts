import type { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";
import path from "path";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const imagesDir = path.join(process.cwd(), "public/images");

  try {
    let categories = await fs.readdir(imagesDir);

    // Filter out hidden files (files starting with a dot)
    categories = categories.filter((category) => !category.startsWith("."));

    const images: string[] = [];

    for (const category of categories) {
      const categoryDir = path.join(imagesDir, category);
      const categoryImages = await fs.readdir(categoryDir);

      categoryImages.forEach((image) => {
        images.push(`/images/${category}/${image}`);
      });
    }
    console.log(images);
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: "Failed to load images" });
  }
};

export default handler;
