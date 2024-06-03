import { ArialAttributes, DOMAttributes } from "react";

declare module "react" {
  interface HTMLAttributes<T> extends ArialAttributes, DOMAttributes<T> {
    fetchpriority?: "high" | "low" | "auto";
  }
}
