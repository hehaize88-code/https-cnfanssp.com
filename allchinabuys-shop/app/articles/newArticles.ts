export type ArticleEntry = {
  title: string;
  seoTitle: string;
  dek: string;
  date: string;
  dateISO: string;
  read: string;
  label: string;
  keywords: string[];
  verified: string[];
  sections: { heading: string; paragraphs: string[] }[];
};

const newArticles: Record<string, ArticleEntry> = {
  "allchinabuy-tracking-order-parcel-status": {
    title: "AllChinaBuy Tracking: How to Read Order and Parcel Status",
    seoTitle: "AllChinaBuy Tracking: Order & Parcel Status Guide",
    dek: "Understand seller dispatch, warehouse arrival, parcel handoff and international tracking without confusing an order number with a parcel number.",
    date: "September 9, 2026",
    dateISO: "2026-09-09",
    read: "10 min read",
    label: "Tracking guide",
    keywords: ["AllChinaBuy tracking", "AllChinaBuy parcel tracking", "AllChinaBuy order status", "ACBuy tracking"],
    verified: ["Order and parcel tracking are separate stages", "Warehouse arrival happens before international submission", "Customs and last-mile scans may use another carrier"],
    sections: [
      { heading: "Identify what you are tracking first", paragraphs: [
        "AllChinaBuy tracking starts with one distinction: an order and an international parcel are not the same shipment. The order follows a purchase from a marketplace seller to the agent warehouse in China. The parcel follows one or more approved warehouse items from the warehouse to your destination. A seller order number, domestic tracking number, parcel number and last-mile tracking number can therefore refer to different records.",
        "Open the record that matches the stage you are checking. If the seller has not sent the item, look at the order timeline. If the item is stored but you have not submitted a parcel, there is no international movement to track. After parcel submission, use the parcel record and its carrier events. Writing the identifiers in a short note prevents repeated searches with the wrong number."
      ]},
      { heading: "Read the seller-to-warehouse timeline", paragraphs: [
        "The first status sequence usually covers purchase processing, seller dispatch, domestic transport and warehouse receipt. A purchase-related status means the agent is handling the marketplace order; it does not mean the seller has shipped. A dispatched status should be paired with a domestic carrier event when that information is available. Warehouse receipt means the domestic package arrived, but inspection and storage processing may still be pending.",
        "Treat status wording as an operational update, not a guaranteed deadline. Sellers can take different amounts of time to confirm stock or hand a package to the carrier. If a record does not move, check for an agent message, a price or option confirmation, or an action button inside the order. Contact support with the order number and last visible event instead of sending only a product link."
      ]},
      { heading: "Know when warehouse tracking ends", paragraphs: [
        "Once the warehouse signs for the domestic shipment, the next useful evidence is the warehouse intake record. The item may need to be identified, weighed, photographed and placed into storage. A delivery scan from the Chinese carrier does not by itself confirm that every item or option is correct. Compare the stored-item record and QC photos with the size, color, model and quantity in your original order.",
        "Resolve missing pieces, visible damage or a wrong variant before parcel submission. The parcel stage is not the right place to discover that an order never passed inspection. Keep the domestic tracking history with the order evidence, but move your attention to the warehouse item once intake is complete. This makes the tracking workflow a sequence of decisions rather than a collection of unexplained status labels."
      ]},
      { heading: "Start international tracking from the parcel record", paragraphs: [
        "International AllChinaBuy tracking begins only after you select stored items, choose packing and a shipping line, confirm the address and pay the parcel charge. Early parcel statuses can describe packing, weighing, label creation or transfer to the logistics provider. A tracking number may exist before the carrier performs its first public scan, so a short period with no external result is not automatically evidence that the parcel is lost.",
        "Save the parcel number, line name, submission date, charged weight, declared information and tracking number together. Use the logistics link shown in the current parcel record because similar carrier names can have different tracking sites. If the platform later displays a second number, keep both: one may cover the export segment and the other the destination carrier."
      ]},
      { heading: "Interpret common international milestones", paragraphs: [
        "Tracking messages usually describe handoff, export processing, departure, arrival in the destination region, customs review, release and last-mile delivery. The exact wording differs by line. A departure message can refer to a logistics facility rather than an aircraft, and an arrival scan does not always mean customs has completed. Read events in date order and look for the location and carrier responsible for the next step.",
        "Do not calculate a delivery promise from one event. Weekends, flight capacity, customs workload and local delivery networks can create gaps. The useful question is whether the parcel has exceeded the current line estimate or recorded an exception. Compare the latest event with the route information saved at payment, then contact the responsible party with the parcel number and complete event text when intervention is justified."
      ]},
      { heading: "Handle tracking gaps without guessing", paragraphs: [
        "A tracking gap can occur between label creation and carrier acceptance, between consolidated export movements, during customs processing or before the local carrier imports data. Check the timestamp, timezone and the last location before refreshing multiple tracking websites. Third-party trackers can translate events differently, so use them as a convenience and preserve the original carrier wording for support requests.",
        "Escalate based on evidence. Take a screenshot of the parcel page, copy the tracking number and last event, record the number of days since that event and compare it with the current line guidance. Avoid declaring a parcel seized or lost from a normal information gap. Likewise, do not ignore an explicit exception, returned shipment or address problem. Those messages require prompt, order-specific support."
      ]},
      { heading: "Follow customs and last-mile handoffs", paragraphs: [
        "After arrival, the parcel may receive customs events and then a local carrier number. Customs timing and requests depend on the destination, declared information and parcel contents. AllChinaBuy can provide shipment records, but the agent does not control every government or local-carrier action. Watch for requests sent through the account, carrier page, email or telephone details associated with the delivery address.",
        "When a local number appears, add it to the same parcel record and use the destination carrier for delivery attempts or collection instructions. Confirm that the address and contact details match the parcel submission. If tracking says delivered but the package is missing, preserve the event, delivery time and any proof-of-delivery information before contacting the carrier and platform support."
      ]},
      { heading: "Use a compact tracking checklist", paragraphs: [
        "For an order, record the order number, seller dispatch event, domestic number, warehouse arrival and QC result. For a parcel, record the parcel number, line, submission date, packing result, charged weight, international number, last event and any local number. This small table makes it immediately clear which stage is waiting and which identifier belongs in a support request.",
        "Check tracking on a sensible schedule rather than reacting to every translation. The best evidence is the current account timeline plus the carrier event history. Community delivery reports can provide context, but they cannot predict your route, customs review or local handoff. A dated, parcel-specific record is the most reliable way to follow an AllChinaBuy shipment from seller dispatch to delivery."
      ]}
    ]
  },
  "allchinabuy-order-status-explained": {
    title: "AllChinaBuy Order Status Explained: What to Do at Every Stage",
    seoTitle: "AllChinaBuy Order Status Explained",
    dek: "A stage-by-stage guide to purchase checks, seller dispatch, warehouse processing, QC decisions and the actions that can unblock an order.",
    date: "September 9, 2026", dateISO: "2026-09-09", read: "9 min read", label: "Order workflow",
    keywords: ["AllChinaBuy order status", "AllChinaBuy order pending", "ACBuy order status", "AllChinaBuy warehouse pending"],
    verified: ["Seller delivery and international delivery are separate", "Price or option differences may require confirmation", "QC review should happen before parcel submission"],
    sections: [
      { heading: "Treat the status as a request for the next action", paragraphs: [
        "An AllChinaBuy order status is most useful when it tells you who currently controls the next step. The buyer may need to confirm an option or price change, the purchasing agent may be placing the marketplace order, the seller may need to dispatch, or the warehouse may be processing the delivery. Read the latest message and timestamp before assuming that a generic pending label means the same thing in every order.",
        "Keep the product order separate from the later international parcel. The order timeline ends with the item received and handled at the warehouse; it does not represent delivery to your home. If you have already submitted a parcel, use the parcel record and tracking guide. This separation removes the most common source of confusion when several numbers and statuses appear in one account."
      ]},
      { heading: "Submitted or processing", paragraphs: [
        "A newly submitted order may be waiting for payment confirmation, risk review, purchasing-agent assignment or marketplace checkout. Reopen the saved seller listing and confirm that the selected color, size, version, quantity and price still match. Check the account for an unread message or a confirmation request. An agent cannot safely complete an ambiguous option by guessing what a short order note meant.",
        "If the status remains unchanged, compare the elapsed time with the current help guidance shown in your account. Do not create a duplicate order simply to make the first one move. A duplicate can result in two purchases if the original processes later. Contact support with the order number, payment record and exact selected option when the account offers no clear action."
      ]},
      { heading: "Confirmation needed or price changed", paragraphs: [
        "Marketplace listings change. A seller may alter the item price, domestic delivery, stock, minimum quantity or option after you submit the order. When the agent requests confirmation, compare the new information with the current seller page and your original screenshot. Decide whether the change still fits the product identity and budget rather than approving it only because the difference looks small.",
        "Reject or cancel according to the available account options if the new selection is not the item you intended. If the wording is unclear, ask for the seller option name or a screenshot. Preserve the confirmation result. This evidence matters later if the warehouse receives a different variant, because it shows exactly which change you accepted and which attributes remained part of the order."
      ]},
      { heading: "Purchased and waiting for seller dispatch", paragraphs: [
        "Purchased means the marketplace transaction has been placed; it does not necessarily mean the seller has packed or shipped the item. Seller lead time varies by product and stock. Review the order detail for a domestic tracking number or a platform action to urge dispatch. The existing help flow indicates that an urge action can become available after a waiting period, but it is not a guarantee that every seller will ship immediately.",
        "If the seller reports no stock, decide whether to wait, cancel or choose a separately verified replacement. Do not let an agent silently substitute a similar listing without confirming the seller, title, image and option. A replacement should be treated as a new identity check. Save the date and reason so your spreadsheet does not continue presenting an unavailable source as a live find."
      ]},
      { heading: "Seller shipped or domestic delivery in progress", paragraphs: [
        "At this stage, use the domestic tracking number for movement toward the warehouse. A carrier scan may take time to appear after the seller creates a label. Check the destination warehouse and the latest carrier event, but avoid treating an estimated arrival as a completed receipt. The warehouse still needs to match the incoming package to your order after delivery.",
        "If the domestic carrier records an exception, provide the full event to support. The agent or seller may need to contact the carrier. When delivery is marked complete but the account has not updated, allow for intake processing and then ask with the order number and domestic number. Keep the carrier proof; it narrows the question to warehouse matching rather than seller dispatch."
      ]},
      { heading: "Warehouse received, stored or QC available", paragraphs: [
        "Warehouse receipt begins the inspection decision, not the international journey. Compare the stored item with the ordered product, option and quantity. Review the standard photographs, weight and any measurements. Request a specific extra photo when one visible detail would determine whether you keep or return the item. General requests such as check everything are less useful than naming the seam, label, measurement or missing part.",
        "Mark the result as approved, needs evidence, return requested or waiting for another order. Do not submit a parcel while a decision-critical issue remains unresolved. Storage gives you a planning window, but after-sales deadlines can follow different rules. Check the current order page promptly instead of assuming the advertised storage period also extends seller return eligibility."
      ]},
      { heading: "Cancelled, returned or refunded", paragraphs: [
        "A cancellation before purchase, a seller-approved return and a completed refund are different outcomes. Read which amount is being returned and where it will appear: account balance, original payment channel or another displayed method. Product price, service charges, domestic delivery and payment-provider fees may not all follow the same treatment. Use the current transaction detail as the source of truth.",
        "Keep screenshots of the request, reason, seller response, tracking for any return movement and refund entry. If the status says completed but funds are not visible, identify the expected destination before escalating. A platform balance update and an external card refund can have different processing paths. Support can investigate faster when the evidence connects one order, one amount and one refund method."
      ]},
      { heading: "Build an order-status routine", paragraphs: [
        "Review orders by exception: unread messages, confirmation needed, unusually long seller waiting, domestic delivery problems and QC holds. For each affected order, record the number, product, selected option, last status, timestamp, responsible party and next action. This turns a crowded order page into a manageable queue and helps prevent a warehouse item from being submitted before review.",
        "Use precise language when asking for help. State what the status says, when it last changed, what evidence you checked and what resolution you want. Avoid combining several unrelated orders in one vague message. A clear order-status record protects the purchase before shipping and makes the later AllChinaBuy tracking process much easier to understand."
      ]}
    ]
  },
  "allchinabuy-warehouse-storage-guide": {
    title: "AllChinaBuy Warehouse Guide: Storage, QC and Extra Photos",
    seoTitle: "AllChinaBuy Warehouse Guide: Storage, QC & Photos",
    dek: "Use warehouse arrival as a controlled review stage for identity, QC photos, measurements, storage planning and return decisions.",
    date: "September 9, 2026", dateISO: "2026-09-09", read: "10 min read", label: "Warehouse guide",
    keywords: ["AllChinaBuy warehouse", "AllChinaBuy storage", "AllChinaBuy extra photos", "AllChinaBuy warehouse QC"],
    verified: ["Warehouse inspection precedes international shipping", "Public pages advertise a free-storage period", "Extra evidence should be requested before parcel submission"],
    sections: [
      { heading: "Use the warehouse as a decision stage", paragraphs: [
        "The AllChinaBuy warehouse sits between a third-party seller and international delivery. Its purpose is not merely to hold packages. It gives you a chance to match the received item to the order, review visible condition, collect useful measurements and decide whether the item belongs in a parcel. Treat every arrival as a checkpoint instead of automatically approving it for shipment.",
        "Open the original seller page, order selection and warehouse record together. Confirm the product family, color, size or model, quantity and included pieces before inspecting small cosmetic details. A perfect close-up of the wrong variant is still a failed order. Record the warehouse arrival date and the decision you need to make so the item does not disappear into an unreviewed storage list."
      ]},
      { heading: "Read the intake record carefully", paragraphs: [
        "Warehouse intake can include the received quantity, recorded weight, status, photographs and notes. Compare these fields with the seller order. A weight difference alone does not prove a problem because packaging and measurement stages can differ, but a large unexplained difference can justify checking whether all pieces arrived. Pay special attention to sets, accessories and orders that the seller may split into separate domestic packages.",
        "If a domestic carrier says delivered but no item appears, keep the domestic number and delivery timestamp. Intake matching can take time, especially when labels or seller packaging are unclear. Ask support to locate the shipment using the order and tracking evidence rather than opening an unrelated parcel inquiry. Once intake completes, move from delivery questions to identity and QC review."
      ]},
      { heading: "Review standard QC photos in a fixed order", paragraphs: [
        "Start with wide views and confirm the overall item, then check front, back, sides and visible labels. For clothing, examine the selected color, size tag, print or embroidery, closures and obvious stains. For shoes, compare both shoes, the toe area, heels, soles and labels. For bags or sets, count straps, hardware and included parts. A repeatable order prevents an attractive detail photo from distracting you from a missing piece.",
        "Lighting and camera angle can change color and proportion. Compare several views and the option image rather than judging from one thumbnail. Warehouse photographs can reveal visible mismatches and damage; they cannot prove comfort, smell, authenticity, electronic reliability or long-term durability. Keep the question limited to evidence the image can actually answer."
      ]},
      { heading: "Request an extra photo that resolves one question", paragraphs: [
        "An effective extra-photo request names the item, location, angle and purpose. Ask for the size tag next to the order label, a close view of a suspected stain, both heels at the same angle, the contents laid out together or a tape measurement between clear endpoints. This is more actionable than requesting better QC or more detailed pictures without saying what decision the photo should support.",
        "Before paying for an extra service, check whether an existing image can answer the question and whether the result would change your decision. Save the request text and returned image. If the evidence confirms a defect or wrong option, attach it to the after-sales request. If it resolves the concern, mark the item approved so you do not repeat the same review later."
      ]},
      { heading: "Use measurements for fit and parcel planning", paragraphs: [
        "For clothing, compare flat measurements with a garment you already own. Specify chest width, length, sleeve, waist or rise as relevant and make the tape endpoints visible. A seller size chart and warehouse measurement can differ because of placement, fabric tension and production tolerance. Use the number as practical evidence, not a laboratory guarantee. For shoes, confirm the labeled size and any available insole guidance.",
        "Recorded item weight and dimensions also help parcel planning, but the final packed parcel can change after boxes, protective material or package removal. Do not multiply one product-page estimate and call it a final shipping quote. Use warehouse data to build a range, then compare routes again after the selected items are packed and measured."
      ]},
      { heading: "Manage storage with two separate clocks", paragraphs: [
        "AllChinaBuy's public pages currently advertise a free-storage period, but always confirm the active policy and item dates inside your account. Storage can help consolidate goods from several sellers and avoid submitting many small parcels. Create a list of arrival date, QC status, return deadline if shown and intended parcel group. Review the oldest unresolved items first.",
        "Do not assume warehouse storage and seller after-sales eligibility expire together. An item may remain storable after the practical return window has narrowed. Resolve identity, visible damage and measurements soon after arrival even if you plan to wait for other orders. Storage is most valuable when it supports deliberate consolidation, not when it postpones decisions."
      ]},
      { heading: "Decide approve, hold, return or remove", paragraphs: [
        "Use four clear outcomes. Approve means the received item matches the order and the visible evidence is acceptable. Hold means one specific image, measurement or support answer is needed. Return means an order-specific after-sales request should be made under current rules. Remove means you do not intend to ship the item and need to choose an available disposal or other account action.",
        "Document the reason beside the warehouse item. Avoid submitting a parcel from an unfiltered list, because approval becomes harder to reconstruct after packing. When several items are ready, group them by destination, restrictions, packaging needs and value. Then move to parcel packing with a clean record of what each item is and why it was accepted."
      ]},
      { heading: "Keep a warehouse review checklist", paragraphs: [
        "For every arrival, verify order identity, option, quantity, included pieces, visible condition, standard photos, critical measurements, item weight and action deadline. Save extra-photo evidence and support messages with the order number. A compact checklist reduces wrong-item shipments and creates useful evidence if a later question arises.",
        "A public spreadsheet can point readers to products, but warehouse evidence belongs to the specific unit received. Never label a whole listing QC approved because one buyer saw acceptable photos. The durable workflow is listing check, order confirmation, warehouse review, explicit approval and then parcel submission. Each stage answers a different question and should keep its own dated evidence."
      ]}
    ]
  },
  "allchinabuy-return-refund-guide": {
    title: "AllChinaBuy Return and Refund Guide Before International Shipping",
    seoTitle: "AllChinaBuy Return & Refund Guide",
    dek: "Prepare a clear warehouse return request, preserve evidence and understand the difference between cancellation, seller return and refund completion.",
    date: "September 9, 2026", dateISO: "2026-09-09", read: "9 min read", label: "After-sales guide",
    keywords: ["AllChinaBuy return", "AllChinaBuy refund", "AllChinaBuy exchange", "ACBuy refund"],
    verified: ["Return eligibility is order-specific", "Seller and marketplace rules can apply", "Problems should be raised before international parcel submission"],
    sections: [
      { heading: "Act while the item is still controllable", paragraphs: [
        "The practical time to raise an AllChinaBuy return is usually while the item remains at the warehouse and before it enters an international parcel. Once the warehouse item is packed or shipped abroad, a seller return becomes much harder or impossible. Review QC promptly, open the current order detail and check which after-sales actions and deadlines are actually displayed.",
        "Do not rely on a community post that describes another seller, marketplace or product type. Return eligibility can depend on the seller's policy, item condition, timing and purchase source. AllChinaBuy's public goods notice also warns that some used-item or unverifiable third-party purchases may have extra service conditions and may not qualify for return or exchange."
      ]},
      { heading: "Separate cancellation, return, exchange and refund", paragraphs: [
        "Cancellation generally concerns an order before the seller purchase or shipment is complete. A return sends a received item back under applicable rules. An exchange asks the seller to replace it, which adds another domestic movement and review. A refund describes money being credited after an accepted cancellation or return. These words are related but they do not represent the same status or timeline.",
        "Choose the result you actually need. If the product is wrong and you no longer want it, a return and refund may be clearer than a vague after-sales complaint. If the correct size is essential, ask whether an exchange is available and what cost or timing applies. Read the current account response before assuming the seller accepted the request."
      ]},
      { heading: "Build evidence from the order and warehouse record", paragraphs: [
        "Start with the order number, selected option, seller listing and a screenshot of the selection made at payment. Add warehouse photos that show the mismatch or visible problem. For a wrong size, include the ordered size and visible label; for damage, identify the location and photo; for missing parts, show the listing or option that described the included set.",
        "Keep the explanation factual and short. State what was ordered, what arrived and the requested resolution. Avoid claims the photographs cannot prove, such as material quality or authenticity, unless the platform provides an appropriate evidence process. A precise, observable mismatch is easier for an agent to present to a marketplace seller than a general statement that the item is bad."
      ]},
      { heading: "Request one decisive extra photo when needed", paragraphs: [
        "If the standard images do not clearly show the issue, ask for an extra photo before filing the return. Specify the angle, label, measurement or component needed. A ruler or tape should have visible endpoints; a suspected flaw should be photographed close enough to locate it and wide enough to identify the item. Save the returned image with the order number.",
        "Do not delay a time-sensitive request for unnecessary photography. Check the displayed deadline and decide whether existing evidence is already sufficient. The goal is not to collect a gallery; it is to answer the question that controls the return decision. If support advises filing first, preserve that message and follow the current account workflow."
      ]},
      { heading: "Review costs and seller responsibility", paragraphs: [
        "A return can involve domestic freight, service charges or seller conditions. Who pays may depend on whether the item is wrong or defective, whether the seller accepts the evidence and whether the buyer simply changed their mind. Read the amount and deductions shown before confirming. A small product price does not necessarily make a return worthwhile if the recoverable amount is lower than the associated cost.",
        "Do not invent a universal free-return promise. Ask for the expected refund components: item price, domestic delivery, service charge and any other displayed amount. If an exchange is offered, identify the additional domestic shipment and processing time. The correct decision is order-specific and should be based on the current after-sales screen."
      ]},
      { heading: "Follow the return movement and decision", paragraphs: [
        "After approval, the warehouse may need to send the item back to the seller. Keep the return tracking number when available and watch for seller receipt or marketplace resolution. The warehouse item should not be added to a parcel while the return is pending. If the seller disputes the condition, provide the original warehouse evidence and any package or label images requested.",
        "Record each status with a date: requested, accepted, sent, received, refund approved and credited. This avoids treating an accepted request as a completed refund. If the process stops, contact support with the order number, last status and the specific next event you expected. Clear chronology is more useful than repeated general messages."
      ]},
      { heading: "Verify where the refund goes", paragraphs: [
        "A completed refund may be credited to the AllChinaBuy account balance or processed toward the original payment route, depending on the transaction and displayed option. Check the refund detail for the amount, destination and date. An account credit can appear faster than an external payment-provider reversal, so verify the expected route before reporting missing funds.",
        "Compare the credited amount with the approved amount and keep any currency-conversion or payment record. If they differ, identify the exact component rather than assuming the entire refund failed. Support can investigate more effectively when the request connects one order, one approved amount, one destination and one transaction entry."
      ]},
      { heading: "Prevent the same problem in the next order", paragraphs: [
        "After the case closes, update your spreadsheet. Mark the seller listing, option wording, measurement or packaging issue that caused the return. Remove a dead or misleading link instead of sending the next buyer to the same uncertainty. If the problem came from an ambiguous translation, preserve the original option text and image in future orders.",
        "Use a pre-order checklist and a warehouse checklist as separate controls. Confirm the live listing before payment, then compare the received unit soon after arrival. No checklist can guarantee seller quality, but dated evidence and early action reduce avoidable losses. The strongest AllChinaBuy refund guide is not a promised outcome; it is a method for presenting the right evidence while an order-specific remedy is still available."
      ]}
    ]
  },
  "allchinabuy-fees-payment-methods": {
    title: "AllChinaBuy Fees and Payment Methods: Build a Real Cost Estimate",
    seoTitle: "AllChinaBuy Fees & Payment Methods Explained",
    dek: "Separate product, domestic, payment, warehouse and international parcel costs so a cheap listing does not become a misleading delivered-price estimate.",
    date: "September 9, 2026", dateISO: "2026-09-09", read: "10 min read", label: "Cost guide",
    keywords: ["AllChinaBuy fees", "AllChinaBuy payment methods", "ACBuy fees", "AllChinaBuy payment"],
    verified: ["Purchase and international delivery are separate stages", "Public help pages list multiple payment routes", "Currency conversion and route charges are transaction-specific"],
    sections: [
      { heading: "Use a five-part cost model", paragraphs: [
        "An AllChinaBuy product price is only one part of the delivered cost. Track five groups separately: seller item price, domestic seller-to-warehouse delivery, payment or currency effects, optional warehouse services and international parcel charges. Destination taxes or carrier collection may form a sixth group. This model prevents a spreadsheet from presenting the lowest seller option as though it were the final amount paid at your door.",
        "Create an estimate before ordering, then replace each estimate with the actual transaction as the process advances. The seller page informs the first stage, the order confirmation shows the purchase charge, the warehouse record informs weight and service decisions, and the parcel screen shows the current international options. One copied cost-per-kilogram figure cannot replace those records."
      ]},
      { heading: "Confirm the exact seller option price", paragraphs: [
        "Marketplace listings often show a price range. The lowest value may belong to a deposit, accessory, replacement part, smaller size or different bundle. Select the intended color, size, model and quantity, then check whether the displayed amount changes. Record the original currency and option wording with the date. A product card should not advertise the minimum range as the price of a pictured main item without matching the selector.",
        "The seller may later report a price or stock change through the purchasing agent. Review any confirmation request against the current page rather than approving it automatically. Keep domestic delivery separate from item price, even when one of them is shown as zero. This makes refunds and later cost comparisons easier to reconcile."
      ]},
      { heading: "Understand top-up and direct payment records", paragraphs: [
        "The public AllChinaBuy help navigation lists several payment-related topics, including top-up, international card and telegraphic transfer, while availability can depend on account, region and currency. Use only the methods presented in your current checkout or balance screen. A top-up adds funds to the platform balance; paying an order from that balance is a separate transaction and should have its own record.",
        "For each payment, save the source amount, platform amount, displayed exchange rate or conversion result, service charge if shown and transaction identifier. Do not compare methods using only an advertised fee percentage. Card issuer conversion, payment-provider rules, fixed charges and refund routing can change the real result for your currency and amount."
      ]},
      { heading: "Calculate the effective payment rate", paragraphs: [
        "To compare payment methods, divide the amount charged in your home currency by the platform currency credited or purchase amount covered. This effective rate includes the visible outcome even when several components are bundled. Compare it with another method at the same time and amount. Small test payments can reveal fixed-fee effects that are hidden by a headline percentage.",
        "Do not publish one exchange rate as permanent. Currency markets, providers and platform settings change. Record the date and the exact screen used. If your card offers its own conversion choice, read the issuer terms before selecting. The cheapest-looking method can be less suitable if it complicates refunds, has a low limit or introduces a long transfer delay."
      ]},
      { heading: "Budget optional warehouse services deliberately", paragraphs: [
        "Warehouse-stage costs can include optional photographs, measurements, special packing or other services displayed for the item or parcel. Buy an extra service only when it answers a decision-critical question or protects the shipment appropriately. A specific measurement that determines fit can be valuable; repeated photos with no defined purpose merely add cost and review time.",
        "Keep warehouse services in their own column. They are not part of the seller price and may not be handled like the product amount in a return. Before confirming, read what the service includes and whether the request can still be changed. Save the service result with the order so the expense produces usable evidence."
      ]},
      { heading: "Estimate international parcel cost as a range", paragraphs: [
        "International freight depends on destination, route, physical or volumetric weight, dimensions, product restrictions and current conditions. Use the official freight calculator for an early range, then compare the live options after warehouse items are selected and packing information is available. Boxes and protective material can make the submitted parcel heavier or larger than the sum of item estimates.",
        "Record the line, billing rule, charged weight, packing choice and quote date. Add insurance or other options only under the current terms. A route with a lower freight quote may have different tracking, restriction, speed or compensation conditions. The useful comparison is total suitability for your parcel, not only the lowest displayed number."
      ]},
      { heading: "Plan for taxes, declarations and adjustments", paragraphs: [
        "Destination taxes and customs treatment depend on the shipment and local rules. Some route interfaces may display tax-related handling or collection, but the applicable result must be checked for the current destination and declaration. Do not copy another buyer's declared value or assume that one successful parcel creates a safe formula. Provide truthful information and preserve the route instructions shown at submission.",
        "The final amount can also change after packing if measured weight or dimensions differ from an estimate. Review any adjustment and compare it with the warehouse parcel data. Keep a reserve in the budget instead of spending the full balance on products. A realistic estimate should show a range and name the uncertain components."
      ]},
      { heading: "Use a reusable AllChinaBuy cost sheet", paragraphs: [
        "Create columns for item, option, seller price, domestic delivery, payment charge, effective conversion, warehouse services, estimated weight, packing choice, international freight, tax-related amount and final total. Add the date and transaction or parcel number. This transforms a product spreadsheet into a cost record that can be audited and updated.",
        "Compare completed parcels only when destination, month, line, charged weight and packaging are visible. Even then, use the result as a dated example rather than a promise. The best way to understand AllChinaBuy fees is to separate each stage, record the amount actually shown and avoid turning a changing transaction into a universal price claim."
      ]}
    ]
  },
  "allchinabuy-parcel-packing-consolidation": {
    title: "AllChinaBuy Parcel Packing and Consolidation Guide",
    seoTitle: "AllChinaBuy Parcel Packing & Consolidation Guide",
    dek: "Decide what to combine, what to split and which packaging to keep before comparing international shipping routes.",
    date: "September 9, 2026", dateISO: "2026-09-09", read: "10 min read", label: "Parcel planning",
    keywords: ["AllChinaBuy parcel", "AllChinaBuy consolidation", "AllChinaBuy package removal", "ACBuy shipping parcel"],
    verified: ["Stored items can be selected for parcel submission", "Packing can change measured weight and dimensions", "Restricted products may reduce available lines"],
    sections: [
      { heading: "Consolidate only approved warehouse items", paragraphs: [
        "AllChinaBuy consolidation means selecting multiple stored orders for one international parcel. Begin with items that have passed your identity and QC review. Confirm the product, option, quantity, visible condition and any important measurement. An unresolved item should remain out of the parcel until you obtain evidence or complete an after-sales decision. Packing first can make a seller return much more difficult.",
        "Create a parcel candidate list with item weight, dimensions if known, packaging needs, restriction type and value. Grouping everything together is not automatically cheapest or safest. Consolidation can reduce repeated base charges, but one bulky or restricted item can change the available routes or billing weight for the entire parcel."
      ]},
      { heading: "Compare physical and volumetric weight", paragraphs: [
        "Physical weight is what the parcel weighs on a scale. Volumetric weight reflects the space a package occupies and is commonly calculated from length, width and height using a route-specific divisor. The chargeable weight can be the larger result or follow another line rule. Check the current calculator and route detail instead of assuming one universal formula.",
        "Shoe boxes, rigid presentation packaging and puffy clothing can create a large box without much scale weight. Estimate a range before submission and compare again after packing. If the final dimensions are higher than expected, determine which packaging caused the increase before changing routes or asking for repacking."
      ]},
      { heading: "Choose which original packaging to keep", paragraphs: [
        "Keep original packaging when it materially protects the product, contains necessary parts or has personal value. Consider removal when the box is bulky and the item can be protected safely another way. The decision should be item-specific. Removing every box may reduce volume, but it can also reduce structure, presentation and evidence of how the seller supplied the product.",
        "Write explicit packing instructions that identify the item and requested treatment. Do not use vague messages such as make it small if crushing would damage the contents. When available, review the packed result or parcel measurements before payment. Save the instruction because it explains why the final dimensions differ from the warehouse item records."
      ]},
      { heading: "Split restricted or incompatible items", paragraphs: [
        "Batteries, liquids, magnets, food, branded goods, oversized products and other sensitive categories can have different route restrictions. A mixed parcel may inherit the limitations of its most difficult item. Check the current mail restrictions for every product category and destination. If one item removes otherwise suitable lines, compare the total cost and risk of a separate parcel.",
        "Items can also be incompatible because of protection needs. A rigid object can damage soft clothing, a heavy product can crush a shoe box and a leaking product can affect everything in the carton. Splitting creates additional base charges and tracking records, so document the reason. The best parcel is not always the largest possible consolidation."
      ]},
      { heading: "Match protection to the contents", paragraphs: [
        "Use protection for a named risk: moisture, crushing, abrasion, bending, impact or small-part loss. Clothing may need simple moisture protection; shoes may need shape or box protection; fragile goods may need structural cushioning. More material adds weight and sometimes volume, so request only what the contents justify and review the service description shown in the current interface.",
        "Photograph or record high-value contents before packing when the service permits. Keep warehouse QC images and the final parcel information. Protection lowers certain risks but does not guarantee damage-free delivery. Insurance or compensation, when available, follows its current terms and evidence requirements; packing choices do not replace reading those conditions."
      ]},
      { heading: "Use rehearsal or expert services with a clear goal", paragraphs: [
        "A packing estimate or expert service is most useful when you define the objective. State whether you prioritize lower freight, faster delivery, fewer parcels, original packaging or protection. The existing Shipping Expert flow presents objectives and packaging choices, but the returned plan still needs review. Confirm which items were included, whether splitting is allowed and what measurements or fees resulted.",
        "Do not ask an expert to optimize everything without ranking tradeoffs. Lowest cost and fastest delivery can point to different routes, while preserving every box can conflict with minimum volume. Save the recommendation date and compare it with the live parcel options before paying because route availability and prices can change."
      ]},
      { heading: "Review the parcel before payment", paragraphs: [
        "Check the delivery address, contact details, item list, quantity, declared information, packing instruction, measured weight, dimensions, chosen route and total charge. Confirm that the route accepts every content category and destination. If the parcel was split, verify that no item is missing or duplicated across submissions. A short final review is cheaper than correcting an international label after handoff.",
        "Save the parcel number, line name, quote, charged weight and terms shown at payment. Do not rely on a screenshot of the calculator alone; the packed parcel record is the relevant evidence. If an adjustment appears, compare it with the final measurement and ask about a specific difference rather than treating every estimate change as an unexplained fee."
      ]},
      { heading: "Build a repeatable parcel worksheet", paragraphs: [
        "For each candidate item, record warehouse order, approval status, physical weight, size, packaging choice, restriction and value. For each parcel scenario, record destination, grouped items, estimated physical and volumetric range, route candidates, protection, tax-related notes and expected total. Choose the scenario whose tradeoffs match your priority.",
        "After delivery, replace estimates with the actual charged weight, line, transit dates and final cost. That history can improve your next plan when the parcel is genuinely comparable. Avoid publishing it as a permanent price per kilogram. AllChinaBuy parcel packing works best as a dated process: approve items, model the package, check restrictions, confirm measurements and then track the shipment."
      ]}
    ]
  }
};

export default newArticles;
