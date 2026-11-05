import worksheets from "../../content/guide-worksheets.json";

type Sheet = { heading: string; intro: string; columns: string[]; rows: string[][] };
const sheets: Record<string, { en: Sheet }> = worksheets;

export default function GuideWorksheet({ slug }: { slug: string }) {
  const sheet = sheets[slug]?.en;
  if (!sheet) return null;
  return <section className="guide-worksheet" data-worksheet={slug}>
    <h2>{sheet.heading}</h2><p>{sheet.intro}</p>
    <div className="worksheet-scroll"><table>
      <thead><tr>{sheet.columns.map(label => <th scope="col" key={label}>{label}</th>)}</tr></thead>
      <tbody>{sheet.rows.map(row => <tr key={row[0]}>{row.map((cell, index) => (
        index === 0 ? <th scope="row" key={index}>{cell}</th> : <td key={index}>{cell}</td>
      ))}</tr>)}</tbody>
    </table></div>
  </section>;
}
