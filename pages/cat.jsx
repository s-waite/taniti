import Layout from "../components/Layout"
import LeftPic from "../components/LeftPic"
import RightPic from "../components/RightPic"

function CatPage() {
    return (
        <Layout page="cat">
            <main className="flex flex-col">
                <h1 className="text-5xl text-midnight-blue mb-5 self-center drop-shadow-sm font-semibold">Cats</h1>
                <LeftPic location="./youngkitten.jpg" alt="A young kitten" title="Zero to Four Weeks">
                    It is important the queen (a term commonly used for a female cat that is either pregnant or nursing) directly nurse her young if possible. Monitor your kitten’s growth closely to make sure its growth rate is progressing steadily. If any kitten is not growing at a sufficient rate, a caretaker might need to feed the kitten directly either with a bottle or a feeding tube. Some reasons why kittens might not gain weight appropriately include the following:
                    <ul className="pl-8 list-disc">
                        <li>too many other siblings are competing for mom's milk</li>
                        <li>gastrointestinal disease</li>
                        <li>environmental conditions such as extreme heat or cold, or unsanitary conditions</li>
                    </ul>
                </LeftPic>
                <RightPic location="./teenagecat.jpg" alt="A teenage cat" title="Four Weeks to One Year">
                    Kittens can start being introduced to soft wet kitten food typically around three to four weeks after birth. According to the ASPCA, kittens at this age should eat half to one cup of dry kitten food or six to nine ounces of wet kitten food per day. If your kitten has difficulties eating hard food, a small amount of water can be added to soften the food. Cat food that is optimized for kittens provides the additional nutrients that are needed for growth, energy, and wellness. Depending on the breed, your cat may have different dietary requirements. You should always consult with your veterinarian for recommendations
                </RightPic>
                <LeftPic location="./adultcat.jpg" alt="An adult cat" title="One Year to Seven Years">
                    This age is when kittens reach the cat stage and do not need as many nutrients. At this age, their level of activity decreases, and so does their metabolism. It is not recommended to leave food out for the cats all day. Instead, provide food a couple times a day so they eat meals rather than snacking throughout the day. This practice reduces the risk of obesity and other weight-related feline ailments.
                </LeftPic>
                <RightPic location="./oldcat.jpg" alt="An old cat" title="Seven Years and More">
                    Much like many living organisms, the body begins to deteriorate and experience a lot of changes. Cats at this age should eat less fats and calories and more quality proteins. This means when you are purchasing packaged foods for your cat, look for food that states a particular protein (such as "salmon") and not just a category (such as fish). This usually means they are byproducts, or combinations, of lesser quality proteins.
                </RightPic>
            </main>
        </Layout>

    )

}

export default CatPage
