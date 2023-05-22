import Card from './components/Card'
// Background images

export default function Home() {
  return (
     <div
      className="h-screen flex items-center justify-center bg-[#E0E8FF]"
      style={{
        backgroundImage: `url(./pattern-background-desktop.svg)`,
        backgroundRepeat: 'no-repeat',
      }}
    >
        <Card />
    </div>

  )
}
