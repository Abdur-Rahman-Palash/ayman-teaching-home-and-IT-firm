import './globals.css'
import Navigation from '../components/Navigation'

export const metadata = {
  title: 'আয়মান টিচিং হোম এন্ড আইটি ফার্ম - শিক্ষা এবং প্রযুক্তি প্রশিক্ষণ',
  description: 'আয়মান টিচিং হোম এন্ড আইটি ফার্ম - তৃতীয় থেকে দ্বাদশ শ্রেণি পর্যন্ত মানসম্পন্ন শিক্ষা এবং আইটি প্রশিক্ষণ। MERN Stack, WordPress, Graphics Design, এবং আরও অনেক কিছু।',
  keywords: 'আয়মান টিচিং, আইটি ফার্ম, শিক্ষা, প্রশিক্ষণ, MERN Stack, WordPress, Graphics Design, বাংলাদেশ',
  authors: [{ name: 'Md Abdur Rahman Palash' }],
  creator: 'Md Abdur Rahman Palash',
  publisher: 'Ayman Teaching Home & IT Firm',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ayman-teaching-home-and-it-firm.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'আয়মান টিচিং হোম এন্ড আইটি ফার্ম',
    description: 'মানসম্পন্ন শিক্ষা এবং আইটি প্রশিক্ষণের আধুনিক প্ল্যাটফর্ম',
    url: 'https://ayman-teaching-home-and-it-firm.vercel.app',
    siteName: 'Ayman Teaching Home & IT Firm',
    locale: 'bn_BD',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'আয়মান টিচিং হোম এন্ড আইটি ফার্ম',
    description: 'মানসম্পন্ন শিক্ষা এবং আইটি প্রশিক্ষণের আধুনিক প্ল্যাটফর্ম',
    creator: '@ayman_teaching',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="bn" dir="ltr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#1f2937" />
        <meta name="msapplication-TileColor" content="#1f2937" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="bg-base-100 text-base-content min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>

        {/* Professional Footer */}
        <footer className="bg-neutral text-neutral-content">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Institution Info */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">আয়মান টিচিং হোম</h3>
                <p className="text-sm leading-relaxed opacity-80">
                  শিক্ষা এবং প্রযুক্তি শিখনের আধুনিক প্ল্যাটফর্ম। আমরা প্রদান করি মানসম্পন্ন শিক্ষা
                  এবং আইটি প্রশিক্ষণ যা আপনার ভবিষ্যত গড়ে তুলবে।
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com/aymanteachinghome"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/8801786433078"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-300"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </a>
                  <a
                    href="tel:01786433078"
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary-focus transition-colors duration-300"
                    aria-label="Phone"
                  >
                    <svg className="w-5 h-5 fill-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">দ্রুত লিঙ্ক</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/" className="hover:text-primary transition-colors duration-300">হোম</a></li>
                  <li><a href="/about" className="hover:text-primary transition-colors duration-300">আমাদের সম্পর্কে</a></li>
                  <li><a href="/courses" className="hover:text-primary transition-colors duration-300">কোর্সসমূহ</a></li>
                  <li><a href="/services" className="hover:text-primary transition-colors duration-300">সেবাসমূহ</a></li>
                  <li><a href="/contact" className="hover:text-primary transition-colors duration-300">যোগাযোগ</a></li>
                </ul>
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">আমাদের সেবা</h4>
                <ul className="space-y-2 text-sm">
                  <li className="opacity-80">ওয়েব ডেভেলপমেন্ট</li>
                  <li className="opacity-80">গ্রাফিক্স ডিজাইন</li>
                  <li className="opacity-80">আইটি প্রশিক্ষণ</li>
                  <li className="opacity-80">স্কুল ম্যানেজমেন্ট</li>
                  <li className="opacity-80">ডিজিটাল মার্কেটিং</li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">যোগাযোগ তথ্য</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <svg className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p>দাদুল পশ্চিমপাড়া , আটপুকুরহাট </p>
                      <p className="opacity-70">অনলাইন এবং অফলাইন ক্লাস</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p>01786433078</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>সকাল ৯টা - রাত ৯টা</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="divider my-8"></div>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-sm opacity-80">
                  © ২০২৫ আয়মান টিচিং হোম এন্ড আইটি ফার্ম। সর্বস্বত্ব সংরক্ষিত।
                </p>
              </div>
              <div className="flex space-x-6 text-sm opacity-80">
                <a href="#" className="hover:text-primary transition-colors duration-300">প্রাইভেসি পলিসি</a>
                <a href="#" className="hover:text-primary transition-colors duration-300">টার্মস অফ সার্ভিস</a>
                <a href="#" className="hover:text-primary transition-colors duration-300">রিফান্ড পলিসি</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
