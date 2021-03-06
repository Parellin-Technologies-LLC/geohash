import mod from "../index.js";

export default mod;
export const BASE32 = mod.BASE32;
export const BASE32_DICT = mod.BASE32_DICT;
export const PRECISION_AREA = mod.PRECISION_AREA;
export const NEIGHBOR_CODEX = mod.NEIGHBOR_CODEX;
export const BORDER_CODEX = mod.BORDER_CODEX;
export const SIGFIG_HASH_LENGTH = mod.SIGFIG_HASH_LENGTH;
export const ENCODE_AUTO = mod.ENCODE_AUTO;
export const MIN_LNG = mod.MIN_LNG;
export const MIN_LAT = mod.MIN_LAT;
export const MAX_LNG = mod.MAX_LNG;
export const MAX_LAT = mod.MAX_LAT;
export const longitudeClamp = mod.longitudeClamp;
export const latitudeClamp = mod.latitudeClamp;
export const longitudeClampRelative = mod.longitudeClampRelative;
export const latitudeClampRelative = mod.latitudeClampRelative;
export const determinePrecision = mod.determinePrecision;
export const determineDirection = mod.determineDirection;
export const decode = mod.decode;
export const encode = mod.encode;
export const geohashesWithinBBox = mod.geohashesWithinBBox;
export const geohashesWithinBBoxToGeoJSON = mod.geohashesWithinBBoxToGeoJSON;
export const geohashToBBox = mod.geohashToBBox;
export const getBBoxStartingPoint = mod.getBBoxStartingPoint;
export const neighbor = mod.neighbor;
export const neighbors = mod.neighbors;
export const sizeOf = mod.sizeOf;
export const toGeoJSON = mod.toGeoJSON;
export const GeohashStream = mod.GeohashStream;
export const GeohashStreamGeoJSON = mod.GeohashStreamGeoJSON;
export const validGeohash = mod.validGeohash;
