import { useForm } from "react-hook-form";
import { DevTool }  from "@hookform/devtools";

type FormValues = {
  username: string;
  email: string;
  channel: string;
  social: {
    twitter: string;
    facebook: string;
  };
  phoneNumbers: string[];
};

function YouTubeForm() {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "Anashe",
      email: "",
      channel: "",
      social: {
        twitter: "",
        facebook: "",
      },
      phoneNumbers: ["",""],
    },
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  
  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data);
  }; 
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        
        <div className="form-control">
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          id="username" 
          {...register("username", {
            required: "Username is required", 
          })} 
        />
        <p className="error">{errors.username?.message}</p>
        </div>

        <div className="form-control">
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
            validate: {
              notAdmin: (fieldValue) => {
              return (
                fieldValue !== "xavi@vixeer.mavhezha" ||
                "Enter a different email address"
                );
            },
            notBlackListed: (fieldValue) => {
              return (
                !fieldValue.endsWith("matsimba.com") || 
                "This domain is not supported"
              );
            },
            }
          })} 
         />
         <p className="error">{errors.email?.message}</p>
         </div>
     
        <div className="form-control">
        <label htmlFor="channel">Channel</label>
        <input 
          type="text" 
          id="channel" 
          {...register("channel", {
            required: "Channel is required", 
          })} 
         />
         <p className="error">{errors.channel?.message}</p>
         </div>
         
         <div className="form-control">
         <label htmlFor="channel">Twitter</label>
         <input 
           type="text" 
           id="twitter" 
           {...register("social.twitter")} 
          />
          </div>
          
          <div className="form-control">
         <label htmlFor="channel">Facebook</label>
         <input 
           type="text" 
           id="facebook" 
           {...register("social.facebook")} 
          />
          </div>
          
          <div className="form-control">
         <label htmlFor="primary-phone">Primary phone number</label>
         <input 
           type="text" 
           id="primary-phone" 
           {...register("phoneNumbers.0", {
             required: "Phone is required",
           })} 
          />
          </div>
          
          <div className="form-control">
         <label htmlFor="secondary-phone">Secondary phone Number</label>
         <input 
           type="text" 
           id="secondary-phone" 
           {...register("phoneNumbers.1")} 
          />
          </div>
         
         <button>Submit</button>
      </form>
      <DevTool control={control}  />
    </div>
  );
};

export default YouTubeForm;