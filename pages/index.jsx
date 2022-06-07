import Layout from "../components/Layout"

const IndexPage = () => {
  return (
    <Layout page="home">
      <main className="flex flex-col">
        <h1 className="text-5xl mb-6 drop-shadow-sm  text-midnight-blue self-center font-semibold">Paradigm Pet Professionals</h1>
        <img src="./catanddog.jpg" alt="A cat and dog" />
        <div className="my-5  grid grid-cols-2 gap-10">
          <p className="col-span-2"><b>Pets are nature's gift to humanity.</b> It has been scientifically proven that opening our homes and hearts to a pet increases our longevity and improves our overall quality of life as well as the lives of our pets. At Pet Paradigm Professionals, our mission is to offer resources to help you care for your furry, scaly, feathery, and slimy loved ones. Our pet experts—or “Pexperts”—have been working with pet owners and professionals alike for the past twelve years. They offer <a href="./contact.html">one-on-one consultations</a> with current and prospective pet owners as well as group presentations designed for veterinary, pet shelter, and pet breeding professionals.</p>
          <p><b>Looking for basic pet care advice for the most common type of pets? </b>Need additional help determining which type of pet is right for you and your family? We will work with you and provide tailored evidence-based pet care to ensure lifelong health and wellness of your new companion.</p>
          <div><b>Looking for your new best friend? </b>The following organizations can help you find and adopt the perfect companion:
            <ul className="list-disc pl-8">
              <li>General Adoption Resources: <a href="https://theshelterpetproject.org">https://theshelterpetproject.org</a></li>
              <li>ASPCA: <a href="https://www.aspca.org/">https://www.aspca.org/</a></li>
              <li>Fish Rescue: <a href="https://www.sterlingshelter.org/humane-society/koi-fish-rescue/">https://www.sterlingshelter.org/humane-society/koi-fish-rescue/</a></li>
              <li>Snake Rescue: <a href="https://savethesnakes.org/snakerescuecall/">https://savethesnakes.org/snakerescuecall/</a></li>
              <li>Bird Rescue: <a href="https://ftlob.rescuegroups.org/hl">https://ftlob.rescuegroups.org/hl</a></li>
            </ul>
          </div>
          <p className="col-span-2"><b>We are also happy to help you navigate the adoption process! </b>We will guide you through each step in the process from determining which type of pet is best suited for your family and home environment, to completing the necessary paperwork, to bringing your new loved one home. Please fill out our <a href="./contact.html">contact form</a> to request a consultation. We will contact you within 48 hours to schedule a consultation. All fields are required.</p>
        </div>


      </main>
    </Layout>
  )
}

export default IndexPage