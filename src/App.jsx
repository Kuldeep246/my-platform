import { ExternalLink } from "lucide-react"

const platforms = [
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/kuldeep-singh-8b4313225/', logo: 'https://cdn-icons-png.flaticon.com/512/174/174857.png' },
  { name: 'Twitter', link: 'https://twitter.com/home', logo: 'https://cdn-icons-png.flaticon.com/512/733/733579.png' },
  { name: 'YCombinator', link: 'https://www.ycombinator.com/topcompanies', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Y_Combinator_logo.svg' },
  { name: 'Wellfound', link: 'https://wellfound.com/jobs', logo: 'https://wellfound.com/images/logo/wellfound-lockup-white.png' },
  { name: 'Naukri', link: 'https://www.naukri.com/mnjuser/profile?id=&altresid', logo: 'https://www.logoshape.com/png/naukri-logo_logoshape.com.png' },
  { name: 'Cuvette', link: 'https://cuvette.tech/app/student/', logo: 'https://media.licdn.com/dms/image/v2/C4E1BAQG72i3tra5ERw/company-background_10000/company-background_10000/0/1632204675186/cuvette_tech_cover?e=1728939600&v=beta&t=FJhv1XnfNgUSuXRQMsdJtGaPwpIeAyD7Y-0Jq74yL0E' },
  { name: 'Unstop', link: 'https://unstop.com', logo: 'https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg' },
  { name: 'Internshala', link: 'https://internshala.com/student/dashboard', logo: 'https://internshala.com/static/images/common/new_internshala_logo.svg' },
  { name: 'LeetCode', link: 'https://leetcode.com/problemset/', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png' },
  { name: 'CodeChef', link: 'https://codeforces.com/profile/kuldeep_88', logo: 'https://upload.wikimedia.org/wikipedia/en/7/7b/Codechef%28new%29_logo.svg' },
  { name: 'Codeforces', link: 'https://www.codechef.com/dashboard', logo: 'https://upload.wikimedia.org/wikipedia/en/3/38/Codeforces%27s_new_logo.png' },
]

export default function PlatformLinks() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-bold text-center mb-8">My Platform Links</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-40 bg-gray-700 flex items-center justify-center p-4">
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="max-h-full max-w-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-center group-hover:text-blue-400 transition-colors duration-300">
                  {platform.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}