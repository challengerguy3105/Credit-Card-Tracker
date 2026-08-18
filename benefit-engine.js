/* ============================= CARD LIBRARY =============================
   Built-in card templates. Cadence types:
   'monthly' | 'quarterly' | 'semiannual-calendar' | 'annual-calendar' |
   'annual-anniversary' | 'every4years'
   This file runs in TWO environments: the browser (loaded via <script src>)
   and Node (required by the reminder-email serverless function) — so it must
   stay free of browser-only or Node-only APIs. Keep it that way.
============================================================================ */
const CARD_LIBRARY = {
  "amex-platinum": {
    name: "American Express Platinum", issuer:"amex", fee: 895,
    benefits: [
      { id:"uber-cash", name:"Uber Cash", desc:"Monthly credit for Uber rides/Eats (+$20 bonus in December)", cadence:"monthly", amount:15 },
      { id:"digital-ent", name:"Digital Entertainment", desc:"Streaming/news credit (Disney+, NYT, Peacock, etc.)", cadence:"monthly", amount:25 },
      { id:"walmart-plus", name:"Walmart+ Membership", desc:"Monthly membership reimbursement", cadence:"monthly", amount:12.95 },
      { id:"uber-one", name:"Uber One Membership", desc:"Annual reimbursement toward Uber One", cadence:"annual-calendar", amount:120 },
      { id:"hotel-credit", name:"Hotel Credit (FHR / Hotel Collection)", desc:"Prepaid bookings via Amex Travel, semi-annual", cadence:"semiannual-calendar", amount:300 },
      { id:"airline-fee", name:"Airline Fee Credit", desc:"Requires selecting ONE qualifying airline every January", cadence:"annual-calendar", amount:200 },
      { id:"clear-plus", name:"CLEAR+ Membership", desc:"Statement credit for CLEAR Plus membership", cadence:"annual-calendar", amount:209 },
      { id:"global-entry", name:"Global Entry / TSA PreCheck", desc:"One application fee credit every 4 years", cadence:"every4years", amount:120 }
    ]
  },
  "hilton-aspire": {
    name: "Hilton Honors Amex Aspire", issuer:"hilton", fee: 550,
    benefits: [
      { id:"resort-credit", name:"Hilton Resort Credit", desc:"Semi-annual credit at participating Hilton Resorts", cadence:"semiannual-calendar", amount:200 },
      { id:"flight-credit", name:"Flight Credit", desc:"Quarterly credit, direct airline or Amex Travel bookings", cadence:"quarterly", amount:50 },
      { id:"waldorf-conrad", name:"Waldorf/Conrad Property Credit", desc:"2-night min stay booked via card portal, resets on card year", cadence:"annual-anniversary", amount:100 },
      { id:"clear-plus", name:"CLEAR+ Membership", desc:"Statement credit for CLEAR Plus membership", cadence:"annual-calendar", amount:209 },
      { id:"free-night", name:"Annual Free Night Reward", desc:"Issued on card renewal each year", cadence:"annual-anniversary", amount:0 }
    ]
  },
  "csr": {
    name: "Chase Sapphire Reserve", issuer:"chase", fee: 795,
    benefits: [
      { id:"travel-credit", name:"Annual Travel Credit", desc:"Auto-applies to travel charges, resets on account anniversary", cadence:"annual-anniversary", amount:300 },
      { id:"the-edit-hotel", name:"The Edit Hotel Credit", desc:"Prepaid hotel bookings via Chase Travel, semi-annual, 2-night min", cadence:"semiannual-calendar", amount:250 },
      { id:"dining-credit", name:"Dining Credit (Exclusive Tables)", desc:"Semi-annual credit at Sapphire Reserve Exclusive Tables restaurants", cadence:"semiannual-calendar", amount:150 },
      { id:"doordash", name:"DoorDash Credit", desc:"Monthly promo credits + DashPass \u2014 PROMOTIONAL, runs through Dec 2027", cadence:"monthly", amount:25 },
      { id:"lyft", name:"Lyft Credit", desc:"Monthly in-app credit \u2014 PROMOTIONAL, runs through Sep 2027", cadence:"monthly", amount:10 },
      { id:"peloton", name:"Peloton Credit", desc:"Monthly membership credit \u2014 PROMOTIONAL, runs through Dec 2027", cadence:"monthly", amount:10 },
      { id:"global-entry", name:"Global Entry / TSA / NEXUS", desc:"One application fee credit every 4 years", cadence:"every4years", amount:120 },
      { id:"stubhub", name:"StubHub / viagogo Credit", desc:"Annual credit \u2014 verify exact terms on your account", cadence:"annual-anniversary", amount:300 }
    ]
  },
  "venture-x": {
    name: "Capital One Venture X", issuer:"capone", fee: 395,
    benefits: [
      { id:"travel-credit", name:"Capital One Travel Credit", desc:"Annual credit toward Capital One Travel bookings, resets on account anniversary", cadence:"annual-anniversary", amount:300 },
      { id:"anniv-miles", name:"Anniversary Bonus Miles", desc:"10,000 bonus miles awarded each account anniversary (~$100 value)", cadence:"annual-anniversary", amount:100 },
      { id:"global-entry", name:"Global Entry / TSA PreCheck", desc:"One application fee credit every 4 years", cadence:"every4years", amount:120 }
    ]
  },
  "marriott-brilliant": {
    name: "Marriott Bonvoy Brilliant Amex", issuer:"marriott", fee: 650,
    benefits: [
      { id:"dining-credit", name:"Dining Credit", desc:"Monthly statement credit at restaurants worldwide", cadence:"monthly", amount:25 },
      { id:"ritz-stregis", name:"Ritz-Carlton / St. Regis Property Credit", desc:"2-night min stay booked direct at special rate, resets on card year", cadence:"annual-anniversary", amount:100 },
      { id:"free-night", name:"Annual Free Night Award", desc:"Up to 85,000-point value, issued after card renewal", cadence:"annual-anniversary", amount:0 },
      { id:"global-entry", name:"Global Entry / TSA PreCheck", desc:"One application fee credit every 4 years", cadence:"every4years", amount:120 }
    ]
  },
  "amex-biz-platinum": {
    name: "American Express Business Platinum", issuer:"amex", fee: 895,
    benefits: [
      { id:"dell-credit", name:"Dell Technologies Credit", desc:"Up to $150 annual + $1,000 more after $5,000 spend (enrollment required)", cadence:"annual-calendar", amount:150 },
      { id:"hilton-credit", name:"Hilton Statement Credit", desc:"Enrollment required, eligible Hilton purchases", cadence:"annual-calendar", amount:200 },
      { id:"indeed-credit", name:"Indeed Credit", desc:"Enrollment required, U.S. job postings", cadence:"annual-calendar", amount:360 },
      { id:"airline-fee", name:"Airline Fee Credit", desc:"Requires selecting ONE qualifying airline every January", cadence:"annual-calendar", amount:200 },
      { id:"clear-plus", name:"CLEAR+ Membership", desc:"Statement credit for CLEAR Plus membership", cadence:"annual-calendar", amount:219 },
      { id:"adobe-credit", name:"Adobe Credit", desc:"Enrollment required, $600 min spend", cadence:"annual-calendar", amount:250 },
      { id:"hotel-credit", name:"Hotel Credit (FHR / Hotel Collection)", desc:"Prepaid bookings via Amex Travel, semi-annual", cadence:"semiannual-calendar", amount:300 },
      { id:"global-entry", name:"Global Entry / TSA PreCheck", desc:"One application fee credit every 4 years", cadence:"every4years", amount:120 }
    ]
  },
  "amex-gold": {
    name: "American Express Gold", issuer:"amex", fee: 325,
    benefits: [
      { id:"uber-cash", name:"Uber Cash", desc:"Monthly credit for Uber rides/Eats", cadence:"monthly", amount:10 },
      { id:"dining-credit", name:"Dining Credit", desc:"Monthly, Grubhub / Cheesecake Factory / Five Guys / Buffalo Wild Wings / Wonder (enrollment required)", cadence:"monthly", amount:10 },
      { id:"dunkin-credit", name:"Dunkin' Credit", desc:"Monthly, U.S. Dunkin' locations (enrollment required)", cadence:"monthly", amount:7 },
      { id:"resy-credit", name:"Resy Credit", desc:"Semi-annual, qualifying Resy restaurants (enrollment required)", cadence:"semiannual-calendar", amount:50 },
      { id:"hotel-credit", name:"Hotel Collection Credit", desc:"Prepaid bookings via Amex Travel, 2-night minimum", cadence:"annual-calendar", amount:100 }
    ]
  }
};

const CADENCE_LABELS = {
  monthly:"Monthly", quarterly:"Quarterly", "semiannual-calendar":"Semi-annual",
  "annual-calendar":"Annual (cal. yr)", "annual-anniversary":"Annual (card yr)", every4years:"Every 4 yrs"
};
function cadenceLabel(c){ return CADENCE_LABELS[c] || c; }

function daysBetween(a,b){ return Math.round((b-a)/86400000); }

// today should be a plain Date (UTC-safe callers should pass a UTC-midnight Date)
function getPeriod(benefit, account, today){
  const y = today.getFullYear();
  const cad = benefit.cadence;
  if(cad === "monthly"){
    const start = new Date(y, today.getMonth(), 1);
    const end = new Date(y, today.getMonth()+1, 0);
    return { key:`${y}-${String(today.getMonth()+1).padStart(2,"0")}`, start, end };
  }
  if(cad === "quarterly"){
    const q = Math.floor(today.getMonth()/3);
    const start = new Date(y, q*3, 1);
    const end = new Date(y, q*3+3, 0);
    return { key:`${y}-Q${q+1}`, start, end };
  }
  if(cad === "semiannual-calendar"){
    const half = today.getMonth() < 6 ? 0 : 1;
    const start = new Date(y, half*6, 1);
    const end = new Date(y, half*6+6, 0);
    return { key:`${y}-H${half+1}`, start, end };
  }
  if(cad === "annual-calendar"){
    return { key:`${y}`, start:new Date(y,0,1), end:new Date(y,11,31) };
  }
  if(cad === "annual-anniversary"){
    const anchor = account.openDate ? new Date(account.openDate) : new Date(y,0,1);
    let start = new Date(y, anchor.getMonth(), anchor.getDate());
    if(start > today){ start = new Date(y-1, anchor.getMonth(), anchor.getDate()); }
    const end = new Date(start.getFullYear()+1, start.getMonth(), start.getDate()-1);
    return { key:`${start.getFullYear()}-anniv`, start, end };
  }
  if(cad === "every4years"){
    const anchor = account.openDate ? new Date(account.openDate) : new Date(y,0,1);
    let cycles = Math.floor((today - anchor) / (365.25*4*86400000));
    if(cycles < 0) cycles = 0;
    const start = new Date(anchor.getFullYear()+cycles*4, anchor.getMonth(), anchor.getDate());
    const end = new Date(anchor.getFullYear()+(cycles+1)*4, anchor.getMonth(), anchor.getDate()-1);
    return { key:`${start.getFullYear()}-4yr`, start, end };
  }
  return { key:`${y}`, start:new Date(y,0,1), end:new Date(y,11,31) };
}

function usageKey(accountId, benefitId, periodKey){ return `${accountId}|${benefitId}|${periodKey}`; }

// usageMap: { "<accountId>|<benefitId>|<periodKey>": true } — presence = used
function getStatus(benefit, account, today, usageMap){
  const period = getPeriod(benefit, account, today);
  const key = usageKey(account.id, benefit.id, period.key);
  const used = !!(usageMap && usageMap[key]);
  const daysLeft = daysBetween(today, period.end);
  const totalDays = daysBetween(period.start, period.end) || 1;
  const fracLeft = Math.max(0, daysLeft/totalDays);
  let level = "green";
  if(!used){
    if(daysLeft <= 7) level = "red";
    else if(fracLeft <= 0.34) level = "yellow";
  }
  return { period, used, daysLeft, level, key, fracElapsed: 1-fracLeft };
}

function fmtMoney(n){ return n===0 ? "\u2014" : "$"+ (n%1===0 ? n : n.toFixed(2)); }

// Compute statuses for every benefit across a set of accounts + templates.
// accounts: [{id, templateId, nickname, openDate}], templates: merged CARD_LIBRARY + custom
function computeAll(accounts, templates, usageMap, today){
  const out = [];
  accounts.forEach(acc=>{
    const tmpl = templates[acc.templateId];
    if(!tmpl) return;
    tmpl.benefits.forEach(b=>{
      out.push({ acc, tmpl, b, st: getStatus(b, acc, today, usageMap) });
    });
  });
  return out;
}

const EXPORTS = { CARD_LIBRARY, cadenceLabel, getPeriod, getStatus, usageKey, fmtMoney, computeAll, daysBetween };
if(typeof module !== "undefined" && module.exports){ module.exports = EXPORTS; }
if(typeof window !== "undefined"){ window.BenefitEngine = EXPORTS; }
