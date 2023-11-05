const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Habilita a gravação de vídeo
    video: true,
    // Desativa a compressão de vídeo para economizar tempo (opcional)
    videoCompression: false,
    // Configura o Cypress Studio (opcional)
    experimentalStudio: true,

    browser: "chrome",

    setupNodeEvents(on, config) {
      // Implementa ouvintes de eventos do Node aqui, se necessário
    },
  },
  // Outras configurações do Cypress podem ser adicionadas aqui
});
