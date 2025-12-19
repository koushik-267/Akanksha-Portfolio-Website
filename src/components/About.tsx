import { Target, Eye, Heart } from "lucide-react";

export function About() {
  return (
    <section
      className="py-20 bg-white"
      style={{ paddingTop: "120px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl text-gray-900 mb-4">
              Who We Are
            </h3>
            <p className="text-gray-600 mb-4">
              Akanksha Publications is a leading educational
              publisher dedicated to creating high-quality
              learning materials for students across all levels.
              With over two decades of experience, we've been at
              the forefront of educational innovation.
            </p>
            <p className="text-gray-600">
              Our publications span a wide range of subjects,
              from competitive exam preparation to academic
              textbooks, all designed with the student's success
              in mind. We believe in making quality education
              accessible to all.
            </p>
          </div>
          <div>
            <h3 className="text-2xl text-gray-900 mb-4">
              Our Commitment
            </h3>
            <p className="text-gray-600 mb-4">
              We are committed to excellence in every
              publication we produce. Our team of experienced
              educators, subject matter experts, and designers
              work tirelessly to ensure that each book meets the
              highest standards of quality and accuracy.
            </p>
            <p className="text-gray-600">
              By combining traditional teaching methods with
              modern educational insights, we create content
              that resonates with today's learners and prepares
              them for tomorrow's challenges.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl">
            <div className="w-14 h-14 bg-amber-500 rounded-lg flex items-center justify-center mb-4">
              <Target className="text-white" size={28} />
            </div>
            <h4 className="text-xl text-gray-900 mb-3">
              Our Mission
            </h4>
            <p className="text-gray-600">
              To provide accessible, high-quality educational
              resources that empower students to achieve their
              academic and career goals.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-xl">
            <div className="w-14 h-14 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
              <Eye className="text-white" size={28} />
            </div>
            <h4 className="text-xl text-gray-900 mb-3">
              Our Vision
            </h4>
            <p className="text-gray-600">
              To be the most trusted name in educational
              publishing, recognized for innovation, quality,
              and student success.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl">
            <div className="w-14 h-14 bg-amber-600 rounded-lg flex items-center justify-center mb-4">
              <Heart className="text-white" size={28} />
            </div>
            <h4 className="text-xl text-gray-900 mb-3">
              Our Values
            </h4>
            <p className="text-gray-600">
              Integrity, excellence, innovation, and a deep
              commitment to the educational success of every
              student we serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}