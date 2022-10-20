
function AnimalPreview({data}) {

    return (<>
        <div className="item">
            <img src={data.popfile} alt={"Thumbnail"} />
            <div className="inform">
                <p>
                    {data.kindCd} ({data.colorCd})
                </p>
                <p>
                    {data.orgNm} {data.happenPlace}
                </p>
            </div>
        </div>
    </>  );
}


export default AnimalPreview;