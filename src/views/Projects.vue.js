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
exports.default = (await Promise.resolve().then(function () { return __importStar(require('vue')); })).defineComponent({
    name: 'Projects',
    data: function () {
        return {
            selectedProject: null,
            projects: [
                {
                    title: 'Conversor',
                    description: 'Esse é um projeto de conversor universal criado junto com o João Fernando (ocorvu)',
                    fullDescription: 'Criamos esse projeto com o intuito de estudarmos o Front-End. Nele, temos um conversor de texto com as seguintes opções: Maiúsculo, Minúsculo, Capitalizar, MaIuScUlO, mInUsCuLo, Inverso, Reverso e Copiar texto. Além de um conversor de medidas, com as opções: km, hm, dam, m, dm, cm, mm',
                    link: 'https://github.com/ocorvu/conversor.git',
                },
                {
                    title: 'Site Pessoal',
                    description: 'Nesse projeto, criei um site pessoal para divulgar meus trabalhos na área da música',
                    fullDescription: 'Essa landing page, criada em Vue JS, com layout totalmente responsivo e com diversas telas integradas no arquivo principal.',
                    link: 'https://github.com/joaoluis17/music-portfolio',
                },
            ],
        };
    },
    methods: {
        showProjectDetails: function (index) {
            this.selectedProject = index;
        },
        closeProjectDetails: function () {
            this.selectedProject = null;
        },
        handleClickOutside: function (event) {
            if (this.selectedProject !== null && this.$refs.projectDetails && !this.$refs.projectDetails.contains(event.target)) {
                this.closeProjectDetails();
            }
        }
    },
    mounted: function () {
        document.addEventListener('click', this.handleClickOutside);
    },
    beforeUnmount: function () {
        document.removeEventListener('click', this.handleClickOutside);
    }
});
; /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)(__assign({ id: ("projects") }, { class: ("w-full px-20 items-start text-left") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: ("text-3xl text-gray-600 dark:text-gray-200 font-bold my-12") }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex overflow-x-auto space-x-4 py-4") }));
var _loop_1 = function (project, index) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ key: ((index)) }, { class: ("project-item bg-gray-200 p-6 rounded shadow hover:shadow-lg transition-shadow w-64") }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: ("text-xl text-gray-600 font-bold mb-2") }));
    (project.title);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-gray-600") }));
    (project.description);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.showProjectDetails(index);
        } }, { class: ("mt-4 bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-700") }));
};
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.projects)); _i < _a.length; _i++) {
    var _b = _a[_i], project = _b[0], index = _b[1];
    _loop_1(project, index);
}
if (__VLS_ctx.selectedProject !== null) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign({ onClick: (__VLS_ctx.closeProjectDetails) }, { ref: ("projectDetails") }), { class: ("project-details mt-8 p-6 bg-gray-100 rounded shadow-lg") }));
    // @ts-ignore navigation for `const projectDetails = ref()`
    /** @type { typeof __VLS_ctx.projectDetails } */ ;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: ("text-2xl text-gray-600 dark:text-gray-200 font-bold mb-4") }));
    (__VLS_ctx.projects[__VLS_ctx.selectedProject].title);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-lg text-gray-600 dark:text-gray-200") }));
    (__VLS_ctx.projects[__VLS_ctx.selectedProject].fullDescription);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ href: ((__VLS_ctx.projects[__VLS_ctx.selectedProject].link)), target: ("_blank") }, { class: ("text-blue-400 hover:text-blue-700") }));
}
['w-full', 'px-20', 'items-start', 'text-left', 'text-3xl', 'text-gray-600', 'dark:text-gray-200', 'font-bold', 'my-12', 'flex', 'overflow-x-auto', 'space-x-4', 'py-4', 'project-item', 'bg-gray-200', 'p-6', 'rounded', 'shadow', 'hover:shadow-lg', 'transition-shadow', 'w-64', 'text-xl', 'text-gray-600', 'font-bold', 'mb-2', 'text-gray-600', 'mt-4', 'bg-blue-400', 'text-white', 'py-2', 'px-4', 'rounded', 'hover:bg-blue-700', 'project-details', 'mt-8', 'p-6', 'bg-gray-100', 'rounded', 'shadow-lg', 'text-2xl', 'text-gray-600', 'dark:text-gray-200', 'font-bold', 'mb-4', 'text-lg', 'text-gray-600', 'dark:text-gray-200', 'text-blue-400', 'hover:text-blue-700',];
var __VLS_special;
var __VLS_self;
