import "../globals.css"
import { Toaster } from "sonner"
import Navbar from "@/components/Navbar"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Toaster
          toastOptions={{
            style: {
              background: "white",
              color: "green"
            },
            className: "class"
          }}
          position="top-center"
        />
        <Navbar />
        {children}

      </body>
    </html>
  )
}
