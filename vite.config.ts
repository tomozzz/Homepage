import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
  const inferredBase = repositoryName
    ? repositoryName.endsWith(".github.io")
      ? "/"
      : `/${repositoryName}/`
    : "/";

  return {
    plugins: [react()],
    base: process.env.VITE_BASE_PATH ?? inferredBase
  };
});
