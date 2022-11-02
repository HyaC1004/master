import { GetStaticProps } from "next";
import mongoose from "mongoose";
import Image from "next/image";
export default function HelpPage() {
    return (
        <div style={{width:"80%", height:"90vh", margin:"auto", textAlign:"center"}}>
            {/* <img src="/images/poster.jpg" alt="poster" width="100%" height="100%" /> */}
            <img src="/images/poster.jpg" width="100%" height="800px" />
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};
