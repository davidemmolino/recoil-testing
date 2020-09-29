import React from "react";
import {useRecoilState} from 'recoil';
import { getTvMetadataResource } from "./helpers/Api";
import * as atoms from '../store/atoms.js';

export const TvShowList = ({ startTransition }) => {
  const [id, setId] = useRecoilState(atoms.id);

  const onClick = (newId) => {
    // startTransition(() => {
    //   setId(newId);
    // });
    setId(newId)
  };


  const tvMetadata = getTvMetadataResource().read();
  const tvshows = tvMetadata.map(item => (
    <div className="item" key={item.id} onClick={() => onClick(item.id)}>
      <div className="name">{item.name}</div>
      <div className="score">{item.score}</div>
    </div>
  ));
  return <div className="tvshow-list">{tvshows}</div>;
};
