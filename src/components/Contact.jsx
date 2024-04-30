import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from "@emailjs/browser";
import { useRef } from 'react';

const Contact = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();

      const form = useRef();

      const sendEmail = (data) => {

        emailjs.sendForm("service_ehblhda", "template_j3by6c8", form.current, "pcOd4R8xaQMKcWZFu", data)
        .then(() => {
            console.log("SUCCESS!");
            formSuccess();
        })
        .catch((err) => {
            console.log("FAILED...", err.textarea)
        });
      };

      const formSuccess = () => {
        toast("Thanks for submitting your Query!");
        document.getElementById("queryForm").reset()
      };

  return (
    <div id="contact">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 ">
            <h2 className="font-bold uppercase text-slate-200 tracking-widest">Let's Connect</h2>
        </div>
        <ToastContainer />
        <form ref={form} id='queryForm' className="w-full flex justify-between flex-wrap gap-4" onSubmit={handleSubmit(sendEmail)}>
            <div className="w-[calc(50%-16px)]">
                <input type="text" name="from_name" placeholder="Full Name" className="w-full p-2 bg-transparent border border-1 border-slate-500/40 rounded"
                {...register("from_name", {required: "Name is required"})} />
                {errors.from_name?.message && (
                    <p className='text-red-500 text-xs'>{errors.from_name?.message}</p>
                )}
            </div>
            <div className="w-1/2">
                <input type="text" name="reply_to" placeholder="Email" className="w-full p-2 bg-transparent border border-1 border-slate-500/40 rounded"
                {...register("reply_to", {required: "Email is required", pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                },
                })} />
                {errors.reply_to?.message && (
                    <p className='text-red-500 text-xs'>{errors.reply_to?.message}</p>
                )}
            </div>
            <div className="w-full">
                <input type="text" name="subject" placeholder="Subject" className="w-full p-2 bg-transparent border border-1 border-slate-500/40 rounded"
                {...register("subject", {
                    required: "Subject is required",
                    minLength: {
                        value: 10,
                        message: "Minimum 10 characters required",
                    },
                })} />
                {errors.subject?.message && (
                    <p className="text-red-500 text-xs">{errors.subject?.message}</p>
                )}
            </div>
            <div className="w-full">
                <textarea name="message" placeholder="Your message" cols="50" rows="5" className="w-full p-2 bg-transparent border border-1 border-slate-500/40 rounded"
                {...register("message", {
                    required: "Message is required",
                    minLength: {
                        value: 20,
                        message: "Minimum 20 characters required",
                    },
                    maxLength: {
                        value: 500,
                        message: "Maximum 500 characters allowed",
                    },
                })} />
                {errors.message?.message && (
                    <p className="text-red-500 text-xs">{errors.message?.message}</p>
                )}
            </div>
            <button onClick={(e) => e.preventDefault()} type="submit" className="w-full p-2 bg-transparent border border-1 border-slate-500/40 rounded hover:border-teal-300 hover:text-teal-300">Submit</button>
        </form>
    </div>
  )
}

export default Contact