import React from 'react';
import { useStateValue } from "./StateProvider";

function Data() {
  const [{ basket, json }, dispatch] = useStateValue();

  return (
    <div className="dialog">
      {JSON.stringify(json, null, 4)}
    </div>
  );
}

export default Data;