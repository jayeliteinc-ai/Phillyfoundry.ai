export default function Sidebar(){

return(

<div style={{
width:"220px",
background:"#111",
color:"white",
height:"100vh",
padding:"20px"
}}>

<h2>PhillyFoundry</h2>

<ul style={{listStyle:"none",padding:0}}>

<li><a href="/dashboard">Dashboard</a></li>
<li><a href="/tools">AI Tools</a></li>
<li><a href="/agents">AI Agents</a></li>
<li><a href="/settings">Settings</a></li>

</ul>

</div>

)

}
