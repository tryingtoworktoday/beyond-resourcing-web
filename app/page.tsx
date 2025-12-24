import React, { useState } from 'react';
import { Heart, Mail, FileText, Eye, Plus, Mic, Camera, Search, User } from 'lucide-react';

export default function BeyondResourcing() {
  const [email, setEmail] = useState('');
  const [currentPage, setCurrentPage] = useState('login'); // 'login' or 'home'
  const [searchQuery, setSearchQuery] = useState('');

  // Login Page
  if (currentPage === 'login') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-sm">
          {/* Icons Row with connecting lines */}
          <div className="flex justify-center items-center mb-12">
            <div className="flex items-center">
              {/* Heart Icon */}
              <div className="relative z-10 w-12 h-12 rounded-full border-2 border-gray-900 bg-white flex items-center justify-center">
                <Heart className="w-5 h-5 text-red-500" />
              </div>
              
              {/* Line 1 */}
              <div className="w-8 h-0.5 bg-gray-900"></div>
              
              {/* Mail Icon */}
              <div className="relative z-10 w-12 h-12 rounded-full border-2 border-gray-900 bg-white flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-500" />
              </div>
              
              {/* Line 2 */}
              <div className="w-8 h-0.5 bg-gray-900"></div>
              
              {/* FileText Icon */}
              <div className="relative z-10 w-12 h-12 rounded-full border-2 border-gray-900 bg-white flex items-center justify-center">
                <FileText className="w-5 h-5 text-green-500" />
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Beyond Resourcing
            </h1>
            <p className="text-gray-500 text-sm">
              Everything you need at your fingertips
            </p>
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Continue with Email Button */}
          <button 
            onClick={() => setCurrentPage('home')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 mb-6"
          >
            <Mail className="w-4 h-4" />
            Continue with Email
          </button>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-gray-50 text-gray-500">Or continue with</span>
            </div>
          </div>

          {/* Google Button */}
          <button className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-2.5 px-4 rounded-lg border border-gray-300 transition-colors flex items-center justify-center gap-2 mb-3">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          {/* Apple Button */}
          <button className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-2.5 px-4 rounded-lg border border-gray-300 transition-colors flex items-center justify-center gap-2 mb-8">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            Continue with Apple
          </button>

          {/* Footer Text */}
          <p className="text-center text-sm text-gray-500">
            <button 
              onClick={() => setCurrentPage('home')}
              className="hover:text-gray-700 underline"
            >
              Continue to demo (no login required)
            </button>
          </p>
        </div>
      </div>
    );
  }

  // Home Page
  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <nav className="border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-gray-900">Beyond Resourcing</h1>
            <span className="text-blue-600 text-sm">A Productive You</span>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <User className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center pt-20 px-4">
        {/* Icons Row with connecting lines */}
        <div className="flex justify-center items-center mb-12">
          <div className="flex items-center">
            {/* Heart Icon */}
            <div className="relative z-10 w-12 h-12 rounded-full border-2 border-gray-900 bg-white flex items-center justify-center">
              <Heart className="w-5 h-5 text-gray-900" />
            </div>
            
            {/* Line 1 */}
            <div className="w-8 h-0.5 bg-gray-900"></div>
            
            {/* Mail Icon */}
            <div className="relative z-10 w-12 h-12 rounded-full border-2 border-gray-900 bg-white flex items-center justify-center">
              <Mail className="w-5 h-5 text-gray-900" />
            </div>
            
            {/* Line 2 */}
            <div className="w-8 h-0.5 bg-gray-900"></div>
            
            {/* FileText Icon */}
            <div className="relative z-10 w-12 h-12 rounded-full border-2 border-gray-900 bg-white flex items-center justify-center">
              <FileText className="w-5 h-5 text-gray-900" />
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Beyond Resourcing
          </h2>
          <p className="text-gray-500 text-sm">
            Everything you need at your fingertips
          </p>
        </div>

        {/* Search Bar with Icons */}
        <div className="w-full max-w-2xl">
          <div className="flex items-center gap-3 px-6 py-3 border-2 border-gray-300 rounded-full bg-white">
            <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
              <Eye className="w-5 h-5 text-blue-600" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
              <Plus className="w-5 h-5 text-red-600" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
              <Mic className="w-5 h-5 text-red-600" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
              <Camera className="w-5 h-5 text-orange-500" />
            </button>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 outline-none text-gray-700"
              placeholder=""
            />
            <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
