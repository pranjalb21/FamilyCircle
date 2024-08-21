import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import EditProfile from "../components/editProfile/EditProfile";

export default function EditProfilePage({title}) {
    useEffect(() => {
        document.title = `FamilyCircle | ${title}`;
    }, []);
    return (
        <Layout>
            <EditProfile />
        </Layout>
    );
}
