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
      if (!data.value) throw new Error("User not found");
      user.value = data.value;
    } catch (e) {
      console.error("fetchUser error:", e);
      user.value = null;
    }
  };

  const login = () => {
    window.location.href = `${apiBase}/auth/discord/login`;
  };

  const logout = async () => {
    try {
      await $fetch("/logout", {
        method: "POST",
        data: {},
        headers,
        baseURL: apiBase,
        credentials: 'include',
      });
    } catch (e) {
      console.error("logout fail:", e);
    } finally {
      user.value = null;
    }
  };

  return {
    user,
    fetchUser,
    login,
    logout,
  };
}
