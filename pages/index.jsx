import Layout from "../components/Layout";
import PictureAndText from "../components/PictureAndText";

function Index() {
    return (
        <Layout src="/topbeach.jpg" title="Explore Taniti" color="black">
            <PictureAndText side="left" src="/topbeach.jpg" alt="test" title="Welcome To Paradise">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In risus velit, vestibulum sit amet malesuada a, tempus nec eros. Maecenas porta maximus hendrerit. Mauris tristique erat non varius maximus. Sed sed ipsum vel lorem porttitor egestas. Ut dapibus diam imperdiet mauris aliquam posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed mattis quis purus at blandit. Fusce sit amet pulvinar sapien. Aenean auctor metus id finibus condimentum. Sed pharetra nisl dui, et consequat augue posuere et. Donec velit velit, fringilla ac sapien sit amet, porttitor ultricies eros. </PictureAndText>
            <PictureAndText side="right" src="/topbeach.jpg" alt="test" title="Explore Taniti">Taniti is the ultimate vacation destination 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In risus velit, vestibulum sit amet malesuada a, tempus nec eros. Maecenas porta maximus hendrerit. Mauris tristique erat non varius maximus. Sed sed ipsum vel lorem porttitor egestas. Ut dapibus diam imperdiet mauris aliquam posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed mattis quis purus at blandit. Fusce sit amet pulvinar sapien. Aenean auctor metus id finibus condimentum. Sed pharetra nisl dui, et consequat augue posuere et. Donec velit velit, fringilla ac sapien sit amet, porttitor ultricies eros.</PictureAndText>
        </Layout>
    )
}

export default Index;