import Image from "next/image";

function Help() {
    return (
    <div style={{width:"80%", height:"90vh", margin:"auto"}}>
        {/* <img src="/images/poster.jpg" alt="poster" width="100%" height="100%" /> */}
        <Image src={"/images/poster.jpg"} width={20} height={30} layout={"responsive"} />
    </div>);
}

export default Help;