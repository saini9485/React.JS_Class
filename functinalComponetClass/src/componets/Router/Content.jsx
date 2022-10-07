import React from "react";
import{useParams} from "react-router-dom"
export default function Content() {
    const {id} = useParams();
  return (
    <div>
      <p>This is Content Page{id}</p>
    </div>
  );
}
