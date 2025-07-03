/*
 * OFU Traits & Boosts Generator Module
 * Dynamically generates large sets of traits and boosts programmatically.
 * This allows scaling to thousands without manual listing.
 */

// Configuration:
const TRAIT_COUNT = 5000;
const BOOST_COUNT = 5000;

// Seed arrays for generating unique names and effects:
const traitPrefixes = ['Hyper', 'Calm', 'Stealth', 'Thunder', 'Iron', 'Velvet', 'Silent', 'Blazing', 'Adaptive', 'Stoic'];
const traitRoots = ['Vision', 'Strike', 'Shield', 'Rhythm', 'Edge', 'Flow', 'Focus', 'Drive', 'Persistence', 'Insight'];
const traitCategories = ['player', 'manager', 'staff', 'board', 'media'];
const narrativeArcs = ['underdogRise', 'clutchPerformer', 'mastermind', 'legacyBuilder', 'fanFavourite'];
const attributes = ['tactics','passing','dribbling','defense','fitness','focus','teamCohesion','versatility','determination','aggression'];

const boostTriggers = ['rain','homeMatch','derby','last15minutes','opponentHigherRating','substitutionSuccess','managerHalfTime','scandal','possessionAbove60','opponentHighForm'];
const boostPrefixes = ['Surge', 'Dip', 'Wave', 'Pulse', 'Rush', 'Drift', 'Charge', 'Echo', 'Burst', 'Glide'];
const boostEffects = [
  { type: 'attribute', key: 'tactics', val: 3 },
  { type: 'attribute', key: 'focus', val: 2 },
  { type: 'morale', val: 4 },
  { type: 'attribute', key: 'aggression', val: 2 },
  { type: 'perception', val: 3 }
];

// Helper to pick random item
function randPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Generate traits
export function generateTraits(count = TRAIT_COUNT) {
  const traits = [];
  for (let i = 0; i < count; i++) {
    const prefix = randPick(traitPrefixes);
    const root = randPick(traitRoots);
    const name = `${prefix}${root}${i}`;
    const category = randPick(traitCategories);
    const primaryAttr = randPick(attributes);
    const narrative = { [randPick(narrativeArcs)]: Math.ceil(Math.random() * 5) };

    traits.push({
      id: `trait_${i}_${primaryAttr}`,
      name,
      description: `Automatically generated trait combining ${prefix} and ${root}, enhancing ${primaryAttr}.`,
      categories: [category],
      effectMap: {
        attribute: { [primaryAttr]: Math.ceil(Math.random() * 3) },
        morale: Math.ceil(Math.random() * 5) - 2,
        perception: Math.ceil(Math.random() * 5) - 1,
        narrative
      },
      interlinks: []
    });
  }
  return traits;
}

// Generate boosts
export function generateBoosts(count = BOOST_COUNT) {
  const boosts = [];
  for (let i = 0; i < count; i++) {
    const prefix = randPick(boostPrefixes);
    const trigger = randPick(boostTriggers);
    const effect = randPick(boostEffects);
    const idKey = effect.type === 'attribute' ? effect.key : effect.type;

    boosts.push({
      id: `boost_${i}_${idKey}`,
      name: `${prefix}${trigger.charAt(0).toUpperCase() + trigger.slice(1)}`,
      trigger: `matchEvent.${trigger}`,
      effectMap: {
        attribute: effect.type === 'attribute' ? { [effect.key]: effect.val } : {},
        morale: effect.type === 'morale' ? effect.val : 0,
        perception: effect.type === 'perception' ? effect.val : 0
      },
      duration: Math.ceil(Math.random() * 90),
      stackable: Math.random() < 0.3
    });
  }
  return boosts;
}

// Example invocation
console.log(`Generated ${generateTraits().length} traits and ${generateBoosts().length} boosts.`);
