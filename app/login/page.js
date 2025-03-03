import LoginForm from "../ui/LoginForm";

export default function page() {
   return (
      <main className="flex flex-col gap-4 mx-8">
         <p className="text-center mt-12">Sign in to checkout</p>

         <LoginForm />
      </main>
   )
}
