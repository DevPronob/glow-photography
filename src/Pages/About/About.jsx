import React from 'react';

const About = () => {
    return (
        <div className='mt-10'>
                  <div>
            {/* Introduction Section */}
            <section className="bg-gradient-to-r from-blue-400 to-teal-500 text-white py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4">Capturing the Beauty of Moments</h2>
                    <p className="text-lg mb-8">
                        At Glow Photography Agency, we have a deep appreciation for the art of photography. With an unwavering commitment to quality and creativity, we transform moments into everlasting memories. Our team of skilled photographers is dedicated to capturing the essence of each moment, leaving you with images that tell your story.
                    </p>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="bg-white py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Meet Our Talented Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center">
                            <img
                                src="data:image/jpeg;base64,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"
                                alt="Team Member 1"
                                className="w-32 h-32 rounded-full mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                            <p className="text-gray-700">Lead Photographer</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                src="data:image/jpeg;base64,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"
                                alt="Team Member 2"
                                className="w-32 h-32 rounded-full mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">Alice Smith</h3>
                            <p className="text-gray-700">Creative Director</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                src="data:image/jpeg;base64,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"
                                alt="Team Member 3"
                                className="w-32 h-32 rounded-full mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">Ella Johnson</h3>
                            <p className="text-gray-700">Art Director</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="bg-gradient-to-r from-teal-500 to-blue-400 text-white py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
                    <p className="text-lg mb-8">
                        Our mission is to deliver exceptional photography services that go beyond the ordinary. We believe that photography is a profound art form capable of evoking emotions and telling stories. With a focus on innovation and creativity, we are committed to creating images that not only capture moments but also illuminate the beauty within them.
                    </p>
                </div>
            </section>

            {/* History Section */}
            <section className="bg-white py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Rich History</h2>
                    <p className="text-lg text-gray-700">
                        Glow Photography Agency has a history that spans over two decades. Founded by visionary photographers with a passion for storytelling, our agency has evolved to become a symbol of excellence in the world of photography. From our humble beginnings to our current position, we have consistently pushed the boundaries of creativity and innovation.
                    </p>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-gradient-to-r from-blue-400 to-teal-500 text-white py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center">
                            <h3 className="text-xl font-semibold mb-2">1. Excellence</h3>
                            <p className="text-gray-200 text-center">We strive for excellence in every aspect of our work, from image composition to customer service.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-xl font-semibold mb-2">2. Creativity</h3>
                            <p className="text-gray-200 text-center">Creativity is at the heart of what we do, driving us to create captivating visual stories.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-xl font-semibold mb-2">3. Integrity</h3>
                            <p className="text-gray-200 text-center">We uphold the highest ethical standards, ensuring trust and transparency in our interactions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            {/* <footer className="bg-black text-white py-4 text-center">
                <div className="container mx-auto">
                    &copy; 2023 Glow Photography Agency
                </div>
            </footer> */}
        </div>
        </div>
    );
}

export default About;
