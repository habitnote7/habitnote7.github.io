import{aq as e}from"./index.431dcb33.js";import"./axios.492a3d3b.js";import{J as i}from"./rtl.3aed263d.js";import{u as s}from"./AllHabitStore.8682d05d.js";const h=e("habitDetailstore",{state:()=>({habitId:0,isHDetailLoading:!1,habitDetail:{HABIT_ID:0,HABIT_LABEL:"",QUESTION:"",DESCRIPTION:"",COLOR:"#027be3",EMOJI:"\u{1F4AA}\u{1F3FB}",HAS_OPTION:!0,CAN_MULTISELECT:!1,DEFAULT_VALUE:0,DEFAULT_OPTION_ID:0,UNIT:"",NO_OF_ENTRIES_PERDAY:1,IS_ADDITIVE:!0,IS_TIME_ENTRY:!0,Is_DURATION_ENTRY:!1,HAS_AP:!1}}),getters:{},actions:{async getHabitDetail(){console.log("Getting habit details from API");const t=s();this.habitDetail=t.allHabits.find(a=>a.HABIT_ID==this.habitId),console.log("this.habitDetail :",this.habitDetail)},async fetchCheckMark(){const t=await i(this.habitId,"2024-04-20","2024-04-28");console.log("fetchCheckMark : ",t)}}});export{h as u};