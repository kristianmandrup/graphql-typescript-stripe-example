import * as React from "react";
import { Single } from "./Single";

export const Multiple = (products: any[]) =>
  products.map((product: any, i: number) => <Single key={i} {...product} />);
