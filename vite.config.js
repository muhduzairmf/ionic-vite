// vite.config.js
const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                accordion: resolve(__dirname, "examples/accordion/index.html"),
                actionSheet: resolve(
                    __dirname,
                    "examples/action-sheet/index.html"
                ),
                alert: resolve(__dirname, "examples/alert/index.html"),
                avatar: resolve(__dirname, "examples/avatar/index.html"),
                backButton: resolve(
                    __dirname,
                    "examples/back-button/index.html"
                ),
                backdrop: resolve(__dirname, "examples/backdrop/index.html"),
                badge: resolve(__dirname, "examples/badge/index.html"),
                breadcrumbs: resolve(
                    __dirname,
                    "examples/breadcrumbs/index.html"
                ),
                button: resolve(__dirname, "examples/button/index.html"),
                card: resolve(__dirname, "examples/card/index.html"),
                checkbox: resolve(__dirname, "examples/checkbox/index.html"),
                chip: resolve(__dirname, "examples/chip/index.html"),
                content: resolve(__dirname, "examples/content/index.html"),
                datetime: resolve(__dirname, "examples/datetime/index.html"),
                fab: resolve(__dirname, "examples/fab/index.html"),
                grid: resolve(__dirname, "examples/grid/index.html"),
                icon: resolve(__dirname, "examples/icon/index.html"),
                infiniteScroll: resolve(
                    __dirname,
                    "examples/infinite-scroll/index.html"
                ),
                input: resolve(__dirname, "examples/input/index.html"),
                item: resolve(__dirname, "examples/item/index.html"),
                list: resolve(__dirname, "examples/list/index.html"),
                loading: resolve(__dirname, "examples/loading/index.html"),
                menu: resolve(__dirname, "examples/menu/index.html"),
                modal: resolve(__dirname, "examples/modal/index.html"),
                nav: resolve(__dirname, "examples/nav/index.html"),
                note: resolve(__dirname, "examples/note/index.html"),
                picker: resolve(__dirname, "examples/picker/index.html"),
                popover: resolve(__dirname, "examples/popover/index.html"),
                progressBar: resolve(
                    __dirname,
                    "examples/progress-bar/index.html"
                ),
                radio: resolve(__dirname, "examples/radio/index.html"),
                range: resolve(__dirname, "examples/range/index.html"),
                refresher: resolve(__dirname, "examples/refresher/index.html"),
                reorder: resolve(__dirname, "examples/reorder/index.html"),
                routerLink: resolve(
                    __dirname,
                    "examples/router-link/index.html"
                ),
                searchbar: resolve(__dirname, "examples/searchbar/index.html"),
                segment: resolve(__dirname, "examples/segment/index.html"),
                select: resolve(__dirname, "examples/select/index.html"),
                skeletonText: resolve(
                    __dirname,
                    "examples/skeleton-text/index.html"
                ),
                slides: resolve(__dirname, "examples/slides/index.html"),
                spinner: resolve(__dirname, "examples/spinner/index.html"),
                tabs: resolve(__dirname, "examples/tabs/index.html"),
                text: resolve(__dirname, "examples/text/index.html"),
                thumbnail: resolve(__dirname, "examples/thumbnail/index.html"),
                toast: resolve(__dirname, "examples/toast/index.html"),
                toggle: resolve(__dirname, "examples/toggle/index.html"),
                toolbar: resolve(__dirname, "examples/toolbar/index.html"),
            },
        },
    },
});
