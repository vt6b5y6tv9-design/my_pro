import {create} from 'zustand';

export type Transaction={id:string;merchant:string;category:string;account:string;date:string;amount:number;type:'income'|'expense';status:'Completed'|'Pending';icon:string;note:string};
type State={theme:'light'|'dark';palette:boolean;drawer:Transaction|null;toggleTheme:()=>void;setPalette:(v:boolean)=>void;setDrawer:(v:Transaction|null)=>void};

export const useAppStore=create<State>(set=>({
  theme:'light',palette:false,drawer:null,
  toggleTheme:()=>set(s=>({theme:s.theme==='light'?'dark':'light'})),
  setPalette:palette=>set({palette}),setDrawer:drawer=>set({drawer})
}));
