import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-[#1E3A8A] bg-gradient-to-r from-blue-900 to-blue-800 min-h-[50vh] py-20 px-4 sm:px-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
            Restore Your Ad Tracking After Consent Mode V2
          </h1>
          <p className="text-lg sm:text-xl text-white mb-8 text-balance">
            Get back conversion modeling, remarketing, and BigQuery data ownership in 14 days—without breaking UK/EEA
            compliance
          </p>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 text-lg mb-4"
          >
             onClick={() => window.location.href = "mailto:suryanshshukla900@gmail.com}
            >
            Get Free 5-Point Audit
          </Button>
          <p className="text-sm text-gray-200">Trusted by UK ecommerce & SaaS companies</p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="w-full bg-white py-16 px-4 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-12 text-center">
            Is Your Analytics Costing You Revenue?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Lost remarketing audiences after March 2024 deadline",
              "Conversion tracking broken in Google Ads",
              "No access to raw GA4 data",
            ].map((problem, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="text-5xl mb-4">❌</div>
                <p className="text-lg text-gray-700">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="w-full bg-blue-50 py-16 px-4 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-12 text-center">What We Fix in 14 Days</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Consent Mode v2 configured with your CMP",
              "Server-side tagging ready for speed + control",
              "BigQuery export enabled—you own the data",
            ].map((solution, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="text-5xl mb-4">✅</div>
                <p className="text-lg text-gray-700">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full bg-gray-50 py-16 px-4 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-12 text-center">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kickstart Setup Card */}
            <Card className="p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-black mb-2">Kickstart Setup</h3>
              <p className="text-3xl font-bold text-orange-500 mb-6">£1,500</p>
              <p className="text-sm text-gray-600 mb-6">one-time</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">Consent Mode v2 configured</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">GA4 events validated</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">BigQuery export enabled</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">Before/after proof</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">Delivered in 14 days</span>
                </li>
              </ul>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-6">
                Book Setup Call
              </Button>
            </Card>

            {/* Monthly Ops Card */}
            <Card className="p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-black mb-2">Monthly Ops</h3>
              <p className="text-3xl font-bold text-teal-600 mb-6">£950</p>
              <p className="text-sm text-gray-600 mb-6">/month</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">Health checks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">2 change requests/month</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">Consent diagnostics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">Monthly compliance report</span>
                </li>
              </ul>
              <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-6">
                Start Retainer
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-blue-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center space-y-2">
          <p className="text-sm">Ready to fix your tracking?</p>
          <p className="text-sm">
            Email:{" "}
            <a href="mailto:suryanshshukla900@gmail.com" className="hover:text-orange-400 transition-colors">
              suryanshshukla900@gmail.com        
              Get Free 5-point audit
            </a>
          </p>
          <p className="text-sm">Serving UK/EEA compliance needs</p>
          <p className="text-xs text-gray-400 mt-4">© 2025</p>
        </div>
      </footer>
    </main>
  )
}
