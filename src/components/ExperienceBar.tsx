export default function ExperienceBar(){
   return(
      <header className="experience-bar"> 
         <span>0 xp</span>
         <div>
            <div style={{width:"60%"}}></div>

            <span className="current-experience"  style={{left:"60%"}}>600px</span>
         </div>
         <span>600 xp</span>
      </header>
   )
}