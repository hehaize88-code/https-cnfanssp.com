import fs from 'node:fs';
const order = ['superbuy-fees-explained','superbuy-returns-refunds-guide','superbuy-shipping-time-tracking-guide','superbuy-warehouse-storage-guide'];
const labels = ['Fees and payment','Returns and refunds','Shipping and tracking','Warehouse storage'];
const sources = [
 ['Superbuy official Service & Fees page, checked 13 October 2026','Superbuy official User Guidance and shipping calculator'],
 ['Superbuy official Help Center: Shopping Agent and After-sales Service, checked 13 October 2026','Order-specific seller terms and live account evidence must be checked before action'],
 ['Superbuy official User Guidance and Help Center: Shipping & Logistics, checked 13 October 2026','The selected route and live carrier events govern each shipment'],
 ['Superbuy official Service & Fees page: storage and storage extension, checked 13 October 2026','Live warehouse deadlines and order-specific notices govern each item']
];
const descriptions=[
 'Understand Superbuy fees, payment costs, optional services and shipping adjustments with a clear order ledger and worked cost examples.',
 'Prepare a Superbuy return or refund: check the order stage, seller deadline, QC evidence, return costs and the actual refund transaction.',
 'Understand Superbuy shipping time and tracking by stage: seller dispatch, warehouse intake, parcel processing, carrier updates and delivery.',
 'Plan Superbuy warehouse storage with free-period deadlines, daily charges, extension terms and practical consolidation decisions.'
];
const articles=[],content={};
for(const [i,slug] of order.entries()) {
 const blocks=fs.readFileSync(`content/new/${slug}.md`,'utf8').trim().split(/\n\n+/);
 const title=blocks.shift().replace(/^# /,''); const introduction=blocks.shift(); const description=descriptions[i];const sections=[];
 for(const block of blocks) { if(block.startsWith('## ')) sections.push({heading:block.slice(3),paragraphs:[]}); else sections.at(-1).paragraphs.push(block); }
 articles.push({slug,title,description,eyebrow:labels[i],read:'9 min read',published:'2026-10-13',updatedLabel:'Updated 13 October 2026'});
 content[slug]={callout:['A practical decision guide',introduction],sections,sources:sources[i].map(label=>({label}))};
}
fs.writeFileSync('app/seo-articles.json',JSON.stringify({articles,content},null,2)+'\n');
console.log('Prepared four new complete articles.');
