import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ShoppingCart, User } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-yellow-100 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src="/placeholder.svg?height=40&width=100"
              alt="Logo"
              width={100}
              height={40}
              className="object-contain"
            />
            <div className="relative">
              <Input
                type="search"
                placeholder="Buscar..."
                className="pl-8 pr-4 py-2 w-64"
              />
              <svg
                className="absolute left-2 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Button variant="ghost">Inicio</Button>
            <Button variant="ghost">Productos</Button>
            <Button variant="ghost">Novedades</Button>
            <Button variant="ghost">Contactos</Button>
          </nav>
          <div className="flex items-center space-x-4">
            <Button size="icon" variant="ghost">
              <User className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="relative w-full max-w-4xl mx-auto aspect-[21/9] overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Banner"
              layout="fill"
              objectFit="cover"
              className="object-center"
            />
          </div>
        </div>
        {/* Add your main content here */}
      </main>
    </div>
  )
}