const API_KEY = "AIzaSyCp6ntFLjQNdUVEIQ_FUTsyJn79NHh2xww";

export function createStaticMapURI(lat = 35.15693, lng = 126.90104) {
  return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=12&key=${API_KEY}&size=1200x1091`;
}
