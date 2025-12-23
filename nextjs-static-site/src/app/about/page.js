export default function About() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">আয়মান টিচিং হোম</h1>
          <p className="text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto">
            শিক্ষার মানসম্পন্ন এবং আধুনিক পদ্ধতিতে তৃতীয় শ্রেণি থেকে দ্বাদশ শ্রেণি পর্যন্ত
            শিক্ষার্থীদের যত্নসহকারে পাঠদানের প্রতিশ্রুতিবদ্ধ প্রতিষ্ঠান।
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Limited Seats */}
          <div className="card bg-gradient-to-br from-primary to-primary-focus text-primary-content shadow-xl">
            <div className="card-body text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="card-title text-xl justify-center mb-4">সীমিত আসন সংখ্যা</h3>
              <p className="text-lg font-bold mb-2">মাত্র ১০ জন</p>
              <p className="opacity-90">
                প্রতিটি বিষয়ে আলাদাভাবে সমাধান ও মনোযোগ দেওয়ার জন্য সীমিত আসন সংখ্যা নির্ধারণ করা হয়েছে।
              </p>
            </div>
          </div>

          {/* Class Range */}
          <div className="card bg-gradient-to-br from-secondary to-secondary-focus text-secondary-content shadow-xl">
            <div className="card-body text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="card-title text-xl justify-center mb-4">শ্রেণি পরিসর</h3>
              <p className="text-lg font-bold mb-2">তৃতীয় থেকে দ্বাদশ</p>
              <p className="opacity-90">
                তৃতীয় শ্রেণি থেকে দ্বাদশ শ্রেণি পর্যন্ত সকল শিক্ষার্থীদের জন্য বিশেষায়িত পাঠদান।
              </p>
            </div>
          </div>

          {/* Special Care for Weak Students */}
          <div className="card bg-gradient-to-br from-accent to-accent-focus text-accent-content shadow-xl">
            <div className="card-body text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="card-title text-xl justify-center mb-4">দুর্বল শিক্ষার্থীদের জন্য</h3>
              <p className="text-lg font-bold mb-2">বিশেষ ব্যবস্থা</p>
              <p className="opacity-90">
                দুর্বল শিক্ষার্থীদের জন্য আলাদা ও বিশেষ পাঠদানের ব্যবস্থা রয়েছে।
              </p>
            </div>
          </div>
        </div>

        {/* Special Focus Subjects */}
        <div className="card bg-base-100 shadow-xl mb-16">
          <div className="card-body">
            <h2 className="card-title text-2xl md:text-3xl justify-center mb-8">বিশেষ গুরুত্বপূর্ণ বিষয়সমূহ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center p-4 bg-primary/10 rounded-lg">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-content font-bold">ইং</span>
                </div>
                <div>
                  <h4 className="font-semibold">ইংরেজি</h4>
                  <p className="text-sm text-base-content/70">ভাষা দক্ষতা বৃদ্ধি</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-secondary/10 rounded-lg">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                  <span className="text-secondary-content font-bold">আই</span>
                </div>
                <div>
                  <h4 className="font-semibold">আইসিটি</h4>
                  <p className="text-sm text-base-content/70">প্রযুক্তি শিক্ষা</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-accent/10 rounded-lg">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                  <span className="text-accent-content font-bold">গ</span>
                </div>
                <div>
                  <h4 className="font-semibold">গণিত</h4>
                  <p className="text-sm text-base-content/70">যৌক্তিক চিন্তাধারা</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-info/10 rounded-lg">
                <div className="w-12 h-12 bg-info rounded-full flex items-center justify-center mr-4">
                  <span className="text-info-content font-bold">প</span>
                </div>
                <div>
                  <h4 className="font-semibold">পদার্থবিজ্ঞান</h4>
                  <p className="text-sm text-base-content/70">বিজ্ঞানের ভিত্তি</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-success/10 rounded-lg">
                <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center mr-4">
                  <span className="text-success-content font-bold">র</span>
                </div>
                <div>
                  <h4 className="font-semibold">রসায়ন</h4>
                  <p className="text-sm text-base-content/70">রাসায়নিক বিজ্ঞান</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-warning/10 rounded-lg">
                <div className="w-12 h-12 bg-warning rounded-full flex items-center justify-center mr-4">
                  <span className="text-warning-content font-bold">+</span>
                </div>
                <div>
                  <h4 className="font-semibold">অন্যান্য বিষয়</h4>
                  <p className="text-sm text-base-content/70">সম্পূর্ণ সিলেবাস</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Monitoring and Evaluation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Weekly Evaluation */}
          <div className="card bg-gradient-to-r from-info to-info-focus text-info-content shadow-xl">
            <div className="card-body">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="card-title text-2xl">সাপ্তাহিক মূল্যায়ন</h3>
              </div>
              <p className="text-lg leading-relaxed">
                শিক্ষার্থীদের অগ্রগতি যাচাইয়ের জন্য প্রতি সপ্তাহে মূল্যায়ন পরীক্ষা এবং
                অ্যাসাইনমেন্টের ব্যবস্থা রয়েছে। এর মাধ্যমে শিক্ষার্থীদের দুর্বল দিক চিহ্নিত
                করে বিশেষ নজর দেওয়া হয়।
              </p>
            </div>
          </div>

          {/* Parent Monitoring */}
          <div className="card bg-gradient-to-r from-success to-success-focus text-success-content shadow-xl">
            <div className="card-body">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="card-title text-2xl">অভিভাবক তত্ত্বাবধান</h3>
              </div>
              <p className="text-lg leading-relaxed">
                শিক্ষার্থীদের দৈনিক কার্যক্রম এবং অগ্রগতি অভিভাবকের মাধ্যমে নিয়মিত
                পর্যবেক্ষণ করা হয়। এতে করে অভিভাবকরা তাদের সন্তানের শিক্ষাগত উন্নতি
                সম্পর্কে সর্বদা অবগত থাকেন।
              </p>
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="card bg-gradient-to-r from-primary to-secondary text-primary-content shadow-2xl">
          <div className="card-body text-center py-12">
            <div className="avatar mb-6">
              <div className="w-24 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H19V9Z" />
                </svg>
              </div>
            </div>
            <h2 className="card-title text-3xl mb-4 justify-center">Md Abdur Rahman Palash</h2>
            <p className="text-xl opacity-90 mb-6">BBA, MERN Stack Developer and Design</p>
            <p className="text-lg opacity-80 max-w-4xl mx-auto leading-relaxed">
              আয়মান টিচিং হোমের প্রতিষ্ঠাতা এবং প্রধান শিক্ষক। তিনি বিশ্বাস করেন যে
              প্রতিটি শিক্ষার্থীর জন্য ব্যক্তিগত মনোযোগ এবং যত্নের মাধ্যমে শিক্ষা
              সর্বোচ্চ মানের হয়ে ওঠে। তাই মাত্র ১০ জন শিক্ষার্থী নিয়ে এই প্রতিষ্ঠান
              পরিচালনা করা হয় যাতে প্রত্যেকে পূর্ণ মনোযোগ পায়।
            </p>
            <div className="card-actions justify-center mt-6">
              <button className="btn btn-accent btn-lg">
                যোগাযোগ করুন
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}