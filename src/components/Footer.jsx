const Footer = () => {
  return (
    <footer className="bg-[#1d1d1f] text-[#a1a1a6] text-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">

        {/* Legal / Disclaimer Text */}
        <div className="space-y-2 text-xs leading-relaxed border-b border-[#424245] pb-6">
          <p>
            1. Trade-in values will vary based on the condition, year, and
            configuration of your eligible trade-in device. Not all devices are
            eligible for credit. You must be at least the age of majority to be
            eligible to trade in for credit or for an Apple Gift Card. Trade-in
            value may be applied toward qualifying new device purchase, or added
            to an Apple Gift Card.
          </p>
          <p>
            To access and use all Apple Card features and products available only
            to Apple Card users, you must add Apple Card to Wallet on an iPhone or
            iPad that supports and has the latest version of iOS or iPadOS.
          </p>
          <p>
            Apple Payments Services LLC, a subsidiary of Apple Inc., is a service
            provider of Goldman Sachs Bank USA for Apple Card and Savings
            accounts. Neither Apple Inc. nor Apple Payments Services LLC is a
            bank.
          </p>
          <p>
            Learn more at{" "}
            <a
              href="https://support.apple.com/kb/HT209218"
              className="text-blue-400 hover:underline"
            >
              support.apple.com/kb/HT209218
            </a>
            .
          </p>
        </div>

        {/* ================= MOBILE ACCORDION ================= */}
        <div className="md:hidden border-t border-[#424245]">
          {[
            "Shop and Learn",
            "Apple Wallet",
            "Account",
            "Entertainment",
            "Apple Store",
            "For Business",
            "For Education",
            "For Healthcare",
            "For Government",
            "Apple Values",
            "About Apple",
          ].map(item => (
            <details
              key={item}
              className="border-b border-[#424245] py-3 group"
            >
              <summary className="flex justify-between items-center cursor-pointer text-white text-sm">
                {item}
                <span className="transition-transform group-open:rotate-180">
                  ⌄
                </span>
              </summary>
            </details>
          ))}
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden md:grid grid-cols-5 gap-8 py-10">

          {/* Column 1 */}
          <div>
            <h4 className="text-white mb-3">Shop and Learn</h4>
            <ul className="space-y-2">
              {["Store","Mac","iPad","iPhone","Watch","Vision","AirPods","TV & Home","Accessories","Gift Cards"].map(i=>(
                <li key={i} className="hover:underline cursor-pointer">{i}</li>
              ))}
            </ul>

            <h4 className="text-white mt-6 mb-3">Apple Wallet</h4>
            <ul className="space-y-2">
              {["Wallet","Apple Card","Apple Pay","Apple Cash"].map(i=>(
                <li key={i} className="hover:underline cursor-pointer">{i}</li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white mb-3">Account</h4>
            <ul className="space-y-2">
              {["Manage Your Apple Account","Apple Store Account","iCloud.com"].map(i=>(
                <li key={i} className="hover:underline cursor-pointer">{i}</li>
              ))}
            </ul>

            <h4 className="text-white mt-6 mb-3">Entertainment</h4>
            <ul className="space-y-2">
              {["Apple One","Apple TV+","Apple Music","Apple Arcade","Apple Fitness+","Apple News+","Apple Podcasts","Apple Books","App Store"].map(i=>(
                <li key={i} className="hover:underline cursor-pointer">{i}</li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white mb-3">Apple Store</h4>
            <ul className="space-y-2">
              {["Find a Store","Genius Bar","Today at Apple","Apple Camp","Apple Store App","Certified Refurbished","Apple Trade In","Financing","Order Status","Shopping Help"].map(i=>(
                <li key={i} className="hover:underline cursor-pointer">{i}</li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-white mb-3">For Business</h4>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">Apple and Business</li>
              <li className="hover:underline cursor-pointer">Shop for Business</li>
            </ul>

            <h4 className="text-white mt-6 mb-3">For Education</h4>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">Apple and Education</li>
              <li className="hover:underline cursor-pointer">Shop for K-12</li>
              <li className="hover:underline cursor-pointer">Shop for College</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h4 className="text-white mb-3">Apple Values</h4>
            <ul className="space-y-2">
              {["Accessibility","Education","Environment","Inclusion and Diversity","Privacy","Racial Equity and Justice"].map(i=>(
                <li key={i} className="hover:underline cursor-pointer">{i}</li>
              ))}
            </ul>

            <h4 className="text-white mt-6 mb-3">About Apple</h4>
            <ul className="space-y-2">
              {["Newsroom","Apple Leadership","Careers","Investors","Ethics & Compliance","Events","Contact Apple"].map(i=>(
                <li key={i} className="hover:underline cursor-pointer">{i}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#424245] pt-6 text-xs space-y-4">
          <p>
            More ways to shop:{" "}
            <span className="text-blue-400 hover:underline cursor-pointer">
              Find an Apple Store
            </span>{" "}
            or{" "}
            <span className="text-blue-400 hover:underline cursor-pointer">
              other retailer
            </span>{" "}
            near you. Or call 1-800-MY-APPLE.
          </p>

          <div className="flex flex-col md:flex-row md:items-center">
            <span>Copyright © 2025 Apple Inc. All rights reserved.</span>

            <div className="flex flex-wrap gap-3 md:gap-4 md:mx-auto mt-2 md:mt-0">
              {["Privacy Policy","Terms of Use","Sales and Refunds","Legal","Site Map"].map(i=>(
                <span key={i} className="hover:underline cursor-pointer">
                  {i}
                </span>
              ))}
            </div>

            <span className="mt-2 md:mt-0">United States</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
