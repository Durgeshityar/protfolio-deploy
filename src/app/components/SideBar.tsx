import Arsenal from './Arsenal'
import ContactMe from './ContactMe'
import PersonalSection from './PersonalSection'

const SideBar = () => {
  return (
    <div className=" hidden lg:flex flex-col  justify-center h-screen  border-r shadow w-52 xl:w-72 ">
      <div className=" h-full border-b shadow">
        <PersonalSection />
      </div>
      <div className=" h-full border-b shadow">
        <Arsenal />
      </div>
      <div className=" h-full border-b shadow">
        <ContactMe />
      </div>
    </div>
  )
}

export default SideBar
