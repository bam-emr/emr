import React from "react";

export default function DisplayFiles({ file }) {
  const listEMRs = file.map((fileData) => (
    <div>
      <a href={fileData.file} without rel="noopener noreferrer" target="_blank">
        <li className="list" key={fileData.fileName}>
          {fileData.fileName}
        </li>
      </a>
      <br />
      <hr />
    </div>
  ));
  return <ol>{listEMRs}</ol>;
}
