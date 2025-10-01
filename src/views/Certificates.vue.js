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
    name: 'certificates',
    data: function () {
        return {
            selectedcertificate: null,
            certificates: [
                {
                    title: 'Agile Explorer - IBM',
                    description: 'Curso com certificação de 8 horas em Desenvolvimento Ágil pela IBM.',
                    fullDescription: 'Nesse plano de aprendizagem, aprendi do básico ao avançado sobre desenvolvimento ágil, com a metodologia da IBM.',
                    certificado: 'https://www.credly.com/badges/135198a1-a6cb-4e1c-b758-0d0478d2da1a/linked_in_profile',
                },
                {
                    title: 'Lean Manufacturing - Nível 1',
                    description: 'Curso com certificação de 2 horas em Lean Manufacturing pela RL&Associados.',
                    fullDescription: 'Nesse curso introdutório de nível 1, aprendi a base do "Lean Manufacturing", onde foi explicado temas como: Poka Yoke, Andon, Gerenciamento de Mudança, entre outros.',
                    certificado: 'https://acrobat.adobe.com/id/urn:aaid:sc:va6c2:e6339682-0579-4e5d-8abb-2f00b81f207b',
                },
                {
                    title: 'Formação White Belt Six Sigma',
                    description: 'Curso com certificação de 2 horas em Lean White Belt Six Sigma pela RL&Associados.',
                    fullDescription: 'Certificação White Belt, onde aprendi a base do Six Sigma. Nele, aprendi sobre os níveis e funções de cada "Belt", além de ferramentas e metodologias como: Dados - Global e Dentro, Desvio Padrão, Análise prática de um processo, Normalidade dos dados, entre outros.',
                    certificado: 'https://acrobat.adobe.com/id/urn:aaid:sc:va6c2:71e8cd41-c921-4dde-ba61-0c1e65bb5eee',
                },
                {
                    title: 'Liderança e Gestão De Equipes',
                    description: 'Curso com certificação de 30 horas em Resolução de Problemas pelo ENAP.',
                    fullDescription: 'Este é um dos cursos do Eixo "Resolvendo Problemas" da escola virtual ENAP. Nele, aprendi técnicas de gestão de equipes onde, com elas, posso inspirar o meu time a sempre tentar dar o melhor para trazer a satisfação do cliente.',
                    link: 'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:576fd501-64ed-47a9-a5bc-fdb849e419a4',
                },
                {
                    title: 'Desenvolvendo Times de Alta Performance',
                    description: 'Curso com certificação de 30 horas em Resolução de Problemas pelo ENAP.',
                    fullDescription: 'Este é o segundo curso do Eixo "Resolvendo Problemas" que tive a oportunidade de finalizar. Nesse curso, pude aprender técnicas e ferramentas de performance para que o time consiga ter melhores resultados de forma mais efetiva. Tive introdução ao método OKR, além de outras metodologias e ferramentas como o Kanban e o Canva.',
                    link: 'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:5751b4ff-730c-43d2-8d11-64e361d76bc9',
                },
                {
                    title: 'Organização de Equipes Ágeis: os papéis existentes em uma equipe',
                    description: 'Curso com certificação de 6 horas em Organização de Equipes pela Alura',
                    fullDescription: 'Nesse curso, fui ensinado sobre a organização de equipes com métodos ágeis, entendendo os papéis e funções existentes em uma equipe.',
                    link: 'https://cursos.alura.com.br/certificate/ce5bb624-df2f-4b12-bc12-60adebd00a0b?lang',
                },
                {
                    title: 'Imersão Dev 9ª Edição',
                    description: 'Workshop online com certificação de 4 horas em Desenvolvimento Web pela Alura',
                    fullDescription: 'Imersão Dev com foco em Desenvolvimento Web usando a linguagem JavaScript. Nesse workshop online, foi ensinado o básico da lógica de programação, além de explicar um pouco sobre cada função da área Dev.',
                    link: 'https://cursos.alura.com.br/immersion/certificate/e7db9c3d-2271-4dd2-8d22-60390338c577?lang',
                },
            ],
        };
    },
    methods: {
        showcertificateDetails: function (index) {
            this.selectedcertificate = index;
        },
        closecertificateDetails: function () {
            this.selectedcertificate = null;
        },
        handleClickOutside: function (event) {
            if (this.selectedcertificate !== null && this.$refs.certificateDetails && !this.$refs.certificateDetails.contains(event.target)) {
                this.closecertificateDetails();
            }
        },
        scrollLeft: function () {
            this.$refs.scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
        },
        scrollRight: function () {
            this.$refs.scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)(__assign({ id: "certificates" }, { class: "w-full px-4 pb-20 items-start text-left" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "text-3xl text-gray-600 dark:text-gray-200 font-bold my-12" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "relative" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: (__VLS_ctx.scrollLeft) }, { class: "absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ ref: "scrollContainer" }, { class: "flex overflow-x-auto scroll-smooth space-x-4 py-4 no-scrollbar" }));
/** @type {typeof __VLS_ctx.scrollContainer} */ ;
var _loop_1 = function (certificate, index) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ key: (index) }, { class: "certificate-item bg-gray-200 p-6 rounded shadow hover:shadow-lg transition-shadow w-64 shrink-0" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: "text-xl text-gray-600 font-bold mb-2" }));
    (certificate.title);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-gray-600" }));
    (certificate.description);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.showcertificateDetails(index);
        } }, { class: "mt-4 bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-700" }));
};
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.certificates)); _i < _a.length; _i++) {
    var _b = _a[_i], certificate = _b[0], index = _b[1];
    _loop_1(certificate, index);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: (__VLS_ctx.scrollRight) }, { class: "absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow" }));
if (__VLS_ctx.selectedcertificate !== null) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign({ onClick: (__VLS_ctx.closecertificateDetails) }, { ref: "certificateDetails" }), { class: "certificate-details mt-8 p-6 bg-gray-100 rounded shadow-lg" }));
    /** @type {typeof __VLS_ctx.certificateDetails} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: "text-2xl text-gray-600 font-bold mb-4" }));
    (__VLS_ctx.certificates[__VLS_ctx.selectedcertificate].title);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-lg text-gray-600" }));
    (__VLS_ctx.certificates[__VLS_ctx.selectedcertificate].fullDescription);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "mt-4" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ href: (__VLS_ctx.certificates[__VLS_ctx.selectedcertificate].link), target: "_blank" }, { class: "text-blue-400 hover:text-blue-700 mr-4" }));
}
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-20']} */ ;
/** @type {__VLS_StyleScopedClasses['items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
/** @type {__VLS_StyleScopedClasses['text-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['my-12']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['left-0']} */ ;
/** @type {__VLS_StyleScopedClasses['top-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['transform']} */ ;
/** @type {__VLS_StyleScopedClasses['-translate-y-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['z-10']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white/80']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-x-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['scroll-smooth']} */ ;
/** @type {__VLS_StyleScopedClasses['space-x-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4']} */ ;
/** @type {__VLS_StyleScopedClasses['no-scrollbar']} */ ;
/** @type {__VLS_StyleScopedClasses['certificate-item']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['w-64']} */ ;
/** @type {__VLS_StyleScopedClasses['shrink-0']} */ ;
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
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['right-0']} */ ;
/** @type {__VLS_StyleScopedClasses['top-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['transform']} */ ;
/** @type {__VLS_StyleScopedClasses['-translate-y-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['z-10']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white/80']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['certificate-details']} */ ;
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
var __VLS_dollars;
var __VLS_self;
