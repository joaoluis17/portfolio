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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@vueuse/core");
exports.default = (await Promise.resolve().then(function () { return __importStar(require('vue')); })).defineComponent({
    name: "ThemeButton",
    setup: function () {
        var isDark = (0, core_1.useDark)();
        var toggleDark = (0, core_1.useToggle)(isDark);
        return { toggleDark: toggleDark };
    },
    data: function () {
        return {
            adjustedBottom: 80, // Posição inicial
        };
    },
    mounted: function () {
        this.updateButtonPosition();
        window.addEventListener("resize", this.updateButtonPosition);
    },
    beforeUnmount: function () {
        window.removeEventListener("resize", this.updateButtonPosition);
    },
    methods: {
        updateButtonPosition: function () {
            var footer = document.querySelector("footer");
            if (footer && window.innerWidth < 1024) {
                var footerTop = footer.getBoundingClientRect().top;
                var windowHeight = window.innerHeight;
                if (footerTop < windowHeight - 30) { // Se o footer está visível
                    this.adjustedBottom = windowHeight - footerTop + 50;
                }
                else {
                    this.adjustedBottom = 100; // Posição padrão
                }
            }
            else {
                this.adjustedBottom = 80;
            }
        }
    }
});
; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        __VLS_ctx.toggleDark();
    } }, { class: "theme-button bg-blue-400 dark:bg-green-300 text-white dark:text-gray-800 py-2 px-4 rounded dark:hover:bg-green-700 hover:bg-blue-700 whitespace-nowrap" }), { style: ({ bottom: __VLS_ctx.adjustedBottom + 'px' }) }));
/** @type {__VLS_StyleScopedClasses['theme-button']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blue-400']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-green-300']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:hover:bg-green-700']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-blue-700']} */ ;
/** @type {__VLS_StyleScopedClasses['whitespace-nowrap']} */ ;
var __VLS_dollars;
var __VLS_self;
