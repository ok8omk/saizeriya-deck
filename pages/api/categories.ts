import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export type Category = {
  id: string;
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Category[]>
) {
  const filePath = path.join(process.cwd(), "data/csv/categories.csv");
  const categories = readCsv(filePath);

  res.status(200).json(categories);
}

const readCsv = (filePath: string): Category[] => {
  const file = fs.readFileSync(filePath);
  const rows = file.toString().split("\n");

  // 1行目はheaderなのでスキップする
  return rows.slice(1).map((row) => {
    const col = row.trim().split(",");

    return {
      id: col[0],
      name: col[1],
    };
  });
};
