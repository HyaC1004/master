import { Animal, AnimalWithUpKind, Upkind } from "../interface";


function addProperty(target: Animal): AnimalWithUpKind {
  let upkindObj: { upkind: Upkind; upkindNm: string };
  if (target.kindCd.startsWith("[개")) {
    upkindObj = { upkindNm: "dog", upkind: Upkind.DOG };
  } else if (target.kindCd.startsWith("[고양이")) {
    upkindObj = { upkindNm: "cat", upkind: Upkind.CAT };
  } else {
    upkindObj = { upkindNm: "etc", upkind: Upkind.ETC };
  }
  return { ...target, ...upkindObj };
}

export async function getLatestAnimalData(upkind?: Upkind) {
  let endpoint =
    "http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=7EwDqJBddRRRfXDpE3Te10UmZi%2BFGvJXYFuUU7IXhR%2F2lVb9A2AEhd0tG16ndELGVYf%2F20rPFyEdZ799DABrxA%3D%3D&_type=json&numOfRows=60";
  endpoint += upkind !== undefined ? "&upkind=" + upkind : "";

  const resp = await fetch(endpoint);
  const data = await resp.json();
  const origin: Animal[] = data.response.body.items.item;

  return origin.map((one) => addProperty(one));
}

export async function getAnimalDataByDesertionNo(
  desertionNo: string,
  upkind?: Upkind
) {
  const datas = await getLatestAnimalData(upkind);
  const found = datas.find((one) => one.desertionNo === desertionNo);

  return found;
}
