import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = ({}: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:louis.lallier@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}(${formData.email})`;
  };
  return (
    <div
      className={
        "h-screen flex w-[380px] md:w-[600px] relative flex-col text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-center"
      }
    >
      <h3
        className={
          "absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"
        }
      >
        Contact
      </h3>

      <div className={"flex flex-col space-y-10 pt-5"}>
        <h4 className={"text-2xl md:text-4xl w-full font-semibold text-center"}>
          Want to contact me ?{" "}
          <span className={"underline decoration-[#F7AB0A]/50"}>
            Let's talk.
          </span>
        </h4>
        <div className={"space-y-5"}>
          <div className={"flex items-center space-x-5 justify-center"}>
            <PhoneIcon className={"text-[#F7AB0A] h-7 w-7 animate-pulse"} />
            <p className={"text-xl"}>+33 6 59 79 38 00</p>
          </div>{" "}
          <div className={"flex items-center space-x-5 justify-center"}>
            <EnvelopeIcon className={"text-[#F7AB0A] h-7 w-7 animate-pulse"} />
            <p className={"text-xl"}>louis.lallier@gmail.com</p>
          </div>
          <div className={"flex items-center space-x-5 justify-center"}>
            <MapPinIcon className={"text-[#F7AB0A] h-7 w-7 animate-pulse"} />
            <p className={"text-xl"}>Versailles Center</p>
          </div>
        </div>
        {/*form*/}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={"w-[380px] flex flex-col space-y-2 w-fit mx-auto"}
        >
          <div className={"flex flex-col space-y-2 md:space-x-2"}>
            <input
              {...register("name")}
              placeholder={"Name"}
              className={"contactInput"}
              type="text"
            />
            <input
              {...register("email")}
              placeholder={"Email"}
              className={"contactInput"}
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder={"Subject"}
            className={"contactInput"}
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder={"Message"}
            className={"contactInput"}
          />
          <button
            className={
              "bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold"
            }
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
