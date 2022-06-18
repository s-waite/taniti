import Layout from "../components/Layout";
import PictureAndText from "../components/PictureAndText";

function Attractions() {
    // beaches
    // day trips
    // nightlife
    return (
        <Layout src="/hero/snorkeling.jpg" pageTitle="Attractions" textColor="black">
            <PictureAndText side="left" src="/beach.jpg" alt="a beach" title="Beaches">Test</PictureAndText>
        </Layout>
    )
}

export default Attractions;