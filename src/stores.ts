import { writable } from "svelte/store";

export const themeStore: "light" | "dark" = writable("light")