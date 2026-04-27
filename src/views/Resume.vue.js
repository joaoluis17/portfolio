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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (await Promise.resolve().then(function () { return __importStar(require('vue')); })).defineComponent({
    name: 'Resume',
    data: function () {
        return {
            activeIndex: null,
            jobs: [
                {
                    title: 'Desenvolvedor Web Full-Stack',
                    period: '10/2025 - 03/2026',
                    details: [
                        'Desenvolvimento de páginas com WordPress e Elementor',
                        'Criação de plugins personalizados com PHP, JavaScript e CSS',
                        'Automação de envio de e-mails com Python',
                        'Criação de dashboards com Python, ClickUp e Power BI',
                        'Documentação e definição de regras de negócio para organização e governança da equipe'
                    ]
                },
                {
                    title: 'Desenvolvedor Web Front-End / Scrum Master',
                    period: '04/2021 - 09/2025',
                    details: [
                        'Organização de projetos com Scrum e Kanban',
                        'Análise de sprints e métricas com Excel',
                        'Criação de dashboards com Python',
                        'Planejamento e execução de testes',
                        'Desenvolvimento de interfaces, APIs e integrações com Vue JS, PHP e Laravel',
                        'Criação de landing pages e sistemas administrativos com WordPress, Blade, HTML, Tailwind CSS e JavaScript'
                    ]
                },
                {
                    title: 'Expert em Interação',
                    period: '02/2021 - 04/2021',
                    details: [
                        'Atendimento ao cliente (Shopee)',
                        'Resolução de problemas via SAC',
                        'Preenchimento de planilhas e roteiros operacionais'
                    ]
                },
                {
                    title: 'Auxiliar Administrativo',
                    period: '01/2016 - 06/2016',
                    details: [
                        'Atendimento ao cliente e alunos',
                        'Venda de cursos',
                        'Prospecção de clientes',
                        'Controle de planilhas',
                        'Recepção de pagamentos'
                    ]
                },
                {
                    title: 'Profissional de Eventos Autônomo',
                    period: '05/2015 - 02/2020',
                    details: [
                        'Organização e coordenação de eventos',
                        'Atendimento ao cliente',
                        'Atuação em múltiplos projetos simultâneos'
                    ]
                }
            ]
        };
    },
    methods: {
        toggle: function (index) {
            this.activeIndex = this.activeIndex === index ? null : index;
        }
    }
}); /* PartiallyEnd: #3632/script.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)(__assign({ id: "resume" }, { class: "w-full px-8 py-16 text-left" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "text-3xl text-gray-600 dark:text-gray-200 font-bold mb-6" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "mb-12 space-y-4" }));
var _loop_1 = function (job, index) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.toggle(index);
        } }, { key: (index) }), { class: "bg-gray-200 p-6 rounded shadow hover:shadow-lg transition-all cursor-pointer" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex justify-between items-center" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: "text-xl text-gray-600 font-bold mb-1" }));
    (job.title);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-gray-600 text-sm" }));
    (job.period);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "text-gray-600 text-xl" }));
    (__VLS_ctx.activeIndex === index ? '−' : '+');
    var __VLS_0 = {}.transition;
    /** @type {[typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ]} */ ;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        name: "fade",
    }));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
            name: "fade",
        }], __VLS_functionalComponentArgsRest(__VLS_1), false));
    __VLS_3.slots.default;
    if (__VLS_ctx.activeIndex === index) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "mt-4 text-gray-700" }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)(__assign({ class: "list-disc pl-5 space-y-2" }));
        for (var _c = 0, _d = __VLS_getVForSourceType((job.details)); _c < _d.length; _c++) {
            var _e = _d[_c], item = _e[0], i = _e[1];
            __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
                key: (i),
            });
            (item);
        }
    }
};
var __VLS_3;
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.jobs)); _i < _a.length; _i++) {
    var _b = _a[_i], job = _b[0], index = _b[1];
    _loop_1(job, index);
}
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['px-8']} */ ;
/** @type {__VLS_StyleScopedClasses['py-16']} */ ;
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
/** @type {__VLS_StyleScopedClasses['text-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-12']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-4']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['list-disc']} */ ;
/** @type {__VLS_StyleScopedClasses['pl-5']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-2']} */ ;
var __VLS_dollars;
var __VLS_self;
