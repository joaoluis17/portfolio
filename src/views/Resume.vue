<template>
    <section id="resume" class="w-full px-8 py-16 text-left">
        <h2 class="text-3xl text-gray-600 dark:text-gray-200 font-bold mb-6">
            Experiências
        </h2>

        <div class="mb-12 space-y-4">
            <div 
                v-for="(job, index) in jobs" 
                :key="index"
                @click="toggle(index)"
                class="bg-gray-200 p-6 rounded shadow hover:shadow-lg transition-all cursor-pointer"
            >
                <!-- Header -->
                <div class="flex justify-between items-center">
                    <div>
                        <h3 class="text-xl text-gray-600 font-bold mb-1">
                            {{ job.title }}
                        </h3>
                        <p class="text-gray-600 text-sm">
                            {{ job.period }}
                        </p>
                    </div>

                    <!-- Ícone -->
                    <span class="text-gray-600 text-xl">
                        {{ activeIndex === index ? '−' : '+' }}
                    </span>
                </div>

                <!-- Conteúdo expandido -->
                <transition name="fade">
                    <div v-if="activeIndex === index" class="mt-4 text-gray-700">
                        <ul class="list-disc pl-5 space-y-2">
                            <li v-for="(item, i) in job.details" :key="i">
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </transition>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Resume',

    data() {
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
        }
    },

    methods: {
        toggle(index) {
            this.activeIndex = this.activeIndex === index ? null : index
        }
    }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
    transition: all 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
    transform: translateY(-5px);
}
</style>