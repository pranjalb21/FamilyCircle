import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import Home from "../components/home/Home";

export default function HomePage({ title }) {
    useEffect(() => {
        document.title = `FamilyCircle | ${title}`;
    }, []);
    return (
        <Layout>
            <Home />
        </Layout>
    );
}
