import { Platform } from "./platform";
import URLs from "./urls";

export type PlatformButton = {
    name: string;
    url: string | null;
    source: string | null;
};

export type PlatformButtonData = Record<Platform, PlatformButton>;

export const PLATFORM_BUTTON_DATA: PlatformButtonData = {
    android: {
        name: "Android",
        source: null,
        url: null,
    },
    ios: {
        name: "iOS",
        source: null,
        url: null,
    },
    linux: {
        name: "Linux",
        source: null,
        url: URLs.electron.releases,
    },
    windows: {
        name: "Windows",
        source: "Microsoft Store",
        url: URLs.electron.microsoftStore,
    },
    macos: {
        name: "macOS",
        source: null,
        url: URLs.electron.releases,
    },
    ssr: {
        name: "SSR",
        source: null,
        url: null,
    },
    other: {
        name: "Unknown",
        source: null,
        url: null,
    },
};

export type DownloadLink = {
    label: string;
    url: string;
};

export type ExtendedPlatformInfo = {
    downloads: DownloadLink[];
    name: string;
    infoText: string;
    hideOnDownloadPage?: boolean;
};

export type ExtendedPlatformMap = Record<Platform, ExtendedPlatformInfo>;

export const EXTENDED_PLATFORM_DATA: ExtendedPlatformMap = {
    android: {
        name: "Android",
        downloads: [
            {
                label: "Открыть Веб-Приложение",
                url: URLs.pwa,
            },
        ],
        infoText:
            "Пока что мы не создали отдельного приложения для Android, " +
            "но вы можете установить Веб-Приложение PWA используя " +
            "ваш браузер.",
    },
    ios: {
        name: "iOS",
        downloads: [
            {
                label: "Открыть Веб-Приложение",
                url: URLs.pwa,
            },
        ],
        infoText:
            "Пока что мы не создали отдельного приложения для iOS, " +
            "но вы можете установить Веб-Приложение PWA на домашний экран используя " +
            "Safari.",
    },
    linux: {
        name: "Linux",
        downloads: [
            {
                label: "GitHub Releases",
                url: URLs.electron.releases,
            },
        ],
        infoText:
            "Приложение Linux доступно в нескольких форматах " +
            "(.AppImage, .tar.gz) " +
            "на нашем GitHub.",
    },
    macos: {
        name: "macOS",
        downloads: [
            {
                label: "GitHub Releases",
                url: URLs.electron.releases,
            },
        ],
        infoText: "macOS приложение доступно как .dmg на GitHub. Скоро планируется публикация в Mac App Store.",
    },
    windows: {
        name: "Windows",
        downloads: [
            {
                label: "Microsoft Store",
                url: URLs.electron.microsoftStore,
            },
            {
                label: "GitHub Releases",
                url: URLs.electron.releases,
            },
        ],
        infoText:
            "Windows приложение доступно в Microsoft Store. " +
            "А так же, вы можете его установить через " +
            "установщик с нашего GitHub.",
    },
    other: {
        name: "Other",
        downloads: [],
        infoText: "Unknown",
        hideOnDownloadPage: true,
    },
    ssr: {
        name: "SSR",
        downloads: [],
        infoText: "SSR",
        hideOnDownloadPage: true,
    },
};
