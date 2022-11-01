export async function getLatestAnimalData(upkind) {
    let endpoint = "http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=7EwDqJBddRRRfXDpE3Te10UmZi%2BFGvJXYFuUU7IXhR%2F2lVb9A2AEhd0tG16ndELGVYf%2F20rPFyEdZ799DABrxA%3D%3D&_type=JSON&numOfRows=60"
    endpoint += (upkind !== undefined) ? "&upkind=" + upkind :"";
    const resp = await fetch(endpoint);
    const data = await resp.json();
    const origin = data.response.body.items.item;
    const upgrade = origin.map((one)=>({
        ...one, 
        type: one.kindCd.startsWith("[개]") ? "dog" : (
            one.kindCd.startsWith("[고양이]") ? "cat" : "etc"
        )
        
    }))
    return upgrade;
}

export async function getDataByDesertionNo(upkind,desertionNo) {
    const datas = await getLatestAnimalData(upkind);
    const found = datas.find((one)=>one.desertionNo===desertionNo);
    return found;
}