import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export type Menu = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  season: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Menu[]>
) {
  const menus = readMenusCsv();
  const category = req.query["category"];

  if (typeof category === "string") {
    const categoryMenus = menus.filter((menu) => menu.id.includes(category));
    res.status(200).json(categoryMenus);
  } else {
    res.status(200).json(menus);
  }
}

export const readMenusCsv = (): Menu[] => {
  const filePath = path.join(process.cwd(), "data/csv/menus.csv");

  const file = fs.readFileSync(filePath);
  const rows = file.toString().split("\n");

  // 1行目はheaderなのでスキップする
  return rows.slice(1).map((row) => {
    const col = row.trim().split(",");

    return {
      id: col[0],
      name: col[1],
      price: Number(col[2]),
      season: col[3],
      imageUrl: getImageUrl(col[0]),
    };
  });
};

const getImageUrl = (id: string): string => {
  const file = fs.readFileSync(
    path.join(process.cwd(), "data/menu-image-names.txt")
  );
  const filenames = file.toString().split("\n");
  const filename = filenames.find((filename) => filename.includes(id));

  if (!filename) return "/no-image.png";

  return `/assets/menus/${filename}`;
};
