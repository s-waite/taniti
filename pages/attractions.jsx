import Layout from "../components/Layout";
import PictureAndText from "../components/PictureAndText";

function Attractions() {
    // beaches
    // day trips
    // nightlife
    return (
        <Layout src="/hero/snorkeling.jpg" pageTitle="Attractions" textColor="black">
            <PictureAndText side="left" src="/beach.jpg" alt="a beach" title="Beaches">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In risus velit, vestibulum sit amet malesuada a, tempus nec eros. Maecenas porta maximus hendrerit. Mauris tristique erat non varius maximus. Sed sed ipsum vel lorem porttitor egestas. Ut dapibus diam imperdiet mauris aliquam posuere. Vestibulum ante ipsum. </PictureAndText>
            <PictureAndText side="right" src="/fishing.jpg" alt="a beach" title="Day Trips">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In risus velit, vestibulum sit amet malesuada a, tempus nec eros. Maecenas porta maximus hendrerit. Mauris tristique erat non varius maximus. Sed sed ipsum vel lorem porttitor egestas. Ut dapibus diam imperdiet mauris aliquam posuere. Vestibulum ante ipsum. </PictureAndText>
            <PictureAndText side="left" src="/nightlife.jpg" alt="a beach" title="Nightlife">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In risus velit, vestibulum sit amet malesuada a, tempus nec eros. Maecenas porta maximus hendrerit. Mauris tristique erat non varius maximus. Sed sed ipsum vel lorem porttitor egestas. Ut dapibus diam imperdiet mauris aliquam posuere. Vestibulum ante ipsum. </PictureAndText>
            <div className="h-16"></div>
        </Layout>
    )
}

export default Attractions;