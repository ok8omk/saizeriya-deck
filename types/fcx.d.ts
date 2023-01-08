import { FC } from "react";

type FCX<P = {}> = FC<P & { className?: string }>;
