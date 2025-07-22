import fs from 'fs';
import { format, addHours } from 'date-fns';

// 🔧 Funções auxiliares
function padZero(num) {
  return num < 10 ? '0' + num : num;
}

function formatDateEPG(date) {
  return format(date, "yyyyMMddHHmmss xxx").replace(':', '');
}

function generateChannelEPG(channel) {
  const { id, title, description } = channel;
  const now = new Date();
  const programmes = [];

  for (let day = 0; day < 7; day++) {
    for (let hour = 0; hour < 24; hour++) {
      const startTime = addHours(now, day * 24 + hour);
      const endTime = addHours(startTime, 1);

      programmes.push(`
  <programme start="${formatDateEPG(startTime)}" stop="${formatDateEPG(endTime)}" channel="${id}">
    <title>${title}</title>
    <desc>${description}</desc>
  </programme>`);
    }
  }

  return `
  <channel id="${id}">
    <display-name>${title}</display-name>
  </channel>
  ${programmes.join('\n')}
  `;
}

// 🔽 Lendo o channels.json
const channelsData = JSON.parse(fs.readFileSync('channels.json', 'utf-8'));

// 🔽 Criando EPG para todos os canais
let epgChannels = '';
channelsData.forEach(channel => {
  epgChannels += generateChannelEPG(channel);
});

// 🔽 Criando conteúdo final do epg.xml
const epgContent = `<?xml version="1.0" encoding="UTF-8" ?>
<tv generator-info-name="EPGGenerator">
${epgChannels}
</tv>`;

// 🔽 Salvando o arquivo epg.xml
fs.writeFileSync('epg.xml', epgContent, 'utf-8');
console.log('✅ Arquivo epg.xml gerado com sucesso!');