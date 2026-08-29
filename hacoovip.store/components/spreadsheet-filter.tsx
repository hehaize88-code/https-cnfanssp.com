"use client";

import { useState } from "react";

type Row = {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  url: string;
};

export function SpreadsheetFilter({
  rows,
  categories,
  labels,
}: {
  rows: Row[];
  categories: string[];
  labels: { all: string; item: string; category: string; price: string; route: string; open: string };
}) {
  const [filter, setFilter] = useState(labels.all);
  const visible = filter === labels.all ? rows : rows.filter((row) => row.category === filter);

  return <>
    <div className="filter-row">
      {[labels.all, ...categories].map((name) => <button key={name} className={filter === name ? "active" : ""} onClick={() => setFilter(name)}>{name}</button>)}
    </div>
    <div className="sheet-table">
      <div className="sheet-head"><span>{labels.item}</span><span>{labels.category}</span><span>{labels.price}</span><span>{labels.route}</span></div>
      {visible.map((row, index) => <div className="sheet-row" key={row.id}>
        <span className="sheet-item"><small>{String(index + 1).padStart(2, "0")}</small><img src={row.image} alt="" width="72" height="72" /><strong>{row.name}</strong></span>
        <span>{row.category}</span><span>{row.price}</span><a href={row.url} target="_blank" rel="noreferrer">{labels.open} ↗</a>
      </div>)}
    </div>
  </>;
}
