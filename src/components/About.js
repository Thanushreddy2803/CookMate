const About=()=>{
    return(
        <div>
            <div style={{textAlign:"center",width:"80%",margin:"auto",height:"50%"}}>
                <h2>What to know about us?</h2>
                <p>Explore an exciting world of culinary delights. Whether you're a seasoned chef or a home cook,
                    our platform helps you discover recipes from all over the world, tailored to your taste and preferences.</p>
                {/* <hr style={{margin: "150px"}} /> */}
            </div>
            <div style={{width:"80%",margin:"100px",height:"50%", marginTop: "100px",paddingLeft:"50px"}}>
                <h2><center>What we offer:</center></h2>
                <ul>
                    <li>Recipe Search - Enter a dish name, and we’ll provide you with detailed recipes, ingredients, and step-by-step instructions.</li>
                    <li>Ingredient Tracker - Easily find what you need to create the perfect meal.</li>
                    <li>YouTube Tutorials - Watch how your favorite dishes are prepared, guided by expert chefs.</li>
                    <li>Personalized Suggestions - Get recommendations based on your previous searches and favorite cuisines.</li>
                </ul>
                Start cooking and let your culinary journey begin with Food Haven!
            </div>
        </div>
    )
}
export default About;