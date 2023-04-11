import { useForm } from "react-hook-form";
import { DevTool }  from "@hookform/devtools";

type FormValues = {
  username: string;
  email: string;
  channel: string;
};

function YouTubeForm() {
  const form = useForm<FormValues>();
  const { register, control, handleSubmit } = form;
  
  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data);c
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
          
            
          })} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")} />

        <button>Submit</button>
      </form>
      <DevTool control={control} />e />
    </div>
  );
};

export default YouTubeForm;
