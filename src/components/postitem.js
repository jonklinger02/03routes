import React from "react";
import { useParams } from "react-router-dom";

const PostItem = () => {

    let params = useParams();
    console.log(params)

    return(
        <>
            <div>{params.id}</div>
        </>
    );
}

export default PostItem;