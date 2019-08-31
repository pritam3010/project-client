import React from "react";

export const AddChecklistIcon = ({ color }) => (
    <svg width="100%" height="100%" viewBox="0 0 20 20">
        <g fill="none" fillRule="evenodd">
            <circle cx="10" cy="10" r="10" fill={color} />
            <circle cx="7" cy="7" r="2" fill="#FFF" opacity=".5" />
            <rect width="2" height="6" x="6" y="10" fill="#FFF" rx=".5" />
            <rect width="6" height="2" x="4" y="12" fill="#FFF" rx=".5" />
            <rect
                width="5"
                height="2"
                x="10"
                y="6"
                fill="#FFF"
                opacity=".5"
                rx=".5"
            />
            <rect
                width="4"
                height="2"
                x="11"
                y="12"
                fill="#FFF"
                opacity=".5"
                rx=".5"
            />
        </g>
    </svg>
);
export const DoneChecklistIcon = ({ color }) => (
    <svg width="100%" height="100%" viewBox="0 0 20 20">
        <g fill="none" fill-rule="evenodd">
            <circle cx="10" cy="10" r="10" fill={color} />
            <circle cx="7" cy="7" r="2" fill="#FFF" opacity=".5" />
            <rect
                width="5"
                height="2"
                x="10"
                y="6"
                fill="#FFF"
                opacity=".5"
                rx=".5"
            />
            <rect
                width="4"
                height="2"
                x="11"
                y="12"
                fill="#FFF"
                opacity=".5"
                rx=".5"
            />
            <path
                fill="#FFF"
                fill-rule="nonzero"
                d="M4.419 11.854l-.565.565a.5.5 0 0 0 0 .707l2.281 2.283 4.281-4.283a.5.5 0 0 0 0-.707l-.565-.566a.5.5 0 0 0-.707 0l-3.009 3.01-1.01-1.01a.5.5 0 0 0-.706 0z"
            />
        </g>
    </svg>
);

export const CalenderIcon = ({ color }) => (
    <svg width="100%" height="100%" viewBox="0 0 20 20">
        <g fill="none" fill-rule="evenodd">
            <circle cx="10" cy="10" r="10" fill={color} />
            <rect width="11" height="10" x="4.5" y="5.5" stroke="#FFF" rx="2" />
            <path
                fill="#FFF"
                d="M16 8H4v-.49A2.511 2.511 0 0 1 6.501 5h6.998A2.498 2.498 0 0 1 16 7.51V8z"
            />
            <circle cx="7" cy="10" r="1" fill="#FFF" />
            <circle cx="10" cy="10" r="1" fill="#FFF" />
            <circle cx="13" cy="10" r="1" fill="#FFF" />
            <circle cx="7" cy="13" r="1" fill="#FFF" />
            <circle cx="10" cy="13" r="1" fill="#FFF" />
            <circle cx="13" cy="13" r="1" fill="#FFF" />
            <path
                stroke="#FFF"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.5 4.5v2m7-2v2"
            />
        </g>
    </svg>
);
