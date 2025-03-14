import type { ModelRef } from "vue";

export type Data = {
  history: number;
  currentTime: number;
  url: string[];
};

export const key = Symbol() as InjectionKey<ModelRef<Data>>;
