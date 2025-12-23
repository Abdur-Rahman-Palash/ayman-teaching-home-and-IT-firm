export default function Contact() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">যোগাযোগ করুন</h1>
          <p className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto">
            আয়মান টিচিং হোম এন্ড আইটি ফার্মের সাথে যোগাযোগ করুন। আপনার যেকোনো প্রশ্নের উত্তর পেতে আমরা সদা প্রস্তুত।
          </p>
        </div>

        {/* Contact Person Information */}
        <div className="card bg-gradient-to-r from-primary to-secondary text-primary-content shadow-2xl mb-12">
          <div className="card-body text-center py-12">
            <div className="avatar mb-6">
              <div className="w-24 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H19V9Z" />
                </svg>
              </div>
            </div>
            <h2 className="card-title text-3xl mb-2 justify-center">Md Abdur Rahman Palash</h2>
            <p className="text-xl opacity-90 mb-6">BBA, MERN Stack Developer and Design</p>
            <p className="text-lg opacity-80">আয়মান টিচিং হোম এন্ড আইটি ফার্মের প্রতিষ্ঠাতা এবং প্রধান প্রশিক্ষক</p>
          </div>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Address Section */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="card-body text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-content" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="card-title text-xl mb-4 justify-center">ঠিকানা</h3>
              <p className="text-base-content/70 leading-relaxed">
                আয়মান টিচিং হোম এন্ড আইটি ফার্ম<br />
                ঢাকা, বাংলাদেশ<br />
                <span className="text-sm">অনলাইন এবং অফলাইন ক্লাস উভয় সুবিধা</span>
              </p>
            </div>
          </div>

          {/* Phone Number */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="card-body text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary-content" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="card-title text-xl mb-4 justify-center">ফোন নম্বর</h3>
              <p className="text-2xl font-bold text-secondary mb-2">01786433078</p>
              <p className="text-base-content/70">সকাল ৯টা থেকে রাত ৯টা পর্যন্ত</p>
              <div className="card-actions justify-center mt-4">
                <a href="tel:01786433078" className="btn btn-secondary btn-sm">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  কল করুন
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp Contact */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="card-body text-center">
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-success-content" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
              <h3 className="card-title text-xl mb-4 justify-center">হোয়াটসঅ্যাপ</h3>
              <p className="text-2xl font-bold text-success mb-2">01786433078</p>
              <p className="text-base-content/70">দ্রুত যোগাযোগের জন্য</p>
              <div className="card-actions justify-center mt-4">
                <a
                  href="https://wa.me/8801786433078"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success btn-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  হোয়াটসঅ্যাপ করুন
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Facebook Page Link */}
        <div className="card bg-base-100 shadow-xl mb-12">
          <div className="card-body">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="card-title text-2xl">ফেসবুক পেজ</h3>
                  <p className="text-base-content/70">আমাদের ফেসবুক পেজে ভিজিট করুন এবং লাইক দিন</p>
                </div>
              </div>
              <div className="card-actions">
                <a
                  href="https://facebook.com/aymanteachinghome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  ফেসবুক পেজ দেখুন
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="text-center">
          <div className="card bg-gradient-to-r from-accent to-accent-focus text-accent-content shadow-2xl">
            <div className="card-body py-12">
              <h3 className="card-title text-3xl md:text-4xl mb-4 justify-center">
                আপনার যেকোনো প্রশ্নের উত্তর
              </h3>
              <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto">
                কোর্স সম্পর্কে বিস্তারিত তথ্য, ভর্তি প্রক্রিয়া, বা যেকোনো অন্যান্য বিষয়ে জানতে
                উপরের যোগাযোগের মাধ্যমে আমাদের সাথে যোগাযোগ করুন। আমরা সর্বদা আপনার সেবায় প্রস্তুত।
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4 bg-white/10 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">📚 কোর্স তথ্য</h4>
                  <p className="text-sm">সকল কোর্সের বিস্তারিত তথ্য</p>
                </div>
                <div className="p-4 bg-white/10 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">💰 মূল্য তথ্য</h4>
                  <p className="text-sm">ফি এবং পেমেন্ট বিস্তারিত</p>
                </div>
                <div className="p-4 bg-white/10 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">📞 সাপোর্ট</h4>
                  <p className="text-sm">২৪/৭ প্রযুক্তিগত সহায়তা</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}