import Sidebar from "../../components/Sidebar"

export default function Dashboard(){

return(

<div style={{display:"flex"}}>

<Sidebar/>

<div style={{padding:"40px"}}>

<h1>PhillyFoundry Dashboard</h1>

<h2>Your AI Agents</h2>

<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"20px"}}>

<div>Marketing Agent</div>
<div>SEO Agent</div>
<div>Content Agent</div>
<div>Sales Agent</div>
<div>Lead Finder</div>
<div>Customer Support</div>

</div>

</div>

</div>

)

}
