<template>
  <section id="management" class="py-16 px-4 flex items-start justify-center pb-16">
    <div class="metis-surface relative w-full max-w-5xl rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute -top-20 -right-16 h-56 w-56 rounded-full bg-blue-200/50 blur-3xl"></div>
        <div class="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-slate-200/80 blur-3xl"></div>
      </div>

      <div class="relative p-6 sm:p-8 lg:p-10">
        <header class="grid gap-8 lg:grid-cols-[1.45fr_0.95fr] lg:items-start">
          <div class="space-y-5">
            <span class="inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700 shadow-sm">
              METIS Framework
            </span>

            <p class="text-base sm:text-lg leading-8 text-gray-600">
              O METIS é um framework autoral de gestão adaptativa criado para equipes pequenas, médias e times
              de sustentação. A proposta é organizar o trabalho com clareza e ritmo, sem transformar a operação em um
              processo pesado demais para a realidade do time.
            </p>

            <div class="flex flex-wrap gap-3">
              <span
                v-for="highlight in highlights"
                :key="highlight"
                class="inline-flex items-center rounded-full bg-white/80 px-4 py-2 text-sm text-gray-600 shadow-sm ring-1 ring-blue-100"
              >
                {{ highlight }}
              </span>
            </div>
          </div>

          <aside class="rounded-2xl border border-blue-200 bg-white/80 p-5 shadow-sm backdrop-blur-sm">
            <p class="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">Explore mais</p>
            <h3 class="mt-3 text-2xl font-semibold text-gray-700">Quer ver a estrutura completa?</h3>
            <p class="mt-3 text-sm leading-7 text-gray-600">
              Aqui eu apresento a essência do METIS. Na documentação você encontra o raciocínio completo, os detalhes
              de aplicação e a camada mais estratégica do framework.
            </p>

            <div class="mt-6 flex flex-col gap-3">
              <a
                :href="documentationUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="metis-link inline-flex items-center justify-center rounded-full bg-blue-400 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
              >
                Abrir documentação
              </a>

              <a
                :href="repositoryUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="metis-link inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:border-blue-300 hover:text-blue-700"
              >
                <img src="../assets/github-logo.svg" class="h-5 w-5" alt="GitHub" />
                Ver repositório
              </a>
            </div>
          </aside>
        </header>

        <div class="mt-10 grid gap-5 md:grid-cols-3">
          <article
            v-for="(pillar, index) in pillars"
            :key="pillar.id"
            class="metis-card rounded-2xl p-5 sm:p-6"
          >
            <div class="flex items-center justify-between gap-3">
              <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                0{{ index + 1 }}
              </span>
              <span class="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                {{ pillar.kicker }}
              </span>
            </div>

            <transition name="pillar-swap" mode="out-in">
              <div
                v-if="!openPillars[pillar.id]"
                :key="`${pillar.id}-shape`"
                class="pillar-face pillar-face--closed"
              >
                <button
                  type="button"
                  class="shape-trigger"
                  :aria-controls="`pillar-content-${pillar.id}`"
                  :aria-expanded="String(openPillars[pillar.id])"
                  :aria-label="`Abrir resumo de ${pillar.title}`"
                  @click="togglePillar(pillar.id)"
                >
                  <span class="shape-shell">
                    <svg
                      v-if="pillar.shape === 'metis'"
                      viewBox="0 0 100 100"
                      class="symbol-svg symbol-svg--metis"
                      aria-hidden="true"
                    >
                      <defs>
                        <linearGradient id="metisOuter" x1="18%" y1="10%" x2="82%" y2="88%">
                          <stop offset="0%" stop-color="#66707B" />
                          <stop offset="100%" stop-color="#313842" />
                        </linearGradient>
                      </defs>
                      <polygon
                        points="50,8 79,25 79,61 50,79 21,61 21,25"
                        fill="url(#metisOuter)"
                        stroke="#222930"
                        stroke-width="4.5"
                        stroke-linejoin="round"
                      />
                      <polygon points="50,12 73,26 50,40 27,26" fill="#7A838D" />
                      <polygon points="27,26 50,40 50,73 27,59" fill="#535D67" />
                      <polygon points="50,40 73,26 73,59 50,73" fill="#343B44" />
                      <polyline
                        points="21,25 50,8 79,25"
                        fill="none"
                        stroke="#252C33"
                        stroke-width="3.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <polyline
                        points="21,61 50,79 79,61"
                        fill="none"
                        stroke="#1F252B"
                        stroke-width="5.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <svg
                      v-else-if="pillar.shape === 'afs'"
                      viewBox="0 0 100 100"
                      class="symbol-svg symbol-svg--afs"
                      aria-hidden="true"
                    >
                      <defs>
                        <radialGradient id="afsCore" cx="35%" cy="30%" r="70%">
                          <stop offset="0%" stop-color="#727B85" />
                          <stop offset="58%" stop-color="#4B535D" />
                          <stop offset="100%" stop-color="#2F363E" />
                        </radialGradient>
                        <clipPath id="afsClip">
                          <circle cx="50" cy="50" r="28" />
                        </clipPath>
                      </defs>
                      <ellipse cx="50" cy="79" rx="22" ry="8" fill="#2A3138" opacity="0.16" />
                      <circle
                        cx="50"
                        cy="50"
                        r="28"
                        fill="url(#afsCore)"
                        stroke="#252C33"
                        stroke-width="4"
                      />
                      <ellipse
                        cx="61"
                        cy="57"
                        rx="18"
                        ry="22"
                        fill="#232A31"
                        opacity="0.28"
                        clip-path="url(#afsClip)"
                      />
                      <ellipse cx="40" cy="38" rx="12" ry="9" fill="#8A929B" opacity="0.45" />
                    </svg>

                    <svg
                      v-else
                      viewBox="0 0 100 100"
                      class="symbol-svg symbol-svg--prp"
                      aria-hidden="true"
                    >
                      <polygon
                        points="50,11 84,76 16,76"
                        fill="#3A424B"
                        stroke="#252C33"
                        stroke-width="4"
                        stroke-linejoin="round"
                      />
                      <polygon points="50,16 70,53 50,65" fill="#5B6470" />
                      <polygon points="50,16 50,65 24,69" fill="#434B55" />
                      <polygon points="50,65 76,69 70,53" fill="#2E353D" />
                    </svg>
                  </span>
                </button>

                <h3 class="mt-6 text-2xl font-semibold text-gray-700">{{ pillar.title }}</h3>
                <p class="mt-2 text-sm leading-6 text-gray-500">
                  {{ pillar.prompt }}
                </p>
              </div>

              <div
                v-else
                :id="`pillar-content-${pillar.id}`"
                :key="`${pillar.id}-content`"
                class="pillar-face pillar-face--open"
              >
                <div class="flex items-start justify-between gap-3">
                  <h3 class="text-2xl font-semibold text-gray-700">{{ pillar.title }}</h3>
                  <button type="button" class="pillar-reset" @click="togglePillar(pillar.id)">
                    Ver símbolo
                  </button>
                </div>

                <p class="mt-4 text-sm sm:text-base leading-7 text-gray-600">
                  {{ pillar.summary }}
                </p>
                <p class="mt-4 text-sm leading-6 text-gray-500">
                  {{ pillar.teaser }}
                </p>
              </div>
            </transition>
          </article>
        </div>

        <div class="mt-8 rounded-2xl border border-slate-200 bg-white/70 p-5 sm:p-6 shadow-sm">
          <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 class="text-xl font-semibold text-gray-700">Por que eu criei esse framework?</h3>
              <p class="mt-2 text-sm sm:text-base leading-7 text-gray-600">
                O METIS nasceu de contexto real. Ele foi pensado para ajudar equipes a ganhar direção,
                previsibilidade e resposta rápida sem cair em burocracia. Se essa ideia conversar com o seu cenário,
                a documentação foi feita exatamente para levar essa curiosidade adiante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import projects from '@/data/projects'

const metisProject = projects.find((project) => project.title === 'METIS Framework') ?? {}

export default {
  name: 'Management',

  data() {
    return {
      documentationUrl: metisProject.linkSite || 'https://metis-framework.netlify.app/',
      repositoryUrl: metisProject.link || 'https://github.com/metis-framework/metis',
      openPillars: {
        metis: false,
        afs: false,
        prp: false
      },
      highlights: [
        'Fluxo contínuo',
        'Prioridade adaptativa',
        'Times de sustentação',
        'Menos burocracia, mais clareza'
      ],
      pillars: [
        {
          id: 'metis',
          kicker: 'Framework',
          title: 'METIS',
          shape: 'metis',
          prompt: 'Clique no hexágono para revelar a ideia central do framework.',
          summary:
            'O METIS é a camada que organiza o todo: contexto, prioridades, leitura de capacidade e direção de entrega. Ele foi desenhado para times que precisam de estrutura, mas não podem se dar ao luxo de operar com rigidez excessiva.',
          teaser:
            'Na documentação, eu aprofundo a lógica do framework, seus princípios e como ele se adapta a cenários diferentes.'
        },
        {
          id: 'afs',
          kicker: 'Fluxo',
          title: 'AFS',
          shape: 'afs',
          prompt: 'Clique na esfera para abrir a visão resumida do fluxo adaptativo.',
          summary:
            'O AFS, ou Adaptive Flow System, é o coração operacional do METIS. Ele olha para o trabalho como fluxo, ajuda a visualizar gargalos e favorece ajustes rápidos conforme a realidade do time muda ao longo da execução.',
          teaser:
            'Na documentação, eu mostro como esse fluxo ganha forma na prática e por que ele evita caos sem criar uma rotina pesada.'
        },
        {
          id: 'prp',
          kicker: 'Intervenção',
          title: 'PRP',
          shape: 'prp',
          prompt: 'Clique no triângulo para ver como o PRP aborda urgências sem travar a operação.',
          summary:
            'O PRP, ou Priority Response Protocol, é a resposta do framework para urgências e cenários críticos. A ideia é reagir com velocidade sem desmontar completamente o restante da operação e da previsibilidade do time.',
          teaser:
            'Na documentação, eu detalho quando o protocolo entra em ação, como ele protege o fluxo e quais decisões ele orienta.'
        }
      ]
    }
  },

  methods: {
    togglePillar(pillarId) {
      this.openPillars[pillarId] = !this.openPillars[pillarId]
    }
  }
}
</script>

<style scoped>
.metis-surface {
  background: linear-gradient(145deg, rgba(243, 244, 246, 0.98), rgba(255, 255, 255, 0.95));
}

.metis-card {
  position: relative;
  min-height: 380px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(191, 219, 254, 0.9);
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.06);
  backdrop-filter: blur(10px);
  transition:
    transform 0.55s ease,
    box-shadow 0.55s ease,
    border-color 0.55s ease;
}

.metis-card:hover {
  transform: translateY(-6px);
  border-color: rgba(96, 165, 250, 0.7);
  box-shadow: 0 18px 36px rgba(59, 130, 246, 0.14);
}

.pillar-face {
  flex: 1;
}

.pillar-face--closed {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.pillar-face--open {
  padding-top: 2rem;
}

.shape-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 160px;
  border: 1px solid rgba(203, 213, 225, 0.9);
  border-radius: 2rem;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.94), rgba(239, 246, 255, 0.74));
  box-shadow: 0 18px 30px rgba(55, 62, 69, 0.08);
  transition:
    transform 0.55s ease,
    box-shadow 0.55s ease,
    border-color 0.55s ease,
    background-color 0.55s ease;
}

.shape-trigger:hover {
  transform: translateY(-6px) scale(1.03);
  border-color: rgba(96, 165, 250, 0.65);
  box-shadow: 0 24px 38px rgba(55, 62, 69, 0.14);
}

.shape-trigger:focus-visible {
  outline: 2px solid rgba(96, 165, 250, 0.65);
  outline-offset: 4px;
}

.shape-shell {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 112px;
  height: 112px;
}

.symbol-svg {
  width: 108px;
  height: 108px;
  filter: drop-shadow(0 18px 22px rgba(55, 62, 69, 0.18));
  transition:
    transform 0.55s ease,
    filter 0.55s ease;
}

.shape-trigger:hover .symbol-svg {
  transform: translateY(-2px) scale(1.03);
  filter: drop-shadow(0 22px 28px rgba(55, 62, 69, 0.24));
}

.symbol-svg--metis {
  transform: translateY(2px);
}

.symbol-svg--prp {
  transform: translateY(3px);
}

.pillar-reset {
  border: 1px solid rgba(191, 219, 254, 0.95);
  border-radius: 999px;
  padding: 0.45rem 0.9rem;
  background: rgba(239, 246, 255, 0.92);
  color: #2563eb;
  font-size: 0.78rem;
  font-weight: 600;
  transition:
    transform 0.45s ease,
    background-color 0.45s ease,
    border-color 0.45s ease;
}

.pillar-reset:hover {
  transform: translateY(-2px);
  background: rgba(219, 234, 254, 0.98);
  border-color: rgba(96, 165, 250, 0.8);
}

.pillar-swap-enter-active,
.pillar-swap-leave-active {
  transition:
    opacity 0.55s ease,
    transform 0.55s ease,
    filter 0.55s ease;
}

.pillar-swap-enter-from {
  opacity: 0;
  transform: translateY(26px) scale(0.96);
  filter: blur(6px);
}

.pillar-swap-leave-to {
  opacity: 0;
  transform: translateY(-34px) scale(0.88);
  filter: blur(8px);
}

.metis-link {
  transition:
    transform 0.45s ease,
    box-shadow 0.45s ease,
    background-color 0.45s ease,
    border-color 0.45s ease,
    color 0.45s ease;
}

.metis-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 24px rgba(59, 130, 246, 0.16);
}

@media (max-width: 767px) {
  .metis-card {
    min-height: 340px;
  }

  .shape-trigger {
    width: 144px;
    height: 144px;
    border-radius: 1.75rem;
  }

  .shape-shell {
    width: 96px;
    height: 96px;
  }

  .symbol-svg {
    width: 94px;
    height: 94px;
  }

  .pillar-face--open {
    padding-top: 1.5rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .metis-card,
  .metis-link,
  .shape-trigger,
  .pillar-reset,
  .pillar-swap-enter-active,
  .pillar-swap-leave-active {
    transition: none;
  }
}
</style>
