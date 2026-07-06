"use client";

import { useState } from "react";

import {
  User,
  Mail,
  MessageSquare,
  ArrowUpRight,
  Phone,
  MapPin,
  CheckCircle,
} from "lucide-react";

import { motion } from "framer-motion";







export default function ContactPage(){


  const [form,setForm] = useState({

    name:"",

    email:"",

    message:"",

  });




  const [loading,setLoading] =
    useState(false);



  const [success,setSuccess] =
    useState(false);








  const handleChange = (e)=>{


    setForm({

      ...form,


      [e.target.name]:
        e.target.value,

    });


  };








  const handleSubmit = (e)=>{


    e.preventDefault();



    setLoading(true);




    setTimeout(()=>{


      setLoading(false);


      setSuccess(true);



      setForm({

        name:"",

        email:"",

        message:"",

      });



    },1200);



  };









  return (

    <section
      className="
      section-space

      bg-white
      "
    >



      <div
        className="
        container-main
        "
      >








        {/* HEADER */}



        <motion.div


          initial={{
            opacity:0,
            y:30,
          }}



          animate={{
            opacity:1,
            y:0,
          }}



          className="
          mb-16

          max-w-3xl
          "
        >






          <span
            className="
            mb-6


            inline-flex


            rounded-full



            border
            border-neutral-200


            px-5
            py-2



            text-xs

            font-semibold

            tracking-[0.25em]


            text-[#C9A646]
            "
          >

            CONTACT


          </span>









          <h1
            className="
            text-5xl
            md:text-7xl


            font-semibold


            tracking-[-0.06em]


            text-neutral-950
            "
          >

            Let's Build

            <br />


            <span
              className="
              text-[#C9A646]
              "
            >

              Together.


            </span>



          </h1>









          <p
            className="
            mt-8


            max-w-xl


            leading-8


            text-neutral-500
            "
          >

            Have an idea, opportunity, or collaboration?
            Feel free to reach out and create something meaningful.


          </p>





        </motion.div>














        {/* CONTENT */}



        <div
          className="
          grid

          gap-8

          lg:grid-cols-[0.8fr_1.2fr]
          "
        >







          {/* LEFT INFO */}



          <div
            className="
            space-y-5
            "
          >







            <InfoCard

              icon={<Mail size={20}/>}

              title="Email"

              value="vin.simorangkir81@gmail.com"

            />







            <InfoCard

              icon={<Phone size={20}/>}

              title="Phone"

              value="+62 822-8251-2619"

            />








            <InfoCard

              icon={<MapPin size={20}/>}

              title="Location"

              value="Indonesia"

            />








            <div
              className="
              rounded-[28px]


              border
              border-neutral-200


              p-7
              "
            >



              <p
                className="
                text-sm

                text-neutral-400
                "
              >

                Availability


              </p>





              <div
                className="
                mt-3

                flex

                items-center
                gap-2
                "
              >


                <span
                  className="
                  h-2
                  w-2

                  rounded-full

                  bg-[#C9A646]
                  "
                />



                <span
                  className="
                  font-semibold
                  "
                >

                  Open for Opportunities


                </span>




              </div>



            </div>





          </div>















          {/* FORM */}


          <form

            onSubmit={handleSubmit}


            className="
            rounded-[32px]


            border
            border-neutral-200


            p-8
            md:p-10
            "
          >







            {success && (


              <div
                className="
                mb-6

                flex

                items-center
                gap-2


                rounded-2xl


                bg-green-50


                px-5
                py-4


                text-sm

                text-green-700
                "
              >


                <CheckCircle size={18}/>


                Message sent successfully.



              </div>



            )}











            <Input


              icon={<User size={18}/>}


              name="name"


              placeholder="Your Name"


              value={form.name}


              onChange={handleChange}


            />







            <Input


              icon={<Mail size={18}/>}


              name="email"

              type="email"


              placeholder="Your Email"


              value={form.email}


              onChange={handleChange}


            />











            <div
              className="
              relative

              mb-5
              "
            >


              <span
                className="
                absolute

                left-5
                top-5


                text-neutral-400
                "
              >

                <MessageSquare size={18}/>


              </span>







              <textarea

                name="message"

                rows={6}


                required


                placeholder="Tell me about your idea..."


                value={form.message}


                onChange={handleChange}



                className="
                w-full


                resize-none



                rounded-2xl



                border
                border-neutral-200


                px-14
                py-5


                text-sm



                outline-none



                focus:border-black
                "

              />



            </div>











            <button

              disabled={loading}


              className="
              flex

              w-full


              items-center
              justify-center
              gap-2



              rounded-full


              bg-black


              py-4



              text-sm

              font-semibold


              text-white


              transition



              hover:bg-[#C9A646]


              disabled:opacity-50
              "
            >



              {

                loading

                ?

                "Sending..."

                :

                <>

                Send Message

                <ArrowUpRight size={16}/>

                </>

              }




            </button>





          </form>




        </div>





      </div>


    </section>

  );


}









function Input({
  icon,
  ...props
}){


  return (

    <div
      className="
      relative

      mb-5
      "
    >



      <span
        className="
        absolute

        left-5
        top-1/2


        -translate-y-1/2


        text-neutral-400
        "
      >

        {icon}


      </span>





      <input


        required


        {...props}


        className="
        w-full


        rounded-2xl


        border
        border-neutral-200


        px-14
        py-5


        text-sm


        outline-none



        focus:border-black
        "
      />



    </div>

  );


}








function InfoCard({
  icon,
  title,
  value,
}){


  return (

    <div
      className="
      rounded-[28px]

      border
      border-neutral-200


      p-7
      "
    >



      <div
        className="
        mb-5

        flex

        h-12
        w-12

        items-center
        justify-center


        rounded-full


        bg-black


        text-white
        "
      >

        {icon}


      </div>






      <p
        className="
        text-sm

        text-neutral-400
        "
      >

        {title}


      </p>




      <h3
        className="
        mt-2

        font-semibold
        "
      >

        {value}


      </h3>



    </div>

  );


}