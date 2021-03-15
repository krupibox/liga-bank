import { Faceboook, Instagram, Twitter, Youtube } from "./assets/icons";

export const menuItems = [
    "Услуги",
    "Рассчитать кредит",
    "Конвертер валют",
    "Контакты",
    "Задать вопрос"
];

export const footerSocialItems = [
    {
        name: "Facebook",
        icon: Faceboook,
        href: "https://www.facebook.com"
    },
    {
        name: "Instagram",
        icon: Instagram,
        href: "https://www.instagram.com"
    },
    {
        name: "Twitter",
        icon: Twitter,
        href: "https://twitter.com"
    },
    {
        name: "Youtube",
        icon: Youtube,
        href: "https://www.youtube.com"
    },
];

export const removeItem = (items, index) => {
    const firstArr = items.slice(0, index);
    const secondArr = items.slice(index + 1);
    return [...firstArr, ...secondArr]
}

export const getPriceTotalWithNoZero = (price) => {
    const zero = (price % 1).toString().split(".")[1] || "0";
    return zero === "0" || zero[0] === "0" ? price.toFixed() : price.toFixed(1);
};