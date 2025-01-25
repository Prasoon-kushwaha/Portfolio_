import { Mail, Calendar, MapPin } from "lucide-react"

interface SidebarProps {
  className?: string
}

export default function Sidebar({ className = "" }: SidebarProps) {
  return (
    <div className={`space-y-14 ${className}`}>
      <div className="flex items-center gap-4">
        <Mail className="w-5 h-5 text-[#ffd700]" />
        <div>
          <p className="text-xs text-gray-400 uppercase">Email</p>
          <p className="text-sm text-gray-300">prasoonkushwaha342@gmail.com</p>
        </div>
      </div>

      {/* <div className="flex items-center gap-4">
        <Phone className="w-5 h-5 text-[#ffd700]" />
        <div>
          <p className="text-xs text-gray-400 uppercase">Phone</p>
          <p className="text-sm text-gray-300">+1</p>
        </div>
      </div> */}

      <div className="flex items-center gap-4">
        <Calendar className="w-5 h-5 text-[#ffd700]" />
        <div>
          <p className="text-xs text-gray-400 uppercase">Birthday</p>
          <p className="text-sm text-gray-300">October 13 2004</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <MapPin className="w-5 h-5 text-[#ffd700]" />
        <div>
          <p className="text-xs text-gray-400 uppercase">Location</p>
          <p className="text-sm text-gray-300">IIIT Una, Himachal Pradesh, India</p>
        </div>
      </div>
    </div>
  )
}

