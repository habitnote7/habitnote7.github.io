import{aO as e}from"./index.be3bd688.js";function i(o,r){o=="S"?e.create({message:r.data.msg,color:"green",icon:"check_circle",position:"bottom-right",progress:!0}):o=="RE"?e.create({message:"Error",caption:r.data.msg,color:"red",icon:"announcement",position:"bottom-right",progress:!0}):o=="EE"?e.create({message:"Error",caption:"Error in api "+r,color:"red",icon:"announcement",position:"bottom-right",progress:!0}):o=="Eui"&&e.create({message:r,caption:"",color:"red",icon:"announcement",position:"bottom-right",progress:!0})}export{i as s};