// Replace off-topic fulfillment commentary with a measurement workflow.
export const measurementSections = [
 {id:'method-record',title:'6. Record the method beside the number',blocks:[
  {type:'p',text:'A measurement record needs the quantity, unit, start point, endpoint and item position. For a garment, note whether it lies flat without tension. For footwear, specify insole, outsole or another defined length. For a parcel, identify whether the dimensions include the final outer packaging. A bare number can look comparable while describing a different quantity.'},
  {type:'table',headers:['Field','Useful record','Common mistake'],rows:[['Quantity','Flat chest width','Calling it body circumference'],['Endpoints','Armpit seam to armpit seam','Starting at an unrelated fold'],['Unit','Centimetres shown on the tape','Guessing the scale'],['Position','Flat, not stretched','Comparing a hanging garment'],['Source','Current unit and image date','Using a seller chart as a measured unit']]},
 ]},
 {id:'comparison-example',title:'7. Work through a comparable-size example',blocks:[
  {type:'p',text:'Illustrative example: your comfortable jacket measures 54 cm from armpit seam to armpit seam when laid flat. A warehouse photograph seems to show 52 cm, but the zero end is hidden under the garment. The correct result is not “2 cm too narrow.” The current image does not establish the measured distance. Ask for the complete tape and the same placement before comparing.'},
  {type:'p',text:'If a replacement image clearly shows 52 cm using the same method, compare that with the acceptable range you set from your own clothing and preferences. That range is personal, not a universal manufacturing tolerance. Different construction, layering and stretch can still change fit. Preserve the original and replacement images so the decision remains traceable.'},
 ]},
 {id:'photo-uncertainty',title:'8. Distinguish measurement uncertainty from a size mismatch',blocks:[
  {type:'p',text:'Perspective, a curved tape, a folded edge and an obscured endpoint can each prevent a reliable reading. Enlarging a compressed image does not recover a precise scale that was never captured. Ask for an overhead view with the item aligned and the complete tape visible. Avoid reporting decimal precision that the photo cannot support.'},
  {type:'p',text:'Do not average measurements made with different methods to make them appear consistent. If one photograph measures a shoulder-to-hem length and another begins at the collar top, the difference may be methodological. Record both methods, choose the one relevant to your comparison and obtain a repeat if the missing distinction would change your decision.'},
 ]},
 {id:'parcel-boundary',title:'9. Keep fit measurements separate from parcel planning',blocks:[
  {type:'p',text:'Product dimensions answer a fit or size question. Retail-box dimensions describe packaging around one item. Final parcel dimensions include the outer box and protection used for dispatch. These fields are not interchangeable. Consolidation and repacking can change both weight and volume, so historical product measurements cannot determine the final shipping bill.'},
  {type:'p',text:'Use current packed measurements with the selected service’s stated calculation, rounding and size limits. If the figure is estimated rather than measured, label it accordingly. The shipping-cost guide explains how to build a comparable quote without presenting one universal volumetric divisor as a rule for every route.'},
 ]},
 {id:'measurement-request',title:'10. Send a request that produces a usable answer',blocks:[
  {type:'callout',title:'Editable request',text:'For order [reference], please lay the garment flat without stretching. Measure in a straight line from one armpit seam to the other. Show the complete tape from zero to the endpoint in one overhead photo and state the unit. I am comparing with a garment measured by the same method.'},
  {type:'p',text:'Keep the order reference in the private agent ticket. Confirm whether the measurement service is available, whether it costs extra and whether the item can remain on hold while the question is resolved. A message does not automatically pause dispatch or extend a return deadline. Once the reply is usable, update your record and choose the next action in the agent’s order system.'},
 ]},
];
