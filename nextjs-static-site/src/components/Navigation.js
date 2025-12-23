'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const navItems = [
    { href: '/', label: 'হোম' },
    { href: '/about', label: 'আমাদের সম্পর্কে' },
    { href: '/services', label: 'সেবাসমূহ' },
    { href: '/courses', label: 'কোর্সসমূহ' },
    { href: '/contact', label: 'যোগাযোগ' }
  ]

  return (
    <nav className="navbar bg-base-100 shadow-lg sticky top-0 z-50 px-4 lg:px-8">
      <div className="navbar-start">
        {/* Mobile menu button */}
        <div className="dropdown lg:hidden">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="btn btn-ghost btn-circle"
            aria-label="Toggle menu"
          >
            <motion.svg
              animate={isOpen ? "open" : "closed"}
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <motion.path
                variants={{
                  closed: { d: "M4 6h16M4 12h16M4 18h16" },
                  open: { d: "M6 18L18 6M6 6l12 12" }
                }}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                transition={{ duration: 0.3 }}
              />
            </motion.svg>
          </motion.button>
        </div>

        {/* Logo */}
        <Link href="/" className="btn btn-ghost text-lg lg:text-xl font-bold text-primary hover:text-primary-focus transition-colors px-2">
          <span className="hidden sm:inline">আয়মান টিচিং হোম</span>
          <span className="sm:hidden">আয়মান টিচিং</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {navItems.map((item, index) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Link
                href={item.href}
                className="px-4 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200 font-medium"
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Contact Info - Desktop */}
      <div className="navbar-end hidden lg:flex items-center space-x-4">
        <div className="hidden xl:block text-right text-sm">
          <p className="font-semibold text-base-content">Md Abdur Rahman Palash</p>
          <p className="text-base-content/70 text-xs">BBA, MERN Stack Developer & Designer</p>
          <p className="text-primary font-medium text-xs">📱 01786433078</p>
        </div>
        <div className="flex items-center space-x-2">
          <a
            href="tel:01786433078"
            className="btn btn-circle btn-ghost btn-sm"
            aria-label="Call"
          >
            📞
          </a>
          <a
            href="https://wa.me/8801786433078"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle btn-ghost btn-sm"
            aria-label="WhatsApp"
          >
            💬
          </a>
          <Link href="/contact" className="btn btn-primary btn-sm">
            যোগাযোগ
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={toggleMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-base-100 shadow-2xl z-50 lg:hidden"
            >
              <div className="p-6">
                {/* Mobile Header */}
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-lg font-bold text-primary">মেনু</h3>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleMenu}
                    className="btn btn-ghost btn-sm"
                  >
                    ✕
                  </motion.button>
                </div>

                {/* Mobile Navigation Items */}
                <ul className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={toggleMenu}
                        className="block py-3 px-4 rounded-lg hover:bg-primary hover:text-primary-content transition-colors duration-200 text-lg font-medium"
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="mt-8 p-4 bg-base-200 rounded-lg"
                >
                  <h4 className="font-semibold mb-3 text-primary">যোগাযোগ তথ্য</h4>
                  <p className="text-sm mb-1"><strong>Md Abdur Rahman Palash</strong></p>
                  <p className="text-sm text-base-content/70 mb-2">BBA, MERN Stack Developer & Designer</p>
                  <p className="text-sm text-primary font-medium mb-3">📱 01786433078</p>
                  <div className="flex space-x-2 mb-3">
                    <a
                      href="tel:01786433078"
                      className="btn btn-circle btn-ghost btn-sm flex-1"
                      aria-label="Call"
                    >
                      📞
                    </a>
                    <a
                      href="https://wa.me/8801786433078"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-circle btn-ghost btn-sm flex-1"
                      aria-label="WhatsApp"
                    >
                      💬
                    </a>
                  </div>
                  <Link
                    href="/contact"
                    onClick={toggleMenu}
                    className="btn btn-primary btn-sm w-full"
                  >
                    যোগাযোগ করুন
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}