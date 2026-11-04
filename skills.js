const skillInfo={
python:{category:"PROGRAMMING",title:"PYTHON",mark:"Py",description:"A core programming language in my data science workflow.",tags:["NUMPY","PANDAS","SCIKIT-LEARN"]},
r:{category:"PROGRAMMING",title:"R PROGRAMMING",mark:"R",description:"A language for statistical computing, data exploration and analytical work.",tags:["STATISTICAL COMPUTING","DATA ANALYSIS"]},
sql:{category:"DATABASES",title:"SQL",mark:"SQL",description:"Working with structured data through querying, filtering, joining and aggregating relational datasets.",tags:["QUERIES","JOINS","DATA MANIPULATION"]},
ai:{category:"INTELLIGENT SYSTEMS",title:"ARTIFICIAL INTELLIGENCE",mark:"✳",description:"An area of interest focused on intelligent systems and practical applications of AI.",tags:["INTELLIGENT SYSTEMS","APPLIED AI"]},
ml:{category:"INTELLIGENT SYSTEMS",title:"MACHINE LEARNING",mark:"ML",description:"Building predictive models and evaluating approaches to learn patterns from data.",tags:["SUPERVISED LEARNING","MODEL EVALUATION","ENSEMBLE METHODS"]},
statistics:{category:"MATHEMATICS",title:"STATISTICS",mark:"∑",description:"The mathematical foundation for understanding data, uncertainty, inference and model behaviour.",tags:["STATISTICAL MODELLING","INFERENCE","PROBABILITY"]},
timeseries:{category:"ANALYTICS",title:"TIME SERIES & FORECASTING",mark:"⌁",description:"Analysing time-dependent observations to understand patterns and develop forecasts.",tags:["TREND ANALYSIS","FORECASTING"]},
analytics:{category:"ANALYTICS",title:"DATA ANALYTICS",mark:"▥",description:"Exploring, preparing and interpreting data to uncover patterns and communicate useful insights.",tags:["EXPLORATORY ANALYSIS","DATA PREPARATION","INSIGHTS"]},
powerbi:{category:"VISUALISATION",title:"POWER BI",mark:"▧",description:"A business intelligence platform for transforming data into interactive reports and visual summaries.",tags:["REPORTING","DASHBOARDS","VISUALISATION"]},
git:{category:"DEVELOPMENT TOOLS",title:"GIT & GITHUB",mark:"⑂",description:"Tracking changes, managing code and collaborating through version control and repositories.",tags:["VERSION CONTROL","REPOSITORIES","COLLABORATION"]},
aws:{category:"CLOUD",title:"AWS",mark:"aws",description:"Cloud platform exposure for hosting and deploying applications and services.",tags:["CLOUD","DEPLOYMENT"]},
tensorflow:{category:"DEEP LEARNING",title:"TENSORFLOW",mark:"TF",description:"A machine learning framework for building, training and evaluating neural network models.",tags:["NEURAL NETWORKS","ANN","MODEL TRAINING"]}
};
const keys=[...document.querySelectorAll(".skill-key")];
const categoryEl=document.getElementById("screen-category");
const indexEl=document.getElementById("screen-index");
const iconEl=document.getElementById("screen-icon");
const titleEl=document.getElementById("screen-title");
const descriptionEl=document.getElementById("screen-description");
const tagsEl=document.getElementById("screen-tags");
const noise=document.getElementById("noise-overlay");
let selectedIndex=0;
keys.forEach((key,index)=>{
 const badge=key.querySelector(".key-number");
 if(badge)badge.textContent=String(index+1).padStart(2,"0");
});
function renderScreen({category,title,mark,description,tags,index}){
 categoryEl.textContent=category;indexEl.textContent=index;
 iconEl.textContent=mark;titleEl.textContent=title;descriptionEl.textContent=description;
 tagsEl.replaceChildren(...tags.map(tag=>{const chip=document.createElement("span");chip.textContent=tag;return chip;}));
}
function selectSkill(index){
 selectedIndex=(index+keys.length)%keys.length;
 const key=keys[selectedIndex],skill=skillInfo[key.dataset.skill];
 keys.forEach((item,i)=>item.setAttribute("aria-pressed",String(i===selectedIndex)));
 noise.classList.remove("active");
 renderScreen({...skill,index:String(selectedIndex+1).padStart(2,"0")+" / 12"});
}
function showHome(){
 keys.forEach(key=>key.setAttribute("aria-pressed","false"));
 noise.classList.remove("active");
 renderScreen({category:"HOME",index:"00 / 12",mark:"KS",title:"WELCOME TO MY WORKSPACE",description:"Explore the tools, technologies and ideas I use across data science, machine learning and analytics. Select any key to begin.",tags:["CURIOUS BY NATURE","DATA-DRIVEN","ALWAYS LEARNING"]});
}
function showWhiteNoise(){
 keys.forEach(key=>key.setAttribute("aria-pressed","false"));
 categoryEl.textContent="NO SIGNAL";indexEl.textContent="STATIC / 001";
 iconEl.textContent="";titleEl.textContent="";descriptionEl.textContent="";tagsEl.replaceChildren();
 noise.classList.add("active");
}
function moveSelection(step){selectSkill(selectedIndex+step);}
keys.forEach((key,index)=>key.addEventListener("click",()=>selectSkill(index)));
document.querySelectorAll(".control-key").forEach(button=>button.addEventListener("click",()=>{
 const action=button.dataset.action;
 if(action==="home")showHome();
 else if(action==="noise")showWhiteNoise();
 else if(action==="up"||action==="left")moveSelection(-1);
 else if(action==="down"||action==="right")moveSelection(1);
}));
document.addEventListener("keydown",event=>{
 if(event.altKey||event.ctrlKey||event.metaKey)return;
 const target=event.target;
 if(target&&(/INPUT|TEXTAREA|SELECT/.test(target.tagName)||target.isContentEditable))return;
 if(/^[1-9]$/.test(event.key)){selectSkill(Number(event.key)-1);return;}
 if(event.key==="0"){selectSkill(9);return;}
 if(event.key==="-"||event.key==="_"){selectSkill(10);return;}
 if(event.key==="="||event.key==="+"){selectSkill(11);return;}
 if(event.key==="ArrowUp"||event.key==="ArrowLeft"){event.preventDefault();moveSelection(-1);return;}
 if(event.key==="ArrowDown"||event.key==="ArrowRight"){event.preventDefault();moveSelection(1);return;}
 if(event.key==="Enter"){event.preventDefault();showHome();return;}
 if(event.key==="Delete"||event.key==="Backspace"){event.preventDefault();showWhiteNoise();}
});
selectSkill(0);
