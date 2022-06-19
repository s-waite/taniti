import Layout from "../components/Layout"
import QandA from "../components/QandA"
export default function Faq() {
    return (
        <Layout src="/hero/faq.jpg" pageTitle="Frequently Asked Questions" textColor="white">
            <div >
                <QandA
                    question="Is the electricity the same as the US?"
                    answer="Power outlets are 120 volts (the same as in the United States)."
                />
                <QandA
                    question="Are there restricted times to purchase alcohol?"
                    answer="Alcohol is not allowed to be served or sold between the hours of midnight and 9:00 a.m."
                />
                <QandA
                    question="What is the drinking age?"
                    answer="The drinking age on Taniti is 18 and the drinking age is not strictly enforced."
                />
                <QandA
                    question="Do people speak english?"
                    answer="Many younger Tanitians speak fluent English. Very little English is spoken in rural areas, especially by the older residents."
                />
                <QandA
                    question="Are there medical facilities on the island?"
                    answer="There is one hospital and several clinics. The hospital has many multilingual employees."
                />
                <QandA
                    question="Is there crime on Taniti?"
                    answer="Violent crime is very rare on Taniti, but as tourism increases, there are more reports of pickpocketing and other petty crimes."
                />
                <QandA
                    question="Are establishements often closed?"
                    answer="Taniti enjoys a large number of national holidays, and many tourist attractions and restaurants will be closed on holidays, so visitors should plan accordingly."
                />
                <QandA
                    question="What currency does Taniti use?"
                    answer="Taniti uses the U.S. dollar as its currency, but many businesses will also accept euros and yen. Several banks facilitate currency exchange, and many businesses accept major credit cards."
                />

            </div>
        </Layout>
    )
}