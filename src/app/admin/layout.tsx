
import Header from "@/components/Layout/Admin/Header/Header"

export default function AdmindLayout({
   children, // will be a page or nested layout
}: {
   children: React.ReactNode
}) {
   return (
      <section>
         {/* Include shared UI here e.g. a header or sidebar */}
         <Header />
         <div className="flex flex-1 overflow-hidden">
            {/* <Sidebar /> */}
            <main className="flex-1 relative overflow-y-auto focus:outline-none bg-white">
               {/* Main content */}
               <div className="p-4">{children}</div>
            </main>
         </div>
      </section>
   )
}