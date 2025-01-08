import Spinner from "./ui/Spinner";

export default function loading() {
   return (
      <div className="h-80 aspect-square mx-auto flex items-center justify-center">
         <Spinner />
      </div>
   )
}
