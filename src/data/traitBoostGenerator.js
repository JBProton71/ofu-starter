import { generateTraits, generateBoosts } from './traitBoostGenerator.original.js';

// You can adjust counts here or via environment variables:
export const TRAITS = generateTraits(process.env.TRAIT_COUNT || 5000);
export const BOOSTS = generateBoosts(process.env.BOOST_COUNT || 5000);
