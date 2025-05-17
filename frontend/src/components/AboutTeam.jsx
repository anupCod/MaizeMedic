import AnuImg from '../images/Anu.jpg'
import AnupImg from '../images/Anup.jpg'
import PraptiImg from '../images/Prapti.jpg'
import SirImg from '../images/Sir.jpg'
import BinitaImg from '../images/Binita.jpg'

export default function AboutTeam() {
      const teamMembers = [
    {
      id: 1,
      name: "Anu Ale Magar",
      role: "Developer",
      image: AnuImg
    },
    {
      id: 2,
      name: "Anup Bashyal",
      role: "Developer",
      image: AnupImg
    },
    {
      id: 3,
      name: "Binita Hamal",
      role: "Developer",
      image: BinitaImg
    },
    {
      id: 4,
      name: "Prapti Timalsina",
      role: "Developer",
      image:PraptiImg
    },
    {
      id: 5,
      name: "Er. Sitaram Pokhrel",
      role: "Supervisor",
      image: SirImg
    }
  ];
  return (
    <div>   <div className="bg-white container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-12">The Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {teamMembers.slice(0, 3).map((member) => (
          <div key={member.id} className="flex flex-col items-center">
            <div className="w-40 h-40 bg-blue-100 rounded-full overflow-hidden mb-4">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-medium">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0  w-75 mx-auto ">
        {teamMembers.slice(3, 5).map((member) => (
          <div key={member.id} className=" ms-6 flex flex-col items-center">
            <div className="w-40 h-40 bg-blue-100 rounded-full overflow-hidden mb-4">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-medium">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
