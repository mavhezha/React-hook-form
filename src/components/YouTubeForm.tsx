import { useForm } from "react-hook-form";
import { DevTool }  from "@hookform/devtools";

type FormValues = {
  username: string;
  email: string;
  channel: string;
};

function YouTubeForm() {
  const form = useForm<FormValues>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  
  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data);
  }; 
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          id="username" 
          {...register("username", {
            required: "Username is required", 
          })} 
        />
        <p className="error">{errors.username?.message}</p>

        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Please enter a valid email',
            },
          })} 
         />
         <p className="error">{errors.email?.message}</p>

        <label htmlFor="channel">Channel</label>
        <input 
          type="text" 
          id="channel" 
          {...register("channel", {
            required: "Channel is required", 
          })} 
         />
         <p className="error">{errors.channel?.message}</p>

        <button>Submit</button>
      </form>
      <DevTool control={control} />e />
    </div>
  );
};

export default YouTubeForm;