"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ContactButton_vue_1 = __importDefault(require("../components/ContactButton.vue"));
var ThemeButton_vue_1 = __importDefault(require("../components/ThemeButton.vue"));
var About_vue_1 = __importDefault(require("./About.vue"));
var Projects_vue_1 = __importDefault(require("./Projects.vue"));
var Resume_vue_1 = __importDefault(require("./Resume.vue"));
exports.default = (await Promise.resolve().then(function () { return __importStar(require('vue')); })).defineComponent({
    name: 'Home',
    components: {
        About: About_vue_1.default,
        Projects: Projects_vue_1.default,
        Resume: Resume_vue_1.default,
        ContactButton: ContactButton_vue_1.default,
        ThemeButton: ThemeButton_vue_1.default
    }
});
; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_componentsOption = {
    About: About_vue_1.default,
    Projects: Projects_vue_1.default,
    Resume: Resume_vue_1.default,
    ContactButton: ContactButton_vue_1.default,
    ThemeButton: ThemeButton_vue_1.default
};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)(__assign({ class: ("w-full inline-flex px-12") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ id: ("home") }, { class: ("p-8 flex flex-col items-start") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("avatar-background rounded-full overflow-hidden w-32 h-32 mb-4") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: ("../assets/profile-photo.jpg"),
    height: ("1599"),
    width: ("899"),
    alt: ("Avatar-Photo"),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    className: ("text-4xl text-gray-600 dark:text-gray-200 font-bold mb-2"),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    className: ("text-lg text-gray-600 dark:text-gray-200"),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    className: ("text-sm text-gray-400 dark:text-gray-50"),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex flex-wrap gap-4 mt-4") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ class: ("badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)(__assign({ src: ("@/assets/front-icon.svg") }, { class: ("w-5 h-5") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ class: ("badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)(__assign({ src: ("@/assets/html-icon.svg") }, { class: ("w-5 h-5") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ class: ("badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)(__assign({ src: ("@/assets/css-icon.svg") }, { class: ("w-5 h-5") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ class: ("badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)(__assign({ src: ("@/assets/tailwind-icon.svg") }, { class: ("w-5 h-5") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ class: ("badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)(__assign({ src: ("@/assets/js-icon.svg") }, { class: ("w-5 h-5") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ class: ("badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)(__assign({ src: ("@/assets/node-icon.svg") }, { class: ("w-5 h-5") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ class: ("badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)(__assign({ src: ("@/assets/vue-icon.svg") }, { class: ("w-5 h-5") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ class: ("badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)(__assign({ src: ("@/assets/php-icon.svg") }, { class: ("w-5 h-5") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ class: ("badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)(__assign({ src: ("@/assets/laravel-icon.svg") }, { class: ("w-5 h-5") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ class: ("badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)(__assign({ src: ("@/assets/filament-icon.svg") }, { class: ("w-5 h-5") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ class: ("badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)(__assign({ src: ("@/assets/wordpress-icon.svg") }, { class: ("w-5 h-5") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ class: ("badge flex items-center gap-2 px-4 py-2 bg-green-200 text-green-700 rounded-full shadow-sm") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)(__assign({ src: ("@/assets/mysql-icon.svg") }, { class: ("w-5 h-5") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ class: ("badge flex items-center gap-2 px-4 py-2 bg-blue-200 text-blue-700 rounded-full shadow-sm") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)(__assign({ src: ("@/assets/scrum-master-icon.svg") }, { class: ("w-5 h-5") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ class: ("badge flex items-center gap-2 px-4 py-2 bg-blue-200 text-blue-700 rounded-full shadow-sm") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)(__assign({ src: ("@/assets/scrum-icon.svg") }, { class: ("w-5 h-5") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ class: ("badge flex items-center gap-2 px-4 py-2 bg-blue-200 text-blue-700 rounded-full shadow-sm") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)(__assign({ src: ("@/assets/kanban-icon.svg") }, { class: ("w-5 h-5") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ class: ("badge flex items-center gap-2 px-4 py-2 bg-blue-200 text-blue-700 rounded-full shadow-sm") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)(__assign({ src: ("@/assets/lean-icon.svg") }, { class: ("w-5 h-5") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ class: ("badge flex items-center gap-2 px-4 py-2 bg-blue-200 text-blue-700 rounded-full shadow-sm") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)(__assign({ src: ("@/assets/gestao-icon.svg") }, { class: ("w-5 h-5") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ class: ("badge flex items-center gap-2 px-4 py-2 bg-blue-200 text-blue-700 rounded-full shadow-sm") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)(__assign({ src: ("@/assets/github-icon.svg") }, { class: ("w-5 h-5") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ class: ("badge flex items-center gap-2 px-4 py-2 bg-blue-200 text-blue-700 rounded-full shadow-sm") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)(__assign({ src: ("@/assets/miro-icon.svg") }, { class: ("w-5 h-5") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ class: ("badge flex items-center gap-2 px-4 py-2 bg-blue-200 text-blue-700 rounded-full shadow-sm") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)(__assign({ src: ("@/assets/excel-icon.svg") }, { class: ("w-5 h-5") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
var __VLS_0 = {}.About;
/** @type { [typeof __VLS_components.About, ] } */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_6 = {}.Projects;
/** @type { [typeof __VLS_components.Projects, ] } */ ;
// @ts-ignore
var __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_7), false));
var __VLS_12 = {}.Resume;
/** @type { [typeof __VLS_components.Resume, ] } */ ;
// @ts-ignore
var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_13), false));
var __VLS_18 = {}.ContactButton;
/** @type { [typeof __VLS_components.ContactButton, ] } */ ;
// @ts-ignore
var __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
var __VLS_20 = __VLS_19.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_19), false));
var __VLS_24 = {}.ThemeButton;
/** @type { [typeof __VLS_components.ThemeButton, ] } */ ;
// @ts-ignore
var __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_25), false));
['w-full', 'inline-flex', 'px-12', 'p-8', 'flex', 'flex-col', 'items-start', 'avatar-background', 'rounded-full', 'overflow-hidden', 'w-32', 'h-32', 'mb-4', 'flex', 'flex-wrap', 'gap-4', 'mt-4', 'badge', 'flex', 'items-center', 'gap-2', 'px-4', 'py-2', 'bg-green-200', 'text-green-700', 'rounded-full', 'shadow-sm', 'w-5', 'h-5', 'badge', 'flex', 'items-center', 'gap-2', 'px-4', 'py-2', 'bg-green-200', 'text-green-700', 'rounded-full', 'shadow-sm', 'w-5', 'h-5', 'badge', 'flex', 'items-center', 'gap-2', 'px-4', 'py-2', 'bg-green-200', 'text-green-700', 'rounded-full', 'shadow-sm', 'w-5', 'h-5', 'badge', 'flex', 'items-center', 'gap-2', 'px-4', 'py-2', 'bg-green-200', 'text-green-700', 'rounded-full', 'shadow-sm', 'w-5', 'h-5', 'badge', 'flex', 'items-center', 'gap-2', 'px-4', 'py-2', 'bg-green-200', 'text-green-700', 'rounded-full', 'shadow-sm', 'w-5', 'h-5', 'badge', 'flex', 'items-center', 'gap-2', 'px-4', 'py-2', 'bg-green-200', 'text-green-700', 'rounded-full', 'shadow-sm', 'w-5', 'h-5', 'badge', 'flex', 'items-center', 'gap-2', 'px-4', 'py-2', 'bg-green-200', 'text-green-700', 'rounded-full', 'shadow-sm', 'w-5', 'h-5', 'badge', 'flex', 'items-center', 'gap-2', 'px-4', 'py-2', 'bg-green-200', 'text-green-700', 'rounded-full', 'shadow-sm', 'w-5', 'h-5', 'badge', 'flex', 'items-center', 'gap-2', 'px-4', 'py-2', 'bg-green-200', 'text-green-700', 'rounded-full', 'shadow-sm', 'w-5', 'h-5', 'badge', 'flex', 'items-center', 'gap-2', 'px-4', 'py-2', 'bg-green-200', 'text-green-700', 'rounded-full', 'shadow-sm', 'w-5', 'h-5', 'badge', 'flex', 'items-center', 'gap-2', 'px-4', 'py-2', 'bg-green-200', 'text-green-700', 'rounded-full', 'shadow-sm', 'w-5', 'h-5', 'badge', 'flex', 'items-center', 'gap-2', 'px-4', 'py-2', 'bg-green-200', 'text-green-700', 'rounded-full', 'shadow-sm', 'w-5', 'h-5', 'badge', 'flex', 'items-center', 'gap-2', 'px-4', 'py-2', 'bg-blue-200', 'text-blue-700', 'rounded-full', 'shadow-sm', 'w-5', 'h-5', 'badge', 'flex', 'items-center', 'gap-2', 'px-4', 'py-2', 'bg-blue-200', 'text-blue-700', 'rounded-full', 'shadow-sm', 'w-5', 'h-5', 'badge', 'flex', 'items-center', 'gap-2', 'px-4', 'py-2', 'bg-blue-200', 'text-blue-700', 'rounded-full', 'shadow-sm', 'w-5', 'h-5', 'badge', 'flex', 'items-center', 'gap-2', 'px-4', 'py-2', 'bg-blue-200', 'text-blue-700', 'rounded-full', 'shadow-sm', 'w-5', 'h-5', 'badge', 'flex', 'items-center', 'gap-2', 'px-4', 'py-2', 'bg-blue-200', 'text-blue-700', 'rounded-full', 'shadow-sm', 'w-5', 'h-5', 'badge', 'flex', 'items-center', 'gap-2', 'px-4', 'py-2', 'bg-blue-200', 'text-blue-700', 'rounded-full', 'shadow-sm', 'w-5', 'h-5', 'badge', 'flex', 'items-center', 'gap-2', 'px-4', 'py-2', 'bg-blue-200', 'text-blue-700', 'rounded-full', 'shadow-sm', 'w-5', 'h-5', 'badge', 'flex', 'items-center', 'gap-2', 'px-4', 'py-2', 'bg-blue-200', 'text-blue-700', 'rounded-full', 'shadow-sm', 'w-5', 'h-5',];
var __VLS_special;
var __VLS_self;
