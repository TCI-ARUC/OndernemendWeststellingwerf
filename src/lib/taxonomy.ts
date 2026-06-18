// Kleur- en datumlogica gedeeld door de homepage, /nieuws en /agenda.
// Content-bestanden bevatten alleen een categorie-naam; de huisstijlkleur leiden we hier af,
// zodat tekstschrijvers geen kleurcodes hoeven te kennen.

const NIEUWS_KLEUR: Record<string, string> = {
  Terugblik: 'var(--oranje-tekst)',
  Vereniging: 'var(--magenta)',
  'Voor leden': 'var(--teal-tekst)',
  Oproep: 'var(--oranje-tekst)',
  Regio: 'var(--rood)',
  Toerisme: 'var(--oranje)',
  Gebied: 'var(--magenta)',
};

export function nieuwsKleur(category: string): string {
  return NIEUWS_KLEUR[category] ?? 'var(--magenta)';
}

export interface AgendaStijl {
  labelBg: string;
  labelColor: string;
  dateBg: string;
}

const AGENDA_STIJL: Record<string, AgendaStijl> = {
  Netwerkborrel: { labelBg: 'rgba(149,27,129,.10)', labelColor: 'var(--magenta)', dateBg: 'var(--magenta)' },
  'Regio-evenement': { labelBg: 'rgba(240,144,0,.13)', labelColor: 'var(--oranje-tekst)', dateBg: 'var(--ink)' },
  Viering: { labelBg: 'rgba(22,168,146,.12)', labelColor: 'var(--teal-tekst)', dateBg: 'var(--ink)' },
  Bedrijfsbezoek: { labelBg: 'rgba(22,168,146,.12)', labelColor: 'var(--teal-tekst)', dateBg: 'var(--ink)' },
};

export function agendaStijl(category: string): AgendaStijl {
  return AGENDA_STIJL[category] ?? { labelBg: 'rgba(41,35,92,.07)', labelColor: 'var(--ink-500)', dateBg: 'var(--ink)' };
}

const MAANDEN = ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];

// UTC gebruiken zodat een datum als "2026-06-24" niet door tijdzones verschuift.
export function dag(d: Date): string {
  return String(d.getUTCDate());
}

export function maandKort(d: Date): string {
  return MAANDEN[d.getUTCMonth()];
}

export function datumLang(d: Date): string {
  const maanden = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
  return `${d.getUTCDate()} ${maanden[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}
