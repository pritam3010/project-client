import { colors, getRandomNumber } from "./defaultSection";
export default function getDefaultSections() {
    return [
        {
            name: "Open",
            color: colors[getRandomNumber(0, colors.length)],
            icon: "Icon"
        },
        {
            name: "In Progress",
            color: colors[getRandomNumber(0, colors.length)],
            icon: "Icon"
        },
        {
            name: "Done",
            color: colors[getRandomNumber(0, colors.length)],
            icon: "Icon"
        }
    ];
}
