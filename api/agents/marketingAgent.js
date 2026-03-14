export async function marketingAgent(business){

const prompt = `
Create a marketing strategy for ${business}
including social media, email and ads
`

const res = await fetch("/api/ai",{
method:"POST",
body:JSON.stringify({prompt})
})

return res.json()

}
