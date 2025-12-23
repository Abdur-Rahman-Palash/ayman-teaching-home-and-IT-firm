import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-focus to-secondary opacity-90"></div>

        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/30 rounded-full blur-lg animate-bounce delay-500"></div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              আয়মান টিচিং হোম এন্ড
              <span className="block text-accent">আইটি ফার্ম</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed opacity-90 max-w-3xl mx-auto">
              আপনার শিক্ষাগত স্বপ্ন পূরণের জন্য আধুনিক শিক্ষা এবং প্রযুক্তি সমাধান।
              অনলাইন কোর্স, টিউটোরিং এবং আইটি প্রশিক্ষণের মাধ্যমে আপনার ভবিষ্যৎ গড়ে তুলুন।
            </p>

            {/* Description */}
            <p className="text-base md:text-lg mb-12 opacity-80 max-w-2xl mx-auto">
              অভিজ্ঞ শিক্ষক, আধুনিক কারিকুলাম এবং ব্যক্তিগতকৃত শিক্ষার মাধ্যমে
              আপনার শিক্ষাগত লক্ষ্য অর্জন করুন।
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/courses"
                className="btn btn-accent btn-lg px-8 py-3 text-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-lg"
              >
                এখনই ভর্তি হোন
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              <Link
                href="/contact"
                className="btn btn-outline btn-accent btn-lg px-8 py-3 text-lg font-semibold hover:bg-accent hover:text-accent-content transition-all duration-200 shadow-lg"
              >
                যোগাযোগ করুন
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>

            {/* Stats or additional info */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">৫০০+</div>
                <div className="text-sm opacity-80">সন্তুষ্ট শিক্ষার্থী</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">২০+</div>
                <div className="text-sm opacity-80">অনলাইন কোর্স</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">১৫+</div>
                <div className="text-sm opacity-80">অভিজ্ঞ শিক্ষক</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">৯৯%</div>
                <div className="text-sm opacity-80">সাফল্যের হার</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-base-200">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">কেন আমাদেরকে বেছে নেবেন?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-primary-content" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="card-title">অভিজ্ঞ শিক্ষক</h3>
                <p>বছরের পর বছরের শিক্ষকতা অভিজ্ঞতাসম্পন্ন শিক্ষকদের কাছ থেকে শিখুন।</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-secondary-content" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="card-title">অনলাইন লার্নিং</h3>
                <p>যেকোনো সময়, যেকোনো জায়গা থেকে অ্যাক্সেসযোগ্য ফ্লেক্সিবল অনলাইন কোর্স।</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-accent-content" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="card-title">আধুনিক কারিকুলাম</h3>
                <p>শিল্পের মান অনুসারে ডিজাইন করা আপ-টু-ডেট কারিকুলাম।</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ayman Teaching Home Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-base-100 to-base-200">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              আয়মান টিচিং হোম
            </h2>
            <p className="text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto">
              শিক্ষার্থীদের ভবিষ্যত গড়ে তুলতে আমাদের বিশেষায়িত শিক্ষা সেবাসমূহ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Feature Card 1 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-primary">
              <div className="card-body">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="card-title text-xl mb-3">ব্যক্তিগতকৃত শিক্ষা</h3>
                <p className="text-base-content/70 mb-4">
                  প্রত্যেক শিক্ষার্থীর শিক্ষাগত চাহিদা অনুসারে ব্যক্তিগতকৃত শিক্ষা পরিকল্পনা
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-success mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    শিক্ষার্থী-কেন্দ্রিক পদ্ধতি
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-success mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    ধাপে ধাপে অগ্রগতি
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-success mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    নিয়মিত মূল্যায়ন
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-secondary">
              <div className="card-body">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="card-title text-xl mb-3">ছোট গ্রুপ ক্লাস</h3>
                <p className="text-base-content/70 mb-4">
                  সীমিত সংখ্যক শিক্ষার্থী নিয়ে গঠিত ক্লাসে ব্যক্তিগত মনোযোগ নিশ্চিত
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-success mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    সর্বোচ্চ ১০ জন শিক্ষার্থী
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-success mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    ইন্টারেকটিভ আলোচনা
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-success mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    সহযোগিতামূলক শিক্ষা
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-accent">
              <div className="card-body">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="card-title text-xl mb-3">পরীক্ষা প্রস্তুতি</h3>
                <p className="text-base-content/70 mb-4">
                  বিভিন্ন পরীক্ষার জন্য বিশেষায়িত প্রস্তুতি এবং মডেল টেস্ট
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-success mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    SSC/HSC প্রস্তুতি
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-success mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    ভর্তি পরীক্ষা কোচিং
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-success mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    মডেল টেস্ট সিরিজ
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature Card 4 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-info">
              <div className="card-body">
                <div className="w-14 h-14 bg-info/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="card-title text-xl mb-3">সাশ্রয়ী মূল্য</h3>
                <p className="text-base-content/70 mb-4">
                  মানসম্পন্ন শিক্ষার জন্য সাশ্রয়ী মূল্য নির্ধারণ এবং কিস্তি সুবিধা
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-success mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    স্বচ্ছ মূল্য নির্ধারণ
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-success mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    কিস্তিতে পরিশোধ
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-success mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    বিশেষ ছাড় সুবিধা
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature Card 5 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-warning">
              <div className="card-body">
                <div className="w-14 h-14 bg-warning/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="card-title text-xl mb-3">আধুনিক প্রযুক্তি</h3>
                <p className="text-base-content/70 mb-4">
                  ডিজিটাল লার্নিং টুলস এবং ইন্টারেকটিভ পদ্ধতি ব্যবহার করে শিক্ষা প্রদান
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-success mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    ডিজিটাল হোয়াইটবোর্ড
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-success mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    ভিডিও লেকচার
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-success mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    অনলাইন রিসোর্স
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature Card 6 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-success">
              <div className="card-body">
                <div className="w-14 h-14 bg-success/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="card-title text-xl mb-3">বিশ্বস্ত এবং নিরাপদ</h3>
                <p className="text-base-content/70 mb-4">
                  শিক্ষার্থীদের নিরাপত্তা এবং সুরক্ষার জন্য বিশেষ ব্যবস্থা
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-success mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    নিরাপদ পরিবেশ
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-success mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    পিতা-মাতার আস্থা
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-success mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    গুণগত শিক্ষা
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="card bg-gradient-to-r from-primary to-secondary text-primary-content shadow-2xl max-w-4xl mx-auto">
              <div className="card-body py-12">
                <h3 className="card-title text-3xl md:text-4xl mb-4 justify-center">
                  আপনার সন্তানের ভবিষ্যত আজই গড়ে তুলুন
                </h3>
                <p className="text-lg mb-8 opacity-90">
                  আয়মান টিচিং হোমে ভর্তি হয়ে আপনার সন্তানের শিক্ষাগত সাফল্য নিশ্চিত করুন
                </p>
                <div className="card-actions justify-center">
                  <button className="btn btn-accent btn-lg px-8">
                    এখনই যোগাযোগ করুন
                  </button>
                  <button className="btn btn-outline btn-accent btn-lg px-8">
                    আরও জানুন
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ayman IT Firm Section */}
      <section className="py-20 px-4 bg-base-200">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              আয়মান আইটি ফার্ম
            </h2>
            <p className="text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto">
              আধুনিক প্রযুক্তি এবং উচ্চমানের আইটি সেবা প্রদানের মাধ্যমে আপনার ব্যবসা এবং শিক্ষা প্রতিষ্ঠানকে এগিয়ে নিয়ে যান
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Service Card 1 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-primary">
              <div className="card-body">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="card-title text-xl mb-3">MERN with Next.js</h3>
                <p className="text-sm text-base-content/70 mb-4">
                  (HTML, CSS, Tailwind CSS, DaisyUI, JavaScript, React)
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <span className="font-semibold mr-2">⏳</span>
                    <span>সময়কাল: ৬ মাস</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="font-semibold mr-2">💰</span>
                    <span>ফি: ১০,০০০ টাকা</span>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary btn-sm">বিস্তারিত জানুন</button>
                </div>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-secondary">
              <div className="card-body">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <h3 className="card-title text-xl mb-3">WordPress Theme Customization</h3>
                <p className="text-sm text-base-content/70 mb-4">
                  কাস্টম ওয়ার্ডপ্রেস থিম তৈরি এবং কাস্টমাইজেশন
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <span className="font-semibold mr-2">⏳</span>
                    <span>সময়কাল: ৩ মাস</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="font-semibold mr-2">💰</span>
                    <span>ফি: ২,০০০ টাকা</span>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-secondary btn-sm">বিস্তারিত জানুন</button>
                </div>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-accent">
              <div className="card-body">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h3 className="card-title text-xl mb-3">Facebook ID & Page Monetization</h3>
                <p className="text-sm text-base-content/70 mb-4">
                  ফেসবুক পেজ সেটআপ এবং মনিটাইজেশন সার্ভিস
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <span className="font-semibold mr-2">⏳</span>
                    <span>৯০ দিনের মধ্যে মনিটাইজেশন</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="font-semibold mr-2">💰</span>
                    <span>ফি: ৩,০০০ টাকা</span>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-accent btn-sm">বিস্তারিত জানুন</button>
                </div>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-info">
              <div className="card-body">
                <div className="w-14 h-14 bg-info/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="card-title text-xl mb-3">Graphics Design Training</h3>
                <p className="text-sm text-base-content/70 mb-4">
                  (Photoshop, Illustrator, MS Word, Excel)
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <span className="font-semibold mr-2">⏳</span>
                    <span>সময়কাল: ৩ মাস</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="font-semibold mr-2">💰</span>
                    <span>ফি: ৩,০০০ টাকা</span>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-info btn-sm">বিস্তারিত জানুন</button>
                </div>
              </div>
            </div>

            {/* Service Card 5 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-warning">
              <div className="card-body">
                <div className="w-14 h-14 bg-warning/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="card-title text-xl mb-3">YouTube Channel Setup & SEO</h3>
                <p className="text-sm text-base-content/70 mb-4">
                  ইউটিউব চ্যানেল সেটআপ এবং এসইও অপটিমাইজেশন
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <span className="font-semibold mr-2">⏳</span>
                    <span>সময়কাল: ২ মাস</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="font-semibold mr-2">💰</span>
                    <span>ফি: ২,০০০ টাকা</span>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-warning btn-sm">বিস্তারিত জানুন</button>
                </div>
              </div>
            </div>

            {/* Service Card 6 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-success">
              <div className="card-body">
                <div className="w-14 h-14 bg-success/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="card-title text-xl mb-3">School Management System</h3>
                <p className="text-sm text-base-content/70 mb-4">
                  (যেকোনো শিক্ষা প্রতিষ্ঠানের জন্য)
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <span className="font-semibold mr-2">💰</span>
                    <span>মূল্য: ২৫,০০০ টাকা</span>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-success btn-sm">বিস্তারিত জানুন</button>
                </div>
              </div>
            </div>

            {/* Service Card 7 - Full Width */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-error md:col-span-2 lg:col-span-3">
              <div className="card-body">
                <div className="w-14 h-14 bg-error/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="card-title text-xl mb-3">Networking & Security Services</h3>
                <p className="text-base-content/70 mb-4">
                  সকল ধরনের নেটওয়ার্কিং, সিকিউরিটি এবং সিসি ক্যামেরা সার্ভিস প্রদান করা হয়।
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="text-center p-3 bg-base-200 rounded-lg">
                    <h4 className="font-semibold text-sm mb-1">নেটওয়ার্কিং</h4>
                    <p className="text-xs text-base-content/70">ওয়াইফাই, ল্যান, রাউটার সেটআপ</p>
                  </div>
                  <div className="text-center p-3 bg-base-200 rounded-lg">
                    <h4 className="font-semibold text-sm mb-1">সিকিউরিটি</h4>
                    <p className="text-xs text-base-content/70">অ্যান্টিভাইরাস, ফায়ারওয়াল</p>
                  </div>
                  <div className="text-center p-3 bg-base-200 rounded-lg">
                    <h4 className="font-semibold text-sm mb-1">সিসি ক্যামেরা</h4>
                    <p className="text-xs text-base-content/70">ইনস্টলেশন এবং মনিটরিং</p>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-error btn-sm">যোগাযোগ করুন</button>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="card bg-gradient-to-r from-primary to-secondary text-primary-content shadow-2xl max-w-4xl mx-auto">
              <div className="card-body py-12">
                <h3 className="card-title text-3xl md:text-4xl mb-4 justify-center">
                  আপনার আইটি সমাধান এখনই পান
                </h3>
                <p className="text-lg mb-8 opacity-90">
                  আয়মান আইটি ফার্মের সাথে যোগাযোগ করে আপনার ব্যবসা বা শিক্ষা প্রতিষ্ঠানের
                  প্রযুক্তিগত চাহিদা পূরণ করুন
                </p>
                <div className="card-actions justify-center">
                  <button className="btn btn-accent btn-lg px-8">
                    এখনই যোগাযোগ করুন
                  </button>
                  <button className="btn btn-outline btn-accent btn-lg px-8">
                    সকল সার্ভিস দেখুন
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
