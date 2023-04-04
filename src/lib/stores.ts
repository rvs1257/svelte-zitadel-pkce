import { writable } from "svelte/store";
import type { User } from "oidc-client-ts";

export const isAuthenticated = writable<boolean>(false);
export const user = writable<User | null>(null);
