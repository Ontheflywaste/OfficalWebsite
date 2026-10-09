/**
 * Open roles shown on /careers/.
 *
 * This is the single source of truth: the role cards above the form, the
 * "Position you're applying for" dropdown, and the server-side whitelist in
 * app/api/careers/route.ts all read from this array.
 *
 * To add, remove, or rename a role, edit this list and commit. Nothing else
 * needs to change. Keep blurbs to one or two plain sentences, and leave pay
 * and schedule details for the interview.
 */
export const OPEN_ROLES = [
  {
    id: 'trash-collector',
    title: 'Trash Collector',
    blurb:
      "Walk the route, pull bagged trash from residents' doors, and leave every breezeway cleaner than you found it. No experience needed. We train you and supply the gear.",
  },
  {
    id: 'driver-collector',
    title: 'Driver / Collector',
    blurb:
      "Everything a Trash Collector does, plus you drive the truck and run the route. You'll need a valid Florida driver's license and a clean driving record.",
  },
  {
    id: 'sales-representative',
    title: 'Sales Representative',
    blurb:
      "A different kind of role. This one is about relationships, not routes. You'll meet property managers and HOA boards across Central Florida, show them how we work, and bring new communities on board. Sales experience helps. Knowing the apartment world helps more.",
  },
] as const;

/** Catch-all option at the bottom of the dropdown. */
export const OTHER_OPTION = 'Other / Not sure';

/** Every value the server will accept for the "position" field. */
export const POSITION_OPTIONS: readonly string[] = [
  ...OPEN_ROLES.map((role) => role.title),
  OTHER_OPTION,
];
