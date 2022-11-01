import AnimalPreview from "../../components/animal/animal-preview";

function DetailOnAnimal({ target }) {
    if (!target) {
        return <p>Loading..</p>
    }
    return (<>
        <h3>{target.desertionNo}</h3>
        <p>
            {JSON.stringify(target)}
        </p>
        <AnimalPreview data={target} />
    </>);
}

export async function getStaticPaths() {
    const resp =
        await fetch("http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=ZCU3%2FjB%2FlrpbQX9ou37B1eCj93xvvkjd5%2F609G4%2FxzVrGVTfFcfhBPhexAu%2Fw0APi53876d4eojm%2Bq8Eiq7ZaA%3D%3D&_type=json&numOfRows=6");
    const data = await resp.json(); // 
    const paths = data.response.body.items.item.map((one) => ({
        params: {
            desertionNo: one.desertionNo,
            type: one.kindCd.startsWith("[개]") ? "dog" : (
                one.kindCd.startsWith("[고양이]") ? "cat" : "etc"
            )
        }
    })
    );
    console.log(paths);

    return {
        paths: paths,
        fallback: true // can also be true or 'blocking'
    }
}

export async function getStaticProps(context) {
    function convertToCode(str) {
        if (str === "dog") {
            return "417000"
        } else if (str === "cat") {
            return "422400";
        } else if (str === "etc") {
            return "429900";
        } else {
            return null;
        }
    }
    const type = context.params.type;
    const desertionNo = context.params.desertionNo;
    const code = convertToCode(type);
    // console.log(" - DetailOnAnimal component .. getStaticProps : ", type, desertionNo);
    const resp = await fetch("http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=ZCU3%2FjB%2FlrpbQX9ou37B1eCj93xvvkjd5%2F609G4%2FxzVrGVTfFcfhBPhexAu%2Fw0APi53876d4eojm%2Bq8Eiq7ZaA%3D%3D&_type=json&numOfRows=12&upkind=" + code + "");
    const data = await resp.json();
    // 해당축종의 데이터를 얻어온후 desertionNo 가 일치하는 데이터를 찾으려고 함.
    const foundData = data.response.body.items.item.find((one) => one.desertionNo === desertionNo);

    if (!foundData) {
        return { notFound: true }
        // return {
        //     redirect: {
        //         destination: "/",
        //         permanent: false
        //     }
        // }
    }

    return {
        props: {
            target: foundData
        }, // will be passed to the page component as props
        revalidate: 60 * 60 * 6
    }
}

export default DetailOnAnimal;