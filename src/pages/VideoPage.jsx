import React, { useEffect } from "react";
import Container from "../components/container/Container";
import Video from "../components/video/Video";
import Layout from "../components/layout/Layout";

export default function VideoPage({title}) {
    useEffect(()=>{document.title=`FamilyCircle | ${title}`},[])
    return (
        <Layout>
            <Video />
        </Layout>
    );
}
