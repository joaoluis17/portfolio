"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_router_1 = require("vue-router");
var Home_vue_1 = __importDefault(require("../views/Home.vue"));
var Contact_vue_1 = __importDefault(require("../views/Contact.vue"));
var routes = [
    { path: '/', component: Home_vue_1.default },
    { path: '/contact', component: Contact_vue_1.default },
];
var router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(),
    routes: routes,
});
exports.default = router;
