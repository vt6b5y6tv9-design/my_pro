import type {Transaction} from '../store/use-app-store';

export const cashflow=[
  {m:'Mar',income:7200,expense:4680},{m:'Apr',income:7450,expense:4920},{m:'May',income:7300,expense:4450},
  {m:'Jun',income:8100,expense:5120},{m:'Jul',income:7650,expense:4380},{m:'Aug',income:8420,expense:4760}
];
export const spending=[{name:'住房',value:1850,color:'#71717a'},{name:'餐饮',value:680,color:'#8b5cf6'},{name:'交通',value:410,color:'#3b82f6'},{name:'购物',value:590,color:'#f59e0b'},{name:'其他',value:430,color:'#a1a1aa'}];
export const accounts=[
  {name:'日常活期账户',bank:'Asteris 银行',number:'•• 4821',balance:12840.56,type:'活期账户',change:'+2.8%',tone:'dark'},
  {name:'高收益储蓄',bank:'北辰银行',number:'•• 9014',balance:28450.20,type:'储蓄账户',change:'+4.2%',tone:'violet'},
  {name:'旅行信用卡',bank:'Vertex',number:'•• 1188',balance:-1840.32,type:'信用卡',change:'可用 $3,160',tone:'light'},
  {name:'投资组合',bank:'Arc 证券',number:'•• 7752',balance:48620.84,type:'投资账户',change:'年内 +8.6%',tone:'blue'}
];
export const transactions:Transaction[]=[
  {id:'TX-8042',merchant:'工资到账',category:'收入',account:'日常活期账户',date:'2026年8月9日',amount:6200,type:'income',status:'Completed',icon:'工资',note:'Acme Studio 月度工资'},
  {id:'TX-8041',merchant:'盒马鲜生',category:'日用杂货',account:'旅行信用卡',date:'2026年8月9日',amount:128.42,type:'expense',status:'Completed',icon:'盒马',note:'本周生活采购'},
  {id:'TX-8040',merchant:'Notion Labs',category:'软件订阅',account:'旅行信用卡',date:'2026年8月8日',amount:18,type:'expense',status:'Completed',icon:'NO',note:'月度订阅'},
  {id:'TX-8039',merchant:'城市能源',category:'生活缴费',account:'日常活期账户',date:'2026年8月8日',amount:94.18,type:'expense',status:'Pending',icon:'电费',note:'八月电费'},
  {id:'TX-8038',merchant:'蓝瓶咖啡',category:'餐饮',account:'旅行信用卡',date:'2026年8月7日',amount:12.80,type:'expense',status:'Completed',icon:'咖啡',note:'团队咖啡'},
  {id:'TX-8037',merchant:'Vanguard 转账',category:'投资',account:'投资组合',date:'2026年8月6日',amount:850,type:'expense',status:'Completed',icon:'VG',note:'每月自动定投'},
  {id:'TX-8036',merchant:'Apple Store',category:'购物',account:'旅行信用卡',date:'2026年8月5日',amount:249,type:'expense',status:'Completed',icon:'AP',note:'数码配件'},
  {id:'TX-8035',merchant:'自由职业收入',category:'收入',account:'日常活期账户',date:'2026年8月4日',amount:1250,type:'income',status:'Completed',icon:'咨询',note:'产品咨询项目'}
];
export const budgets=[
  {name:'住房',spent:1850,limit:2000,color:'bg-zinc-800 dark:bg-zinc-200'},{name:'餐饮',spent:812,limit:1100,color:'bg-violet-500'},
  {name:'交通',spent:410,limit:600,color:'bg-blue-500'},{name:'购物',spent:590,limit:650,color:'bg-amber-500'},{name:'订阅服务',spent:146,limit:220,color:'bg-emerald-500'}
];
