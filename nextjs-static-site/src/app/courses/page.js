export default function Courses() {
  const itCourses = [
    {
      id: 1,
      title: "MERN with Next.js",
      description: "আধুনিক ওয়েব ডেভেলপমেন্ট শিখুন HTML, CSS, Tailwind CSS, DaisyUI, JavaScript এবং React এর মাধ্যমে",
      duration: "৬ মাস",
      price: "১০,০০০ টাকা",
      category: "Web Development",
      features: ["ফ্রন্টএন্ড ডেভেলপমেন্ট", "ব্যাকএন্ড ডেভেলপমেন্ট", "ডেটাবেস ম্যানেজমেন্ট", "প্রজেক্ট পোর্টফোলিও"]
    },
    {
      id: 2,
      title: "WordPress Theme Customization",
      description: "ওয়ার্ডপ্রেস থিম কাস্টমাইজেশন এবং ডেভেলপমেন্ট শিখুন",
      duration: "৩ মাস",
      price: "২,০০০ টাকা",
      category: "CMS Development",
      features: ["থিম কাস্টমাইজেশন", "প্লাগইন ডেভেলপমেন্ট", "SEO অপটিমাইজেশন", "রেসপন্সিভ ডিজাইন"]
    },
    {
      id: 3,
      title: "Facebook ID & Page Monetization",
      description: "ফেসবুক পেজ সেটআপ এবং মনিটাইজেশন কৌশল শিখুন",
      duration: "৯০ দিন",
      price: "৩,০০০ টাকা",
      category: "Digital Marketing",
      features: ["পেজ অপটিমাইজেশন", "কনটেন্ট স্ট্র্যাটেজি", "মনিটাইজেশন টেকনিক", "অ্যানালিটিক্স ট্র্যাকিং"]
    },
    {
      id: 4,
      title: "Graphics Design Training",
      description: "Photoshop, Illustrator, MS Word এবং Excel এর পূর্ণাঙ্গ প্রশিক্ষণ",
      duration: "৩ মাস",
      price: "৩,০০০ টাকা",
      category: "Design",
      features: ["গ্রাফিক ডিজাইন", "ফটোশপ মাস্টারি", "ইলাস্ট্রেটর", "অফিস অ্যাপ্লিকেশন"]
    },
    {
      id: 5,
      title: "YouTube Channel Setup & SEO",
      description: "ইউটিউব চ্যানেল সেটআপ এবং SEO অপটিমাইজেশন শিখুন",
      duration: "২ মাস",
      price: "২,০০০ টাকা",
      category: "Content Creation",
      features: ["চ্যানেল সেটআপ", "ভিডিও প্রোডাকশন", "SEO অপটিমাইজেশন", "মনিটাইজেশন"]
    }
  ]

  const academicCourses = [
    {
      id: 6,
      title: "SSC/HSC প্রস্তুতি কোর্স",
      description: "মাধ্যমিক এবং উচ্চ মাধ্যমিক পরীক্ষার জন্য বিশেষ প্রস্তুতি",
      duration: "৬ মাস",
      price: "৫,০০০ টাকা",
      category: "Academic",
      features: ["সম্পূর্ণ সিলেবাস কভার", "মডেল টেস্ট", "প্রাইভেট টিউশন", "পরীক্ষা প্রস্তুতি"]
    },
    {
      id: 7,
      title: "ভর্তি পরীক্ষা কোচিং",
      description: "মেডিকেল, ইঞ্জিনিয়ারিং এবং বিশ্ববিদ্যালয় ভর্তি পরীক্ষার প্রস্তুতি",
      duration: "৪ মাস",
      price: "৮,০০০ টাকা",
      category: "Academic",
      features: ["ভর্তি পরীক্ষা ফোকাস", "মডেল টেস্ট সিরিজ", "স্টাডি ম্যাটেরিয়াল", "ক্যারিয়ার কাউন্সেলিং"]
    },
    {
      id: 8,
      title: "ইংরেজি ভাষা প্রশিক্ষণ",
      description: "স্পোকেন ইংলিশ এবং একাডেমিক ইংলিশ শিখুন",
      duration: "৩ মাস",
      price: "৩,৫০০ টাকা",
      category: "Language",
      features: ["স্পোকেন ইংলিশ", "গ্রামার", "রাইটিং স্কিল", "কমিউনিকেশন"]
    },
    {
      id: 9,
      title: "গণিত বিশেষ কোর্স",
      description: "সকল ক্লাসের গণিত বিষয়ে বিশেষায়িত প্রশিক্ষণ",
      duration: "৬ মাস",
      price: "৪,৫০০ টাকা",
      category: "Academic",
      features: ["বেসিক গণিত", "অ্যাডভান্স গণিত", "প্রবলেম সলভিং", "কম্পিটিটিভ এক্সাম"]
    }
  ]

  const CourseCard = ({ course }) => (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
      <div className="card-body">
        <div className="flex justify-between items-start mb-4">
          <h3 className="card-title text-lg">{course.title}</h3>
          <div className="badge badge-primary">{course.category}</div>
        </div>

        <p className="text-sm text-base-content/70 mb-4">{course.description}</p>

        <div className="flex justify-between items-center mb-4">
          <div className="text-sm">
            <span className="font-semibold">⏳ সময়কাল:</span> {course.duration}
          </div>
          <div className="text-lg font-bold text-primary">{course.price}</div>
        </div>

        <ul className="text-sm space-y-1 mb-6">
          {course.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-4 h-4 text-success mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-sm">ভর্তি হোন</button>
          <button className="btn btn-outline btn-primary btn-sm">বিস্তারিত</button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">আমাদের কোর্সসমূহ</h1>
          <p className="text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto">
            আয়মান টিচিং হোম এন্ড আইটি ফার্মের সকল প্রশিক্ষণ প্রোগ্রাম এবং কোর্স
          </p>
        </div>

        {/* IT Training Programs */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">আইটি প্রশিক্ষণ প্রোগ্রাম</h2>
            <p className="text-base-content/70">আধুনিক প্রযুক্তি এবং ডিজিটাল স্কিল ডেভেলপমেন্ট</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {itCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* Academic Courses */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-secondary mb-4">একাডেমিক কোর্স</h2>
            <p className="text-base-content/70">শিক্ষাগত উৎকর্ষতা এবং পরীক্ষা প্রস্তুতির জন্য</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {academicCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* School Management System */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-accent mb-4">স্কুল ম্যানেজমেন্ট সিস্টেম</h2>
            <p className="text-base-content/70">শিক্ষা প্রতিষ্ঠানের জন্য কমপ্লিট ম্যানেজমেন্ট সলিউশন</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            <div className="card bg-gradient-to-r from-accent to-accent-focus text-accent-content shadow-2xl">
              <div className="card-body">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="card-title text-2xl">School Management System</h3>
                  <div className="badge badge-secondary">Enterprise Solution</div>
                </div>

                <p className="text-lg mb-6">
                  যেকোনো শিক্ষা প্রতিষ্ঠানের জন্য সম্পূর্ণ ডিজিটাল ম্যানেজমেন্ট সিস্টেম।
                  স্টুডেন্ট ম্যানেজমেন্ট, টিচার ম্যানেজমেন্ট, একাডেমিক রেকর্ডস এবং রিপোর্টিং সিস্টেম।
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">স্টুডেন্ট ম্যানেজমেন্ট</h4>
                    <p className="text-sm">ভর্তি, ফি, রেজাল্ট ট্র্যাকিং</p>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">টিচার ম্যানেজমেন্ট</h4>
                    <p className="text-sm">অ্যাটেনডেন্স, স্যালারি, পারফরমেন্স</p>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">রিপোর্টিং</h4>
                    <p className="text-sm">অটোমেটিক রিপোর্ট জেনারেশন</p>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="text-xl">
                    <span className="font-bold">💰 মূল্য:</span> ২৫,০০০ টাকা
                  </div>
                  <div className="text-sm opacity-80">
                    কাস্টমাইজেশন অন্তর্ভুক্ত
                  </div>
                </div>

                <div className="card-actions justify-end">
                  <button className="btn btn-secondary btn-lg">ডেমো দেখুন</button>
                  <button className="btn btn-outline btn-secondary btn-lg">যোগাযোগ করুন</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <div className="card bg-gradient-to-r from-primary to-secondary text-primary-content shadow-2xl max-w-4xl mx-auto">
            <div className="card-body py-12">
              <h3 className="card-title text-3xl md:text-4xl mb-4 justify-center">
                আপনার ক্যারিয়ার শুরু করুন
              </h3>
              <p className="text-lg mb-8 opacity-90">
                আয়মান টিচিং হোম এন্ড আইটি ফার্মের সাথে আপনার ভবিষ্যত গড়ে তুলুন।
                সেরা প্রশিক্ষণ এবং ক্যারিয়ার গাইডেন্স পান।
              </p>
              <div className="card-actions justify-center">
                <button className="btn btn-accent btn-lg px-8">
                  এখনই ভর্তি হোন
                </button>
                <button className="btn btn-outline btn-accent btn-lg px-8">
                  কনসাল্টেশন নিন
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}