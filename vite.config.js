import { defineConfig } from "vite";

export default defineConfig({
    css: {
        preprocessorOptions: {
            css: {
                charset: false,
            },
        },
    },
    build: {
        outDir: "dist",
        rollupOptions: {},
    },
    base: "/cocktails-db",
});
