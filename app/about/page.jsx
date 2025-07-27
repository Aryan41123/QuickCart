import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets'
import Footer from '@/components/Footer';
const About = () => {
    return (
        <div className="container mx-auto px-4">

            <div className="text-3xl font-semibold text-center pt-8 border-t pb-6">
                WHY CHOOSE US
            </div>


            <div className="mt-10 flex flex-col md:flex-row items-center gap-10">
                {/* Image */}
                <div className="md:w-2/4 w-full">
                    <Image
                        src={assets.about}
                        alt="About us"
                        className="rounded-xl w-full"
                        width={500}
                        height={400}
                    />
                </div>

                {/* Text Content */}
                <div className="md:w-2/4 w-full flex flex-col gap-6 text-gray-700">
                    <p className="text-lg">
                        E-Shop is a platform dedicated to bringing high-quality products to our
                        customers at affordable prices. We started our journey with the goal of
                        providing a seamless and personalized shopping experience that caters to
                        the needs of modern consumers.
                    </p>
                    <p className="text-lg">
                        Over the years, we’ve grown into a leading online marketplace, offering a
                        wide range of products across multiple categories, from fashion to
                        electronics. Our mission is to ensure customer satisfaction by delivering
                        top-notch service and quality.
                    </p>
                    <b className="text-xl">Our Mission</b>
                    <p className="text-lg">
                        Our dedicated team works tirelessly to ensure every customer is happy with
                        their purchase. Thank you for being a part of our journey!
                    </p>
                </div>
            </div>
        <div className="mt-7">
              <Footer/>
            </div>
        </div>
    );
};

export default About;
