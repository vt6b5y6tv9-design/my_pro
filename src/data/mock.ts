import type {Transaction} from '../store/use-app-store';

export const cashflow=[
  {m:'Mar',income:7200,expense:4680},{m:'Apr',income:7450,expense:4920},{m:'May',income:7300,expense:4450},
  {m:'Jun',income:8100,expense:5120},{m:'Jul',income:7650,expense:4380},{m:'Aug',income:8420,expense:4760}
];
export const spending=[{name:'Housing',value:1850,color:'#71717a'},{name:'Food',value:680,color:'#8b5cf6'},{name:'Transport',value:410,color:'#3b82f6'},{name:'Shopping',value:590,color:'#f59e0b'},{name:'Other',value:430,color:'#a1a1aa'}];
export const accounts=[
  {name:'Everyday checking',bank:'Asteris Bank',number:'•• 4821',balance:12840.56,type:'Checking',change:'+2.8%',tone:'dark'},
  {name:'High-yield savings',bank:'Northstar',number:'•• 9014',balance:28450.20,type:'Savings',change:'+4.2%',tone:'violet'},
  {name:'Travel rewards',bank:'Vertex',number:'•• 1188',balance:-1840.32,type:'Credit card',change:'$3,160 available',tone:'light'},
  {name:'Investment portfolio',bank:'Arc Securities',number:'•• 7752',balance:48620.84,type:'Investment',change:'+8.6% YTD',tone:'blue'}
];
export const transactions:Transaction[]=[
  {id:'TX-8042',merchant:'Salary deposit',category:'Income',account:'Everyday checking',date:'Aug 09, 2026',amount:6200,type:'income',status:'Completed',icon:'SD',note:'Monthly salary · Acme Studio'},
  {id:'TX-8041',merchant:'Whole Foods Market',category:'Groceries',account:'Travel rewards',date:'Aug 09, 2026',amount:128.42,type:'expense',status:'Completed',icon:'WF',note:'Weekly groceries'},
  {id:'TX-8040',merchant:'Notion Labs',category:'Software',account:'Travel rewards',date:'Aug 08, 2026',amount:18,type:'expense',status:'Completed',icon:'NO',note:'Monthly subscription'},
  {id:'TX-8039',merchant:'Pacific Energy',category:'Utilities',account:'Everyday checking',date:'Aug 08, 2026',amount:94.18,type:'expense',status:'Pending',icon:'PE',note:'Electric bill · August'},
  {id:'TX-8038',merchant:'Blue Bottle Coffee',category:'Dining',account:'Travel rewards',date:'Aug 07, 2026',amount:12.80,type:'expense',status:'Completed',icon:'BB',note:'Coffee with team'},
  {id:'TX-8037',merchant:'Vanguard transfer',category:'Investment',account:'Investment portfolio',date:'Aug 06, 2026',amount:850,type:'expense',status:'Completed',icon:'VG',note:'Automatic monthly investment'},
  {id:'TX-8036',merchant:'Apple Store',category:'Shopping',account:'Travel rewards',date:'Aug 05, 2026',amount:249,type:'expense',status:'Completed',icon:'AP',note:'Accessories'},
  {id:'TX-8035',merchant:'Freelance payment',category:'Income',account:'Everyday checking',date:'Aug 04, 2026',amount:1250,type:'income',status:'Completed',icon:'FP',note:'Product consultation'}
];
export const budgets=[
  {name:'Housing',spent:1850,limit:2000,color:'bg-zinc-800 dark:bg-zinc-200'},{name:'Food & dining',spent:812,limit:1100,color:'bg-violet-500'},
  {name:'Transport',spent:410,limit:600,color:'bg-blue-500'},{name:'Shopping',spent:590,limit:650,color:'bg-amber-500'},{name:'Subscriptions',spent:146,limit:220,color:'bg-emerald-500'}
];
