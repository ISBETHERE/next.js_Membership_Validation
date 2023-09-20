import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

function AdminPage() {
    const [userData, setUserData] = useState(null);
    const router = useRouter();

    useEffect(() => {

        const userJson = localStorage.getItem("userData");
        if (userJson) {
            const userDataObj = JSON.parse(userJson);
            setUserData(userDataObj);
        } else {

            router.push("/signup");
        }
    }, [router]);

    return (
        <div>
            <h1>임시 관리자 페이지</h1>
            {userData ? (
                <div>
                    <h2>가입한 사용자 정보</h2>
                    <pre>{JSON.stringify(userData, null, 2)}</pre>
                </div>
            ) : (
                <p>사용자 데이터가 없습니다.</p>
            )}
        </div>
    );
}

export default AdminPage;
