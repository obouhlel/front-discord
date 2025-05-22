import type { User } from "~/types/user.type";

export function useAuth() {
  const user = useState<User | null>("user", () => null);

  const apiBase = useRuntimeConfig().public.BACK_URL;
  const headers = useRequestHeaders(["cookie"]);

  const fetchUser = async () => {
    try {
      const { data } = await useFetch<User>("/me", {
        headers,
        baseURL: apiBase,
        credentials: 'include',
      });
      if (!data.value) throw Error("User not found");
      user.value = data.value;
    } catch {
      console.error("User not found");
    }
  };

  const login = () => {
    window.location.href = `${apiBase}/auth/discord/login`;
  };

  const logout = async (): Promise<void> => {
    try {
      await $fetch<{success: boolean}>("/logout", {
        method: "POST",
        headers,
        baseURL: apiBase,
        credentials: 'include',
      });
    } finally {
      user.value = null;
      window.location.reload();
    }
  };

  return {
    user,
    fetchUser,
    login,
    logout,
  };
}
