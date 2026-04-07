import React, { useState } from "react"
import { FormInfo } from "../types"

const ContactPage: React.FC = () => {
  const [result, setResult] = React.useState<String>("")
  const [formData, setFormData] = useState<FormInfo>({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    setFormData({ name: "", email: "", message: "" })
    setResult("Sending....")
    const formData = new FormData(event.target)

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult("Form Submitted Successfully")
      event.target.reset()
    } else {
      console.log("Error", data)
      setResult(data.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center bg-black ">
      <video
        className="fixed w-full h-full object-cover z-0 pointer-events-none "
        src="../../public/assets/videos/Wrng Channel.mov"
        loop
        autoPlay
      ></video>
      <div className=" mx-auto relative px-6">
        <div className="flex justify-center w-full">
          <h1 className="mb-12 bg-purple-800  bg-aura-gradient text-center animate-aurora text-transparent bg-clip-text font-geist tracking-tighter text-8xl font-extrabold pb-2">
            CONTACT US
          </h1>
        </div>

        <div className="space-y-6 text-center text-lg font-victor">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="mb-2 block font-semibold text-white">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={e =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full  bg-black border-b-slate-500 border-b  px-4  text-white  focus:border-violet-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-white">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={e =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full  bg-black border-slate-500 border-b px-4 text-white  focus:border-violet-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-white">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={e =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={6}
                className="w-full resize-none  bg-black border-slate-500 border-b px-4 text-white  focus:border-violet-400 focus:outline-none"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-1/2 bg-purple-800 bg-aura-gradient mt-9 animate-aurora text-transparent  hover:text-black  text-white py-4 font-semibold transition-colors "
              >
                {result ? result.toUpperCase() : `SEND MESSAGE`}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
