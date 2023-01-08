import { FC } from "react";

declare global {
  type FCX<P = {}> = FC<P & { className?: string }>;
}
