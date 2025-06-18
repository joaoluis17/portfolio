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
                    title: 'Site Pessoal',
                    description: 'Nesse projeto, criei um site pessoal para divulgar meus trabalhos na área da música',
                    fullDescription: 'Essa landing page, criada em Vue JS, com layout totalmente responsivo e com diversas telas integradas no arquivo principal.',
                    link: 'https://github.com/joaoluis17/music-portfolio',
                    linkSite: 'https://john-prado.netlify.app/',
                },
                {
                    title: 'Conversor Universal',
                    description: 'Esse é um conversor universal que saiu de um projeto anterior, em parceria com o João Fernando (OCorvu).',
                    fullDescription: 'Criamos o primeiro projeto com o intuito de estudarmos o Front-End. Nele, criamos dois conversores: Conversor de Texto com as seguintes opções: Maiúsculo, Minúsculo, Capitalizar, MaIuScUlO, mInUsCuLo, Inverso, Reverso e Copiar texto. E um conversor de medidas, com as opções: km, hm, dam, m, dm, cm, mm. Eu segui com esse projeto, criando outro repositório do zero, porém, usando este como base. Além desses dois conversores já citados, criei também um conversor de moedas, onde simultaneamente, você pode converter as seguintes moedas: Real "R$"; Peso Argentino "ARS"; Dólar EUA "$"; Dólar Canadense "CAD"; Euro "€"; Libra Esterlina "£"; Franco Suíço "CHF"; Rublo Russo "RUB"; Iene "JP¥"; Renminbi (China) "元/¥"; Won Sul-Coreano "₩" e; Dólar Australiano "AU$" . Esse é um projeto com HTML5, Tailwind CSS e Vanilla JavaScript.',
                    link: 'https://github.com/ocorvu/conversor.git',
                    linkSite: 'https://conversor-universal.netlify.app/',
                },
                {
                    title: 'Helpick',
                    description: 'Comunidade online para músicos',
                    fullDescription: 'A ideia desse site é uma comunidade musical, onde os usuários poderão tirar dúvidas e conhecer outros músicos para melhorar seu networking e criar amizades. Este é meu primeiro projeto Full-Stack em Laravel, Tailwind CSS e MySQL, além de usar Alpine e JavaScript para a lógica de algumas mini-funções do site. Tive auxílio do João Fernando (ocorvu) nesse projeto, onde ele me ajudou a criar alguns componentes do fórum. Nele temos um site com alguns painéis (Fórum, Blog e Produtos), além de ter cadastro de usuários e outras funções. Criei também, as landing pages responsivas usando JavaScript e Tailwind CSS.',
                    link: 'https://github.com/joaoluis17/helpick',
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)(__assign({ id: "projects" }, { class: "w-full px-20 items-start text-left" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "text-3xl text-gray-600 dark:text-gray-200 font-bold my-12" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex overflow-x-auto space-x-4 py-4" }));
var _loop_1 = function (project, index) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ key: (index) }, { class: "project-item bg-gray-200 p-6 rounded shadow hover:shadow-lg transition-shadow w-64" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: "text-xl text-gray-600 font-bold mb-2" }));
    (project.title);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-gray-600" }));
    (project.description);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.showProjectDetails(index);
        } }, { class: "mt-4 bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-700" }));
};
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.projects)); _i < _a.length; _i++) {
    var _b = _a[_i], project = _b[0], index = _b[1];
    _loop_1(project, index);
}
if (__VLS_ctx.selectedProject !== null) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign({ onClick: (__VLS_ctx.closeProjectDetails) }, { ref: "projectDetails" }), { class: "project-details mt-8 p-6 bg-gray-100 rounded shadow-lg" }));
    /** @type {typeof __VLS_ctx.projectDetails} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: "text-2xl text-gray-600 font-bold mb-4" }));
    (__VLS_ctx.projects[__VLS_ctx.selectedProject].title);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-lg text-gray-600" }));
    (__VLS_ctx.projects[__VLS_ctx.selectedProject].fullDescription);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "mt-4" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ href: (__VLS_ctx.projects[__VLS_ctx.selectedProject].link), target: "_blank" }, { class: "text-blue-400 hover:text-blue-700 mr-4" }));
    if (__VLS_ctx.projects[__VLS_ctx.selectedProject].linkSite) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ href: (__VLS_ctx.projects[__VLS_ctx.selectedProject].linkSite), target: "_blank" }, { class: "text-blue-400 hover:text-blue-700" }));
    }
}
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['px-20']} */ ;
/** @type {__VLS_StyleScopedClasses['items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
/** @type {__VLS_StyleScopedClasses['text-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['my-12']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-x-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['space-x-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4']} */ ;
/** @type {__VLS_StyleScopedClasses['project-item']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['w-64']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blue-400']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-blue-700']} */ ;
/** @type {__VLS_StyleScopedClasses['project-details']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-8']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-400']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-blue-700']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-400']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-blue-700']} */ ;
var __VLS_dollars;
var __VLS_self;
